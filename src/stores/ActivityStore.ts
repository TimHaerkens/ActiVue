import {ref,computed} from 'vue';
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useBored } from "@/bored"

export const useActivityStore = defineStore("ActivityStore", () => {

    const { activity, error, loading, fetch} = useBored();
    const favorites = useLocalStorage("ActivityStore:favorites", []);

    const fetchActivity = async(url:string)=> {
        fetch(url);
    }

    const priceRating = computed(() => {
        if(activity.value==null)return 0;
        return Math.floor(activity.value.price*5)
    })

    const priceText = computed(() => {
        if(activity.value==null)return 'a';
        return [
            "This will cost you nothing",
            "This will cost you a little bit",
            "This will cost you some money",
            "This will cost you quite a lot",
            "This will cost you a lot of money",
        ][priceRating.value]
    })


    return{
        activity, error, loading, fetchActivity, priceRating, priceText
    }

});