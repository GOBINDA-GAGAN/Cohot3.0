const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello, I am server..");

  return res.end("Hello, I am server");
});

server.listen(8000, () => {
  console.log("Server running on port 8000...");
});