<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
const el = ref(null)
let raf, x = 0, y = 0, cx = 0, cy = 0
const move = (e) => { x = e.clientX; y = e.clientY }
const loop = () => {
  cx += (x - cx) * 0.12; cy += (y - cy) * 0.12
  if (el.value) el.value.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
  raf = requestAnimationFrame(loop)
}
onMounted(() => {
  if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  window.addEventListener('pointermove', move, { passive: true })
  loop()
})
onBeforeUnmount(() => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) })
</script>

<template><div ref="el" class="glow" aria-hidden="true" /></template>

<style scoped>
.glow {
  position: fixed; top: -300px; left: -300px; width: 600px; height: 600px;
  border-radius: 50%; pointer-events: none; z-index: 0;
  background: radial-gradient(circle, rgba(212, 255, 58, 0.06), transparent 60%);
  will-change: transform;
}
@media (pointer: coarse) { .glow { display: none; } }
</style>
