import { products } from '../data/products-db.js';

console.log(products);

/* fetch('./src/data/products.json')
  .then(response => response.json())
  .then(data => {
    const products = data;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Find the product by ID
    const product = products.find(p => p.id == productId);

    if (product) {
      document.querySelector('#product-name').textContent = product.name;
      document.querySelector('#product-description').textContent = product.description;
      document.querySelector('#product-price').textContent = `$${product.price}`;
      document.querySelector('#product-image').src = product.image;
    } else {
      document.querySelector('#product-details').textContent = 'Product not found';
    }
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });
 */