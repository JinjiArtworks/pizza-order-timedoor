import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("orderStore", () => {
  const orders = ref([]); // Store selected pizza(s)
  // Function to set the selected pizza
  const selectPizza = (pizza) => {
    orders.value = [pizza]; // store the pizza here
  };

  return { orders, selectPizza };
});