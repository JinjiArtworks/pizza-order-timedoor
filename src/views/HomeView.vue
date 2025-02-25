<template>
  <div class="order">
    <!-- Hero Section -->
    <div class="order__hero">
      <h1 class="order__hero-text">Pizza Order</h1>
    </div>

    <!-- Main Content Grid -->
    <div class="order__container">
      <!-- Left Section: Pizza List -->
      <div class="order__left">
        <PizzaList />
        <PizzaCustom />
      </div>
      <!-- Right Section: Order Summary -->
      <div class="order__right">
        <span>Payment Summary</span>
        <OrderSummary />
      </div>
    </div>
  </div>
</template>

<script setup>
import PizzaList from "../components/pizza/list/PizzaList.vue";
import PizzaCustom from "../components/pizza/custom/PizzaCustom.vue";
import OrderSummary from "../components/pizza/OrderSummary.vue";
</script>
