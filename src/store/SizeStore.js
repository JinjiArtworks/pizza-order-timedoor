import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useSizeStore = defineStore("SizeStore", () => {
    const sizes = ref([]);
    const selectedSizes = ref([])
    const fetchPizzas = async () => {
        try {
            const response = await fetch("/data/size-list.json");
            const data = await response.json();
            sizes.value = data.data;
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };

    // Function to set the selected pizza
    const selectSize = (size) => {
        selectedSizes.value = [size]; // store the size pizza here
    };
    // Function to reset selected sizes properly
    const clearSelectedSizes = () => {
        selectedSizes.value = []; // ✅ Correctly resets the array reactively
    };
    onMounted(fetchPizzas);

    return { sizes, selectedSizes, clearSelectedSizes, selectSize };
});
