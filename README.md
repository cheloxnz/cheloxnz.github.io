# cheloxnz.github.io

Portfolio personal de **Marcelo Del Valle** — Vue 3 + Vite, bilingüe ES/EN, deploy automático a GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
```

## Editar contenido

Todo el texto (ES y EN), experiencia, stack y proyectos está en **`src/content.js`**.
No hace falta tocar los componentes para cambiar contenido.

- **CV:** copiá tu PDF a `public/cv.pdf`.
- **Proyectos:** editá el array `projectsBase` (link al repo, tecnologías y `hue` = color de la tarjeta 0–360).

## Deploy (GitHub Pages)

1. Creá un repo **público** llamado exactamente `cheloxnz.github.io`.
2. Subí el proyecto a la rama `main`.
3. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica en https://cheloxnz.github.io/
