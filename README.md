# Santiago Contreras — Portafolio

SPA en React + Vite + Tailwind CSS + Framer Motion, con dirección de arte
"Ola de Kanagawa nocturna" (fondos azul marino, acentos cian, glassmorphism,
separadores en ola).

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build   # genera ./dist
npm run preview # sirve el build localmente
```

## Despliegue en GitHub Pages

El repo incluye `.github/workflows/deploy.yml`, que hace build y publica
`dist/` en GitHub Pages automáticamente en cada push a `main`.

Pasos para activarlo:

1. Crea el repositorio en GitHub y sube este código (`git remote add origin <url>`, `git push -u origin main`).
2. En GitHub → **Settings → Pages → Source**, selecciona **GitHub Actions**.
3. El primer push a `main` disparará el workflow y publicará el sitio en
   `https://<tu-usuario>.github.io/<repo>/`.

`vite.config.js` usa `base: './'` (rutas relativas), así que funciona sin
importar el nombre del repositorio.

## Seguridad

- CSP estricta definida en `index.html` (sin scripts/estilos de orígenes no
  autorizados, sin `unsafe-eval`).
- Sin renderizado de HTML no confiable (`dangerouslySetInnerHTML`) en ningún
  componente.
- Todo el contenido es texto estático embebido en `src/data/profile.js`, sin
  entradas de usuario ni fetch a servicios externos.
