<template>
  <label class="pizza-card">
    <input type="radio" name="pizza-selection" @change="handleSelection" class="pizza-card__input" />
    <div class="pizza-card__content">
      <div class="pizza-card__image-container">
        <img :src="getImageUrl(pizza.imageFile)" :alt="pizza.name" class="pizza-card__image" />
      </div>
      <div class="pizza-card__info">
        <h3 class="pizza-card__title">{{ pizza.name }}</h3>
        <p class="pizza-card__price">${{ pizza.price.toFixed(2) }}</p>
      </div>
    </div>
  </label>
</template>

<script setup>
import { useOrderStore } from "../../../store/OrderStore.js"; // Import Pinia store

const orderStore = useOrderStore();
const props = defineProps({ pizza: Object });

// Send both pizza name and price
const handleSelection = () => {
  orderStore.selectPizza({
    name: props.pizza.name,
    price: props.pizza.price,
  });
};

// Helper function to get image URL
function getImageUrl(imageName) {
  return new URL(`../../../assets/img/pizza/${imageName}`, import.meta.url).href;
}
</script>