<template>
  <h2 class="pizza-list__subtitle">Choose your pizza</h2>
  <div class="pizza-list">
    <PizzaCard v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
  </div>
</template>

<script setup>
import { usePizzaList } from "../../../store/PizzaList.js";
import { storeToRefs } from "pinia";
import PizzaCard from "./PizzaCard.vue";

const pizzaList = usePizzaList();
const { pizzas } = storeToRefs(pizzaList);
</script>
