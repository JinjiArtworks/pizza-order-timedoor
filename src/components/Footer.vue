<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <!-- First Grid: FoodNow & Social Media -->
        <div class="footer__column">
          <h3 class="footer__title">FoodNow</h3>
          <p>Find us on social media:</p>
          <div class="footer__socials">
            <a href="#" class="footer__social-link">📘 Facebook</a>
            <a href="#" class="footer__social-link">📷 Instagram</a>
            <a href="#" class="footer__social-link">🐦 Twitter</a>
          </div>
        </div>

        <!-- Second Grid: Navigation -->
        <div class="footer__column">
          <h3 class="footer__title">Navigation</h3>
          <ul class="footer__nav">
            <li><router-link to="/" class="footer__link">Home</router-link></li>
            <li>
              <router-link to="/order" class="footer__link">Order</router-link>
            </li>
            <li>
              <router-link to="/about" class="footer__link">About</router-link>
            </li>
            <li>
              <router-link to="/blog" class="footer__link">Blog</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer__link">Contact Us</router-link>
            </li>
          </ul>
        </div>

        <!-- Third Grid: Contact -->
        <div class="footer__column">
          <h3 class="footer__title">Contact</h3>
          <p>Email: support@foodnow.com</p>
          <p>Phone: +62 812-3456-7890</p>
          <p>Working Hours: 9AM - 9PM</p>
        </div>

        <!-- Fourth Grid: Location -->
        <div class="footer__column">
          <h3 class="footer__title">Location</h3>
          <p>Jl. Sudirman No. 123</p>
          <p>Jakarta, Indonesia</p>
          <p>ZIP: 10220</p>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="footer__copyright">© 2025 FoodNow. All Rights Reserved.</div>
    </div>
  </footer>
</template>