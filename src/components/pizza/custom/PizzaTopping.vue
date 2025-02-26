<template>
  <div class="pizza-topping">
    <div class="pizza-topping__items">
      <label class="pizza-topping__item">
        <input
          type="checkbox"
          :value="topping"
          :checked="isToppingSelected"
          :disabled="isToppingDisabled"
          @change="toggleTopping"
          class="pizza-topping__checkbox"
        />
        {{ topping.name }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useOrderStore } from "../../../store/OrderStore.js";
import { useToppingStore } from "../../../store/ToppingStore.js";

const orderStore = useOrderStore();
const toppingStore = useToppingStore();
const props = defineProps({ topping: Object });

const isToppingDisabled = computed(() => {
  const selectedPizza =
    orderStore.orders.length > 0 ? orderStore.orders[0] : null;
  if (!selectedPizza || !selectedPizza.allowedToppings) return false;
  return !selectedPizza.allowedToppings.includes(props.topping.id);
});

// Check if this topping is selected
const isToppingSelected = computed(() => {
  return toppingStore.selectedToppings.some((t) => t.id === props.topping.id);
});
// Toggle topping when checkbox is changed
const toggleTopping = () => {
  toppingStore.selectTopping(props.topping);
};
</script>
