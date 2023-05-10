const db = require("../models");

const { user: User, role: Role, refreshToken: RefreshToken, adresses: Adresses } = db;

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
          return res.status(404).send({ message: "Пользователь не найден" });
        }
          res.status(200).send({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email
          });
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.userAdresses = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        const adresses = await user.getAdresses('adress')
        res.status(200).send({
          adresses: adresses.map(item => {
            return item.adress
          })
        });
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.addAdress = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
  
        if (req.body.adress) {
            user.createAdress({adress: req.body.adress}).then(() => {
              res.send({ message: "Адресс добавлен успешно" });
            });
        } else {
            res.send({ message: "При добавлении адреса произошла ошибка" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.deleteAdress = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        if (req.body.adress) {
          Adresses.findOne({
            where: {
              adress: req.body.adress,
              userid: user.id
            }
          }).then(async (adress) => {
              if (!adress) {
                return res.status(404).send({ message: "Данный адрес отсутствует" });
              } else {
                await adress.destroy();
                res.send({ message: "Адрес удален успешно" });
              }
          })
        } else {
            res.send({ message: "При удалении адреса произошла ошибка" });
        }
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.adminBoard = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
          res.status(200).send({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email
          });
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };