var Xray = require('x-ray');
var x = Xray();

x('http://samarpanda.com/', 'a', ['@href'])
	.write('./x-ray/all-links.json');