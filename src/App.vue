<template>
  <section class="wrapper">
    <Navigation />
    <HeroLogoSection />
    <BookSection />
    <ExhibitionSection />
    <ShopComingSoon />
  </section>
</template>

<script setup lang="ts">
import "reflect-metadata";
import Navigation from "@/components/organisms/Navigation/Navigation.vue";
import HeroLogoSection from "@/components/templates/HeroLogoSection/HeroLogoSection.vue"
import BookSection from "@/components/templates/BookSection/BookSection.vue"
import ExhibitionSection from "@/components/templates/ExhibitionSection/ExhibitionSection.vue"
import ShopComingSoon from "@/components/templates/ShopComingSoon/ShopComingSoon.vue"
</script>

<style lang="scss" scoped></style>
