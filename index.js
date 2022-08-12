const app = require('./app');
require('dotenv').config();
const productController = require('./controllers/productController');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productController.getAllProducts);

app.get('/products/:id', productController.getProductsById);