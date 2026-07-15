/**
 * images.js — Config central de imagens do sams.sh
 * ─────────────────────────────────────────────────
 * Todas as imagens são importadas via import estático do Vite,
 * que processa os arquivos em build time (hash de cache, URL correta).
 *
 * NÃO use caminhos relativos em JSON para src de imagens —
 * JSON não é processado pelo Vite, o browser não resolve ../img/.
 *
 * Como trocar uma foto:
 *   1. Coloque o arquivo em src/img/
 *   2. Importe aqui em cima
 *   3. Atribua ao slot correspondente
 * ─────────────────────────────────────────────────
 */

// ── hero & about ──────────────────────────────────────────────
import editorialSamara    from '../img/editorial-samara-2.png'
import samaraPerfilLight  from '../img/samara-perfil-light-2.jpg'
import samaraPerfilDark   from '../img/samara-perfil-dark.png'
import setupCode          from '../img/setup-code.jpg'

// cin-ufpe
import samaraCin2 from '../img/cin-ufpe/samara-cin-2.jpg'
import samaraCin7 from '../img/cin-ufpe/samara-cin-7.jpg'
import samaraCin8 from '../img/cin-ufpe/samara-cin-8.jpg'
import studyCin1  from '../img/cin-ufpe/study-cin-1.jpg'
import pcCin1     from '../img/cin-ufpe/pc-cin-1.jpg'
import pcCin3     from '../img/cin-ufpe/pc-cin-3.jpg'

// cloudbasics
import cb1 from '../img/cloudbasics/20250404_155232.jpg'
import cb2 from '../img/cloudbasics/20250425_152153.jpg'

// cbs-soft
import cbsSoft1 from '../img/cbs-soft/IMG-20250924-WA0008.jpg'
import cbsSoft2 from '../img/cbs-soft/IMG-20250924-WA0032.jpg'

// lobby-e
// import lobbyE1 from '../img/lobby-e/20260512_142512.heic'


// ════════════════════════════════════════════════════════════════
// HERO  (/  →  Home.jsx → hero-photo-wrap)
// Troque `src` para outra variável importada acima pra mudar a foto.
// ════════════════════════════════════════════════════════════════
export const heroImage = {
  src: editorialSamara,
  alt: 'Samara — retrato editorial',
  pos: 'top center',
}


// ════════════════════════════════════════════════════════════════
// ABOUT  (/about  →  About.jsx)
// ════════════════════════════════════════════════════════════════

// Foto principal — sidebar direita, aspect 3/4
export const aboutPhoto = {
  src: samaraPerfilLight,
  alt: 'Samara Silvia Sabino',
  pos: 'center top',
}

// Galeria de contexto (setup, ambiente de trabalho, CIn)
export const aboutGallery = [
  { src: setupCode, alt: 'Setup de código — mesa de trabalho', pos: 'center center' },
  { src: studyCin1, alt: 'Sessão de estudo no CIn/UFPE',       pos: 'center center' },
]


// ════════════════════════════════════════════════════════════════
// PROJETOS  (ProjectDetail.jsx  →  cada projeto tem seu slot)
// ════════════════════════════════════════════════════════════════
export const projectImages = {
  'summa-sh': [
    // Ainda sem screenshots — coloque em src/img/summa/ quando tiver
    // { src: summa1, alt: 'Summa.sh — módulo Farol', pos: 'top left' },
  ],

  'atelier-sh': [
    { src: cbsSoft1, alt: 'Atelier.sh — avaliação em sala', pos: 'center center' },
    { src: cbsSoft2, alt: 'Atelier.sh — contexto de uso',   pos: 'center center' },
  ],

  'cita-sh': [
    // Sem screenshots ainda
  ],

  'tabletop': [
    // Sem screenshots ainda
  ],

  // 'lobby-e': [
  //   { src: lobbyE1, alt: 'L0bby-E — evento em andamento', pos: 'center center' },
  // ],

  'log-pose': [
    // Sem screenshots ainda
  ],
}


// ════════════════════════════════════════════════════════════════
// CLOUDBASICS  (seção de carreira no About, badge FREELANCE)
// ════════════════════════════════════════════════════════════════
export const cloudbasicsImages = [
  { src: cb1, alt: 'CloudBasics Academy — sessão',    pos: 'center center' },
  { src: cb2, alt: 'CloudBasics Academy — ambiente',  pos: 'center center' },
]


// ════════════════════════════════════════════════════════════════
// OG / SEO  (meta tags abertas — public/og-image.jpg)
// ════════════════════════════════════════════════════════════════
export const ogImage = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'sams.sh — Frontend Developer & UX Designer',
}