'use strict';

const fs = require('fs');
const path = require('path');

const t = require('tap');

const Properties = require('../..');

const dataDir = path.resolve(__dirname, '../data/malformed');
const rproperties = /\.properties$/;

// Get .properties test files
let filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
t.plan(filenames.length);

filenames.forEach(filename => {
  // Get input
  let input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Try parse
  try {
    Properties.parseToProperties(input);
  } catch (e) {
    t.pass(`Malformed ${filename} throws.`);
    return;
  }

  t.fail(`Malformed ${filename} does not throw.`);
});
