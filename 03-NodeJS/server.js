const http = require("http");  //Node hume ek object(http here) de raha hai jiske andar bahut functions hain.

const server = http.createServer((req, res) => { // "Node, jab bhi koi browser request bheje, mujhe req me uski details de dena aur res me response bhejne ka tool de dena." & ye call back function hain "Jab bhi koi request aaye, ye function chala dena."
    res.end("Hello Panda"); // Browser ko response bhejo aur connection close kar do. 
}); 

server.listen(3000, () => {
    console.log("Server running on port 3000"); // Ye tab chalega jab server successfully start ho jayega.
});
// req = request , res = response
// Browser → Request  ,   Server → Response
// SYNTAX AGAIN DHYAN RAKHNA HAI JI
