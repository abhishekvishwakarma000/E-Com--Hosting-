fetch('mens/mens.json')
  .then(response => response.json())
  .then(products => {
    const productContainer = document.getElementById('product-container');

    // Display all products
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML =
       `
        <img src="${product.mainImage}" alt="${product.name}" width="100%" height="100px">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
      productDiv.addEventListener('click', () => showProductDetails(product));
      productContainer.appendChild(productDiv);
    });
  })


// Show product details with thumbnails
function showProductDetails(product) {
  const details = document.getElementById('product-details');
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-image').src = product.mainImage;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = product.price;

  // Load thumbnails
  const thumbnailContainer = document.getElementById('thumbnail-container');
  thumbnailContainer.innerHTML = '';
  product.thumbnails.forEach(thumbnail => {
    const thumbImg = document.createElement('img');
    thumbImg.src = thumbnail;
    thumbImg.alt = product.name;
    thumbImg.classList.add('thumbnail');
    thumbImg.addEventListener('click', () => {
      document.getElementById('product-image').src = thumbnail;
    });
    thumbnailContainer.appendChild(thumbImg);
  });

  details.classList.remove('hidden');
}

// Close product details
document.getElementById('close-details').addEventListener('click', () => {
  document.getElementById('product-details').classList.add('hidden');
});

// -----------------sllide-----------------------
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper1', {
    loop: true, 
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false
    }
  });
});