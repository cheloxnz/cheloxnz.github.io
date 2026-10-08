<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { t, lang, toggleLang } from '../i18n.js'
import Icon from './Icon.vue'

const ids = ['about', 'experience', 'stack', 'ai', 'projects', 'contact']
const active = ref('')
const scrolled = ref(false)
const open = ref(false)

let io
const onScroll = () => { scrolled.value = window.scrollY > 24 }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) active.value = e.target.id })
  }, { rootMargin: '-45% 0px -50% 0px' })
  ids.forEach((id) => { const s = document.getElementById(id); s && io.observe(s) })
})
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); io && io.disconnect() })
watch(open, (v) => { document.body.style.overflow = v ? 'hidden' : '' })
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#top" class="logo" aria-label="Marcelo Del Valle — inicio" @click="open = false">
        <span class="serif">m</span><span class="dot">.</span>delvalle
      </a>

      <nav class="links" aria-label="Principal">
        <a v-for="id in ids" :key="id" :href="`#${id}`" :class="{ on: active === id }">{{ t.nav[id] }}</a>
      </nav>

      <div class="actions">
        <button class="lang" @click="toggleLang" :aria-label="lang === 'es' ? 'Switch to English' : 'Cambiar a español'">
          <span :class="{ on: lang === 'es' }">ES</span><span class="sep">/</span><span :class="{ on: lang === 'en' }">EN</span>
        </button>
        <a href="#contact" class="btn btn-primary cta">{{ t.hero.ctaPrimary }} <Icon name="arrow" /></a>
        <button class="burger" :class="{ open }" @click="open = !open" :aria-expanded="open" aria-label="Menu">
          <span /><span />
        </button>
      </div>
    </div>
  </header>

  <Transition name="sheet">
    <div v-if="open" class="sheet">
      <nav>
        <a v-for="(id, i) in ids" :key="id" :href="`#${id}`" @click="open = false" :style="{ '--i': i }">
          <span class="num">0{{ i + 1 }}</span>{{ t.nav[id] }}
        </a>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.nav {
  position: fixed; inset: 0 0 auto; z-index: 50;
  padding: 14px max(8px, calc(var(--gutter) - 22px));
  transition: padding 0.5s var(--ease);
}
.nav-inner {
  max-width: calc(var(--maxw) - 2 * var(--gutter) + 44px); margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  height: 64px; padding: 0 10px 0 22px;
  border: 1px solid transparent; border-radius: 999px;
  transition: background 0.5s, border-color 0.5s, backdrop-filter 0.5s;
}
.scrolled .nav-inner {
  background: rgba(13, 15, 18, 0.72);
  border-color: var(--line);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
}
.logo { font-weight: 600; letter-spacing: -0.03em; font-size: 1.1rem; display: flex; align-items: baseline; }
.logo .serif { font-size: 1.6rem; line-height: 0; }
.logo .dot { color: var(--accent); margin-right: 1px; }

.links { display: flex; gap: 0.25rem; }
.links a {
  position: relative; padding: 0.5rem 0.9rem; border-radius: 999px;
  font-size: 0.9rem; color: var(--muted);
  transition: color 0.3s, background 0.3s;
}
.links a:hover { color: var(--text); }
.links a.on { color: var(--text); background: rgba(255, 255, 255, 0.06); }

.actions { display: flex; align-items: center; gap: 0.5rem; }
.lang { font-family: var(--f-mono); font-size: 0.78rem; padding: 0.55rem 0.8rem; color: var(--dim); border-radius: 999px; }
.lang:hover { background: rgba(255, 255, 255, 0.05); }
.lang .on { color: var(--text); }
.lang .sep { margin: 0 0.3rem; }
.cta { --h: 44px; padding: 0 1.1rem; font-size: 0.88rem; }

.burger { display: none; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--line-2); position: relative; }
.burger span { position: absolute; left: 13px; right: 13px; height: 1.5px; background: var(--text); transition: transform 0.4s var(--ease), top 0.4s var(--ease); }
.burger span:first-child { top: 18px; }
.burger span:last-child { top: 24px; }
.burger.open span:first-child { top: 21px; transform: rotate(45deg); }
.burger.open span:last-child { top: 21px; transform: rotate(-45deg); }

.sheet {
  position: fixed; inset: 0; z-index: 40;
  background: rgba(8, 9, 11, 0.96);
  backdrop-filter: blur(20px);
  display: flex; align-items: flex-end;
  padding: 120px var(--gutter) 48px;
}
.sheet nav { display: flex; flex-direction: column; width: 100%; }
.sheet a {
  font-size: clamp(2.2rem, 10vw, 3.5rem); letter-spacing: -0.04em; font-weight: 500;
  padding: 0.35rem 0; border-bottom: 1px solid var(--line);
  display: flex; align-items: baseline; gap: 1rem;
  animation: up 0.6s var(--ease) both; animation-delay: calc(var(--i) * 50ms + 80ms);
}
.sheet .num { font-family: var(--f-mono); font-size: 0.8rem; color: var(--accent); letter-spacing: 0; }
@keyframes up { from { opacity: 0; transform: translateY(24px); } }
.sheet-enter-active, .sheet-leave-active { transition: opacity 0.4s var(--ease); }
.sheet-enter-from, .sheet-leave-to { opacity: 0; }

@media (max-width: 1080px) {
  .links { display: none; }
  .burger { display: block; }
}
@media (max-width: 560px) {
  .cta { display: none; }
  .nav-inner { padding-left: 16px; height: 58px; }
}
</style>
