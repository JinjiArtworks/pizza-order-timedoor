<template>
  <h2 class="pizza-list__subtitle">Custom Pizza</h2>
  <div class="pizza-size">
    <PizzaSize v-for="size in sizes" :key="size.id" :size="size" />
  </div>
  <p class="pizza-topping__subtitle">Toppings</p>
  <div class="pizza-topping">
    <PizzaTopping
      v-for="topping in toppings"
      :key="topping.id"
      :topping="topping"
    />
  </div>
</template>

<script setup>
import PizzaSize from "./PizzaSize.vue";
import PizzaTopping from "./PizzaTopping.vue";
import { useSizeStore } from "../../../store/SizeStore.js";
import { useToppingStore } from "../../../store/ToppingStore.js";
import { storeToRefs } from "pinia";

const pizzaSize = useSizeStore();
const { sizes } = storeToRefs(pizzaSize);

const pizzaTopping = useToppingStore();
const { toppings } = storeToRefs(pizzaTopping);
</script>
