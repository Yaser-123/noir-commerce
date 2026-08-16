export function loadHeader() {
  const headerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <button id="mobile-menu-btn" class="hamburger-btn" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <a href="index.html" class="logo">NØIR</a>
        <nav class="main-nav">
          <a href="silhouettes.html">SILHOUETTES</a>
          <a href="engineering.html">ENGINEERING</a>
          <a href="archive.html">ARCHIVE</a>
        </nav>
        <div class="header-actions">
          <a href="checkout.html" class="cart-btn tech-text">
            <span class="cart-text">CART</span>
            <svg class="cart-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 20a1 1 0 100-2 1 1 0 000 2zM20 20a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            [<span id="cart-count">0</span>]
          </a>
        </div>
      </div>
    </header>
    <div id="mobile-menu" class="mobile-menu-overlay">
      <button id="mobile-close-btn" class="close-btn" aria-label="Close Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <nav class="mobile-nav tech-text">
        <a href="index.html">HOME</a>
        <a href="silhouettes.html">SILHOUETTES</a>
        <a href="engineering.html">ENGINEERING</a>
        <a href="archive.html">ARCHIVE</a>
      </nav>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  window.dispatchEvent(new Event('headerLoaded'));

  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const overlay = document.getElementById('mobile-menu');

  if (menuBtn && overlay && closeBtn) {
    menuBtn.addEventListener('click', () => overlay.classList.add('active'));
    closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
  }
}

export function loadFooter() {
  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand logo">NØIR</div>
        <div class="footer-links tech-text">
          <a href="terms.html">TERMS</a>
          <a href="privacy.html">PRIVACY</a>
          <a href="contact.html">CONTACT</a>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
