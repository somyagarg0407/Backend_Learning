console.log("Start");
setTimeout(() => {
    console.log("Task Completed");
}, 3000);
console.log("End");
// syntax !!!!!!!!!!! EVEN TO write setTimeout


// now the main application is 
console.log("Fetching User...");
setTimeout(() => {
    console.log("User Received");
}, 2000);
console.log("Server Still Working...");
// like vahi ki tumne schedule kardiya hai ki 2 seconds baad hoga tab tak user ko bhi toh kuch dikhana padega na laadle
//Server user ka wait karke freeze nahi hua. Isi wajah se Node.js ek hi thread par bhi hazaaron requests handle kar sakta hai 
// is type se socho ki setTimeout(callback, 3000); ye hai isme inside function jo print kar rah hai vo callback hai

