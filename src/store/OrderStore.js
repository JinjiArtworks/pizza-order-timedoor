import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("OrderStore", () => {
  const orders = ref([]);
  const selectPizza = (pizza) => {
    orders.value = [pizza];
  };
  return { orders, selectPizza };
});