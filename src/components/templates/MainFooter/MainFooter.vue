<template>
  <footer :class="{ 'main-footer':true,  visible }">
    <ul>
      <li><a href="https://2015.jewelryhunting.com" target="_blank">past project</a></li>
      <li><a href="https://www.instagram.com/jewelry_hunting/" target="_blank">instagram</a></li>
      <li><a href="#" @click.prevent="openImprint">imprint</a></li>
    </ul>
    <div :class="{ imprint, visible }">
      <div class="wrapper" @click.prevent="closeImprint">
        <p>
          please contact via email: info (a) naokoogawa.com <br/>
          Responsible for all contents on this website is Naoko Ogawa. <br/>
          Naoko Ogawa is not responsible for the contents of any linked website.<br/>
          <br/>
          All rights reserved. Any duplication or redistribution as a whole or in parts requires written permission of Naoko Ogawa.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const imprint = ref(true);
const visible = ref(false);

const openImprint = ()=> {
  visible.value = true;
  return false;
}

const closeImprint = ()=> {
  visible.value = false;
  return false;
}
</script>

<style lang="scss">
.main-footer {
  padding-top: 49vh;
  padding-bottom: 49vh;
  color: var(--color-light);
  background-color: var(--background-light);
  position: relative;

  @include bp-max-medium {
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &.visible {
      display: block;
    }
  }

  ul li {
    margin: 0 30px;

    @include bp-max-medium {
      margin: 2em 0;
      width: 100vw;

      a {
        padding: 0;
      }
    }
  }
  .imprint {
    display: none;
    opacity: 0;
    transition: opacity 0.8s;
    transition-delay: 0.2s;

    &.visible {
      display: block;
      opacity: 1;
      transition: opacity 0.8s;
      transition-delay: 0.2s;
    }
    .wrapper {
      position: absolute;
      top: 0;
      background-color: rgba(200, 200, 200, 1);
      height: 100vh;
      width: 100vw;
      z-index: 1;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
