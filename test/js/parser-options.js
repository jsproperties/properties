'use strict';

const optionNames = ['all', 'original', 'eol', 'location'];
let optionsToTest = [];

for (let i = 0; i < Math.pow(optionNames.length, 2); ++i) {
  optionsToTest.push({
    all: !!(i & 1),
    original: !!(i & 2),
    eol: !!(i & 4),
    location: !!(i & 8),
  });
}

module.exports = optionsToTest;
