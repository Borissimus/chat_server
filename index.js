var http = require('http'); // 1 - Import Node.js core module
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

