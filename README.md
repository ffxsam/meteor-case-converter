# Meteor Case Converter

This package will allow you to easily and intuitively convert between several
different case formats.

## Installation

    $ meteor add ffxsam:case-converter

## Usage

**Syntax**: `CaseConv.convert(string, format)`  
**Returns**: `String`

Instead of having to memorize a special format string such as `camelcase` or
`hyphen`, you simply pass two characters indicating the format you'd like,
for example:

```javascript
newName = CaseConv.convert('convertThisName', 'a-b');
// newName === 'convert-this-name'
```

The `format` argument doesn't have to use the letters A and B, it can be any
letter in the alphabet.

The possible formats are:

* `a-b` (hyphen format)
* `a_b` (underscore format)
* `aB` (camelCase)
* `AB` (CamelCase caps)
