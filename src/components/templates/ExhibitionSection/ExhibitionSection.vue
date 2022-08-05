<template>
  <section id="the-exhibition" class="exhibition-section">
    <div class="wrapper">
      <h2>{{ $t('exhibition.title') }}</h2>
      <p>
        <span> {{ $t('exhibition.exhibition') }} </span><br/>
        <span v-html="$t('exhibition.date')" /><br/>
        <span v-html="$t('exhibition.venue')" />
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.exhibition-section {
  background: rgba(0, 0, 0, 0.5);

  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: 40px auto;
  }
}
</style>
