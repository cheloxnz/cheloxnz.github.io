<script setup>
import { t } from '../i18n.js'
import { stack } from '../content.js'

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}
</script>

<template>
  <section id="stack" class="section">
    <div class="container">
      <span class="kicker" v-reveal>{{ t.stackSec.kicker }}</span>
      <h2 class="h-section" v-reveal="80">{{ t.stackSec.title }}</h2>

      <div class="bento">
        <article class="card fe" @pointermove="spot" v-reveal="100">
          <header>
            <span class="idx">/fe</span>
            <h3>{{ t.stackSec.groups.frontend }}</h3>
          </header>
          <p class="note">{{ t.stackSec.frontendNote }}</p>
          <div class="big">
            <span class="serif">Vue</span><span class="x">×</span>React<span class="x">×</span>Angular
          </div>
          <div class="pills"><span v-for="s in stack.frontend" :key="s" class="pill">{{ s }}</span></div>
        </article>

        <article class="card" @pointermove="spot" v-reveal="160">
          <header><span class="idx">/be</span><h3>{{ t.stackSec.groups.backend }}</h3></header>
          <div class="pills"><span v-for="s in stack.backend" :key="s" class="pill">{{ s }}</span></div>
        </article>

        <article class="card" @pointermove="spot" v-reveal="220">
          <header><span class="idx">/ops</span><h3>{{ t.stackSec.groups.tools }}</h3></header>
          <div class="pills"><span v-for="s in stack.tools" :key="s" class="pill">{{ s }}</span></div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bento {
  margin-top: clamp(3rem, 6vw, 5rem);
  display: grid; gap: 1rem;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: auto auto;
}
.card {
  --x: 50%; --y: 50%;
  position: relative; overflow: hidden;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--line); border-radius: var(--r);
  background: var(--surface);
  display: flex; flex-direction: column; gap: 1.5rem;
  transition: border-color 0.4s;
}
.card::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(420px circle at var(--x) var(--y), rgba(212,255,58,.09), transparent 60%);
  opacity: 0; transition: opacity 0.4s;
}
.card:hover { border-color: var(--line-2); }
.card:hover::before { opacity: 1; }
.fe { grid-row: span 2; justify-content: space-between; }

header { display: flex; align-items: baseline; gap: 1rem; }
h3 { margin: 0; font-size: clamp(1.3rem, 2vw, 1.8rem); font-weight: 500; letter-spacing: -0.03em; }
.idx { font-family: var(--f-mono); font-size: 0.75rem; color: var(--accent); }
.note { margin: 0; color: var(--muted); max-width: 44ch; }
.big { font-size: clamp(2.4rem, 4.6vw, 5.2rem); line-height: 0.95; letter-spacing: -0.05em; font-weight: 500; }
.big .serif { color: var(--accent); }
.big .x { color: var(--dim); font-weight: 300; margin: 0 0.15em; font-size: 0.6em; vertical-align: 0.2em; }

.pills { display: flex; flex-wrap: wrap; gap: 0.5rem; position: relative; }
.pill {
  padding: 0.55rem 1rem; border-radius: 999px;
  background: var(--surface-2); border: 1px solid var(--line);
  font-size: 0.9rem; transition: border-color 0.3s, color 0.3s, transform 0.3s var(--ease);
}
.pill:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

@media (max-width: 900px) {
  .bento { grid-template-columns: 1fr; }
  .fe { grid-row: auto; }
}
</style>
