export function loadHeader() {
  const headerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo">NØIR</a>
        <nav class="main-nav">
          <a href="silhouettes.html">SILHOUETTES</a>
          <a href="#">ENGINEERING</a>
          <a href="#">ARCHIVE</a>
        </nav>
        <div class="header-actions">
          <a href="checkout.html" class="cart-btn tech-text">CART [<span id="cart-count">0</span>]</a>
        </div>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

export function loadFooter() {
  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand logo">NØIR</div>
        <div class="footer-links tech-text">
          <a href="#">TERMS</a>
          <a href="#">PRIVACY</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
