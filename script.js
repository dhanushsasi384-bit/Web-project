function addToCart(productName) {
  alert(`${productName} has been added to your cart! 🛒`);
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
  } else {
    alert("Please fill out all fields.");
  }
  return false;
}
