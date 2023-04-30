module.exports = (sequelize, Sequelize) => { 
    const Products = sequelize.define("products", {
        product_id: {
            type: Sequelize.BIGINT,
            primaryKey: true
          },
        name: {
            type: Sequelize.TEXT
        },
        thumbnail: {
            type: Sequelize.TEXT
        },
        color: {
            type: Sequelize.ARRAY(Sequelize.TEXT)  
        },
        description: {
            type: Sequelize.TEXT
        },
        in_stock: {
            type: Sequelize.BOOLEAN
        }
    });
  
    return Products;
  };