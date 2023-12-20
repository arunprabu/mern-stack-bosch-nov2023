const express = require("express");
const { join } = require("path");
const { createServer } = require("http");
const socket = require("socket.io");

const app = express();
const port = 3000;
const server = createServer(app);
// socket.io server is configured to run inside the app
const io = new socket.Server(server); 

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/text-chat", (req, res) => {
  res.sendFile(join(__dirname, "text-chat.html"));
});

app.get("/video-chat", (req, res) => {
  res.sendFile(join(__dirname, "video-chat.html"));
});

// listen on socket connections
io.on('connection', (socket) => {
  /* text chat logic starts */
  // The following console log will be visible in server side console
  console.log("A New User Connected");

  // you can listen on all emitted events from front end socket.io client
  socket.on("open_chat_session", (message) => {
    // The following console log will be visible in server side console
    console.log(message); // msg received from socket.io client
    // Let's send the message to all socket.io clients
    io.emit("chatting", message);
  });

  socket.on("client_typing", (info) => {
    // sending the updates to all clients
    io.emit("server_typing", info);
  });
  /* text chat logic ends */

  /* video chat logic starts  -- using WebRTC */
  let otherUser;
  // receiving signal in socket server
  socket.on('offer', (offer) => {
    console.log(offer);
    otherUser = socket.id;
    socket.to(otherUser).emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    console.log(answer);
    socket.to(otherUser).emit("answer", answer);
  });

  socket.on('ice_candidate', (candidate) => {
    socket.to(otherUser).emit("ice_candidate", candidate);
  });
  /* video chat logic ends */
});

// the following should be server.listen -- NOT app.listen
server.listen(port, () => {
  console.log(`Chat app listening on port ${port}`);
});
