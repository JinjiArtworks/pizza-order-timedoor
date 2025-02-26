import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const usePizzaList = defineStore("PizzaList", () => {
  const pizzas = ref([]);

  const fetchPizzas = async () => {
    try {
      const response = await fetch("/data/pizza-list.json");
      const data = await response.json();
      pizzas.value = data.data;
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  onMounted(fetchPizzas);

  return { pizzas };
});
