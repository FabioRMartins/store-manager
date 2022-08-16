const app = require('./app');
require('dotenv').config();
const productController = require('./controllers/productController');
const validateName = require('./middlewares/validateName');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productController.getAllProducts);

app.get('/products/:id', productController.getProductsById);

app.post('/products', validateName, productController.addNewProduct);
