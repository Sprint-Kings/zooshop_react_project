module.exports = (sequelize, Sequelize) => { 
    const Cart = sequelize.define("cart", {
        product_id: {
            type: Sequelize.INTEGER
        },
        count: {
            type: Sequelize.INTEGER
        }
    });
  
    return Cart;
  };