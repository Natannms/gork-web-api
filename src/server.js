const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const routes = require("./routes");
const port = process.env.PORT || 3001;
const Utils = require("./utils/index");
routes(app);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {

  socket.on("join_room", (data) => {
    console.log("ENTROU NA SALA", data);
    socket.join(data.room);

    const allMessages = Utils.getAllMessagesRoom(data.room);
    allMessages
      .then((data) => {
        io.to(data.roomId).emit("room_conversation", data.messageList);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    io.to(data.room).emit("receive_message", {
      alert: `${data.user.name} entrou na sala`,
      user: data.user,
    });
  });

  socket.on("send_message", (data) => {
    console.log("RECEBI UMA MENSAGEM NO BACK: ", data);
    const saveMessage = Utils.saveMessage(
      data.room.name,
      data.room.id,
      data.user.name,
      "room",
      data.message
    );
    saveMessage
      .then((data) => {
        io.to(data.roomId).emit("room_conversation", data.messageList);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

server.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
