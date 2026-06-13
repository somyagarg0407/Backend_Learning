const fs = require("fs"); // yahan fs ek varibale bhi hai and value ke perspective se object bhi hai!!!
fs.writeFileSync("notes_demo.txt", "Hello Panda");

//--------------------------------------------------------------

const fssss = require("fs"); // req ke andar module ka naam hai 
const data = fssss.readFileSync("notes_demo.txt", "utf-8");
console.log(data);
// without utf-8 raw bytes milte hain.
// Sync = blocking
//----------------------------------------------------------

