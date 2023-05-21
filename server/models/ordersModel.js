module.exports = (sequelize, Sequelize) => { 
    const Orders = sequelize.define("orders", {
        product_array: {
            type: Sequelize.ARRAY(Sequelize.TEXT) 
        },
        count_array: {
            type: Sequelize.ARRAY(Sequelize.TEXT) 
        },
        adress: {
            type: Sequelize.TEXT
        },
        total: {
            type: Sequelize.INTEGER
        },
        delivery_date: {
            type: Sequelize.TEXT
        }
    });
  
    return Orders;
  };