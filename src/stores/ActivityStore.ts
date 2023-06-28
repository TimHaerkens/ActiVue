import {ref,computed} from 'vue';
import { defineStore, acceptHMRUpdate } from "pinia";
import { useStorage } from "@vueuse/core";
import { useBored } from "@/bored"

export const useActivityStore = defineStore("ActivityStore", () => {

    const { activity, error, loading, fetch} = useBored();
    const likes = useStorage("ActivityStore:likes", [] as Activity[]);
    const dislikes = useStorage("ActivityStore:dislikes", [] as Activity[]);

    const fetchActivity = async(url:string) => {
        fetch(url);
    }

    const likeActivity = (activity: Activity) => {
        if(activity == null)return;
        if(likes.value.find(function(value){return value.key == activity.key}) !== undefined)return;
        //Add to likes and potentially remove from dislikes
        likes.value.push(activity);
        dislikes.value = dislikes.value.filter(function(value){return value.key != activity.key});
    }

    const dislikeActivity = (activity: Activity) => {
        if(activity == null)return;
        if(dislikes.value.find(function(value){return value.key == activity.key}) !== undefined)return;
        //Add to dislikes and potentially remove from likes
        dislikes.value.push(activity);
        likes.value = likes.value.filter(function(value){return value.key != activity.key});
    }

    const isLiked = (activity: Activity) => {
        return (likes.value.find(function(value){return value.key == activity.key}) !== undefined);
    }

    const isDisliked = (activity: Activity) => {
        return (dislikes.value.find(function(value){return value.key == activity.key}) !== undefined);
    }

    const priceRating = (activity: Activity) => {
        if(activity==null)return 0;
        return Math.floor(activity.price*5)
    }

    const priceText = (activity: Activity) => {
        if(activity==null)return '';
        return [
            "This will cost you nothing",
            "This will cost you a little bit",
            "This will cost you some money",
            "This will cost you quite a lot",
            "This will cost you a lot of money",
        ][priceRating(activity)]
    }


    return{
        activity, error, loading, fetchActivity, likeActivity, dislikeActivity, isLiked, isDisliked, priceRating, priceText, likes, dislikes
    }

});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useActivityStore, import.meta.hot))
}