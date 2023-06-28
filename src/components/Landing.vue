<script setup lang="ts">
  import Button from '@/components/Button.vue'
</script>

<template>
  <div class="wrapper">
    <div class="landing">
      <h1 class="gradient">Are you bored?</h1>
      <h3>
        Don't worry. We got you covered!
      </h3>

      <Button>Give me an activity</Button>

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
}

.landing {
  text-align: center;
}
</style>
