const controller = require("../controllers/productsController");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/brands/:category", controller.brandsByCategory);

    app.get("/api/products/:category/:limit/:offset", controller.productsListByCategory);

    app.get("/api/product/:productId", controller.oneProduct);

    app.get("/api/categories", controller.allCategories);
    
  };