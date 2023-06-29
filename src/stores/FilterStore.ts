import { defineStore, acceptHMRUpdate } from "pinia";
import { useStorage } from "@vueuse/core";

export const useFilterStore = defineStore("FilterStore", () => {

    const filtersEnabled = useStorage("FilterStore:enabled", false);

    const minPrice = useStorage("FilterStore:minPrice", -1);
    const maxPrice = useStorage("FilterStore:maxPrice", -1);

    const participants = useStorage("FilterStore:participants", -1);

    const enableFilters = () => {
        filtersEnabled.value = true;
    }

    const toggleParticipants = () => {
        participants.value *= -1;
    }

    const togglePrice = () => {
        minPrice.value *= -1;
        maxPrice.value *= -1;
    }

    const setPrice = (price: number) => {
        setMinPrice(price);
        setMaxPrice(price);
    }

    const setMinPrice = (price: number) => {
        minPrice.value = price;
    }

    const setMaxPrice = (price: number) => {
        maxPrice.value = price;
    }

    const setParticipants = (parti: number) => {
        participants.value = parti;
    }

    const getFilters = () => {
        return '?'+(participants.value > -1 ? `participants=${participants.value}` : '' )
        +(minPrice.value > -1 ? `&minprice=${minPrice.value/5}` : '' )
        +(maxPrice.value > -1 ? `&maxprice=${maxPrice.value/5}` : '' )
    }

    return{
        enableFilters, filtersEnabled,
        toggleParticipants, togglePrice,
        minPrice, maxPrice, setPrice, setMinPrice, setMaxPrice,
        participants, setParticipants,
        getFilters
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFilterStore, import.meta.hot))
}