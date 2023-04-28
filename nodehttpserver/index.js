const http = require("http");

const server = http.createServer((req, res) => {
if(req.url=='/'){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("Hello from Home page")
    res.end()
}else if(req.url=='/about'){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("Hello from About page")
    res.end()
}else if(req.url=='/contact'){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("Hello from Contact page")
    res.end()
}else{
    res.writeHead(404,{"content-type":"text/html"})
    res.write("404 error")
    res.end()
}
});

server.listen(7000, "127.0.0.1", () => {
  console.log("server lisitinig from port 7000");
});
