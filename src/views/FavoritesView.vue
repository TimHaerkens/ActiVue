<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue'
import ActivityListItem from '@/components/ActivityListItem.vue'
import { useActivityStore } from "@/stores/ActivityStore";

const activityStore = useActivityStore();

const boredEndpoint = 'https://www.boredapi.com/api/';
const boredUrl = ref(boredEndpoint+'activity');


</script>

<template>
  <main>
    <div class="wrapper">
    <div class="landing">
      <h1 class="gradient">Favorites</h1>
      
      <div v-if="activityStore.likes.length>0">
        <h3>Here are your favorite activities</h3>
        <ActivityListItem v-for="(activity) in activityStore.likes" :activity="activity"></ActivityListItem>
      </div>

      <div v-else>
        <h3>You don't have any favorites yet! Go and find some fun things to do.</h3>
      </div>

      <RouterLink to="/"><Button class="hover-glow fill ">Go back</Button></RouterLink>

    </div>
  </div>
  </main>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;

}

.landing {
  text-align: center;
}


</style>
