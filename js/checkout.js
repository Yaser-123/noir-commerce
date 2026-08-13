import { cart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Summary
  const summaryItems = document.getElementById('summary-items');
  const summaryCount = document.getElementById('summary-count');
  const summaryTotal = document.getElementById('summary-total');
  const subtotalVal = document.getElementById('subtotal-val');
  const totalVal = document.getElementById('total-val');

  function renderCart() {
    if (cart.items.length === 0) {
      summaryItems.innerHTML = '<p class="tech-text" style="text-align:center; padding: 20px;">CART IS EMPTY</p>';
    } else {
      summaryItems.innerHTML = cart.items.map((item, index) => `
        <div class="summary-item">
          <div style="display:flex; gap: 16px; align-items:center;">
            <img src="${item.image}" alt="${item.name}" loading="lazy" class="cart-item-img">
            <div class="tech-text">
              <div style="font-weight: 600;">${item.name}</div>
              <div style="color: var(--color-text-secondary); margin-top: 8px; display: flex; align-items: center; gap: 12px;">
                <span>IND ${item.size}</span>
                <span style="color: var(--color-border-strong);">|</span>
                <div class="qty-controls">
                  <button type="button" class="qty-btn qty-minus" data-id="${item.id}" data-size="${item.size}">-</button>
                  <span style="min-width: 2ch; text-align: center;">${item.quantity}</span>
                  <button type="button" class="qty-btn qty-plus" data-id="${item.id}" data-size="${item.size}">+</button>
                </div>
              </div>
              <button type="button" class="remove-btn" data-id="${item.id}" data-size="${item.size}">REMOVE ITEM</button>
            </div>
          </div>
          <div class="tech-text" style="font-weight: 600;">₹${(item.price * item.quantity).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
        </div>
      `).join('');
    }

    const count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.getTotal().toFixed(2);
    
    summaryCount.textContent = `${count} ITEMS`;
    summaryTotal.textContent = `₹${parseFloat(total).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    subtotalVal.textContent = `₹${parseFloat(total).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    totalVal.textContent = `₹${parseFloat(total).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    const authBtn = document.querySelector('.checkout-actions .btn-primary');
    if (cart.items.length === 0) {
      if(authBtn) {
        authBtn.disabled = true;
        authBtn.style.opacity = '0.3';
        authBtn.style.cursor = 'not-allowed';
      }
    } else {
      if(authBtn) {
        authBtn.disabled = false;
        authBtn.style.opacity = '1';
        authBtn.style.cursor = 'pointer';
      }
    }

    document.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const size = e.target.getAttribute('data-size');
        const item = cart.items.find(i => i.id === id && i.size === size);
        if (item && item.quantity > 1) {
          cart.updateQuantity(id, size, item.quantity - 1);
          renderCart();
        }
      });
    });

    document.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const size = e.target.getAttribute('data-size');
        const item = cart.items.find(i => i.id === id && i.size === size);
        if (item) {
          cart.updateQuantity(id, size, item.quantity + 1);
          renderCart();
        }
      });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const size = e.target.getAttribute('data-size');
        cart.removeItem(id, size);
        renderCart();
      });
    });
  }

  renderCart();

  // Form Validation
  const form = document.getElementById('checkout-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate complex validation (e.g., CVV check)
    const cvvInput = document.getElementById('cc-cvv');
    if (cvvInput.value.length < 3) {
      cvvInput.classList.add('error-state');
      document.getElementById('payment-error').style.display = 'block';
      return;
    }
    
    // Clear cart and redirect to success
    cart.clearCart();
    window.location.href = 'success.html';
  });
  
  // Clear error on input
  document.getElementById('cc-cvv').addEventListener('input', (e) => {
    e.target.classList.remove('error-state');
    document.getElementById('payment-error').style.display = 'none';
  });
});
