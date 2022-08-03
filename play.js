const net = require("net");
const {connect} = require('./client');

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  stdin.resume();
  
  // Event handling user input
  // Pass key to handleUserInput function
  stdin.on('data', (key) => {
    handleUserInput(key);
  });


  return stdin;
};


let handleUserInput = function(key) {

  // If you type Ctrl+C, exit the game
  if (key === '\u0003') {
    process.exit();
  }
};