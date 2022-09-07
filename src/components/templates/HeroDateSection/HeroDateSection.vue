<template>
  <div class="hero-date-section">
    <h2
      v-element-visibility="(state) => appeared.onElementVisibility(state, 0)"
      :class="{ appeared: appeared.inView(0) }"
    >
      &dash; Book &dash; Launch Event:
      <em>
        <a href="https://deuxpoissons.com/exhibition/reflection-naoko-ogawa-exhibition/" target="_blank">
          'Reflection' Naoko Ogawa Solo Exhibition
        </a>
      </em>
    </h2>
    <p
      v-element-visibility="(state) => appeared.onElementVisibility(state, 1)"
      :class="{ appeared: appeared.inView(1) }"
    >
      7. - 23. OCT 2022
    </p>
    <p
      v-element-visibility="(state) => appeared.onElementVisibility(state, 2)"
      :class="{ appeared: appeared.inView(2) }"
    >
      at <a href="https://deuxpoissons.com" target="_blank">gallery deux poisson</a>, Tokyo
    </p>
  </div>
</template>

<script lang="ts" setup>
import { createVisibleStates, onElementVisibility, inView } from '@/lib/composable/inView';
import { vElementVisibility } from '@vueuse/components';

const appeared = createVisibleStates(3);
</script>

<style lang="scss" scoped>
.hero-date-section {
  margin: 80px auto;
  font-size: 32px;

  h2 {
    font-size: 32px;
    margin: 20px auto;
    @include in-view();
  }
  em {
    display: block;
    margin-top: 25px;
    margin-bottom: 35px;
  }
  p {
    font-weight: bold;
    margin: 35px auto;
    @include in-view();
  }
}
</style>
