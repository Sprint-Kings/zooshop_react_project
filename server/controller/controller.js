const knex = require('../DB/db.js');
let express = require('express');
let router = express.Router();


//all-user-routes

router.get("/products", async (req, res) => {
    const products = await knex.withSchema("public")
        .select('*')
        .from('products')
        .leftJoin('categories', 'products.categoryid', 'categories.category_id')
        .leftJoin('prices', 'products.product_id', 'prices.productid')


    res.send(products)
});

router.get("/product/:productId", async (req, res) => {
    productId = req.params.productId;
    const product = await knex
        .select("*")
        .from("products")
        .leftJoin('categories', 'products.categoryid', 'categories.category_id')
        .leftJoin('prices', 'products.product_id', 'prices.productid')
        .where("product_id", productId)
    res.json(product);
})

router.get("/products/:limit/:offset", async (req, res) => {
    limit = req.params.limit;
    offset = req.params.offset-1;
    const products = await knex
        .select("*")
        .from("products")
        .leftJoin('categories', 'products.categoryid', 'categories.category_id')
        .leftJoin('prices', 'products.product_id', 'prices.productid')
        .limit(limit)
        .offset(offset)
    res.json(products);
})

router.get("/news/:newsId", async (req, res) => {
    newsId = req.params.newsId;
    const news = await knex
        .select("*")
        .from("news")
        .where("news_id", newsId)
    res.json(news);
})

router.get("/news/:limit/:offset", async (req, res) => {
    limit = req.params.limit;
    offset = req.params.offset-1;
    const news = await knex
        .select("*")
        .from("news")
        .limit(limit)
        .offset(offset)
    res.json(news);
})

module.exports = router;
