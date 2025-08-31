// index.js
require("dotenv").config();
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);

const PORT = 5000;

async function connectToMongo() {
  try {
    await mongoose.connect(MONGO_URL, {
      // keep defaults simple; adjust if you need poolSize, etc.
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Mongo connect error:", err?.message || err);
    console.log("⏳ Retrying Mongo connection in 5s…");
    setTimeout(connectToMongo, 5000);
  }
}
// connectToMongo();

app.get("/", (req, res) => {
  res.send("Welcome to the kashif runner backen test 1 test User Sync !");
});

server.listen(PORT, () => {
  console.log("🚀 Server IS listening on port", PORT);
});
