const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  //the callback function
  // which is gonna get executed as soon as the event is emitted.
  console.log("There is a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: ollie");
});

// emit an event called newSale
//this emitting here is as if we were clicking on the button,
myEmitter.emit("newSale");
