<template>
  <div class="pizza-topping">
    <div class="pizza-topping__items">
      <label class="pizza-topping__item">
        <input type="checkbox" :value="topping.name" v-model="selectedToppings" class="pizza-topping__checkbox" />
        {{ topping.name }}
        <!-- <div v-for="item in selectedToppings" :key="item.id">
            {{ item.name }}
        </div> -->
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ topping: Object });

const selectedToppings = ref([]);
</script>
