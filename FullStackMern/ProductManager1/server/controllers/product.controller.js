const { Product } = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price , description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.findProd = (req, res) => {
    Product.find()
    .then(prod => res.json(res.json(prod)))
    .catch(err => res.json(res.json(err)));
};