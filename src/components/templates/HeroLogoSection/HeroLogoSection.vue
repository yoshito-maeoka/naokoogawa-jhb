<template>
  <div class="hero-logo-section">
    <div class="cover-layer">
      <h1><span class="sr-only">Jewerly Hunting &mdash; Book &mdash;</span></h1>
    </div>
  </div>
</template>

<script setup lang="ts">
// import here what you need
// import something from 'somewhere'
//    :
//    :

// define props
// define with const, if you use props in script.
// const props = defineProps({
//     :
// if not, don't define with const
// defineProps({
//   todo: {
//     type: Object as PropType<ToDo>,
//     required: true,
//   },
// });

// define ref
// const completed = ref(props.todo.isComplete);
//
// const priority = ref(props.todo.priority ?? 0);

// define computed
// const dataAsUrl = computed(() => (
//   (props.todo.dataType === 'file')
//     ? `https://host/${props.todo.data}`
//     : `https://host/search/${decodeData(props.todo.data)}`
// ));
//  :
//  :
//  :

// define emits
// const emit = defineEmits(['incrementPriority', 'decrementPriority']);
//
// const incrementPriority = () : void => {
//   emit('incrementPriority');
// };
//
// const decrementPriority = () : void => {
//   emit('decrementPriority');
// };
//  :
//  :
//  :

// methods as you like
// const doSomething = () : void => {
//   console.log('hello');
// };
//  :
//  :
//  :

// watch
// import { watch } from "vue";
//
// watch(() => [...level.value], (currentValue, oldValue) => {
//   console.log(currentValue);
//   console.log(oldValue);
// });

// Livecycle hooks
//   onMounted(), onUpdated(), onUnmounted(), onBeforeMount(), onBeforeUpdate(), onBeforeUnmount(),
//   onErrorCaptured(), onRenderTracked(), onRenderTriggered(), onActivated(), onDeactivated(),
//   onServerPrefetch()
//
// import { onMounted } from 'vue'
// onMounted(() => {
//   console.log('mounted')
// })
//  :
//  :

</script>

<style lang="scss">
.hero-logo-section {
  width: 100vw;
  height: 100vh;
  background-image: url('/images/top-background.jpg');

  .cover-layer {
    width: 100%;
    height: 100%;
    padding: 50px;
    background-image: linear-gradient(
      to bottom, 
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,0.9) 40%, 
      rgba(255,255,255,0), 
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
