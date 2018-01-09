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
tap.plan(filenames.length);

// Stringify and compare
filenames.forEach(filename => {
  // Read parsed properties
  let parsedProperties = JSON.parse(
      fs.readFileSync(path.join(dataDir, filename + '.json'), 'utf8'));

  // Get expected output
  let expectedString = fs.readFileSync(
      path.join(dataDir, filename), 'utf8');

  // Stringify
  let actualString = Properties.stringify(parsedProperties);

  // Do the test
  // Parsed stringified output is compared here, as stringified output from
  // properties object may differ from original input.
  tap.ok(
      _.isEqual(Properties.parseToProperties(actualString),
          Properties.parseToProperties(expectedString)),
      `${filename} stringifyFromProperties`);
});
