const t = require('tap');

t.test('test', (t) => {
	t.test('foo', (t) => {
		for (let i = 0; i < 50; i++) {
			t.ok(true, `${i} is ok`);
		}

		t.end();
	});

	t.test('bar', (t) => {
		for (let i = 0; i < 50; i++) {
			t.notOk(false, `${i} is not ok`);
		}

		t.end();
	});

	t.end();
});
