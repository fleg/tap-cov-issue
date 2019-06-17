const tap = require('tap');
const prettyFormat = require('pretty-format');

tap.formatSnapshot = (obj) => prettyFormat(obj);
