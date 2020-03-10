'use strict';

const fs = require('fs');
const path = require('path');

const t = require('tap');

const Properties = require('../..');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Get .properties test files
const filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
t.plan(filenames.length);

// Stringify and compare
filenames.forEach(filename => {
  // Read parsed properties
  const parsedProperties = JSON.parse(
      fs.readFileSync(path.join(dataDir, filename + '.json'), 'utf8'));

  // Get expected output
  const expectedString = fs.readFileSync(
      path.join(dataDir, filename), 'utf8');

  // Stringify
  const actualString = Properties.stringify(parsedProperties);

  // Do the test
  // Parsed stringified output is compared here, as stringified output from
  // properties object may differ from original input.
  t.strictSame(
      Properties.parseToProperties(actualString),
      Properties.parseToProperties(expectedString),
      `${filename} stringifyFromProperties`);
});
