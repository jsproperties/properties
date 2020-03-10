'use strict';

const fs = require('fs');
const path = require('path');

const t = require('tap');

const Properties = require('../..');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Get .properties test files
const filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
// Each test file has 2 tests to run
t.plan(filenames.length * 2);

// Stringify and compare
filenames.forEach(filename => {
  // Read parsed entries with full details
  const detailedEntries = JSON.parse(
      fs.readFileSync(
          path.join(dataDir, filename.replace(rproperties, '.json')), 'utf8'));

  // Get expected stringify output
  const expectedString = fs.readFileSync(
      path.join(dataDir, filename), 'utf8');

  // Stringify
  const actualString = Properties.stringify(detailedEntries);

  // Do the first test for entries with addtional info (original, eol, sep, etc.)
  t.ok(actualString === expectedString, `${filename} stringifyFromEntries`);

  // Second test for entries without additional info
  // Remove additional info in entries
  const keyElementEntries = detailedEntries.map(x => ({ key: x.key, element: x.element }));
  // Stringify
  const keyElementString = Properties.stringify(keyElementEntries);
  // Parse stringified output and comapre again
  t.strictSame(
      Properties.parseToProperties(keyElementString),
      Properties.parseToProperties(actualString),
      `${filename} stringifyFromEntries`);
});
