<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue'
import Activity from '@/components/ActivityCard.vue'
import Error from '@/components/Error.vue'
import Filters from '@/components/Filters.vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFilterCog  } from '@mdi/js'


import { useActivityStore } from "@/stores/ActivityStore";
import { useFilterStore } from '@/stores/FilterStore';

const activityStore = useActivityStore();
const filterStore = useFilterStore();

const boredEndpoint = 'https://www.boredapi.com/api/';
const boredUrl = ref(boredEndpoint+'activity');

const loading = ref(false);

</script>

<template>
  <main>
    <div class="wrapper">
    <div class="landing">
      <h1 class="gradient">Are you bored?</h1>
      <h3>Don't worry. We've got you covered!</h3><br/>

      <Error v-if="activityStore.error" :error="activityStore.error"/>
      
      <Activity v-if="activityStore.activity!=null" :activity="activityStore.activity" 
      @like-activity="activityStore.likeActivity(activityStore.activity)" 
      @dislike-activity="activityStore.dislikeActivity(activityStore.activity)"/>
      
      <div class="button-wrapper" v-if="activityStore.activity!=null">
        <Button v-if="activityStore.activity!=null || activityStore.error" @click="activityStore.fetchActivity(boredUrl+filterStore.getFilters())" :class="'hover-glow fill '">Give me a new activity </Button>
        <Button  @click="filterStore.toggleFilters()" class="hover-fade outline" ><svg-icon type="mdi" :path="mdiFilterCog" :size="20"></svg-icon></button>
      </div>
      

      <Filters v-if="filterStore.filtersEnabled"/>

      <Button v-if="activityStore.activity==null" @click="loading = true, activityStore.fetchActivity(boredUrl+filterStore.getFilters()) " :class="'hover-glow fill '+(loading?'disappear':'')">Give me an activity</Button><br />
      <Button v-if="activityStore.activity==null"  @click="filterStore.enableFilters()" :class="'hover-fade outline '+(filterStore.filtersEnabled?'disappear':'')">I want to use filters </Button>
      

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
}

.landing {
  text-align: center;
  display:flex;
  flex-direction:column;
}
</style>
