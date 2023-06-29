<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHeart, mdiAccount, mdiCurrencyEur, mdiArrowRight } from '@mdi/js'
import Button from '@/components/Button.vue'
import { useActivityStore } from '@/stores/ActivityStore';

const activityStore = useActivityStore();

defineEmits(["likeActivity","dislikeActivity"])
defineProps(["activity"])
</script>

<template>
  <div class="container animate pop">
    <div class="wrapper">
      <div class="info-wrapper">
        <div class="participants">
          <svg-icon v-for="(p) in 5" type="mdi" :path="mdiAccount" :size="25" :class="p <= activity.participants ? 'primary' : 'secondary'"></svg-icon>
        </div>

        <div class="price">
          <svg-icon v-for="(p) in 5" type="mdi" :path="mdiCurrencyEur" :size="25" :class="p <= activityStore.priceRating(activity) ? 'primary' : 'secondary'"></svg-icon><br>
          <span>{{ activityStore.priceText(activity) }}</span>
        </div>
        

      </div>
      <h3>{{ activity.activity }}</h3>
      
      <a v-if="activity.link!=''" :href="activity.link" class="link"><p>more info</p></a> <br/>
      
      <p>Category: {{ activity.type }}</p>
     
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
  margin-bottom: 25px;

  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);
  border: 1px solid #e2e4e7;

  transition: scale 50ms ease-out;
}

h1{
  font-family: 'Righteous', sans-serif;
  color: rgb(36, 46, 74);
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height:1.2em;
  padding:22px 10px;
  transition: all 150ms ease-in-out;

}

span{
  color: rgb(36, 46, 74);
  font-family: 'Lato', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
}

p {
  color: rgb(36, 46, 74);
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  &.primary{
    color:$brand-primary;
  }
}


.text-wrapper{
  height:2em;
}

.info-wrapper{
  width:100%;

  display:flex;
  justify-content: space-between;

  margin-bottom:1em;
}

@media (max-width: 1024px) {
  .container {
    width:70vw;
  }
}

</style>
