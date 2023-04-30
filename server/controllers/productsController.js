const { categories } = require("../models");
const db = require("../models");
const { brands: Brands, categories: Categories, products: Products, prices: Prices } = db;
  
exports.brandsByCategory = (req, res) => {
    Brands.findAll({
        include: {  
            model: Categories,
            attributes: [],
            required: true,
            where: {
                category: req.params.category
              }
           },
        attributes: ['brand']
      })
        .then(async (brands) => {
          if (!brands) {
            return res.status(404).send({ message: "Brands not found" });
          }
          res.status(200).send(brands.map(item => item.brand))
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
};

exports.productsListByCategory = (req, res) => {
    Products.findAll({

        offset: req.params.offset-1,
        limit: req.params.limit,
        order: ['product_id'],
        include: [{
            model: Categories,
            attributes: ['category'],
            required: true,
            where: {
                category: req.params.category
            }
        },
        {
            model: Prices
        },
        {
            model: Brands,
            attributes: ['brand']
        },]
      
    })
      .then(async (products) => {
        if (!products) {
          return res.status(404).send({ message: "Products not found" });
        }
        const formatedProducts = products.map((item) => {
            let newItem = {
            product_id: item.product_id,
            name: item.name,
            thumbnail: item.thumbnail,
            color: item.color,
            name: item.name,
            description: item.description,
            in_stock: item.in_stock,
            category: item.category.category,
            price_id: item.price.price_id,
            price_small: item.price.price_small,
            price_medium: item.price.price_medium,
            price_large: item.price.price_large,
            weight_small: item.price.weight_small,
            weight_medium: item.price.weight_medium,
            weight_large: item.price.weight_large,
            brand: item.brand.brand}
            return newItem
        });
        res.status(200).send(formatedProducts)
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.oneProduct = (req, res) => {
    Products.findOne({
        include: [{
            model: Categories,
            attributes: ['category'],
            required: true
        },
        {
            model: Prices
        },
        {
            model: Brands,
            attributes: ['brand']
        },],
        where: {
          product_id: req.params.productId
        }
      })
        .then(async (product) => {
          if (!product) {
            return res.status(404).send({ message: "Product not found" });
          }
          let formatedProduct = {
            product_id: product.product_id,
            name: product.name,
            thumbnail: product.thumbnail,
            color: product.color,
            name: product.name,
            description: product.description,
            in_stock: product.in_stock,
            category: product.category.category,
            price_id: product.price.price_id,
            price_small: product.price.price_small,
            price_medium: product.price.price_medium,
            price_large: product.price.price_large,
            weight_small: product.price.weight_small,
            weight_medium: product.price.weight_medium,
            weight_large: product.price.weight_large,
            brand: product.brand.brand}
          res.status(200).send(formatedProduct)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
};

exports.allCategories = (req, res) => {
    Categories.findAll({
      })
        .then(async (categories) => {
          if (!categories) {
            return res.status(404).send({ message: "Categories not found" });
          }
          
          res.status(200).send(categories.map(item => item.category))
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
};


  