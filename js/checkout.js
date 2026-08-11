import { cart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Summary
  const summaryItems = document.getElementById('summary-items');
  const summaryCount = document.getElementById('summary-count');
  const summaryTotal = document.getElementById('summary-total');
  const subtotalVal = document.getElementById('subtotal-val');
  const totalVal = document.getElementById('total-val');

  if (cart.items.length === 0) {
    summaryItems.innerHTML = '<p class="tech-text" style="text-align:center; padding: 20px;">CART IS EMPTY</p>';
  } else {
    summaryItems.innerHTML = cart.items.map(item => `
      <div class="summary-item">
        <div style="display:flex; gap: 16px; align-items:center;">
          <div class="tech-text" style="color: var(--color-text-secondary);">
            ${item.model3d ? '[3D]' : '[IMG]'}
          </div>
          <div class="tech-text">
            <div>${item.name}</div>
            <div style="color: var(--color-text-secondary); margin-top: 4px;">US ${item.size} / QTY ${item.quantity}</div>
          </div>
        </div>
        <div class="tech-text">$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `).join('');
  }

  const count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.getTotal().toFixed(2);
  
  summaryCount.textContent = `${count} ITEMS`;
  summaryTotal.textContent = `$${total}`;
  subtotalVal.textContent = `$${total}`;
  totalVal.textContent = `$${total}`;

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
