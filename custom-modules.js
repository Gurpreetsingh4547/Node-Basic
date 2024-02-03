// Modules
// Export methods to use it in every file in node js.

/**
 * Greets the user with a personalized message.
 * @param {string} name - The name of the person to greet.
 */
const sayHi = (name) => {
    // Print a personalized greeting message
    console.log(`Hey ${name}`);
};

// Exporting Greeting function
module.exports = { sayHi };

// Access Custom Modules
const { sayHi } = require('./custom-modules');
sayHi("john");
