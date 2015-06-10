var Xray = require('x-ray');
var x = Xray();

x('http://www.snapdeal.com/', 'a', ['@href'])
	.write('./x-ray/all-links.json');