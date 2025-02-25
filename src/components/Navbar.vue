<template>
  <nav :class="['navbar', { 'navbar--hidden': isHidden }]">
    <div class="navbar__logo">
      <h2 class="navbar__title">
        <span class="navbar__subtitle">Food</span>now
      </h2>
    </div>

    <ul class="navbar__menu">
      <li class="navbar__item">
        <router-link to="/" class="navbar__link">Home</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/" class="navbar__link navbar__active">Order</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/" class="navbar__link">About</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/" class="navbar__link">Blog</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/" class="navbar__link">Contact Us</router-link>
      </li>
    </ul>

    <div class="navbar__auth">
      <router-link to="/" class="navbar__link">Login</router-link>
      <!-- <router-link to="/register" class="navbar__register">Register</router-link> -->
      <Button variant="register">Register</Button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Button from "./Button.vue";

const isHidden = ref(false);
let lastScrollY = 0;
let ticking = false;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50;
      lastScrollY = currentScrollY;
      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
