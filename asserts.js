const Test = require('tap/lib/test');

function fancyAssert() {
	return true;
}

Test.prototype.addAssert('fancyAssert', 1, fancyAssert);
