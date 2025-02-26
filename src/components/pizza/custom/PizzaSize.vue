<template>
  <div>
    <label class="pizza-size__size">
      <input
        type="radio"
        :name="'pizza-size'"
        :value="size"
        @change="handleSelection"
      />
      <span class="pizza-size__title">
        {{ size.name }}
        <span class="pizza-size__pricing"> (+{{ size.extra_price }}$) </span>
      </span>
    </label>
  </div>
</template>

<script setup>
import { useSizeStore } from "../../../store/SizeStore.js"; // Import Pinia store

const pizzaSize = useSizeStore();
const props = defineProps({ size: Object });
// Handle selection
const handleSelection = () => {
  pizzaSize.selectSize({
    name: props.size.name,
    extra_price: props.size.extra_price,
  });
};
</script>
