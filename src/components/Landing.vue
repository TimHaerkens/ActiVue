<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/Button.vue'
  import Activity from '@/components/Activity.vue'
  import { useBored } from "@/bored"
  
  const boredEndpoint = 'https://www.boredapi.com/api/';
  const boredUrl = ref(boredEndpoint+'activity');
  const { data, error, loading, fetch} = useBored();

</script>

<template>
  <div class="wrapper">
    <div class="landing">
      <h1 class="gradient">Are you bored?</h1>
      <h3>Don't worry. We got you covered!</h3>

      <Button v-if="data==null" @click="fetch(boredUrl)" class="glow fill">Give me an activity</Button>
      <Activity v-if="data!=null" :activity="data" />

    </div>
  </div>
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