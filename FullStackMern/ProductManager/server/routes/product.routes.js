const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/find', ProductController.findProd);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/find/:id', ProductController.updateProduct);
    app.delete('/api/find/:id', ProductController.deleteProduct);
}
