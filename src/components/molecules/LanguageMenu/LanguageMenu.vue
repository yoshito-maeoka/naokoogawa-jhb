<template>
  <ul class="languages">
    <li :class="isActive('ja')"><a href="#" @click.prevent="onLanguageSelected('ja')">JA</a></li>
    <li :class="isActive('en')"><a href="#" @click.prevent="onLanguageSelected('en')">EN</a></li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const language = ref('ja');
const { locale } = useI18n();

const isActive = (lang: string) : string | undefined => {
  return language.value === lang ? 'active' : undefined;
};


const onLanguageSelected = (lang: string) => {
  localStorage.setItem('lang', lang);
  language.value = lang;
  locale.value = lang;
  return false;
};

onMounted(() => {
  const lang = localStorage.getItem('lang') ?? window.navigator.language;
  onLanguageSelected(lang);
});

</script>

<style lang="scss">
.languages {
  position: absolute;
  top: 20px;
  right: 20px;
  > li {
    padding-bottom: 10px;

    &.active {
      border-bottom: 2px solid var(--nav-color);
    }
    a {
      cursor: pointer;
    }
  }
}

</style>
