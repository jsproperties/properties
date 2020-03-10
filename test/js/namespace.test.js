'use strict';

const fs = require('fs');
const path = require('path');

const t = require('tap');

const Properties = require('../..');

const options = {
  namespace: true,
};
const dataDir = path.resolve(__dirname, '../data');

// Whether to generate json instead of testing it
const gen = process.argv[2] === '--gen';

// Get .properties test files
const filenames = ['namespaced.properties'];
if (!gen) {
  // Each file has 2 tests
  t.plan(filenames.length * 2);
}

// Parse, and snapshot or compare
filenames.forEach(filename => {
  // Get input
  const input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Write output or do the test
  if (gen) {
    // Generate output
    const actualEntries = Properties.parseToProperties(input, options);
    const actualString = JSON.stringify(actualEntries, null, 2);

    // Write output for later tests
    fs.writeFileSync(
        path.join(dataDir, filename + '.namespaced.json'),
        actualString);
  } else {
    // Get snapshot output
    const snapshotString = fs.readFileSync(
        path.join(dataDir, filename + '.namespaced.json'), 'utf8');
    const snapshotProperties = JSON.parse(snapshotString);

    // Generate output
    const actualProperties = Properties.parseToProperties(input, options);

    // Test parseToProperties
    t.strictSame(actualProperties, snapshotProperties,
        `${filename} parseToProperties ${JSON.stringify(options)}`);

    // Test stringifyFromProperties
    t.strictSame(
        Properties.parseToProperties(
            Properties.stringifyFromProperties(actualProperties), options),
        snapshotProperties,
        `${filename} stringifyFromProperties ${JSON.stringify(options)}`);
  }
});
