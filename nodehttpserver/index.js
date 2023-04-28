const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server End");
});

server.listen(7000, "127.0.0.1", () => {
  console.log("server lisitinig from port 7000");
});
