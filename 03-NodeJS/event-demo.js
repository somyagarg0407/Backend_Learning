const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("welcome", (name) => {   // yahan syntaxd ka dhyan acahe se rakhna kyunki syntax thoda ajeeb sa hai na isliye 
    console.log(`Welcome ${name}`);
});

emitter.emit("welcome", "Panda"); // yahan par basica;;y ham welcome likhkar use trigger kar rahe hai ki vo execute ho jaye esa 
