<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';

button{
  margin-top: 1rem;
  border-radius: 50rem;
  padding: 1rem;
  font-size: 1rem;
  background-color:$brand-secondary;

  cursor:pointer;
  transition: opacity 0.2s linear;
  &:hover{
    opacity:0.8;
  }
}
</style>
