const { EventEmitter } = require("events");
const myEventEmitter = new EventEmitter();

//fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

//mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

//memicu event 'coffee-order' terjadi
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });
