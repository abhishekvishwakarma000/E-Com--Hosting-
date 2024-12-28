
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#loader").style.display = "flex";
//   setTimeout(function () {
//     document.querySelector("#loader").style.display = "none";
//     // loader.style.top = "-100%";
//   }, 2000);
// });

let profile = document.querySelector('.profile-container');


document.querySelector('.taskbar-profile').onclick = () =>{
 profile.classList.toggle('active');
 
}
const buttons = document.querySelectorAll("#tskbr-icons i");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

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















 


 

 
 