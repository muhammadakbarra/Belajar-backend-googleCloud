//TODO 1
const { EventEmitter } = require("events");
const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy Birtday ${name}!`);
};

myEmitter.on("AKbar", birthdayEventListener);
myEmitter.emit("AKbarrr", "muhammad Akbar");
