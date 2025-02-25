<template>
  <div class="order__summary">
    <ul v-if="orders.length > 0" class="order__summary-list">
      <li
        v-for="(order, index) in orders"
        :key="index"
        class="order__summary-item"
      >
        <span class="order__summary-name">{{ order.name }}</span>
        <span class="order__summary-price">${{ order.price.toFixed(2) }}</span>
      </li>
      <li
        v-for="(selectedSize, index) in selectedSizes"
        :key="index"
        class="order__summary-item"
      >
        <span class="order__summary-name">{{ selectedSize.name }}</span>
        <span class="order__summary-price"
          >${{ selectedSize.extra_price.toFixed(2) }}</span
        >
      </li>
    </ul>
    <p v-else class="order__summary-empty">Please select a pizza</p>
    <p class="order__summary-total">
      <span>Total:</span>
      <span>${{ totalPrice }}</span>
    </p>
    <Button variant="primary" @click="handleCheckout">Checkout</Button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "../../store/OrderStore.js";
import { useSizeStore } from "../../store/SizeStore.js";
import { storeToRefs } from "pinia";
import Button from "../Button.vue";

const orderStore = useOrderStore();
const { orders } = storeToRefs(orderStore);
const sizeStore = useSizeStore();
const { selectedSizes } = storeToRefs(sizeStore);
const totalPrice = computed(() => {
  const orderTotal = orders.value.reduce(
    (total, order) => total + order.price,
    0
  );
  const sizeTotal = selectedSizes.value.reduce(
    (total, selectedSize) => total + selectedSize.extra_price,
    0
  );
  return (orderTotal + sizeTotal).toFixed(2);
});

const handleCheckout = () => {
  console.log("Proceeding to checkout...");
};
</script>
