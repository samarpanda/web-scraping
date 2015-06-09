var noodle = require('noodlejs');

noodle.query({
  url: 'http://www.flipkart.com/',
  type: 'html',
  selector: 'li.ccarousel-item',
  extract: 'text'
})
.then(function (results) {
  console.log(results);
});