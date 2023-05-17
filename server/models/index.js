const config = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    define: {
      timestamps: false
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModel.js")(sequelize, Sequelize);
db.role = require("../models/roleModel.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshTokenModel.js")(sequelize, Sequelize);
db.news = require("../models/newsModel.js")(sequelize, Sequelize);
db.brands = require("../models/brandsModel.js")(sequelize, Sequelize);
db.categories = require("../models/categoriesModel.js")(sequelize, Sequelize);
db.products = require("../models/productsModel.js")(sequelize, Sequelize);
db.prices = require("../models/pricesModel.js")(sequelize, Sequelize);
db.adresses = require("../models/adressesModel.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.refreshToken.belongsTo(db.user, {
  foreignKey: 'userId', targetKey: 'id'
});

db.user.hasOne(db.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});

db.categories.hasMany(db.brands);

db.brands.belongsTo(db.categories, {
  foreignKey: 'categoryid',
});

db.categories.hasMany(db.products,{
  foreignKey: 'categoryid',
});

db.products.belongsTo(db.categories, {
  foreignKey: 'categoryid',
});

db.brands.hasMany(db.products, {
  foreignKey: 'brandid',
});

db.products.belongsTo(db.brands, {
  foreignKey: 'brandid',
});

db.products.hasOne(db.prices, {
  foreignKey: 'productid',
});

db.prices.belongsTo(db.products, {
  foreignKey: 'productid',
});

db.user.hasMany(db.adresses, {
  foreignKey: 'userid'
});

db.adresses.belongsTo(db.user, {
  foreignKey: 'userid'
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;