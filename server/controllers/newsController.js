const db = require("../models");
const { news: News } = db;
  
exports.oneNews = (req, res) => {
    News.findOne({
        where: {
          news_id: req.params.newsId
        }
      })
        .then(async (news) => {
          if (!news) {
            return res.status(404).send({ message: "News not found" });
          }
          res.status(200).send(news)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
};

exports.listNews = (req, res) => {
  News.findAll({

        offset: req.params.offset-1,
        limit: req.params.limit,
        order: ['news_id']
      
    })
      .then(async (news) => {
        if (!news) {
          return res.status(404).send({ message: "News not found" });
        }
        res.status(200).send(news)
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
  