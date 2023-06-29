<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHeart, mdiAccount, mdiCurrencyEur, mdiArrowRight } from '@mdi/js'
import { useActivityStore } from '@/stores/ActivityStore';

const activityStore = useActivityStore();

defineProps(["error"])
</script>

<template>
  <div class="container animate pop">
    <div class="wrapper">
      <h1>Oops!</h1>
      <h2>{{ error.error }}</h2>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.container {
  position:relative;
  display: flex;
  flex-direction: column;
  
  width:40vw;

  padding: 38px;  
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 2em;

  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);
  border: 1px solid #e2e4e7;
  background-color:white;

  transition: scale 50ms ease-out;
}

h1{
  color:$brand-secondary;
  font-family: 'Lato', sans-serif;
}

@media (max-width: 1024px) {
  .container {
    width:70vw;
  }
}

</style>
