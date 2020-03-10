'use strict';

const optionNames = ['all', 'sep', 'indent', 'eol', 'original', 'location'];
const optionsToTest = [];

for (let i = 0; i < Math.pow(optionNames.length, 2); ++i) {
  optionsToTest.push({
    all: !!(i & 1),
    sep: !!(i & 2),
    indent: !!(i & 4),
    eol: !!(i & 8),
    original: !!(i & 16),
    location: !!(i & 32),
  });
}

module.exports = optionsToTest;
