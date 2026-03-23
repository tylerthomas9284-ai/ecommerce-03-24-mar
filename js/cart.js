// Cart management with localStorage
class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.listeners = [];
  }

  loadCart() {
    const savedCart = localStorage.getItem('elanwear-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem('elanwear-cart', JSON.stringify(this.cart));
    this.notifyListeners();
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.cart));
  }

  addToCart(product, quantity = 1, size = null) {
    const cartItemId = `${product.id}-${size || 'default'}`;
    const existingItem = this.cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        ...product,
        quantity,
        selectedSize: size,
        cartItemId
      });
    }

    this.saveCart();
    return true;
  }

  removeFromCart(cartItemId) {
    this.cart = this.cart.filter(item => item.cartItemId !== cartItemId);
    this.saveCart();
  }

  updateQuantity(cartItemId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(cartItemId);
      return;
    }

    const item = this.cart.find(item => item.cartItemId === cartItemId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }
}

// Global cart instance
const cartManager = new CartManager();
