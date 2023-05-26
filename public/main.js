let cartItems = [];
let totalPrice = 0;

function toggleCart() {
  const cart = document.getElementById('cart');
  cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

function addToCart(button) {
    const productContainer = button.closest('.product');
    const productName = productContainer.querySelector('.product-title-item').textContent.trim();
    const productPrice = getPrice(productContainer);
  
    cartItems.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
  
    updateCart();
  }
  
  function getPrice(productContainer) {
    const priceElement = productContainer.querySelector('.product-description');
    const priceText = priceElement.textContent;
    const price = parseFloat(priceText.replace('$', ''));
  
    return price;
  }

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total-price');


  cartItemsElement.innerHTML = '';


  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(li);
  });

  totalElement.textContent = totalPrice;
}

function clearCart() {
    cartItems = [];
    totalPrice = 0;
    updateCart();
  }

  function buyNow() {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    else
    alert('Thank you for your purchase!');
    clearCart();
  }

  function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");

  } 

  var audio = null;
  var isPlaying = false;
  var path = "resources/osrs-theme.mp3";
  
  function playAudio() {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
  }
  
  function initializeAudio() {
    audio = new Audio(path);
  
    var playPauseButtons = document.getElementsByClassName("play-pause-button");
    for (var i = 0; i < playPauseButtons.length; i++) {
      playPauseButtons[i].addEventListener("click", function() {
        playAudio();
      });
    }
  }
  
  initializeAudio();
  
  
