const http = require("http");

let server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "application/json");

  const data = {
    statusCode: res,
    headersSent: res.headersSent,
    writable: res.writable
  };

  res.end(JSON.stringify(data));
});

server.listen(8000, () => {
  console.log("Server running ........");
});