'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const t = require('tap');

const Properties = require('../..');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Option pairs should result in the same output
const parseToEntriesOptionPairs = [
  [undefined, {}],
  [null, {}],
  [false, { '': false }],
  [true, { '': true }],
  [{}, { '': false }],
  [{ '': false }, { all: false, original: false, eol: false, location: false }],
  [{ '': true }, { all: true, original: true, eol: true, location: true }],
  [{ '': true, all: false }, { all: false, original: true, eol: true, location: true }],
  [{ '': false, original: true }, { all: false, original: true, eol: false, location: false }],
];

const parseToPropertiesOptionPairs = [
  [undefined, {}],
  [null, {}],
  [false, { '': false }],
  [true, { '': true }],
  [{}, { '': false }],
  [{ '': false }, { namespace: false }],
  [{ '': true }, { namespace: true }],
  [{ '': true, namespace: false }, { namespace: false }],
  [{ '': false, namespace: true }, { namespace: true }],
];

// Get .properties test files
let filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));

// Parse and compare
filenames.forEach(filename => {
  // Get input
  let input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Test each pair of options for parseToEntries
  for (let options of parseToEntriesOptionPairs) {
    let x = Properties.parseToEntries(input, options[0]);
    let y = Properties.parseToEntries(input, options[1]);

    // Do the test
    if (_.isEqual(x, y)) {
      t.pass(`${filename} parseToEntries ${JSON.stringify(options[0])} matches ${JSON.stringify(options[1])}.`);
    } else {
      t.fail(`${filename} parseToEntries ${JSON.stringify(options[0])} does not match ${JSON.stringify(options[1])}.`);
    }
  }

  // Test each pair of options for parseToProperties
  for (let options of parseToPropertiesOptionPairs) {
    let x = Properties.parseToProperties(input, options[0]);
    let y = Properties.parseToProperties(input, options[1]);

    // Do the test
    if (_.isEqual(x, y)) {
      t.pass(`${filename} parseToProperties ${JSON.stringify(options[0])} matches ${JSON.stringify(options[1])}.`);
    } else {
      t.fail(`${filename} parseToProperties ${JSON.stringify(options[0])} does not match ${JSON.stringify(options[1])}.`);
    }
  }
});
