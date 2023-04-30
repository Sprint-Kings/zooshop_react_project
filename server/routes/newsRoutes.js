const controller = require("../controllers/newsController");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/news/:newsId", controller.oneNews);

    app.get("/api/news/:limit/:offset", controller.listNews);

  };