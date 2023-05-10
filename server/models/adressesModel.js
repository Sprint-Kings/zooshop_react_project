module.exports = (sequelize, Sequelize) => { 
    const Adresses = sequelize.define("adresses", {
        adress: {
            type: Sequelize.TEXT
        }
    });
  
    return Adresses;
  };