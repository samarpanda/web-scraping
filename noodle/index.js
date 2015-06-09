var noodle = require('noodlejs');

noodle.query({
  url: 'http://samarpanda.com/',
  type: 'html',
  selector: 'a',
  extract: 'href'
})
.then(function (results) {
  console.log(results);
});