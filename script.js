
// let lastScrollY = window.scrollY;
//     const header = document.querySelector('.home-top-mid');

//     window.addEventListener('scroll', () => {
//       if (window.scrollY > lastScrollY) {
//         // User scrolled down, hide the header
//         header.classList.add('hidden');
//       } else {
//         // User scrolled up, show the header
//         header.classList.remove('hidden');
//       }
//       lastScrollY = window.scrollY;
//     });

// script.js

// ---------------internet-------------------
window.addEventListener('offline', function() {
  document.getElementById('offline-message').style.display = 'block'; 
});

window.addEventListener('online', function() {
  document.getElementById('offline-message').style.display = 'none'; 
});

// Check initial connection status
if (!navigator.onLine) {
  document.getElementById('offline-message').style.display = 'block'; 
}
// --------------------------internet-----------------
let category = document.querySelector('.category');
let cart = document.querySelector('.cart');
let profile = document.querySelector('.profile-container');

document.querySelector('.taskbar-category').onclick = () =>{
  category.classList.toggle('active');
 }
 document.querySelector('.close-btn2').onclick = () =>{
  category.classList.remove('active');
 }
 
document.querySelector('.taskbar-cart').onclick = () =>{
  cart.classList.toggle('active');
 }
 document.querySelector('.close-btn1').onclick = () =>{
  cart.classList.remove('active');
 }
document.querySelector('.taskbar-profile').onclick = () =>{
 profile.classList.toggle('active');
}
document.querySelector('.close-btn').onclick = () =>{
  profile.classList.remove('active');
 }





// const buttons = document.querySelectorAll("#tskbr-icons i");

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     buttons.forEach((btn) => btn.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

// --------slider---------------------
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    autoplay: {
      delay: 2000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allow pagination bullets to be clickable
    },
  });
});


// -------------------slider -------------------

//------------images----------------

// Fetch product data from JSON file
fetch('products.json')
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

//-----------images end-------------------------















 


 

 
 