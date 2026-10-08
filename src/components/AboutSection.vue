<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <section id="about" class="section">
    <div class="container grid">
      <div class="left">
        <span class="kicker" v-reveal>{{ t.about.kicker }}</span>
        <h2 class="h-display" v-reveal="80">
          {{ t.about.title[0] }}<br />
          <span class="serif">{{ t.about.title[1] }}</span><br />
          {{ t.about.title[2] }}
        </h2>
      </div>

      <div class="right">
        <div class="portrait" v-reveal="120" aria-hidden="true">
          <div class="mono serif">MD</div>
          <div class="ring" />
          <span class="tag">Full Stack · Vue</span>
        </div>
        <p class="p big" v-reveal="160">{{ t.about.p1 }}</p>
        <p class="p" v-reveal="200">{{ t.about.p2 }}</p>
        <p class="p" v-reveal="240">{{ t.about.p3 }}</p>

        <ul class="values">
          <li v-for="(v, i) in t.about.values" :key="v.t" v-reveal="280 + i * 70">
            <span class="n">0{{ i + 1 }}</span>
            <strong>{{ v.t }}</strong>
            <span class="muted">{{ v.d }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: clamp(3rem, 7vw, 8rem); align-items: start; }
.left { position: sticky; top: 140px; }
.p { color: var(--muted); margin: 0 0 1.4rem; max-width: 58ch; }
.p.big { color: var(--text); font-size: clamp(1.15rem, 1.5vw, 1.45rem); line-height: 1.5; letter-spacing: -0.01em; }

.portrait {
  position: relative; aspect-ratio: 16 / 10; margin-bottom: 2.5rem;
  border-radius: var(--r); overflow: hidden;
  border: 1px solid var(--line);
  background:
    radial-gradient(120% 80% at 80% 0%, rgba(212,255,58,.16), transparent 55%),
    radial-gradient(90% 70% at 0% 100%, rgba(64,150,255,.14), transparent 60%),
    var(--surface);
  display: grid; place-items: center;
}
.mono { font-size: clamp(5rem, 11vw, 9rem); line-height: 1; color: var(--text); letter-spacing: -0.04em; position: relative; z-index: 1; }
.ring { position: absolute; width: 62%; aspect-ratio: 1; border-radius: 50%; border: 1px dashed var(--line-2); animation: spin 40s linear infinite; }
.ring::after { content: ''; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 20px var(--accent); }
@keyframes spin { to { transform: rotate(360deg); } }
.tag { position: absolute; left: 1rem; bottom: 1rem; font-family: var(--f-mono); font-size: 0.72rem; color: var(--muted); padding: 0.35rem 0.7rem; border: 1px solid var(--line-2); border-radius: 999px; background: rgba(0,0,0,.3); backdrop-filter: blur(6px); }

.values { list-style: none; padding: 0; margin: 2.5rem 0 0; border-top: 1px solid var(--line); }
.values li { display: grid; grid-template-columns: 3rem 9rem 1fr; gap: 1rem; padding: 1.15rem 0; border-bottom: 1px solid var(--line); align-items: baseline; }
.values .n { font-family: var(--f-mono); font-size: 0.75rem; color: var(--accent); }
.values strong { font-weight: 500; }

@media (max-width: 960px) {
  .grid { grid-template-columns: 1fr; }
  .left { position: static; }
}
@media (max-width: 560px) {
  .values li { grid-template-columns: 2.2rem 1fr; }
  .values li .muted { grid-column: 2; }
}
</style>
