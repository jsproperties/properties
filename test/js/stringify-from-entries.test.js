'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const tap = require('tap');

const Properties = require('../..');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Get .properties test files
let filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
// Each test file has 2 tests to run
tap.plan(filenames.length * 2);

// Stringify and compare
filenames.forEach(filename => {
  // Read parsed entries with full details
  let detailedEntries = JSON.parse(
      fs.readFileSync(
          path.join(dataDir, filename.replace(rproperties, '.json')), 'utf8'));

  // Get expected stringify output
  let expectedString = fs.readFileSync(
      path.join(dataDir, filename), 'utf8');

  // Stringify
  let actualString = Properties.stringify(detailedEntries);

  // Do the first test for entries with addtional info (original, eol, sep, etc.)
  tap.ok(actualString === expectedString, `${filename} stringifyFromEntries`);

  // Second test for entries without additional info
  // Remove additional info in entries
  let keyElementEntries = detailedEntries.map(x => ({ key: x.key, element: x.element }));
  // Stringify
  let keyElementString = Properties.stringify(keyElementEntries);
  // Parse stringified output and comapre again
  tap.ok(
      _.isEqual(Properties.parseToProperties(keyElementString),
          Properties.parseToProperties(actualString)),
      `${filename} stringifyFromEntries`);
});
