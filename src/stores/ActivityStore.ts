import { defineStore } from "pinia";

export const useActivityStore = defineStore("ActivityStore", {

    state: () => {
        return {
            activities: []
        }
    },

    actions: {
        async get() {
            //this.activities = (await axios.get('')).data;
        }
    }

});