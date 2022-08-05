<template>
  <section id="shop-coming-soon">
    <div class="wrapper">
      <h2 v-html="$t('shop-coming-soon.title')"/>
      <p v-html="$t('shop-coming-soon.body')" />
    </div>
  </section>
</template>


<style lang="scss">
#shop-coming-soon {
  background: rgba(0, 0, 0, 0.5);

  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: 40px auto;
  }
}
</style>
