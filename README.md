@js.properties/properties
=========================

JavaScript .properties parser & stringifier
-------------------------------------------

[![Build Status](https://travis-ci.org/jsproperties/properties.svg?branch=master)](https://travis-ci.org/jsproperties/properties)
[![npm](https://img.shields.io/npm/v/@js.properties/properties.svg)](https://www.npmjs.com/package/@js.properties/properties)
[![license](https://img.shields.io/github/license/jsproperties/properties.svg)](LICENSE)

This is a parser and stringifier written in JavaScript and [PEG.js](https://pegjs.org/) for Java .properties file format, following the syntax defined in [Java API Specification](https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/Properties.html#load(java.io.Reader)).

The parser can return parsed properties object ([`parse`](#parse) or [`parseToProperites`](#parseToProperties)) in a flat structure or a hierarchical namespaced structure, or return raw parsing result ([`parseToEntries`](#parseToEntries)) as an array of entry objects which have `key`, `element`, `sep`, `indent`, `eol`, `original` and [`location`](#Location) as keys.

As to the raw parsing result:

* Each *logical line* of input .properties file is parsed into an object, with the **original** logical line, **indent** **key** **sep** **element** **eol** parts, and/or line **location** info optionally kept;
* Properties with duplicate keys are kept in the raw output so that one can build high-level applications reporting them;
* Blank and comment lines can be kept as well so that there is no info loss of the original file after parsing. This could be useful for something like .properties IDE.

The stingifier ([`stringify`](#stringify), [`stringifyFromProperties`](#stringifyFromProperties) or [`stringifyFromEntries`](#stringifyFromEntries)) effectively does the reverse of what the parser does.


## Installation

```sh
npm install --save @js.properties/properties
# or
yarn add @js.properties/properties
```


## Quick Example

`example.properties`:

```ini
# Comment here
hello = world

  foo : bar
```

`demo.js` (Node.js):

```js
const fs = require('fs');
const Properties = require('@js.properties/properties');

const input = fs.readFileSync('example.properties', 'utf8');
const options = {   // options is optional
  all: true,        // Include empty and blank lines
  sep: true,        // Include separator in output
  indent: true,     // Include indentation in output
  eol: true,        // Include eol (end of line) in output
  original: true,   // Include original logical line in output
  location: true,   // Include location info in output
};
let output = Properties.parseToEntries(input, options);
```

`demo.html` (Browser):

```html
<!-- @js.properties/properties is available as an UMD module. -->
<script src="properties.min.js"></script>
<script>
// Input can be entered manually or read via FileReader API
var output = Properties.parseToEntries('...');
</script>
```

Output with all options off:

```json
[
  { "key": "hello", "element": "world" },
  { "key": "foo", "element": "bar" }
]
```

Output with all options on:

```json
[
  {
    "key": null, "element": null,
    "sep": null, "indent": "", "eol": "\n",
    "original": "# Comment here",
    "location": {
      "start": { "offset":  0, "line": 1, "column":  1 },
      "end":   { "offset": 14, "line": 1, "column": 15 } }
  },
  {
    "key": "hello", "element": "world",
    "sep": " = ", "indent": "", "eol": "\n",
    "original": "hello = world",
    "location": {
      "start": { "offset": 15, "line": 2, "column":  1 },
      "end":   { "offset": 28, "line": 2, "column": 14 } }
  },
  {
    "key": null, "element": null,
    "sep": null, "indent": "", "eol": "\n",
    "original": "",
    "location": {
      "start": { "offset": 29, "line": 3, "column":  1 },
      "end":   { "offset": 29, "line": 3, "column":  1 } }
  },
  {
    "key": "foo", "element": "bar",
    "sep": " : ", "indent": "  ", "eol": "\n",
    "original": "  foo : bar",
    "location": {
      "start": { "offset": 30, "line": 4, "column":  1 },
      "end":   { "offset": 41, "line": 4, "column": 12 } }
  }
]
```

There is also a method `parseToProperties(input)` (alias `parse`) which generates output like:

```
{
  "hello": "world",
  "foo": "bar"
}
```


## API

<a id="parseToProperties"></a>
### Method: parseToProperties(string [, options ])

<a id="parse"></a>
### Method Alias: parse(string [, options ])

<a id="parseToProperties-options"></a>
#### Object: options

Option      | Type    | Description
----------- | ------- | ----
`namespace` | boolean | Parse dot separated keys as namespaced

All options default to `false`.

`true` and `{ '': true }` can be used as a shortcut to turn on all options. `{ '': true, namespace: false }` can be used to turn on all options except for those listed explicitly.

**Returns:** `object`

**Throws:** `SyntaxError` Invalid Unicode escape sequence

<a id="parseToEntries"></a>
### Method: parseToEntries(string [, options ])

<a id="parseToEntries-options"></a>
#### Object: options

Option     | Type    | Description
---------- | ------- | ----
`all`      | boolean | Include empty and blank lines
`sep`      | boolean | Include separator in output
`indent`   | boolean | Include indentation in output
`eol`      | boolean | Include eol (end of line) in output
`original` | boolean | Include original logical line in output
`location` | boolean | Include location info in output

All options default to `false`.

`true` and `{ '': true }` can be used as a shortcut to turn on all options. `{ '': true, location: false }` can be used to turn on all options except for those listed explicitly.

**Returns:** `Array<PropertyEntry>`

<a id="PropertyEntry"></a>
### Object: PropertyEntry

Property   | Type           | Description
---------- | -------------- | ----
`key`      | string \| null | Property Key
`element`  | string \| null | Property Element (value)
`sep`      | string \| null | (optional) The separator of the property
`indent`   | string         | (optional) The indentation of the property
`eol`      | string \| null | (optional) The eol (end of line) of the *logical line* [\*]
`original` | string         | (optional) The original *logical line* [\*] containing the property
`location` | Location       | (optional) The start and end position of the *logical line* [\*]

Note: `key`, `element` and `sep` will be `null` for blank and comment lines.

Note: `indent` is always a `string`, in the case of no indentation, it's an empty string.

Note: `original` is always a `string`, in the case of blank line, it's an empty string.

Note: `eol` will be `null` if this is the last line and contains no final eol.

[\*] A *logical line* may spread across several *natural lines* if line continuation is involved.

<a id="Location"></a>
### Object: Location

`{ start: Position, end: Position }`

<a id="Position"></a>
### Object: Position

`{ offset: number, line: number, column: number }`

<a id="stringifyFromProperties"></a>
### Method: stringifyFromProperties(object [, options ])

Turn properties object into .properties file string.

<a id="stringifyFromEntries"></a>
### Method: stringifyFromEntries(Array\<PropertyEntry> [, options ])

When stringifying from entries, if `original` is set in the entry, it's used; otherwise, property is computed from `key`, `sep` and `element`.

<a id="stringify"></a>
### Method: stringify(object | Array\<PropertyEntry> [, options ])

This is an alias for `stringifyFromProperties` and `stringifyFromEntries` depending on the type of arguments.

<a id="stringify-options"></a>
#### Object: stringify options

Option      | Type    | Default  | Description
----------- | ------- | -------- | ----
`sep`       | string  | `" = "`  | The separator to use [\*]
`eol`       | string  | `"\r\n"` | The eol (end of line) to use [\*]
`namespace` | string  | `""`     | A namespace to prefix all keys [\*\*]

[\*] Thses options are used in `stringify`, `stringifyFromProperties` and `stringifyFromEntries`. In the case of stringifying from entries, option values are considered only if relevant field does not exist in the entry.

[\*\*] Used only in `stringify` or `stringifyFromProperties`.

---

## Development

### Code Structure

```
@js.properties/properties
├── src            // Originally authored source code.
│   └── *.pegjs.js //   This one is an exception, generated by pegjs.
├── types          // TypeScript declaration files
├── cjs            // Generated by babel, spread in multiple files,
│                  //   in CommonJS format, for Node.js use.
├── umd            // Generated by webpack into a single file,
│                  //   in UMD format, for browser and Node.js.
└── test
    ├── data       // Test data, *.properties are authored
    │              //   and *.json are generated and compared
    ├── java       // Reference implementation in Java
    └── js         // Test code in JavaScript

```

### Build

```sh
yarn run prepare
# or
npm run prepare
```

### Test & Lint

```sh
yarn test
# or
npm test
```

### Test Only

```sh
yarn tap
# or
npm tap
```

### Update expected test output

```sh
yarn run tap:snapshot
# or
npm run tap:snapshot
```

### Lint Only

```sh
yarn run lint
# or
npm run lint
```

## LICENSE

The MIT License. See [LICENSE](LICENSE) file.
