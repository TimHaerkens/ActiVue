<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';

button{
  cursor:pointer;

  height:50px;
  margin:0 auto;

  font-size: 1rem;
  font-weight:600;
  font-variant:small-caps;
  vertical-align:middle;

  border-radius: 50rem;
  padding: 1rem;

  &:disabled{
    opacity:0.5;
  }

  &.outline{
    color: rgb(36, 46, 74);
  }

  &.fill{
    color:white;
    background:$brand-secondary;
  }  

  &.hover-glow{

  &:hover:not(:disabled){
    background: linear-gradient(66deg,$brand-secondary,$brand-primary,$brand-secondary);
    background-size: 500%;
    animation: glowing 20s linear infinite;
  }
}

&.hover-fade{
  transition: all 150ms ease-in-out;
  &:hover:not(:disabled){
    opacity:0.8;
  }
}

  &.disappear{
    transition: scale 50ms ease-out;
    scale:0%;
  }
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 500% 0; }
  100% { background-position: 0 0; }
}
</style>
