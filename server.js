const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const WebSocket = require("ws");
const apiRouter = require("./api");
const websocket = require("./websocket");

app.use(express.json());
// API 라우터 설정
app.use(apiRouter);
// 웹 서버 실행
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
});
// WebSocket 서버 생성
const wss = new WebSocket.Server({ server });
// WebSocket 연결 이벤트 처리
wss.on("connection", websocket);
