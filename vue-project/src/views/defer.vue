<template>
  <div class="container">
    <div v-for="n in 100">
      <heavy-component v-if="defer(n)"></heavy-component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HeavyComponent from '../components/heavy_component.vue'
function useDefer() {
  const frameCount = ref(0)
  function updateFrameCount() {
    requestAnimationFrame(() => {
      frameCount.value++
      updateFrameCount()
    })
  }
  updateFrameCount()
  return function defer(n: number) {
    return frameCount.value >= n
  }
}
const defer = useDefer()
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}
</style>
