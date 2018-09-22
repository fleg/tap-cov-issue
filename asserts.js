const {Test} = require('tap');

function fancyAssert() {
	return true;
}

Test.prototype.addAssert('fancyAssert', 1, fancyAssert);
