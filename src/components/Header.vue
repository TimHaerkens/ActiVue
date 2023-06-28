<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHeart, mdiAccount } from '@mdi/js'
import { useAuthUserStore } from '@/stores/AuthUserStore';

const userStore = useAuthUserStore();

const menuActive = ref(false);

</script>

<template>
<header>
  <nav class="header">
    
    <div class="logo gradient">
      <RouterLink to="/"> ActiVue</RouterLink>
    </div>

    <div class='profile' @click="menuActive=!menuActive">
      <span :class="'username '+(menuActive?'active':'')" ref="profil" >
        <span class="avatar"></span>
        <span>{{userStore.username}}</span>
      </span>
      <ul v-show="menuActive" >
        <li><RouterLink to="/favorites"><svg-icon :path="mdiHeart" type="mdi" :size="18" class="heart"></svg-icon> <span>My Favorites</span></RouterLink></li>
      </ul>
    </div>

</nav>
</header>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.header{

  display: flex;
  justify-content: space-between;

  left:0;
  top:0;
  position:fixed;
  width:100%;
  margin-top: 2rem;
  padding-left:4em;
  padding-right:4em;
  z-index:100;

  color:#242e4a;
}

.logo{
  

  float:left;
  a{
    font-size:2em;
  font-weight:bold;
    text-decoration: none;
  }
}

.profile{
  cursor:pointer;
  
  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);
  border: 1px solid #e2e4e7;

  float:right;
  min-width:200px;
  display:block;
  background-color:white;
  padding:10px 15px;

  border-radius: 1rem;
  box-shadow: 0 2.5rem 2rem -2rem rgba(36,46,74,.08);

  .username{
    display: flex;
    align-items: center;
    
    font-family:'Lato';
    font-size:1.2rem;

    transition: all linear 0.2s;
    
    .avatar{
        background-image:url(https://www.gravatar.com/avatar/aedfdb09ff3a9caf2f41224db0d71b66);
        border-radius:50%;
        -moz-border-radius:50%;
        -webkit-border-radius:50%;

        border:1px solid #e2e4e7;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 30px;
        width: 30px;

        margin-right:0.6em;
      }
  }

  ul {
    margin-top:0.8em;
    font-size:1rem;
    text-transform:uppercase;
    list-style:none;
    padding-inline-start:0px;
    li{
      a{
        display: flex;
        align-items: center;
        height:2em;
        padding-left:20px;
        text-decoration: none;
        color: #242e4a;
      }
      span{
        margin-left: 0.5rem;
      }
      transition: all 0.2s linear;
      background-color:#fbfbfd;
      border-radius:15px;
      &:hover{
        background-color:#f4f4f5;
      }
    }
  }

  .heart{
    color:rgb(151, 34, 34);
  }
}


</style>
