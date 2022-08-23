const app = require('./app');
require('dotenv').config();
const productController = require('./controllers/productController');
const salesController = require('./controllers/salesControlles');
const { validateName } = require('./middlewares/validateName');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productController.getAllProducts);

app.get('/products/:id', productController.getProductsById);

app.post('/products', validateName, productController.addNewProduct);

app.put('/products/:id', validateName, productController.updateProduct);

app.get('/sales', salesController.getSale);

app.get('/sales/:id', salesController.getSaleById);