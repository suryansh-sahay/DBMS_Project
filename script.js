document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product-select');
    const amazonPrice = document.getElementById('amazon-price');
    const flipkartPrice = document.getElementById('flipkart-price');
    const ebayPrice = document.getElementById('ebay-price');
    const bestbuyPrice = document.getElementById('bestbuy-price');
  
    productSelect.addEventListener('change', function() {
      const selectedProduct = productSelect.value;
  
      // Function to generate random price within a range
      function generateRandomPrice(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
      }
  
      // Generate random prices for demonstration purposes
      const minPrice = 200;
      const maxPrice = 1000;
      const amazonProductPrice = generateRandomPrice(minPrice, maxPrice);
      const flipkartProductPrice = generateRandomPrice(minPrice, maxPrice);
      const ebayProductPrice = generateRandomPrice(minPrice, maxPrice);
      const bestbuyProductPrice = generateRandomPrice(minPrice, maxPrice);
  
      // Update prices on the webpage
      amazonPrice.textContent = `$${amazonProductPrice}`;
      flipkartPrice.textContent = `$${flipkartProductPrice}`;
      ebayPrice.textContent = `$${ebayProductPrice}`;
      bestbuyPrice.textContent = `$${bestbuyProductPrice}`;
    });
  });
  