const express = require("express");
const router = express.Router();
// GET 요청 처리
router.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});
module.exports = router;

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", (ws) => {
  console.log("WebSocket client connected");
  ws.on("message", (message) => {
    console.log("Received message:", message);
    ws.send(`Server received: ${message}`);
  });
  ws.on("close", () => {
    console.log("WebSocket client disconnected");
  });
});
