<template>
  <label class="pizza-card">
    <input
      type="radio"
      name="pizza-selection"
      @change="handleSelection"
      class="pizza-card__input"
    />
    <div class="pizza-card__content">
      <div v-if="pizza.discount?.is_active" class="pizza-card__badge">
        OFFER
      </div>
      <!-- Discount Badge -->

      <div class="pizza-card__image-container">
        <img
          :src="getImageUrl(pizza.imageFile)"
          :alt="pizza.name"
          class="pizza-card__image"
        />
      </div>
      <div class="pizza-card__info">
        <h3 class="pizza-card__title">{{ pizza.name }}</h3>
        <p
          v-if="pizza.discount?.is_active"
          class="pizza-card__price pizza-card__price--discount"
        >
          ${{ pizza.discount.final_price.toFixed(2) }}
          <span class="pizza-card__original-price">
            ${{ pizza.price.toFixed(2) }}
          </span>
        </p>
        <p v-else class="pizza-card__price">${{ pizza.price.toFixed(2) }}</p>
      </div>
    </div>
  </label>
</template>
<script setup>
import { useOrderStore } from "../../../store/OrderStore.js";
import { useSizeStore } from "../../../store/SizeStore.js";
import { useToppingStore } from "../../../store/ToppingStore.js";

const orderStore = useOrderStore();
const sizeStore = useSizeStore();
const toppingStore = useToppingStore();
const props = defineProps({ pizza: Object });

// Function to reset toppings and sizes properly
const resetSelections = () => {
  sizeStore.clearSelectedSizes(); // ✅ Use store function
  toppingStore.clearSelectedToppings(); // ✅ Use store function
};

// Send both pizza name, price, and allowed toppings
const handleSelection = () => {
  if (orderStore.orders.length > 0) {
    resetSelections(); // ✅ Only reset if a pizza is already selected
  }

  orderStore.selectPizza({
    name: props.pizza.name,
    price: props.pizza.price,
    allowedToppings: props.pizza.toppings,
  });
};

// Helper function to get image URL
function getImageUrl(imageName) {
  return new URL(`../../../assets/img/pizza/${imageName}`, import.meta.url)
    .href;
}
</script>
