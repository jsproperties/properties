'use strict';

const fs = require('fs');
const path = require('path');

const t = require('tap');

const Properties = require('../..');
const optionsToTest = require('./parser-options');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Whether to generate json instead of testing it
const gen = process.argv[2] === '--gen';

// Get .properties test files
let filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
if (!gen) {
  t.plan(filenames.length *
      (
        optionsToTest.length + // options for parseToEntries
        1                      // one more for parseToProperties
      ));
}

// Parse, and snapshot or compare
filenames.forEach(filename => {
  // Get input
  let input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Write output or do the test
  if (gen) {
    // Parse with all options on
    let options = {
      all: true,
      sep: true,
      indent: true,
      eol: true,
      original: true,
      location: true,
    };

    // Generate output via parseToEntries
    let actualEntries = Properties.parseToEntries(input, options);
    let actualString = JSON.stringify(actualEntries, null, 2);

    // Write output for later tests
    fs.writeFileSync(
        path.join(dataDir, filename.replace(rproperties, '.json')),
        actualString);

    // Generate output via parseToProperties
    actualEntries = Properties.parseToProperties(input);
    actualString = JSON.stringify(actualEntries, null, 2);

    // Write output for later tests
    fs.writeFileSync(
        path.join(dataDir, filename + '.json'),
        actualString);
  } else {
    // Test parseToEntries

    // Get snapshot output
    let snapshotString = fs.readFileSync(
        path.join(dataDir, filename.replace(rproperties, '.json')), 'utf8');
    let snapshotEntries = JSON.parse(snapshotString);

    // Test each options used by parseToEntries
    for (let options of optionsToTest) {
      // Generate output
      let actualEntries = Properties.parseToEntries(input, options);

      // Make a clone as we are going to modify what's expected
      let expectedEntries = JSON.parse(JSON.stringify(snapshotEntries));

      // Calculate what's expected based on parser options
      if (!options.all) {
        expectedEntries = expectedEntries.filter(e => {
          return e.key != null && e.element != null;
        });
      }
      if (!options.sep) {
        expectedEntries.forEach(e => delete e.sep);
      }
      if (!options.indent) {
        expectedEntries.forEach(e => delete e.indent);
      }
      if (!options.eol) {
        expectedEntries.forEach(e => delete e.eol);
      }
      if (!options.original) {
        expectedEntries.forEach(e => delete e.original);
      }
      if (!options.location) {
        expectedEntries.forEach(e => delete e.location);
      }

      // Do the test
      t.strictSame(actualEntries, expectedEntries,
          `${filename} parseToEntries ${JSON.stringify(options)}`);
    }

    // Test parseToProperties

    // Get snapshot output
    snapshotString = fs.readFileSync(
        path.join(dataDir, filename + '.json'), 'utf8');
    snapshotEntries = JSON.parse(snapshotString);

    // Generate output
    let actualEntries = Properties.parseToProperties(input);

    // Do the test
    t.strictSame(actualEntries, snapshotEntries,
        `${filename} parseToProperties`);
  }
});
