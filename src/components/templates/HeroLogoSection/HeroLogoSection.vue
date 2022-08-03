<template>
  <div class="hero-logo-section">
    <div class="cover-layer">
      <h1><span class="sr-only">Jewerly Hunting &mdash; Book &mdash;</span></h1>
    </div>
  </div>
</template>

<style lang="scss">
.hero-logo-section {
  width: 100vw;
  height: 100vh;
  // background-image: url('/images/top-background.jpg');

  .cover-layer {
    width: 100%;
    height: 100%;
    padding: 50px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 40%,
      rgba(255, 255, 255, 0)
    );
  }

  h1 {
    background-image: url('/images/jhb-logo.svg');
    height: 100%;
    width: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
</style>
