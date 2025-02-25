import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useSizeStore = defineStore("sizeStore", () => {
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
    onMounted(fetchPizzas);

    return { sizes, selectedSizes, selectSize };
});
