// index.js
require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const app = express();
const server = http.createServer(app);

const PORT = 5000;

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "metadata.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({ error: "Failed to read JSON file" });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData); // sends JSON with correct content-type
    } catch (parseErr) {
      res.status(500).send({ error: "Invalid JSON format" });
    }
  });
});

server.listen(PORT, () => {
  console.log("🚀 Server is listening on port", PORT);
});
