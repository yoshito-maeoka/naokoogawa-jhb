<template>
  <section id="the-exhibition" class="exhibition-section">
    <div class="wrapper">
      <h2
        v-element-visibility="(state) => appeared.onElementVisibility(state, 0)"
        :class="{ appeared: appeared.inView(0) }"
        v-html="$t('exhibition.title')"
      />
      <p
        v-element-visibility="(state) => appeared.onElementVisibility(state, 1)"
        :class="{ appeared: appeared.inView(1) }"
      >
        <span> {{ $t('exhibition.exhibition') }} </span><br/>
        <span v-html="$t('exhibition.date')" /><br/>
        <span v-html="$t('exhibition.venue')" />
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { vElementVisibility } from '@vueuse/components';
import { createVisibleStates, onElementVisibility, inView } from '@/lib/composable/inView';
const appeared = createVisibleStates(2);
</script>

<style lang="scss">
.exhibition-section {
  background: rgba(0, 0, 0, 0.5);

  .wrapper {
    text-align: left;
    max-width: 780px;
    margin: 40px auto;

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

    a[target=_blank] {
      padding-right: 1.2em;
      background-size: 17px;
    }
  }
}
</style>
