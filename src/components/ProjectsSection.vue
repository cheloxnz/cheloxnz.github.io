<script setup>
import { t } from '../i18n.js'
import { projects, profile } from '../content.js'
import Icon from './Icon.vue'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="head">
        <div>
          <span class="kicker" v-reveal>{{ t.projectsSec.kicker }}</span>
          <h2 class="h-section" v-reveal="80">{{ t.projectsSec.title }}</h2>
        </div>
        <a :href="profile.github" target="_blank" rel="noopener" class="btn btn-ghost" v-reveal="120">
          <Icon name="github" />{{ t.projectsSec.more }}
        </a>
      </div>

      <div class="grid">
        <a v-for="(p, i) in projects" :key="p.id" :href="p.repo" target="_blank" rel="noopener"
           class="card" :style="{ '--h': p.hue }" v-reveal="(i % 3) * 90">
          <div class="cover" aria-hidden="true">
            <div class="orb" />
            <div class="lines" />
            <span class="cover-title serif">{{ t.projectsSec.items[p.id].title }}</span>
            <span class="no">0{{ i + 1 }}</span>
          </div>
          <div class="body">
            <div class="row">
              <span class="type">{{ t.projectsSec.items[p.id].type }}</span>
              <span class="go"><Icon name="arrow" /></span>
            </div>
            <p>{{ t.projectsSec.items[p.id].desc }}</p>
            <div class="tags"><span v-for="tech in p.tech" :key="tech" class="chip">{{ tech }}</span></div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; flex-wrap: wrap; margin-bottom: clamp(3rem, 6vw, 5rem); }
.head .btn svg { width: 18px; height: 18px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }

.card {
  display: flex; flex-direction: column;
  border: 1px solid var(--line); border-radius: var(--r);
  background: var(--surface); overflow: hidden;
  transition: transform 0.6s var(--ease), border-color 0.4s;
}
.card:hover { transform: translateY(-6px); border-color: var(--line-2); }

.cover {
  position: relative; aspect-ratio: 4 / 3; overflow: hidden;
  background:
    radial-gradient(80% 90% at 85% 10%, hsl(var(--h) 90% 60% / .35), transparent 60%),
    linear-gradient(160deg, hsl(var(--h) 30% 12%), #0b0c0f 70%);
  border-bottom: 1px solid var(--line);
}
.orb {
  position: absolute; width: 55%; aspect-ratio: 1; right: -8%; top: -12%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, hsl(var(--h) 100% 75% / .9), hsl(var(--h) 80% 45% / .3) 45%, transparent 70%);
  filter: blur(2px);
  transition: transform 0.9s var(--ease);
}
.card:hover .orb { transform: translate(-12%, 10%) scale(1.12); }
.lines {
  position: absolute; inset: 0;
  background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 48px);
  mask-image: linear-gradient(180deg, transparent, #000);
  -webkit-mask-image: linear-gradient(180deg, transparent, #000);
}
.cover-title {
  position: absolute; left: 1.25rem; bottom: 0.9rem; right: 1.25rem;
  font-size: clamp(2rem, 3.2vw, 3.2rem); line-height: 1; color: #fff; letter-spacing: -0.03em;
  transition: transform 0.6s var(--ease);
}
.card:hover .cover-title { transform: translateY(-4px); }
.no { position: absolute; top: 1rem; left: 1.25rem; font-family: var(--f-mono); font-size: 0.72rem; color: rgba(255,255,255,.6); }

.body { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.9rem; flex: 1; }
.row { display: flex; justify-content: space-between; align-items: center; }
.type { font-family: var(--f-mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: hsl(var(--h) 90% 70%); }
.go { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--line-2); display: grid; place-items: center; transition: background 0.3s, color 0.3s, transform 0.5s var(--ease); }
.go svg { width: 16px; height: 16px; }
.card:hover .go { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); transform: rotate(45deg); }
h3 { margin: 0.2rem 0 0; font-size: 1.35rem; font-weight: 500; letter-spacing: -0.03em; }
p { margin: 0; color: var(--muted); font-size: 0.95rem; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.8rem; }

@media (max-width: 1080px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
</style>
