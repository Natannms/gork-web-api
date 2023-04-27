'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MessageRoom.init({
    roomName: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
    sender: DataTypes.STRING,
    receiver: DataTypes.STRING,
    messages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MessageRoom',
  });
  return MessageRoom;
};