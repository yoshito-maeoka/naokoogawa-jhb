<template>
  <ul class="languages" :class="{ language }">
    <li><a href="#" @click="onLanguageSelected('ja')">JA</a></li>
    <li><a href="#" @click="onLanguageSelected('en')">EN</a></li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const language = ref('ja');
const { locale } = useI18n();

const onLanguageSelected = (lang: string) => {
  console.log(`${lang}clicked`);
  language.value = lang;
  locale.value = lang;
};
</script>

<style lang="scss">
.languages {
  position: absolute;
  top: 20px;
  right: 20px;

  a {
    cursor: pointer;
  }
}

</style>
