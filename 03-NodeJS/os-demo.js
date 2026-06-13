const os = require("os");

// Current operating system platform
console.log("Platform:", os.platform());

// CPU architecture (x64, arm, etc.)
console.log("Architecture:", os.arch());

// Number of CPU cores
console.log("CPU Cores:", os.cpus().length);

// Available RAM in bytes
console.log("Free Memory:", os.freemem());

// Total RAM in bytes
console.log("Total Memory:", os.totalmem());

// Computer/device name
console.log("Hostname:", os.hostname());

// User home directory path
console.log("Home Directory:", os.homedir());

// Operating system type
console.log("OS Type:", os.type());

// OS version/release
console.log("OS Release:", os.release());

// System running time in seconds
console.log("System Uptime (seconds):", os.uptime());