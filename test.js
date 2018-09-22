const t = require('tap');
const lib = require('.');

t.test('lib test', (t) => {
	t.fancyAssert(true, 'is ok');
	t.matchSnapshot(lib.foo(), 'match snapshot');
	t.end();
});
