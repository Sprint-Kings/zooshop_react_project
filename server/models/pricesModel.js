module.exports = (sequelize, Sequelize) => { 
    const Prices = sequelize.define("prices", {
        price_id: {
            type: Sequelize.BIGINT,
            primaryKey: true
          },
        price_small: {
            type: Sequelize.INTEGER
        },
        price_medium: {
            type: Sequelize.INTEGER
        },
        price_large: {
            type: Sequelize.INTEGER
        },
        weight_small: {
            type: Sequelize.TEXT
        },
        weight_medium: {
            type: Sequelize.TEXT
        },
        weight_large: {
            type: Sequelize.TEXT
        }
    });
  
    return Prices;
  };