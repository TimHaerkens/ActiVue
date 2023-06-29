<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiCurrencyEur, mdiNumeric0Circle, mdiCheckboxBlankOutline, mdiCheckboxIntermediate } from '@mdi/js'
import { useFilterStore } from '@/stores/FilterStore';

const filterStore = useFilterStore();

</script>

<template>
  <div class='filters animate pop' >
    <span class="filters-text">Filters</span>
        <div class="filter-row participants">
            
          <span class="filter-title" @click="filterStore.toggleParticipants()"><svg-icon  type="mdi" :path="filterStore.participants > -1 ? mdiCheckboxIntermediate : mdiCheckboxBlankOutline" :size="15" :class="'secondary'"></svg-icon> Participants</span>
          <span class="filter-buttons">
            <svg-icon v-for="(p) in 5" type="mdi" @click="filterStore.setParticipants(p)" :path="mdiAccount" :size="25" :class="p <= filterStore.participants ? 'primary' : 'secondary'"></svg-icon>

          </span>
         
        </div>

        <div class="filter-row price">
          <span class="filter-title" @click="filterStore.togglePrice()"><svg-icon  type="mdi" :path="filterStore.minPrice > -1 ? mdiCheckboxIntermediate : mdiCheckboxBlankOutline" :size="15" :class="'secondary'"></svg-icon> Min Price</span>
          <span class="filter-buttons">
            <svg-icon type="mdi" @click="filterStore.setMinPrice(0)" :path="mdiNumeric0Circle" :size="22" :class="filterStore.minPrice >= 0 ? 'primary' : 'secondary'"></svg-icon>
            <svg-icon v-for="(p) in 5" type="mdi" @click="filterStore.setMinPrice(p)" :path="mdiCurrencyEur" :size="22" :class="p <= filterStore.minPrice ? 'primary' : 'secondary'"></svg-icon><br>
          </span>
        </div>

        <div class="filter-row price">
          <span class="filter-title" @click="filterStore.togglePrice()"><svg-icon  type="mdi" :path="filterStore.maxPrice > -1 ? mdiCheckboxIntermediate : mdiCheckboxBlankOutline" :size="15" :class="'secondary'"></svg-icon> Max Price</span>
          <span class="filter-buttons">
            <svg-icon type="mdi" @click="filterStore.setMaxPrice(0)" :path="mdiNumeric0Circle" :size="22" :class="filterStore.maxPrice >= 0 ? 'primary' : 'secondary'"></svg-icon>
            <svg-icon v-for="(p) in 5" type="mdi" @click="filterStore.setMaxPrice(p)" :path="mdiCurrencyEur" :size="22" :class="p <= filterStore.maxPrice ? 'primary' : 'secondary'"></svg-icon><br>
          </span>
        </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.filters{
  width:40vw;

  min-width:200px;

  margin: 2em auto;
  padding:10px 15px;

  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);
  border: 1px solid #e2e4e7;

  background-color:white;

  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);
 
  .filters-text{
    align-items: center;
    
    font-size:1.4rem;
    margin-bottom:1.2em;

    transition: all linear 0.2s;
  }

  .filter-row{
    display:flex;
    justify-content:center;

    .filter-title{
      text-align:left;
      width:125px;
      cursor:pointer;
      font-weight:bold;
      text-transform: uppercase;
    }
  }

  .filter-buttons{
    width:150px;
  }
}

@media (max-width: 1024px) {
  .filters {
    width:70vw;
  }
}


</style>
