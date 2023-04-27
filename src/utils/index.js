const jwt = require("jsonwebtoken");

const secretKey = "secretKey";
const database = require("../models");

async function generateToken() {
  const token = jwt.sign({ username: "admin" }, secretKey, {
    expiresIn: "1h",
  });
  return token;
}

async function saveMessage(roomName, roomId, sender, receiver, messages) {
  const message = await database.MessageRoom.create({
    roomName,
    sender,
    receiver,
    messages,
    roomId,
  });

  if (!message) {
    return new Error("nao foi possivel registrar mensagem")
  }

  const allMessages = await database.MessageRoom.findAll();
  if(!allMessages){
    return new Error("nao foi possivel recuperar mensagens")
  }

  const messageList = allMessages.map(msg => ({
    id: msg.id,
    sender: msg.sender,
    receiver: msg.receiver,
    roomId: msg.roomId,
    roomName: msg.roomName,
    messages: msg.messages,
    createdAt: msg.createdAt,
  }));

  return {roomId, messageList};

}

async function getAllMessagesRoom(roomId) {
  const allMessages = await database.MessageRoom.findAll({
    where: { roomId: roomId }
  });

  if(!allMessages){
    return new Error("nao foi possivel recuperar mensagens")
  }

  const messageList = allMessages.map(msg => ({
    id: msg.id,
    sender: msg.sender,
    receiver: msg.receiver,
    roomId: msg.roomId,
    roomName: msg.roomName,
    messages: msg.messages,
    createdAt: msg.createdAt,
  }));

  return {messageList, roomId};

}

module.exports = {
  saveMessage,
  getAllMessagesRoom,
  generateToken
};
