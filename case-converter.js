CaseConv = {};

CaseConv.convert = function (name, format) {
  let parts, result;

  result = name.match(/[A-Za-z]+([-_])/);

  if (result) {
    // my-var or my_var
    parts = name.split(/[-_]/);
  } else {
    // myVar or MyVar
    parts = name.match(/([A-Za-z]([a-z]+)?)/g).map(function (part) {
      return part.toLowerCase();
    });
  }

  if (!!format.match(/^[a-z]-[a-z]$/)) {
    return parts.join('-');
  } else if (!!format.match(/^[a-z]_[a-z]$/)) {
    return parts.join('_');
  } else if (!!format.match(/^[a-z][A-Z]$/)) {
    return [parts[0]].concat(parts.slice(1).map(function (p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
    })).join('');
  } else if (!!format.match(/^[A-Z][A-Z]$/)) {
    return parts.map(function (p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
    }).join('');
  }
};
