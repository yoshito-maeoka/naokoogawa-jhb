<template>
  <section id="the-book">
    <div class="wrapper">
      <div class="what-is-jh">
        <h2
          v-element-visibility="(state) => appeared.onElementVisibility(state, 0)"
          :class="{ appeared: appeared.inView(0) }"
          v-html="$t('what-is-jewelry-hunting.title')"
        />
        <p
          v-element-visibility="(state) => appeared.onElementVisibility(state, 1)"
          :class="{ appeared: appeared.inView(1) }"
          v-html="$t('what-is-jewelry-hunting.body-0')"
        />
      </div>
      <div class="what-is-book">
        <h2
          v-element-visibility="(state) => appeared.onElementVisibility(state, 2)"
          :class="{ appeared: appeared.inView(2) }"
          v-html="$t('what-is-jewelry-hunting.title-2')"
        />
        <p
          v-element-visibility="(state) => appeared.onElementVisibility(state, 3)"
          :class="{ appeared: appeared.inView(3) }"
          v-html="$t('what-is-jewelry-hunting.body-1')"
        />
        <h3
          v-element-visibility="(state) => appeared.onElementVisibility(state, 4)"
          :class="{ appeared: appeared.inView(4) }"
          v-html="$t('contributors.title')"
        />
        <div
          v-element-visibility="(state) => appeared.onElementVisibility(state, 5)"
          :class="{ appeared: appeared.inView(5) }"
        >
          <h4 v-html="$t('contributors.aslan.name')" />
          <p v-html="$t('contributors.aslan.description')" />
        </div>
        <div
          v-element-visibility="(state) => appeared.onElementVisibility(state, 6)"
          :class="{ appeared: appeared.inView(6) }"
        >
          <h4 v-html="$t('contributors.hosoya.name')" />
          <p v-html="$t('contributors.hosoya.description')" />
        </div>
        <div
          v-element-visibility="(state) => appeared.onElementVisibility(state, 7)"
          :class="{ appeared: appeared.inView(7) }"
        >
          <h4 v-html="$t('contributors.ogawa.name')" />
          <p v-html="$t('contributors.ogawa.description')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { createVisibleStates, onElementVisibility, inView } from '@/lib/composable/inView';
import { vElementVisibility } from '@vueuse/components';
const appeared = createVisibleStates(7);
</script>

<style lang="scss">
#the-book {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5));

  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: var(--vertical-text-block-gap) auto;

    @include bp-max-medium() {
      margin-left: 20px;
      margin-right: 20px;
    }

    .what-is-jh {
      margin-bottom: 100px;
      h2 {
        @include in-view();
      }
      p {
        @include in-view();
      }
    }

    .what-is-book {
      h3 {
        margin-top: 30px;
        @include in-view();
      }
      div {
        margin-bottom: 20px;
        @include in-view();
      }
    }
  }
}
</style>
