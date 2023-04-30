module.exports = (sequelize, Sequelize) => { 
    const News = sequelize.define("news", {
        news_id: {
            type: Sequelize.BIGINT,
            primaryKey: true
          },
        title: {
            type: Sequelize.TEXT
        },
        author: {
            type: Sequelize.TEXT
        },
        data: {
            type: Sequelize.TEXT
        },
        thumbnail: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        }
    });
  
    return News;
  };