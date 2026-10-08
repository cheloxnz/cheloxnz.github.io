<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { t } from '../i18n.js'
import { stack } from '../content.js'
import Icon from './Icon.vue'

const time = ref('')
let timer
const tick = () => {
  time.value = new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date())
}
onMounted(() => { tick(); timer = setInterval(tick, 15000) })
onBeforeUnmount(() => clearInterval(timer))

const marquee = [...stack.frontend.slice(0, 8), ...stack.backend.slice(0, 5), ...stack.ai.slice(0, 4)]
</script>

<template>
  <section id="top" class="hero">
    <div class="bg" aria-hidden="true">
      <div class="grid" />
      <div class="blob b1" /><div class="blob b2" /><div class="blob b3" />
    </div>

    <div class="container inner">
      <div class="status" v-reveal>
        <span class="pulse" />{{ t.hero.status }}
      </div>

      <h1 class="name" aria-label="Marcelo Del Valle">
        <span class="line"><span class="word w1">Marcelo</span></span>
        <span class="line"><span class="word w2 serif">Del Valle<span class="accent">.</span></span></span>
      </h1>

      <div class="bottom">
        <p class="lead" v-reveal="300">
          {{ t.hero.lead }} <span class="hl">{{ t.hero.leadTech }}</span>{{ t.hero.leadEnd }}
        </p>
        <div class="ctas" v-reveal="400">
          <a href="#contact" class="btn btn-primary">{{ t.hero.ctaPrimary }} <Icon name="arrow" /></a>
          <a href="#experience" class="btn btn-ghost">{{ t.hero.ctaSecondary }}</a>
        </div>
      </div>

      <div class="meta" v-reveal="500">
        <span><i class="k">role</i>{{ t.hero.role }}</span>
        <span><i class="k">loc</i>{{ t.hero.location }}</span>
        <span><i class="k">time</i>{{ time }} GMT-3</span>
        <a href="#about" class="scroll"><Icon name="down" />{{ t.hero.scroll }}</a>
      </div>
    </div>

    <div class="marquee" aria-hidden="true">
      <div class="track">
        <template v-for="n in 2" :key="n">
          <span v-for="s in marquee" :key="s + n" class="m-item">{{ s }}<i>✦</i></span>
        </template>
      </div>
    </div>
  </section>

  <section class="stats container" aria-label="Stats">
    <div v-for="(s, i) in t.stats" :key="i" class="stat" v-reveal="i * 80">
      <div class="v">{{ s.value }}</div>
      <div class="l">{{ s.label }}</div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative; min-height: 100svh;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding-top: 120px; overflow: hidden; isolation: isolate;
}
.bg { position: absolute; inset: 0; z-index: -1; }
.grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 88px 88px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 75%);
  opacity: 0.55;
}
.blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.55; will-change: transform; }
.b1 { width: 46vw; height: 46vw; left: 50%; top: -18vw; background: radial-gradient(circle, rgba(212,255,58,.35), transparent 65%); animation: drift1 18s ease-in-out infinite alternate; }
.b2 { width: 38vw; height: 38vw; right: -10vw; top: 10vh; background: radial-gradient(circle, rgba(64,150,255,.28), transparent 65%); animation: drift2 22s ease-in-out infinite alternate; }
.b3 { width: 30vw; height: 30vw; left: -8vw; bottom: 0; background: radial-gradient(circle, rgba(160,90,255,.18), transparent 65%); animation: drift1 26s ease-in-out infinite alternate-reverse; }
@keyframes drift1 { to { transform: translate(-12vw, 8vh) scale(1.15); } }
@keyframes drift2 { to { transform: translate(-8vw, -6vh) scale(0.9); } }

.inner { position: relative; padding-bottom: clamp(2rem, 5vw, 4rem); }

.status {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.45rem 0.95rem 0.45rem 0.75rem;
  border: 1px solid var(--line-2); border-radius: 999px;
  background: rgba(255,255,255,.03); backdrop-filter: blur(8px);
  font-size: 0.82rem; color: var(--muted);
}
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); position: relative; }
.pulse::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 1px solid var(--accent); animation: ping 2s var(--ease) infinite; }
@keyframes ping { from { transform: scale(.6); opacity: 1; } to { transform: scale(2); opacity: 0; } }

.name {
  margin: clamp(1.5rem, 4vw, 3rem) 0 0;
  font-size: clamp(3.6rem, 14.2vw, 15.5rem);
  line-height: 0.86; letter-spacing: -0.06em; font-weight: 500;
}
.line { display: block; overflow: hidden; padding-bottom: 0.06em; }
.word { display: inline-block; animation: rise 1.4s var(--ease) both; }
.w1 { animation-delay: 0.1s; }
.w2 { animation-delay: 0.22s; font-size: 1.04em; letter-spacing: -0.035em; padding-left: 0.04em; }
@keyframes rise { from { transform: translateY(105%); } }

.bottom {
  display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem 4rem; flex-wrap: wrap;
  margin-top: clamp(2rem, 4vw, 3.5rem);
}
.lead { max-width: 36ch; margin: 0; font-size: clamp(1.1rem, 1.5vw, 1.55rem); line-height: 1.45; color: var(--muted); letter-spacing: -0.01em; }
.hl { color: var(--text); }
.ctas { display: flex; gap: 0.75rem; flex-wrap: wrap; }

.meta {
  margin-top: clamp(2.5rem, 5vw, 4.5rem);
  padding-top: 1.25rem; border-top: 1px solid var(--line);
  display: flex; gap: 1rem 2.5rem; flex-wrap: wrap; align-items: center;
  font-family: var(--f-mono); font-size: 0.78rem; color: var(--muted);
}
.meta .k { font-style: normal; color: var(--dim); margin-right: 0.6rem; }
.meta .k::after { content: ':'; }
.scroll { margin-left: auto; display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text); }
.scroll svg { width: 14px; height: 14px; animation: bob 2s ease-in-out infinite; }
@keyframes bob { 50% { transform: translateY(4px); } }

.marquee {
  border-block: 1px solid var(--line); overflow: hidden; padding: 1.1rem 0;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}
.track { display: flex; width: max-content; animation: scroll 50s linear infinite; }
.m-item { display: inline-flex; align-items: center; gap: 2.2rem; padding-right: 2.2rem; font-size: clamp(1rem, 1.4vw, 1.35rem); color: var(--muted); white-space: nowrap; letter-spacing: -0.01em; }
.m-item i { font-style: normal; color: var(--accent); font-size: 0.7em; }
@keyframes scroll { to { transform: translateX(-50%); } }

.stats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--line);
}
.stat { padding: clamp(2rem, 4vw, 3.5rem) clamp(1rem, 2vw, 2rem); border-left: 1px solid var(--line); }
.stat:first-child { border-left: 0; padding-left: 0; }
.v { font-size: clamp(2.6rem, 5vw, 5rem); font-weight: 500; letter-spacing: -0.05em; line-height: 1; }
.stat:last-child .v { color: var(--accent); }
.l { margin-top: 0.75rem; color: var(--muted); font-size: 0.92rem; max-width: 18ch; }

@media (max-width: 820px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .stat { padding-left: 1.25rem; }
  .stat:nth-child(odd) { border-left: 0; padding-left: 0; }
  .stat:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
  .scroll { display: none; }
}
@media (max-width: 560px) {
  .name { font-size: 19vw; }
  .ctas { width: 100%; }
  .ctas .btn { flex: 1; justify-content: center; }
}
</style>
