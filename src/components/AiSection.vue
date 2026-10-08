<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { t, lang } from '../i18n.js'
import { stack } from '../content.js'
import Icon from './Icon.vue'

const typed = ref('')
const shown = ref(0)
const root = ref(null)
let timers = [], started = false, io

const clear = () => { timers.forEach(clearTimeout); timers = [] }
const run = () => {
  clear(); typed.value = ''; shown.value = 0
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const { prompt, lines } = t.value.aiSec.terminal
  if (reduce) { typed.value = prompt; shown.value = lines.length; return }
  let delay = 300
  for (let i = 1; i <= prompt.length; i++) {
    delay += 22 + Math.random() * 30
    timers.push(setTimeout(() => { typed.value = prompt.slice(0, i) }, delay))
  }
  lines.forEach((_, i) => { delay += 650; timers.push(setTimeout(() => { shown.value = i + 1 }, delay)) })
  timers.push(setTimeout(run, delay + 5000))
}

onMounted(() => {
  io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) { started = true; run() } }, { threshold: 0.3 })
  io.observe(root.value)
})
watch(lang, () => { if (started) run() })
onBeforeUnmount(() => { clear(); io && io.disconnect() })
</script>

<template>
  <section id="ai" class="section ai">
    <div class="container grid">
      <div>
        <span class="kicker" v-reveal>{{ t.aiSec.kicker }}</span>
        <h2 class="h-section" v-reveal="80">
          {{ t.aiSec.title[0] }}<br />{{ t.aiSec.title[1] }}<br />
          <span class="serif accent">{{ t.aiSec.title[2] }}</span>
        </h2>
        <p class="body" v-reveal="140">{{ t.aiSec.body }}</p>
        <ul class="points">
          <li v-for="(p, i) in t.aiSec.points" :key="p" v-reveal="180 + i * 60"><Icon name="spark" />{{ p }}</li>
        </ul>
      </div>

      <div class="side" v-reveal="160">
        <div class="tools">
          <span v-for="s in stack.ai" :key="s" class="tool">{{ s }}</span>
        </div>

        <div ref="root" class="term" role="img" :aria-label="t.aiSec.terminal.prompt">
          <div class="bar"><i /><i /><i /><span>~/workspace — ai-session</span></div>
          <div class="screen">
            <div class="prompt"><span class="accent">❯</span> {{ typed }}<span class="caret" /></div>
            <div v-for="(l, i) in t.aiSec.terminal.lines.slice(0, shown)" :key="l" class="out" :class="{ ok: i === t.aiSec.terminal.lines.length - 1 }">
              <span class="pre">{{ i === t.aiSec.terminal.lines.length - 1 ? '✓' : '›' }}</span>{{ l }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ai { background: linear-gradient(180deg, transparent, var(--bg-2) 20%, var(--bg-2) 80%, transparent); }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 7rem); align-items: center; }
.body { color: var(--muted); max-width: 52ch; margin: 2rem 0; font-size: 1.05em; }
.points { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.85rem; }
.points li { display: flex; gap: 0.8rem; align-items: flex-start; }
.points svg { width: 18px; height: 18px; color: var(--accent); flex: none; margin-top: 0.25em; }

.tools { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
.tool {
  padding: 0.6rem 1.05rem; border-radius: 12px;
  border: 1px solid var(--line-2);
  background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.01));
  font-size: 0.9rem; font-weight: 500;
}
.tool:first-child { border-color: rgba(212,255,58,.4); color: var(--accent); }

.term {
  border-radius: var(--r); overflow: hidden;
  border: 1px solid var(--line-2);
  background: #0b0c0f;
  box-shadow: 0 40px 120px -40px rgba(212,255,58,.18), 0 0 0 1px rgba(0,0,0,.4);
}
.bar { display: flex; align-items: center; gap: 7px; padding: 0.9rem 1rem; border-bottom: 1px solid var(--line); background: rgba(255,255,255,.02); }
.bar i { width: 11px; height: 11px; border-radius: 50%; background: #2a2d33; }
.bar span { margin-left: auto; margin-right: auto; font-family: var(--f-mono); font-size: 0.72rem; color: var(--dim); transform: translateX(-20px); }
.screen { padding: 1.5rem; min-height: 290px; font-family: var(--f-mono); font-size: clamp(0.8rem, 0.9vw, 0.92rem); line-height: 1.75; }
.prompt { color: var(--text); margin-bottom: 1rem; }
.caret { display: inline-block; width: 8px; height: 1.1em; background: var(--accent); vertical-align: -0.18em; margin-left: 2px; animation: cblink 1s steps(1) infinite; }
@keyframes cblink { 50% { opacity: 0; } }
.out { color: var(--muted); animation: fade 0.4s var(--ease) both; }
.out .pre { color: var(--dim); margin-right: 0.6rem; }
.out.ok { color: var(--accent); }
.out.ok .pre { color: var(--accent); }
@keyframes fade { from { opacity: 0; transform: translateY(4px); } }

@media (max-width: 960px) { .grid { grid-template-columns: 1fr; } }
</style>
