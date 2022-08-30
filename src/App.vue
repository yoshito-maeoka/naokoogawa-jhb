<template>
  <Navigation />
  <div class="wrapper">
    <HeroLogoSection />
    <HeroDateSection />
    <BookSection />
    <ExhibitionSection />
    <ShopComingSoon />
    <JhbGallery />
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import 'reflect-metadata';
import Navigation from '@/components/organisms/Navigation/Navigation.vue';
import HeroLogoSection from '@/components/templates/HeroLogoSection/HeroLogoSection.vue';
import HeroDateSection from '@/components/templates/HeroDateSection/HeroDateSection.vue';
import BookSection from '@/components/templates/BookSection/BookSection.vue';
import ExhibitionSection from '@/components/templates/ExhibitionSection/ExhibitionSection.vue';
import ShopComingSoon from '@/components/templates/ShopComingSoon/ShopComingSoon.vue';
import JhbGallery from '@/components/templates/JhbGallery/JhbGallery.vue';
import MainFooter from '@/components/templates/MainFooter/MainFooter.vue';
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
