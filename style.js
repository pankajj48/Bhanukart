// Front page 

document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    // Initialize carousel
    $('#carouselExampleControls').carousel({
        interval: 3000, // Change to desired interval time in milliseconds
        pause: 'hover' // Pause the carousel on hover
    });
});

// cart page

document.addEventListener('DOMContentLoaded', function() {
    function updateSubtotals() {
        const rows = document.querySelectorAll('#cart tbody tr');
        let cartSubtotal = 0;

        rows.forEach(row => {
            const priceCell = row.querySelector('td:nth-child(4)');
            const quantityInput = row.querySelector('input[type="number"]');
            const subtotalCell = row.querySelector('td:nth-child(6)');

            const price = parseFloat(priceCell.textContent.replace('Rs. ', ''));
            const quantity = parseInt(quantityInput.value);

            const subtotal = price * quantity;
            subtotalCell.textContent = 'Rs. ' + subtotal.toFixed(2);
            cartSubtotal += subtotal;
        });

        document.getElementById('cart-subtotal').textContent = 'Rs. ' + cartSubtotal.toFixed(2);
        document.getElementById('cart-total').textContent = 'Rs. ' + cartSubtotal.toFixed(2);
    }

    function removeCartItem(event) {
        const row = event.target.closest('tr');
        row.remove();
        updateSubtotals();
    }

    document.querySelectorAll('#cart input[type="number"]').forEach(input => {
        input.addEventListener('change', updateSubtotals);
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeCartItem);
    });

    document.getElementById('apply-coupon-btn').addEventListener('click', function() {
        const couponCode = document.getElementById('coupon-code').value;
        // Add coupon validation and application logic here
        alert('Coupon "' + couponCode + '" applied!');
    });

    updateSubtotals();
});
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [
      { name: 'Product name 1', quantity: 1, price: 100 },
      { name: 'Product name 2', quantity: 1, price: 160 },
      { name: 'Product name 3', quantity: 1, price: 130 }
    ];

    // checout page

    const orderSummaryElement = document.getElementById('order-summary');
    let totalAmount = 0;

    cartItems.forEach(item => {
      const itemTotal = item.quantity * item.price;
      totalAmount += itemTotal;

      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
        <span>${item.name}</span>
        <span>x${item.quantity}</span>
        <span>₹${itemTotal.toFixed(2)}</span>
      `;

      orderSummaryElement.appendChild(listItem);
    });

    const totalItem = document.createElement('li');
    totalItem.classList.add('list-group-item');
    totalItem.innerHTML = `
      <div>
        <strong>Total amount</strong>
        <p class="mb-0">(including VAT)</p>
      </div>
      <span><strong>₹${totalAmount.toFixed(2)}</strong></span>
    `;

    orderSummaryElement.appendChild(totalItem);
  });

//   Contact page 

$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        let isValid = true;

        // Clear previous error messages
        $('.error').text('');

        // Validate name
        if ($('#name').val().trim() === '') {
            $('#nameError').text('Name is required.');
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const email = $('#email').val().trim();
        if (email === '') {
            $('#emailError').text('Email is required.');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Enter a valid email address.');
            isValid = false;
        }

        // Validate subject
        if ($('#subject').val().trim() === '') {
            $('#subjectError').text('Subject is required.');
            isValid = false;
        }

        // Validate message
        if ($('#message').val().trim() === '') {
            $('#messageError').text('Message is required.');
            isValid = false;
        }

        // If form is valid, submit it (you can add AJAX call here to submit form data)
        if (isValid) {
            alert('Form submitted successfully!');
            // You can add code here to actually submit the form via AJAX if needed
        }
    });
  });

//   singleproduct 

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}