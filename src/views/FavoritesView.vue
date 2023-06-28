<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue'
import Activity from '@/components/Activity.vue'
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
      <h3>Here are your favorite activities</h3>

      <ActivityListItem v-for="(activity) in activityStore.likes" :activity="activity"></ActivityListItem>


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
