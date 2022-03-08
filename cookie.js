const express = require("express");
const app = express();
const cookie = require("cookie");

app.get("/", (req, res) => {
  let cookies = {};
  if (req.headers.cookie !== undefined) {
    cookies = cookie.parse(req.headers.cookie);
  }
  console.log(cookies);
  res.writeHead(200, {
    "Set-Cookie": [
      "yummy_cookie=choco",
      "tasty_cookie=strawberry",
      `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
    ],
  });
  res.end("Cookie");
});

app.listen("5000", () => {
  console.log("backend is running");
});
