const { authJwt } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/all", controller.allAccess);

  app.get(
    "/api/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/user/adresses",
    [authJwt.verifyToken],
    controller.userAdresses
  );
  
  app.post(
    "/api/user/adress/submit",
    [authJwt.verifyToken],
    controller.addAdress
  );
  
  app.post(
    "/api/user/adress/delete",
    [authJwt.verifyToken],
    controller.deleteAdress
  );
  
  app.get(
    "/api/user/cart",
    [authJwt.verifyToken],
    controller.userCart
  );

  app.post(
    "/api/user/cart/submit",
    [authJwt.verifyToken],
    controller.addCart
  );

  app.post(
    "/api/user/cart/delete",
    [authJwt.verifyToken],
    controller.deleteCart
  );
  
  app.get(
    "/api/user/orders",
    [authJwt.verifyToken],
    controller.userOrders
  );

  app.get(
    "/api/user/order/:id",
    [authJwt.verifyToken],
    controller.userOrder
  );

  app.post(
    "/api/user/order/submit",
    [authJwt.verifyToken],
    controller.addOrder
  );
  
  app.post(
    "/api/user/order/delete",
    [authJwt.verifyToken],
    controller.deleteOrder
  );

  app.get(
    "/api/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get(
    "/api/admin/users",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.users
  );

  app.post(
    "/api/admin/users/submit",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addUser
  );

  app.post(
    "/api/admin/users/delete",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteUser
  );
};