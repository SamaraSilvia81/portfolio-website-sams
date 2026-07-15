# sams.sh — Portfolio

Noir editorial portfolio with terminal aesthetics. React + Vite.

## Quick Start

```bash
yarn install
yarn dev
```

Opens at `http://localhost:3000`.

## Structure

```
src/
├── components/     # Navbar, Footer, UI primitives
├── data/           # Design tokens, project data
├── hooks/          # useScrollSpy, useFadeIn
├── pages/          # Home, Projects, ProjectDetail, About, Contact
├── styles/         # Global CSS (textures, animations, reset)
└── assets/         # Images (add your photo here)
```

## Adding Your Photo

1. Drop your photo in `public/photo.jpg`
2. In `src/pages/About.jsx`, replace the placeholder div with:
   ```jsx
   <img src="/photo.jpg" alt="Sams" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(80%) contrast(1.1)' }} />
   ```

## Next Steps (TODO)

- [ ] Dark mode sidebar toggle
- [ ] PT-BR / EN language switch
- [ ] Connect contact form to Formspree or Supabase
- [ ] Add real project screenshots
- [ ] Blog / Notes section (MDX)
- [ ] Analytics (Plausible or Umami)

## Deploy

```bash
yarn build
# Deploy `dist/` to Vercel
```

## License

Personal portfolio — not for redistribution.
