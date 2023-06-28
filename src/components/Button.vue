<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';

button{
  cursor:pointer;

  color:white;
  font-size: 1rem;
  font-weight:600;
  font-variant:small-caps;

  margin-top: 1rem;
  border-radius: 50rem;
  padding: 1rem;
  background:$brand-secondary;

  
  &:hover{
    background: linear-gradient(66deg,$brand-secondary,$brand-primary,$brand-secondary);
    background-size: 500%;
    animation: glowing 20s linear infinite;
  }
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 500% 0; }
  100% { background-position: 0 0; }
}
</style>
