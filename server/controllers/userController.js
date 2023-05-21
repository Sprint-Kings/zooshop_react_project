const db = require("../models");
var bcrypt = require("bcryptjs");

const Op = db.Sequelize.Op;

const { user: User, role: Role, refreshToken: RefreshToken, adresses: Adresses, cart: Cart, orders: Orders } = db;

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
        console.log(req.body)
        if (req.body.adress) {
            user.createAdress({adress: req.body.adress}).then(() => {
              res.send({ message: "Адресс добавлен успешно" });
            });
        } else {
            res.status(404).send({ message: "При добавлении адреса произошла ошибка" });
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
            res.status(404).send({ message: "При удалении адреса произошла ошибка" });
        }
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.userCart = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        const cart = await user.getCarts('product_id', 'count')
        res.status(200).send(cart);
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.addCart = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        if (req.body.productId && req.body.count) {
            Cart.findOne({
              where: {
                product_id: req.body.productId,
                userid: req.userId
              }
            })
            .then(async (product) => {
              if (!product) {
                user.createCart({product_id: req.body.productId, count: req.body.count}).then(() => {
                  res.send({ message: "Товар добавлен в корзину" });
                });
              } else {
                product.count = product.count + Number(req.body.count);

                product.save()
                  .then(res.send({ message: "Количество товара изменено" }))
              }
            })
        } else {
            res.status(404).send({ message: "При добавлении товара в корзину произошла ошибка" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.deleteCart = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        if (req.body.productId) {
          Cart.findOne({
            where: {
              product_id: req.body.productId,
              userid: req.userId
            }
          }).then(async (product) => {
              if (!product) {
                return res.status(404).send({ message: "Товар не найден" });
              } else {
                await product.destroy();
                res.send({ message: "Товар удален из корзины" });
              }
          })
        } else {
            res.status(404).send({ message: "При удалении товара из корзины произошла ошибка" });
        }
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.userOrders = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        const orders = await user.getOrders()
        res.status(200).send(orders);
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.userOrder = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }

        const order = await Orders.findOne({ where: { id: req.params.id } })
        res.status(200).send(order);
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.addOrder = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        } else {
          if (req.body.adress && req.body.total) {
            const cart = await user.getCarts('product_id', 'count')
            const products = cart.map(item => (item.product_id))
            const counts = cart.map(item => (item.count))
            user.createOrder({product_array: products, count_array: counts, total: req.body.total, delivery_date: '24.05.2023', adress: req.body.adress}).then(() => {
              Cart.destroy({
                where: {
                  userid: req.userId
                }
              }).then(async () => {
                    res.send({ message: "Заказ создан" });
                  })
            });
          } else {
            res.status(404).send({ message: "При создании заказа произошла ошибка" });
          }
          
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.deleteOrder = (req, res) => {
    User.findOne({
      where: {
        id: req.userId
      }
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: "Пользователь не найден" });
        }
        if (req.body.orderId) {
          Orders.findOne({
            where: {
              id: req.body.orderId,
              userid: req.userId
            }
          }).then(async (order) => {
              if (!order) {
                return res.status(404).send({ message: "Заказ не найден" });
              } else {
                await order.destroy();
                res.send({ message: "Заказ отменен" });
              }
          })
        } else {
            res.status(404).send({ message: "При отмене заказа произошла ошибка" });
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