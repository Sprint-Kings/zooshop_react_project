module.exports = (sequelize, Sequelize) => { 
    const Brands = sequelize.define("brands", {
        brand_id: {
            type: Sequelize.BIGINT,
            primaryKey: true
          },
        brand: {
            type: Sequelize.TEXT
        }
    });
  
    return Brands;
  };