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
      <h1>{{ activity.activity }}</h1>
      
      <a v-if="activity.link!=''" :href="activity.link" target="_blank" class="link"><p>Click here for more info!</p></a> <br/>
      
      <p>Category: {{ activity.type }}</p>
    </div>

    <div style="height:110px"></div>
    <div class="like-wrapper">
      <div class="button-wrapper"> 
        <Button @click="$emit('dislikeActivity')" class="outline hover-fade" :selected="activityStore.isDisliked(activity)">NOT HAPPY</button>
        <Button @click="$emit('likeActivity')" class="fill hover-glow" :selected="activityStore.isLiked(activity)"><svg-icon type="mdi" :path="mdiHeart" :size="20"></svg-icon></button>
      </div>
      <div class="text-wrapper animate pop">
        <p class="primary" v-if="activityStore.isLiked(activity)">You like this activity</p>
        <p class="secondary" v-if="activityStore.isDisliked(activity)">You don't like this activity</p>
      </div>
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
  min-height: 500px;

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

.like-wrapper{
  position: absolute;
  bottom: 15px;
  left: 0;
  width:100%;
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

.button-wrapper{
  margin-top: 15px;
  margin-bottom: 15px;
}

@media (max-width: 1024px) {
  .container {
    width:70vw;
  }
}

</style>
