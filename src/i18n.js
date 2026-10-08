import { ref, computed, watchEffect } from 'vue'
import { content } from './content.js'

const KEY = 'md-lang'

function initial() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {}
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const lang = ref(initial())

export const t = computed(() => content[lang.value])

export function toggleLang() {
  lang.value = lang.value === 'es' ? 'en' : 'es'
}

watchEffect(() => {
  document.documentElement.lang = lang.value
  try { localStorage.setItem(KEY, lang.value) } catch {}
})
