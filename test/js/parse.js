const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const tap = require('tap');

const PropertiesParser = require('../..');
const optionsToTest = require('./parser-options');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Whether to generate json instead of testing it
const gen = process.argv[2] === '--gen';

// Get .properties test files
let filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
if (!gen) {
  tap.plan(filenames.length * optionsToTest.length);
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
      original: true,
      location: true,
    };

    // Generate output
    let actualEntries = PropertiesParser.parse(input, options);
    let actualString = JSON.stringify(actualEntries, null, 2);

    // Write output for later tests
    fs.writeFileSync(
      path.join(dataDir, filename.replace(rproperties, '.json')),
      actualString);
  } else {
    // Get snapshot output
    let snapshotString = fs.readFileSync(
      path.join(dataDir, filename.replace(rproperties, '.json')), 'utf8');
    let snapshotEntries = JSON.parse(snapshotString);

    // Test each options used when parsing
    for (options of optionsToTest) {
      // Generate output
      let actualEntries = PropertiesParser.parse(input, options);

      // Make a clone as we are going to modify what's expected
      let expectedEntries = _.cloneDeep(snapshotEntries);

      // Calculate what's expected based on parser options
      if (!options.all) {
        expectedEntries = _.filter(expectedEntries, e => {
          return e.key != null && e.element != null;
        });
      }
      if (!options.original) {
       expectedEntries.forEach(e => delete e.original);
      }
      if (!options.location) {
        expectedEntries.forEach(e => delete e.location);
      }

      // Do the test
      if (_.isEqual(actualEntries, expectedEntries)) {
        tap.pass(`${filename} ${JSON.stringify(options)} passed.`);
      } else {
        tap.fail(`${filename} ${JSON.stringify(options)} failed.`);
      }
    }
  }
});
