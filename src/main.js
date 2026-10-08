import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import './styles.css'

const app = createApp(App)

// v-reveal: aparece al entrar en viewport. Uso: v-reveal o v-reveal="120" (delay ms)
const io = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  : null

app.directive('reveal', {
  mounted(el, { value }) {
    el.classList.add('reveal')
    if (value) el.style.setProperty('--d', `${value}ms`)
    io ? io.observe(el) : el.classList.add('is-in')
  },
  unmounted(el) { io && io.unobserve(el) },
})

app.mount('#app')
