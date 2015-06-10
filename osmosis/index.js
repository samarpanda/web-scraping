var osmosis = require('osmosis');

osmosis.get('http://flipkart.com')
	.find('a')
	.set('link')
	.data(function(result){
		console.log(result);
	});