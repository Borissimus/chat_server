var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs');
var path = require('path');
var express = require('express');
app = express();

var login_html = "./login_page/login.html";

var dirPath = path.join(__dirname, 'login_page');
var dirJsLib = path.join(__dirname, 'js_lib');

app.use('/js_lib', express.static(dirJsLib));
app.use(express.static(dirPath));

function loginPageReq(req, res) {   // 2 - creating server
    var server = app.listen(80, function () {
        var host = 'localhost';
        var port = server.address().port;
        console.log('listening on http://'+host+':'+port+'/');
    });
}

loginPageReq(null, null);




















/*var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs');
var login_html = "./login_page/login.html";

function loginPageReq(req, res) {   // 2 - creating server
    //handle incomming requests here..
    console.log('this is Node.js web server!');
    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile(login_html, null, function(err, data){
        if(err){
            res.writeHead(404);
            res.write("File not found!");
        } else {
            res.write(data);
        }
        res.end();
    });
}

http.createServer(loginPageReq).listen(80);
*/
