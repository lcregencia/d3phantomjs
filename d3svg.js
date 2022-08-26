var page = require('webpage').create();
var fs = require("fs");

page.onConsoleMessage = function(msg) {
    console.log(msg);
  }

page.open('http://127.0.0.1:5501/index.html', function(status) {
   
  console.log("Status: " + status);
  if(status === "success") {

    console.log("inside if");

     var html = page.evaluate(function(s) {    

           var sn = new XMLSerializer();
             return sn.serializeToString(document.querySelector(s));       
        }, 'svg#svg_d3NumberCircle1'); 
            console.log(html);              
            fs.write("file.svg", html);

  }
  phantom.exit();
});

