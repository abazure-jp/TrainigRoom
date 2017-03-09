var url = 'https://google.com';
var page = require('webpage').create();
page.onConsoleMessage = function(msg){
    console.log('Page title is ' + msg);
};

page.open(url, function(status) {
    var title = page.evaluate(function() {
        console.log(document.title);
    });
    phantom.exit();
});
