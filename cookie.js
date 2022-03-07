const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, {
    "Set-Cookie": ["yummy_cookie=choco", "tasty_cookie=strawberry"],
  });
  res.end("Cookie");
});

app.listen("5000", () => {
  console.log("backend is running");
});
