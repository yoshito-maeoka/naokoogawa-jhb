<template>
  <section class="jhb-gallery">
    <img src="/images/jhb_1.jpg" />
    <img src="/images/jhb_2.jpg" />
    <img src="/images/jhb_3.jpg" />
    <img src="/images/jhb_4.jpg" />
  </section>
</template>

<style lang="scss">
.jhb-gallery {
  background: rgba(0, 0, 0, 0.5);
  padding-top: 40vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background-image: linear-gradient(to top,
    white 0%,
    rgba(255, 255, 255, 0.8) 35%,
    rgba(255, 255, 255, 0.7) 65%,
    rgba(0, 0, 0, 0) 100%
  );

  @include bp-max-medium() {
    padding-top: 20vh;
    background-image: linear-gradient(to top,
      white 0%,
      rgba(255, 255, 255, 0.9) 25%,
      rgba(255, 255, 255, 0.8) 85%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  img {
    width: 75%;
    max-width: 750px;

    &:first-of-type,
    &:last-of-type {
      width: 50%;
      max-width: 500px;
    }
  }

  @include bp-max($bp-jhb-gallery) {
    gap: 10vh;
  }
}
</style>
