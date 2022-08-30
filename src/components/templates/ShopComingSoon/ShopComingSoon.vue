<template>
  <section id="shop-coming-soon">
    <div class="wrapper">
      <h2
        v-element-visibility="(state) => appeared.onElementVisibility(state, 0)"
        :class="{ appeared: appeared.inView(0) }"
        v-html="$t('shop-coming-soon.title')"
      />
      <p
        v-element-visibility="(state) => appeared.onElementVisibility(state, 1)"
        :class="{ appeared: appeared.inView(1) }"
        v-html="$t('shop-coming-soon.body')"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { createVisibleStates, onElementVisibility, inView } from '@/lib/composable/inView';
import { vElementVisibility } from '@vueuse/components';
const appeared = createVisibleStates(2);
</script>

<style lang="scss">
#shop-coming-soon {
  background: rgba(0, 0, 0, 0.5);

  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: var(--vertical-text-block-gap) auto;

    @include bp-max-medium() {
      margin-left: 20px;
      margin-right: 20px;
    }

    h2 {
      @include in-view();
    }
    p {
      @include in-view();
    }
  }
}
</style>
