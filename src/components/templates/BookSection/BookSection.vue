<template>
  <section id="the-book">
    <div class="wrapper">
      <div class="what-is-jh">
        <h2 v-html="$t('what-is-jewelry-hunting.title')"/>
        <p v-html="$t('what-is-jewelry-hunting.body-0')" />
      </div>
      <div class="what-is-book">
        <h2 v-html="$t('what-is-jewelry-hunting.title-2')"/>
        <p v-html="$t('what-is-jewelry-hunting.body-1')" />
        <h3 v-html="$t('contributors.title')"/>
        <div>
          <h4 v-html="$t('contributors.aslan.name')" />
          <p v-html="$t('contributors.aslan.description')" />
        </div>
        <div>
          <h4 v-html="$t('contributors.hosoya.name')" />
          <p v-html="$t('contributors.hosoya.description')" />
        </div>
        <div>
          <h4 v-html="$t('contributors.ogawa.name')" />
          <p v-html="$t('contributors.ogawa.description')" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#the-book {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5));

  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: 40px auto;

    .what-is-jh {
      margin-bottom: 30px;
    }

    .what-is-book {
      h3 {
        margin-top: 30px;
      }
      div {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
