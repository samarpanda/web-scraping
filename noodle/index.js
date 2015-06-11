var noodle = require('noodlejs');

noodle.query({
  url:      'https://github.com/explore',
  selector: '#explore-featured div ol li',
  extract:  'href'
})
.then(function (results) {
  console.log(results);
});