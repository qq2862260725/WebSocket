var http = require('http');//依赖http
http.createServer(function(req, res) {//创建一个服务器 
    res.writeHead(200, {"Content-Type": "text/html"}); // not necessary but better set
    res.end('<div>Hello world!</div>');
}).listen(3000);

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
    port: 3000
});
wss.on('connection', function(ws) {
    console.log('someone just coming, now has %d client', wss.clients.length
);
    ws.on('message', function(data) {
        wss.clients.forEach(function(client) {
            client.send(data);
        });
    });
    ws.on('close', function() {
        console.log('someone just leave, now has %d client', wss.clients.length);
    });
    ws.on('error', function(err) {
        console.log(err);
    });
});
console.log('ws estriblish success');