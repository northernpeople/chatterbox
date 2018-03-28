var http = require("http");
var fs = require("fs");
var path = require("path");
var {extractor} = require("./extract");
var wss = require("./websockets-server");

let handleError = function(err, res){
    console.log('handleing')
    res.writeHead(404);
    res.end("error");
}

var server = http.createServer(function(req, res){
  let filePath = extractor(req.url);
  fs.readFile(filePath, function(err, data){
    if(err) { handleError(err, res); }
    else    {
      res.setHeader("Content-Type", "text/html");
      res.end(data); }

  });
});
server.listen(3000);
