<template>
  <section id="the-book">
    <div class="wrapper">
      <h2>Jewelry Hunting -Book-</h2>
      <div class="what-is-jh">
        <h3 v-html="$t('what-is-jewelry-hunting.title')"/>
        <p v-html="$t('what-is-jewelry-hunting.body-0')" />
        <p v-html="$t('what-is-jewelry-hunting.body-1')" />
        <p v-html="$t('what-is-jewelry-hunting.body-2')" />
      </div>
      <div>
        <h3 v-html="$t('contributors.title')"/>
        <div>
          <h4 v-html="$t('contributors.aslan.name')" />
          <p v-html="$t('contributors.aslan.description')" />
        </div>
        <div>
          <h4 v-html="$t('contributors.hosoya.name')" />
          <p v-html="$t('contributors.hosoya.description')" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#the-book {
  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: 0 auto;

    .what-is-jh p:last-of-type {
      text-align: right;
    }
  }
}
</style>
