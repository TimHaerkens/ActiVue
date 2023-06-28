<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'


</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
