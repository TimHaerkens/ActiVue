<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHeart, mdiAccount, mdiCurrencyEur } from '@mdi/js'
import Button from '@/components/Button.vue'
import { useActivityStore } from '@/stores/ActivityStore';

defineProps(['activity'])
const activityStore = useActivityStore();
</script>

<template>
  <div class="container animate pop">
    <div class="wrapper">
      <div class="info-wrapper">
        <div class="participants">
          <svg-icon v-for="(p) in activity.participants" type="mdi" :path="mdiAccount" :size="25"></svg-icon>
        </div>

        <div class="price">
          <svg-icon v-for="(p) in 5" type="mdi" :path="mdiCurrencyEur" :size="25" :class="p <= activityStore.priceRating ? 'primary' : 'secondary'"></svg-icon><br>
          <span>{{ activityStore.priceText }}</span>
        </div>
        

      </div>
      <h1>{{ activity.activity }}</h1>
      
      
      <p>Lorem ipsum dolor sit amet, <br/>
      consectetur adipiscing elit.</p>
    </div>
    <div class="button-wrapper"> 
      <Button class="outline hover">NOT HAPPY</button>
      <Button class="fill hover"><svg-icon type="mdi" :path="mdiHeart" :size="20"></svg-icon></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.container {
  display: flex;
  flex-direction: column;
  width:40vw;

  padding: 38px;  
  margin: 0 auto;

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
}

.info-wrapper{
  width:100%;

  display:flex;
  justify-content: space-between;

  margin-bottom:1em;

  .participants{
    svg{
      transition: all 250ms ease-in-out;
      &:hover{
        scale:120%;
      }
    }
  }

  .price{
    .primary{
      color:$brand-primary;
    }
    .secondary{
      opacity:0.3
    }

    svg{
      transition: all 250ms ease-in-out;
      &:hover{
        scale:120%;
      }
    }
  }

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
