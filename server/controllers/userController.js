const db = require("../models");

const { user: User, role: Role, refreshToken: RefreshToken } = db;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
          res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email
          });
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };