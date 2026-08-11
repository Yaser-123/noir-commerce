import { products } from './data.js';

class CartManager {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('noir_cart_items')) || [];
    
    // Defer DOM updates slightly to ensure components are loaded
    setTimeout(() => this.updateCartCount(), 0);
  }

  addItem(productId, size, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.items.find(i => i.id === productId && i.size === size);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      // Create a clean copy of the product to avoid mutating the original data
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images.hero,
        size: size,
        quantity: quantity
      };
      this.items.push(cartItem);
    }
    this.save();
  }

  removeItem(productId, size) {
    this.items = this.items.filter(i => !(i.id === productId && i.size === size));
    this.save();
  }

  updateQuantity(productId, size, quantity) {
    const item = this.items.find(i => i.id === productId && i.size === size);
    if (item) {
      item.quantity = Math.max(1, parseInt(quantity));
      this.save();
    }
  }

  clearCart() {
    this.items = [];
    this.save();
  }

  save() {
    localStorage.setItem('noir_cart_items', JSON.stringify(this.items));
    this.updateCartCount();
    window.dispatchEvent(new Event('cartUpdated'));
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
      const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
      countElement.textContent = count;
    }
  }
}

export const cart = new CartManager();
