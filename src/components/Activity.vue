<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHeart } from '@mdi/js'
import Button from '@/components/Button.vue'

defineProps(['activity'])
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1>{{ activity.activity }}</h1>
      <p>Lorem ipsum dolor sit amet, <br/>
      consectetur adipiscing elit.</p>
    </div>
    <div class="button-wrapper"> 
      <Button class="outline">NOT HAPPY</button>
      <Button class="fill"><svg-icon type="mdi" :path="mdiHeart" :size="20"></svg-icon></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width:40vw;

  padding: 38px;  
  margin: 0 auto;

  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);
  border: 1px solid #e2e4e7;;
}

h1{
  font-family: 'Righteous', sans-serif;
  color: rgb(36, 46, 74);
  text-transform: uppercase;
  font-size: 2.5rem;
}

p {
  color: rgb(36, 46, 74);
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-wrapper{
  margin-top: 15px;
  button + button {
    margin-left: 10px;
  }
}

@media (max-width: 1024px) {
  .container {
    width:70vw;
  }
}

</style>
