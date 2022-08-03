<template>
  <section id="the-exhibition" class="exhibition-section">
    <div class="wrapper">
      <h3>{{ $t('exhibition.title') }}</h3>
      <p v-html="$t('exhibition.date')" />
      <p v-html="$t('exhibition.venue')" />
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.exhibition-section {
  .wrapper {
    max-width: 780px;
  }
}
</style>
