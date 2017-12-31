const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const tap = require('tap');

const PropertiesParser = require('../..');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Option pairs should result in the same output
const parseToArrayOptionPairs = [
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

  // Test each pair of options for parseToArray
  for (let options of parseToArrayOptionPairs) {
    let x = PropertiesParser.parseToArray(input, options[0]);
    let y = PropertiesParser.parseToArray(input, options[1]);

    // Do the test
    if (_.isEqual(x, y)) {
      tap.pass(`${filename} parseToArray ${JSON.stringify(options[0])} matches ${JSON.stringify(options[1])}.`);
    } else {
      tap.fail(`${filename} parseToArray ${JSON.stringify(options[0])} does not match ${JSON.stringify(options[1])}.`);
    }
  }

  // Test each pair of options for parseToProperties
  for (let options of parseToPropertiesOptionPairs) {
    let x = PropertiesParser.parseToProperties(input, options[0]);
    let y = PropertiesParser.parseToProperties(input, options[1]);

    // Do the test
    if (_.isEqual(x, y)) {
      tap.pass(`${filename} parseToProperties ${JSON.stringify(options[0])} matches ${JSON.stringify(options[1])}.`);
    } else {
      tap.fail(`${filename} parseToProperties ${JSON.stringify(options[0])} does not match ${JSON.stringify(options[1])}.`);
    }
  }
});
