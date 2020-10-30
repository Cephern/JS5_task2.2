const http = require("http");
const qs = require("querystring");

const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  });
  let { n1, n2 } = qs.parse(req.url.substr(5));
  n1 = Number(n1);
  n2 = Number(n2);

  switch (req.url.substr(0, 4)) {
    case "/add": {
      res.end(JSON.stringify({ n1, n2, result: n1 + n2 }));
    }

    case "/mpy": {
      res.end(JSON.stringify({ n1, n2, result: n1 * n2 }));
    }

    default: {
      res.end("Try adding /add?n1={*}&n2={*}  or /mpy?n1={*}&n2={*}");
    }
  }
});

server.listen(process.env.PORT || 8080);
console.log("Server is up and running on port 8080");
