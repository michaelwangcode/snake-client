let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {

  connection = conn;

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

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }
};

module.exports = {setupInput};