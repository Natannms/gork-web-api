const jwt = require("jsonwebtoken");
const database = require("../models");
const secretKey = "secretKey";

class AuthController {
  static async register(req, res) {
    const { email, password, name } = req.body;

    const userExists = await database.User.findOne({
      where: { email: email }
    });


    if (userExists) {
      res.status(400).send({ message: "Email ja existe. Use outro email para registro", statusCode:400 });
      // return;
    } else {
      const user = await database.User.create({
        name,
        email,
        password,
      });

      if (!user) {
        res.status(400).send({ message: "não foi possivel cadastrar um novo usuário", statusCode:400 });
      } else {
        const token = jwt.sign({ user }, secretKey, { expiresIn: "1h" });
        res.status(200).json({
          user: {
            name: user.name,
            token
          },
          statusCode:200
        });
      }
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const user = await database.User.findOne({
      where: { email, password }
    });

    if (!user) {
      return res.status(400).json({ message: "Usuário não pode ser encontrado", statusCode:400 });
    }

    const token = jwt.sign({ user }, secretKey, { expiresIn: "1h" });

    res.status(200).json({
      user: {
        name: user.name,
        token,
      },
      statusCode:200
    });
  }

  static async logout(req, res, next) {
    //get token in header
    const token = req.headers["x-access-token"];

    //verify if token existis in BlackListTokens
    const tokenExists = await database.BlackListToken.findOne({
      where: { token: token },
    });

    if (tokenExists) {
       //delete token
      await database.BlackListToken.destroy({
        where: { token: token },
      });

      return res.status(200).json({ message: "Logged", statusCode:200 });
    }else{
      return res.status(400).json({ error: "Token not found", statusCode:400 });
    }
  }
}

module.exports = AuthController;
