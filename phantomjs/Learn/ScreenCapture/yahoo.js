var system = require('system');
var page = require('webpage').create();
page.open('http://yahoo.co.jp', function(status) {
console.log("Status: " + status);
  if(status === "success") {
    page.render('yahoo.png');
  }
  phantom.exit();
});
