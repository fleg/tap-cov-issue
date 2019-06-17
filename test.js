const t = require('tap');
const lib = require('.');

t.test('lib test', (t) => {
	t.matchSnapshot(lib.foo(), 'match snapshot with pretty-format');
	t.end();
});
