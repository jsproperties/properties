'use strict';

const fs = require('fs');
const path = require('path');

const t = require('tap');

const Properties = require('../..');

const dataDir = path.resolve(__dirname, '../data/malformed');
const rproperties = /\.properties$/;

// Get .properties test files
const filenames = fs.readdirSync(dataDir).filter(f => rproperties.test(f));
t.plan(filenames.length);

filenames.forEach(filename => {
  // Get input
  const input = fs.readFileSync(path.join(dataDir, filename), 'utf8');

  // Try parse, and it should throw
  t.throws(() => Properties.parseToProperties(input),
      { name: 'SyntaxError', message: 'Invalid Unicode escape sequence' },
      `Malformed ${filename} throws.`);
});
