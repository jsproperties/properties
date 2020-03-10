'use strict';

const fs = require('fs');
const path = require('path');

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
  [{ '': false }, { all: false, sep: false, indent: false, eol: false, original: false, location: false }],
  [{ '': true }, { all: true, sep: true, indent: true, eol: true, original: true, location: true }],
  [{ '': true, all: false }, { all: false, sep: true, indent: true, eol: true, original: true, location: true }],
  [{ '': false, sep: true }, { all: false, sep: true, indent: false, eol: false, original: false, location: false }],
  [{ '': true, indent: false }, { all: true, sep: true, indent: false, eol: true, original: true, location: true }],
  [{ '': true, eol: false }, { all: true, sep: true, indent: true, eol: false, original: true, location: true }],
  [{ '': false, original: true }, { all: false, sep: false, indent: false, eol: false, original: true, location: false }],
  [{ '': false, sep: true, indent: true, eol: true }, { all: false, sep: true, indent: true, eol: true, original: false, location: false }],
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
const filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));

// Parse and compare
filenames.forEach(filename => {
  // Get input
  const input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Test each pair of options for parseToEntries
  for (const options of parseToEntriesOptionPairs) {
    const x = Properties.parseToEntries(input, options[0]);
    const y = Properties.parseToEntries(input, options[1]);

    // Do the test
    t.strictSame(x, y,
        `${filename} parseToEntries ${JSON.stringify(options[0])} matches ${JSON.stringify(options[1])}.`);
  }

  // Test each pair of options for parseToProperties
  for (const options of parseToPropertiesOptionPairs) {
    const x = Properties.parseToProperties(input, options[0]);
    const y = Properties.parseToProperties(input, options[1]);

    // Do the test
    t.strictSame(x, y,
        `${filename} parseToProperties ${JSON.stringify(options[0])} matches ${JSON.stringify(options[1])}.`);
  }
});
