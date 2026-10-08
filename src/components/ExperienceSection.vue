<script setup>
import { t } from '../i18n.js'
import { experience } from '../content.js'
</script>

<template>
  <section id="experience" class="section exp">
    <div class="container">
      <div class="head">
        <span class="kicker" v-reveal>{{ t.experience.kicker }}</span>
        <h2 class="h-section" v-reveal="80">{{ t.experience.title }} <span class="serif muted">—</span></h2>
      </div>

      <ol class="list">
        <li v-for="(job, i) in experience" :key="job.id" class="item" v-reveal="i * 80">
          <div class="years">
            <span>{{ job.from }}</span>
            <span class="dash" />
            <span :class="{ now: !job.to }">{{ job.to || t.experience.present }}</span>
          </div>
          <div class="main">
            <h3 class="company">{{ job.company }}<span v-if="!job.to" class="live">●</span></h3>
            <div class="role">{{ t.experience.items[job.id].role }} <span class="muted">· {{ t.experience.items[job.id].place }}</span></div>
          </div>
          <div class="detail">
            <p>{{ t.experience.items[job.id].desc }}</p>
            <div class="tags"><span v-for="tag in job.tags" :key="tag" class="chip">{{ tag }}</span></div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; flex-direction: column; margin-bottom: clamp(3rem, 6vw, 5rem); }
.list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--line); }
.item {
  position: relative;
  display: grid; grid-template-columns: 12rem 1.1fr 1.4fr; gap: 2rem;
  padding: clamp(1.75rem, 3vw, 2.75rem) 0;
  border-bottom: 1px solid var(--line);
  isolation: isolate;
}
.item::before {
  content: ''; position: absolute; inset: 0 calc(var(--gutter) * -0.5); z-index: -1;
  border-radius: 16px; background: var(--surface);
  opacity: 0; transform: scaleY(0.92);
  transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);
}
.item:hover::before { opacity: 1; transform: none; }

.years { display: flex; align-items: center; gap: 0.6rem; font-family: var(--f-mono); font-size: 0.82rem; color: var(--muted); padding-top: 0.6rem; }
.dash { width: 18px; height: 1px; background: var(--dim); }
.now { color: var(--accent); }

.company { margin: 0; font-size: clamp(1.8rem, 3.2vw, 3rem); font-weight: 500; letter-spacing: -0.04em; line-height: 1.05; display: flex; align-items: center; gap: 0.6rem; transition: transform 0.5s var(--ease); }
.item:hover .company { transform: translateX(6px); }
.live { font-size: 0.6rem; color: var(--accent); animation: blink 1.6s ease-in-out infinite; }
@keyframes blink { 50% { opacity: 0.25; } }
.role { margin-top: 0.5rem; font-size: 1rem; }

.detail p { margin: 0.4rem 0 1rem; color: var(--muted); max-width: 56ch; }
.tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }

@media (max-width: 960px) {
  .item { grid-template-columns: 1fr; gap: 0.75rem; }
  .years { padding-top: 0; }
  .item::before { display: none; }
}
</style>
