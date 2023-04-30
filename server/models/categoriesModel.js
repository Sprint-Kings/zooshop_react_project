module.exports = (sequelize, Sequelize) => { 
    const Categories = sequelize.define("categories", {
        category_id: {
            type: Sequelize.BIGINT,
            primaryKey: true
          },
        category: {
            type: Sequelize.TEXT
        }
    });
  
    return Categories;
  };