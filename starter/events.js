const EventEmitter = require("events");
const http = require("http");
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  //the callback function
  // which is gonna get executed as soon as the event is emitted.
  console.log("There is a new sale");
});

myEmitter.on("newSale", (stock) => {
  console.log("Customer name: ollie", stock);
});

// emit an event called newSale
//this emitting here is as if we were clicking on the button,
// myEmitter.emit("newSale", 10);

////////////////////////////////////////////////////////////////////
const server = http.createServer();
//listen to different events that server emits
server.on("request", (request, res) => {
  console.log("request received");
  console.log(1, request.url);
  res.end("Request received");
});

server.on("request", (request, res) => {
  // console.log(2, request.url);
  console.log("another request received");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request...");
});
