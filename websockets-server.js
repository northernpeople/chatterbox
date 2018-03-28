var WebSocket = require("ws");
var WebSocketServer = WebSocket.Server;
let port = 3001;
var ws = new WebSocketServer({port : port});

let messages = [];
console.log("websocket server started")

ws.on("connection", function(socket){
  console.log("client connection");
  messages.forEach((m)=> socket.send(m));

  socket.on("message", function(data){
    console.log("message received ", data);
    messages.push(data)
    ws.clients.forEach((clientSocket) => clientSocket.send(data))
  });
})
