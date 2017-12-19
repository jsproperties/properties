const fs = require('fs');
const path = require('path');

const tap = require('tap');

const PropertiesParser = require('../..');

const dataDir = path.resolve(__dirname, '../data');
const rproperties = /\.properties$/;

// Whether to generate json instead of testing it
const gen = process.argv[2] === '--gen';

// Get .properties test files
let filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
if (!gen) {
  tap.plan(filenames.length);
}

// Parse and compare
filenames.forEach(filename => {
  // Get input
  let input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Generate output
  let properties = PropertiesParser.parse(input);
  let actual = JSON.stringify(properties, null, 2);

  // Write output or do the test
  if (gen) {
    // Write output for later tests
    fs.writeFileSync(
      path.join(dataDir, filename.replace(rproperties, '.json')),
      actual);
  } else {
    // Do the test
    let expected = fs.readFileSync(
      path.join(dataDir, filename.replace(rproperties, '.json')), 'utf8');
    if (actual === expected) {
      tap.pass(`${filename} passed.`);
    } else {
      tap.fail(`${filename} failed.`);
    }
  }
});
