const db = require("../models");
var bcrypt = require("bcryptjs");

const Op = db.Sequelize.Op;

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
  
  exports.users = (req, res) => {
    User.findAll()
      .then(async (users) => {
        if (!users) {
          return res.status(404).send({ message: "Произошла ошибка" });
        }
        res.status(200).send({users})
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.addUser = (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(async (user) => {
        if (!user) {
          User.findOne({
            where: {
              email: req.body.email
            }
          })
          .then(async (user) => {
            if (!user) {
              User.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
              })
                .then(user => {
                  if (req.body.roles) {
                    Role.findAll({
                      where: {
                        name: {
                          [Op.or]: req.body.roles
                        }
                      }
                    }).then(roles => {
                      user.setRoles(roles).then(() => {
                        res.send({ message: "Пользователь добавлен" });
                      });
                    });
                  } else {
                    // user role = 1
                    user.setRoles([1]).then(() => {
                      res.send({ message: "Пользователь добавлен с ролью user" });
                    });
                  }
                })
            } else {
              res.status(404).send({ message: 'Пользователь с такой почтой уже существует'});
            }
          })
        } else {
          res.status(404).send({ message: 'Пользователь с таким никнеймом уже существует'});
        }
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.deleteUser = (req, res) => {
    User.findOne({
      where: {
        id: req.body.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        } else {
          await user.destroy();
          res.send({ message: "Пользователь удален успешно" });
        }
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };