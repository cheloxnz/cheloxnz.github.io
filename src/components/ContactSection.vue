<script setup>
import { ref } from 'vue'
import { t } from '../i18n.js'
import { profile } from '../content.js'
import Icon from './Icon.vue'

const copied = ref(false)
const copy = async () => {
  try { await navigator.clipboard.writeText(profile.email) } catch {}
  copied.value = true
  setTimeout(() => (copied.value = false), 1800)
}
const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="section contact">
    <div class="glow" aria-hidden="true" />
    <div class="container">
      <span class="kicker" v-reveal>{{ t.contact.kicker }}</span>
      <h2 class="h-display title" v-reveal="80">
        {{ t.contact.title[0] }}<br />
        <span class="serif">{{ t.contact.title[1] }}</span><br />
        <span class="accent">{{ t.contact.title[2] }}</span>
      </h2>
      <p class="body" v-reveal="140">{{ t.contact.body }}</p>

      <div class="mail-row" v-reveal="180">
        <a :href="`mailto:${profile.email}`" class="mail">{{ profile.email }}<Icon name="arrow" /></a>
        <button class="copy" @click="copy" :aria-label="t.contact.copy">
          <Icon :name="copied ? 'check' : 'copy'" />
          <span>{{ copied ? t.contact.copied : t.contact.copy }}</span>
        </button>
      </div>

      <div class="links" v-reveal="220">
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="social"><Icon name="linkedin" />LinkedIn<Icon name="arrow" class="a" /></a>
        <a :href="profile.github" target="_blank" rel="noopener" class="social"><Icon name="github" />GitHub<Icon name="arrow" class="a" /></a>
        <a :href="profile.cv" target="_blank" rel="noopener" class="social"><Icon name="file" />{{ t.contact.cv }}<Icon name="arrow" class="a" /></a>
      </div>

      <footer class="foot">
        <div class="sig"><span class="serif">Marcelo</span> Del Valle</div>
        <div class="muted">© {{ year }} · {{ t.footer.rights }}</div>
        <div class="muted">{{ t.footer.built }}</div>
        <a href="#top" class="top" aria-label="Volver arriba">↑</a>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact { padding-bottom: 2rem; overflow: hidden; position: relative; }
.glow {
  position: absolute; left: 50%; bottom: -30vw; width: 90vw; height: 60vw; transform: translateX(-50%);
  background: radial-gradient(closest-side, rgba(212,255,58,.14), transparent);
  pointer-events: none;
}
.title { font-size: clamp(2.8rem, 8vw, 8.5rem); }
.body { color: var(--muted); max-width: 48ch; margin: 2rem 0 3rem; font-size: 1.05em; }

.mail-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; padding-bottom: 2rem; border-bottom: 1px solid var(--line); }
.mail {
  font-size: clamp(1.6rem, 4.6vw, 4.2rem); letter-spacing: -0.045em; font-weight: 500;
  display: inline-flex; align-items: center; gap: 0.3em;
  background: linear-gradient(currentColor, currentColor) 0 100% / 0 2px no-repeat;
  transition: background-size 0.6s var(--ease), color 0.3s;
  word-break: break-all;
}
.mail svg { width: 0.7em; height: 0.7em; flex: none; transition: transform 0.5s var(--ease); }
.mail:hover { color: var(--accent); background-size: 100% 2px; }
.mail:hover svg { transform: translate(4px, -4px); }
.copy {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.7rem 1.1rem; border-radius: 999px; border: 1px solid var(--line-2);
  font-size: 0.85rem; color: var(--muted); transition: color 0.3s, border-color 0.3s;
}
.copy svg { width: 16px; height: 16px; }
.copy:hover { color: var(--text); border-color: var(--text); }

.links { display: grid; grid-template-columns: repeat(3, 1fr); }
.social {
  display: flex; align-items: center; gap: 0.8rem;
  padding: 1.6rem 0; border-bottom: 1px solid var(--line);
  font-size: clamp(1.1rem, 1.6vw, 1.5rem); letter-spacing: -0.02em;
  transition: color 0.3s, padding 0.5s var(--ease);
}
.social + .social { padding-left: 1.5rem; border-left: 1px solid var(--line); }
.social svg { width: 22px; height: 22px; }
.social .a { margin-left: auto; margin-right: 1.5rem; width: 18px; height: 18px; color: var(--dim); transition: transform 0.5s var(--ease), color 0.3s; }
.social:hover { color: var(--accent); }
.social:hover .a { color: var(--accent); transform: translate(3px, -3px); }

.foot {
  margin-top: clamp(5rem, 10vw, 9rem);
  display: flex; align-items: center; gap: 1rem 2.5rem; flex-wrap: wrap;
  font-size: 0.82rem; padding-top: 1.5rem; border-top: 1px solid var(--line);
}
.sig { font-size: 1.15rem; letter-spacing: -0.02em; margin-right: auto; }
.top { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--line-2); display: grid; place-items: center; transition: background 0.3s, color 0.3s; }
.top:hover { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }

@media (max-width: 760px) {
  .links { grid-template-columns: 1fr; }
  .social + .social { padding-left: 0; border-left: 0; }
  .social .a { margin-right: 0; }
  .sig { width: 100%; }
}
</style>
