import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useToppingStore = defineStore("toppingStore", () => {
    const toppings = ref([]);
    const fetchPizzas = async () => {
        try {
            const response = await fetch("/data/topping-list.json");
            const data = await response.json();
            toppings.value = data.data;
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };

    onMounted(fetchPizzas);

    return { toppings };
});
