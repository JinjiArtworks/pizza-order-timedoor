import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useToppingStore = defineStore("ToppingStore", () => {
    const toppings = ref([]);
    const selectedToppings = ref([])
    const fetchPizzas = async () => {
        try {
            const response = await fetch("/data/topping-list.json");
            const data = await response.json();
            toppings.value = data.data
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };
    const selectTopping = (topping) => {
        const index = selectedToppings.value.findIndex(t => t.id === topping.id);
        if (index === -1) {
            // Add topping if not selected
            selectedToppings.value.push(topping);
        } else {
            // Remove topping if already selected
            selectedToppings.value.splice(index, 1);
        }
    };
    const clearSelectedToppings = () => {
        selectedToppings.value = [];
    };
    console.log('checking selected', selectedToppings.value)
    onMounted(fetchPizzas);

    return { toppings, selectedToppings, clearSelectedToppings, selectTopping };
});
