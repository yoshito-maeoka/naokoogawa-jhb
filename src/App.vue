<template>
  <Navigation />
  <div class="wrapper">
    <HeroLogoSection />
    <BookSection />
    <ExhibitionSection />
    <ShopComingSoon />
  </div>
</template>

<script setup lang="ts">
import 'reflect-metadata';
import Navigation from '@/components/organisms/Navigation/Navigation.vue';
import HeroLogoSection from '@/components/templates/HeroLogoSection/HeroLogoSection.vue';
import BookSection from '@/components/templates/BookSection/BookSection.vue';
import ExhibitionSection from '@/components/templates/ExhibitionSection/ExhibitionSection.vue';
import ShopComingSoon from '@/components/templates/ShopComingSoon/ShopComingSoon.vue';
</script>

<style lang="scss" scoped>
.burger-menu {
  top: 0;
}
#app > .wrapper {
  width: 100vw;
  // height: 100vh;
  background-image: url('/images/top-background.jpg');
  background-position: center;
  background-attachment: fixed;
}
</style>
