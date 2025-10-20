import './style.css'
const BASE = import.meta.env.BASE_URL;
const path = (p) => `${BASE}${String(p).replace(/^\/+/, '')}`;

// ---------- HEADER + FOOTER ----------
const layoutTop = `
<header class="nav">
  <nav class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
    <a href="#" class="font-semibold tracking-tight">Eduardo Kostko</a>

    <button id="menuBtn" class="md:hidden p-2 border border-neutral-300 rounded-lg" aria-label="Abrir menú">☰</button>

    <ul class="hidden md:flex items-center gap-6">
      <li><a href="#fotografia" class="nav-link">Fotografía Comercial</a></li>
      <li><a href="#diseno" class="nav-link">Diseño Visual</a></li>
      <li><a href="#sobre-mi" class="nav-link">Sobre mí</a></li>
      <li><a href="#contacto" class="nav-link">Contacto</a></li>
    </ul>
  </nav>
  <div id="mobileMenu" class="md:hidden hidden border-t border-neutral-200">
    <ul class="px-4 py-3 space-y-2 text-sm">
      <li><a href="#fotografia" class="block py-2 nav-link">Fotografía Comercial</a>
      <li><a href="#diseno" class="block py-2 nav-link">Diseño Visual</a></li>
      <li><a href="#sobre-mi" class="block py-2 nav-link">Sobre mí</a></li>
      <li><a href="#contacto" class="block py-2 nav-link">Contacto</a></li>
    </ul>
  </div>
</header>
`;

const layoutBottom = `
<footer class="footer">
  <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
    <p class="text-center sm:text-left">
      © <span id="y"></span> Eduardo Kostko
    </p>

    <div class="flex gap-5 items-center">
      <!-- Instagram -->
      <a href="https://www.instagram.com/eduarkostko" target="_blank" rel="noopener noreferrer"
         class="flex items-center gap-2 link-accent group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.8" stroke="currentColor"
             class="w-5 h-5 group-hover:opacity-80">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25Z" />
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 11.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" />
        </svg>
        <span class="hidden sm:inline">Instagram</span>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/eduardokostko" target="_blank" rel="noopener noreferrer"
         class="flex items-center gap-2 link-accent group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.8" stroke="currentColor"
             class="w-5 h-5 group-hover:opacity-80">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M2 9h4v12H2zM4 5a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z" />
        </svg>
        <span class="hidden sm:inline">LinkedIn</span>
      </a>

      <!-- Behance -->
      <a href="https://www.behance.net/eduardokostko" target="_blank" rel="noopener noreferrer"
         class="flex items-center gap-2 link-accent group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.8" stroke="currentColor"
             class="w-5 h-5 group-hover:opacity-80">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M8 11h1.5a2.5 2.5 0 1 0 0-5H8v5Zm0 0v6h2a3 3 0 0 0 0-6H8Zm8-5h5m-2.5 4a3.5 3.5 0 0 1 3.5 3.5V17a3 3 0 0 1-3 3h-3v-3h3v-2h-3a3 3 0 0 1 0-6Z" />
        </svg>
        <span class="hidden sm:inline">Behance</span>
      </a>
    </div>
  </div>
</footer>
`;

// ---------- MAIN (Hero + Fotografía placeholder de diseño + anclas) ----------
document.querySelector('#app').innerHTML = `
  ${layoutTop}

  <main class="bg-white text-gray-800">
    <!-- HERO -->
    <section class="max-w-6xl mx-auto px-4 pt-20 pb-12 grid md:grid-cols-2 gap-10 items-center">
      <div class="space-y-6">
        <h1 class="font-display text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
  Fotografía & Diseño
</h1>
        <p class="text-neutral-600 text-lg max-w-prose leading-relaxed">
          Portafolio minimalista orientado a marca, producto y social media. Trabajo integral: concepto, dirección,
          producción y retoque.
        </p>
        <div class="flex gap-3">
          <a href="#fotografia" class="btn btn-primary">
            Ver Fotografía
          </a>
          <a href="#diseno" class="btn btn-outline">
            Ver Diseño
          </a>
        </div>
      </div>
      <div>
        <img src="${path('hero.jpg')}" class="w-full rounded-2xl shadow-sm" />
      </div>
    </section>

    <!-- FOTOGRAFÍA COMERCIAL -->
    <section id="fotografia" class="max-w-6xl mx-auto px-4 py-16 border-t border-neutral-100">
      <div class="flex items-end justify-between gap-4 mb-6">
        <h2 class="font-display text-3xl font-semibold">Fotografía Comercial</h2>
        <div class="text-sm text-neutral-500">Retrato · Eventos · Mascotas & Animales · Producto · Autor</div>
      </div>

      <!-- Filtros en orden profesional -->
      <div class="flex flex-wrap gap-2 mb-6" id="filtros">
        <button data-filter="all" class="filter-btn active">Todos</button>
        <button data-filter="retrato"  class="filter-btn">Retrato / Editorial</button>
        <button data-filter="eventos"  class="filter-btn">Eventos</button>
        <button data-filter="animales" class="filter-btn">Mascotas & Animales</button>
        <button data-filter="producto" class="filter-btn">Producto / Still life</button>
        <button data-filter="autor"    class="filter-btn">Proyecto Personal / Autor</button>
      </div>

      <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4" id="galeria"></div>
<div class="flex justify-center mt-10">
  <button id="loadMore"
          class="btn btn-outline px-10 py-3 rounded-2xl text-sm hover:bg-neutral-120 transition">
    Cargar más
  </button>
</div>
    </section>

       <section id="diseno" class="max-w-6xl mx-auto px-4 py-16 border-t border-neutral-100">
      <div class="flex items-end justify-between gap-4 mb-6">
        <h2 class="font-display text-3xl font-semibold">Diseño Visual</h2>
        <div class="text-sm text-neutral-500">Social Media · Impresos</div>
      </div>

      <!-- Filtros -->
      <div class="flex flex-wrap gap-2 mb-6" id="filtrosDis">
        <button data-filter="all" class="filter-btn active">
          Todos
        </button>
        <button data-filter="social" class="filter-btn">
          Social Media
        </button>
        <button data-filter="impresos" class="filter-btn">
          Impresos
        </button>
      </div>

      <!-- Grid de tarjetas -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gridDis"></div>
    </section>

        <section id="sobre-mi" class="max-w-6xl mx-auto px-4 py-16 border-t border-neutral-100">
      <div class="grid md:grid-cols-5 gap-8 items-start">
        <!-- Foto -->
        <div class="md:col-span-2">
          <img src="${path('me.jpg')}" alt="Eduardo Kostko — Fotógrafo y Diseñador Visual"
          class="w-full rounded-2xl border border-[--border] object-cover aspect-[4/5]" />
        </div>

        <!-- Texto -->
        <div class="md:col-span-3 space-y-6">
          <header>
            <h2 class="font-display text-3xl font-semibold">Sobre mí</h2>
            <p class="mt-2 text-neutral-600 max-w-prose">
              Soy <span class="font-medium">Eduardo Kostko</span>, fotógrafo y diseñador visual.
              Creo imágenes y piezas que conectan con la identidad de marca: desde producto y retrato,
              hasta contenidos para redes e impresos. Enfoque minimalista, dirección clara y entrega profesional.
            </p>
          </header>

          <!-- Servicios -->
          <div>
            <h3 class="text-sm font-medium text-neutral-700">Servicios</h3>
            <ul class="mt-3 flex flex-wrap gap-2 text-sm">
              <li class="chip">Fotografía de producto</li>
              <li class="chip">Retrato / Editorial</li>
              <li class="chip">Eventos</li>
              <li class="chip">Social Media</li>
              <li class="chip">Impresos / Branding</li>
            </ul>
          </div>

          <!-- Herramientas -->
          <div>
            <h3 class="text-sm font-medium text-neutral-700">Herramientas</h3>
            <ul class="mt-3 flex flex-wrap gap-2 text-sm text-neutral-700">
              <li class="chip">Lightroom</li>
              <li class="chip">Photoshop</li>
              <li class="chip">Illustrator</li>
              <li class="chip">Figma</li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3">
            <a href="https://wa.me/573042082545?text=Hola%20Eduardo,%20vi%20tu%20portafolio%20y%20me%20gustaría%20cotizar%20un%20proyecto."
               target="_blank"
               class="btn btn-primary">
              Escribirme por WhatsApp
            </a>
            <a href="mailto:eduardokostko97@gmail.com"
               class="btn btn-outline">
              Enviar correo
            </a>
            <a href="/cv.pdf"
               class="btn btn-outline" download>
              Descargar CV
            </a>
          </div>
    </section>

        <section id="contacto" class="max-w-6xl mx-auto px-4 py-16 border-t border-neutral-100">
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Texto/CTAs -->
        <div class="space-y-6">
          <h2 class="font-display text-3xl font-semibold">Contacto</h2>
          <p class="text-neutral-600">
            Cuéntame brevemente tu proyecto (objetivo, plazo y referencia visual si tienes).
            Te respondo con propuesta y presupuesto.
          </p>

          <div class="flex flex-wrap gap-3">
            <a href="https://wa.me/573042082545?text=Hola%20Eduardo,%20vi%20tu%20portafolio%20y%20me%20gustaría%20cotizar%20un%20proyecto."
               target="_blank"
               class="btn btn-primary">
              WhatsApp
            </a>
            <a href="mailto:eduardokostko97@gmail.com?subject=Consulta%20portafolio&body=Hola%20Eduardo,%20..."
               class="btn btn-outline">
              Enviar correo
            </a>
          </div>

          <div class="text-sm text-neutral-500">
            También en IG/LinkedIn/Behance (links en el pie).
          </div>
        </div>

        <!-- Formulario -->
        <div>
          <form id="contactForm"
                action="https://formsubmit.co/eduardokostko97@gmail.com"
                method="POST"
                class="space-y-4">

            <!-- ajustes formsubmit -->
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_subject" value="Nueva consulta desde el portafolio">
            <!-- redirigir a una gracias simple (luego la creamos) -->
            <input type="hidden" name="_next" value="https://example.com/gracias">

            <!-- honeypot anti-spam -->
            <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off">

            <div>
              <label class="block text-sm mb-1">Nombre</label>
              <input name="nombre" type="text" required
                     class="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                     placeholder="Tu nombre completo">
            </div>

            <div>
              <label class="block text-sm mb-1">Email</label>
              <input name="email" type="email" required
                     class="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                     placeholder="tucorreo@dominio.com">
            </div>

            <div>
              <label class="block text-sm mb-1">Asunto</label>
              <input name="asunto" type="text"
                     class="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                     placeholder="Ej.: Sesión de producto / Identidad visual">
            </div>

            <div>
              <label class="block text-sm mb-1">Mensaje</label>
              <textarea name="mensaje" required rows="5"
                        class="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                        placeholder="Breve descripción, objetivos, plazos, referencias..."></textarea>
            </div>

            <label class="flex items-start gap-2 text-sm text-neutral-700">
              <input id="consent" type="checkbox" class="mt-1">
              Acepto que me contactes por los datos que envío.
            </label>

            <button id="sendBtn" type="submit"
                    class="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
              Enviar
            </button>

            <p id="formMsg" class="text-sm mt-2"></p>
          </form>
        </div>
      </div>
    </section>
  </main>

  ${layoutBottom}
`;

// Año footer
document.getElementById('y').textContent = new Date().getFullYear();

// Menú móvil
const btn = document.getElementById('menuBtn');
const mobile = document.getElementById('mobileMenu');
btn?.addEventListener('click', () => mobile.classList.toggle('hidden'));

// ---------- DATA FOTOGRAFÍA (Retrato 26 + resto ejemplos) ----------
const USE_OPT = true; // pon en true cuando tengas ret-XX-1200/2400
const RETRATO_COUNT = 26;
const retratoItems = Array.from({ length: RETRATO_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`fotos/retrato/ret-${n}-1200.jpg`);
  const gridWebp = path(`fotos/retrato/ret-${n}-1200.webp`);
  const fullJpg  = path(`fotos/retrato/ret-${n}-2400.jpg`);
  const fullWebp = path(`fotos/retrato/ret-${n}-2400.webp`);
  const baseJpg  = path(`fotos/retrato/ret-${n}.jpg`);
  return {
    src: USE_OPT ? gridJpg : baseJpg,
    srcWebp: USE_OPT ? gridWebp : null,
    full: USE_OPT ? fullJpg : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    alt: `Retrato editorial ${i + 1}`,
    cat: 'retrato',
  };
});

// ---- Eventos ----
const EVENTOS_COUNT = 14; // ajusta a tu número real

const eventosItems = Array.from({ length: EVENTOS_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`fotos/eventos/eve-${n}-1200.jpg`);
  const gridWebp = path(`fotos/eventos/eve-${n}-1200.webp`);
  const fullJpg  = path(`fotos/eventos/eve-${n}-2400.jpg`);
  const fullWebp = path(`fotos/eventos/eve-${n}-2400.webp`);
  const baseJpg  = path(`fotos/eventos/eve-${n}.jpg`);
  return {
    src:      USE_OPT ? gridJpg  : baseJpg,
    srcWebp:  USE_OPT ? gridWebp : null,
    full:     USE_OPT ? fullJpg  : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    alt: `Evento ${i + 1}`,
    cat: 'eventos',
  };
});

// ---- Animales ----
const ANIMALES_COUNT = 4;

const animalesItems = Array.from({ length: ANIMALES_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`fotos/animales/ani-${n}-1200.jpg`);
  const gridWebp = path(`fotos/animales/ani-${n}-1200.webp`);
  const fullJpg  = path(`fotos/animales/ani-${n}-2400.jpg`);
  const fullWebp = path(`fotos/animales/ani-${n}-2400.webp`);
  const baseJpg  = path(`fotos/animales/ani-${n}.jpg`);
  return {
    src:      USE_OPT ? gridJpg  : baseJpg,
    srcWebp:  USE_OPT ? gridWebp : null,
    full:     USE_OPT ? fullJpg  : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    alt: `Animales ${i + 1}`,
    cat: 'animales',
  };
});

// ---- Producto ----
const PRODUCTO_COUNT = 3; // ajusta a tu número real

const productoItems = Array.from({ length: PRODUCTO_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`fotos/producto/prod-${n}-1200.jpg`);
  const gridWebp = path(`fotos/producto/prod-${n}-1200.webp`);
  const fullJpg  = path(`fotos/producto/prod-${n}-2400.jpg`);
  const fullWebp = path(`fotos/producto/prod-${n}-2400.webp`);
  const baseJpg  = path(`fotos/producto/prod-${n}.jpg`);
  return {
    src:      USE_OPT ? gridJpg  : baseJpg,
    srcWebp:  USE_OPT ? gridWebp : null,
    full:     USE_OPT ? fullJpg  : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    alt: `Producto ${i + 1}`,
    cat: 'producto',
  };
});

// ---- Autor ----
const AUTOR_COUNT = 4; // ajusta a tu número real

const autorItems = Array.from({ length: AUTOR_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`fotos/autor/aut-${n}-1200.jpg`);
  const gridWebp = path(`fotos/autor/aut-${n}-1200.webp`);
  const fullJpg  = path(`fotos/autor/aut-${n}-2400.jpg`);
  const fullWebp = path(`fotos/autor/aut-${n}-2400.webp`);
  const baseJpg  = path(`fotos/autor/aut-${n}.jpg`);
  return {
    src:      USE_OPT ? gridJpg  : baseJpg,
    srcWebp:  USE_OPT ? gridWebp : null,
    full:     USE_OPT ? fullJpg  : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    alt: `Proyecto autoral ${i + 1}`,
    cat: 'autor',
  };
});

// ---- Diseño: Social Media ----
const SOCIAL_COUNT = 7; // ajusta

const socialItems = Array.from({ length: SOCIAL_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`diseno/social/social-${n}-1200.jpg`);
  const gridWebp = path(`diseno/social/social-${n}-1200.webp`);
  const fullJpg  = path(`diseno/social/social-${n}-2400.jpg`);
  const fullWebp = path(`diseno/social/social-${n}-2400.webp`);
  const baseJpg  = path(`diseno/social/social-${n}.jpg`);
  return {
    src:      USE_OPT ? gridJpg  : baseJpg,
    srcWebp:  USE_OPT ? gridWebp : null,
    full:     USE_OPT ? fullJpg  : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    title: `Social ${n}`,
    tags: ['Social Media'],
    cat: 'social',
  };
});

// ---- Diseño: Impresos ----
const IMPRESOS_COUNT = 5; // ajusta

const impresosItems = Array.from({ length: IMPRESOS_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  const gridJpg  = path(`diseno/impresos/imp-${n}-1200.jpg`);
  const gridWebp = path(`diseno/impresos/imp-${n}-1200.webp`);
  const fullJpg  = path(`diseno/impresos/imp-${n}-2400.jpg`);
  const fullWebp = path(`diseno/impresos/imp-${n}-2400.webp`);
  const baseJpg  = path(`diseno/impresos/imp-${n}.jpg`);
  return {
    src:      USE_OPT ? gridJpg  : baseJpg,
    srcWebp:  USE_OPT ? gridWebp : null,
    full:     USE_OPT ? fullJpg  : baseJpg,
    fullWebp: USE_OPT ? fullWebp : null,
    title: `Impreso ${n}`,
    tags: ['Impresos'],
    cat: 'impresos',
  };
});

// Colección de diseño
const DESIGN = [...socialItems, ...impresosItems];

const IMAGES = [
  // 1) Retrato
  ...retratoItems,

  // 2) Eventos
  ...eventosItems,

  // 3) Animales
  ...animalesItems,

  // 4) Producto
  ...productoItems,

  // 5) Autor
  ...autorItems,
];

// ====== RENDER CON PAGINACIÓN ======
let galeriaEl = document.getElementById('galeria');
const filtrosEl = document.getElementById('filtros');
const loadMoreBtn = document.getElementById('loadMore');

let currentFilter = 'all';
let page = 1;
const PAGE_SIZE = 12;        // 12 al inicio
const PAGE_STEP = 6;         // luego de a 6

function card(img) {
  const picture = img.srcWebp
    ? `
      <picture>
        <source type="image/webp" srcset="${img.srcWebp}" />
        <img src="${img.src}" alt="${img.alt}" loading="lazy"
             class="h-full w-full object-cover transition group-hover:scale-105" />
      </picture>
    `
    : `
      <img src="${img.src}" alt="${img.alt}" loading="lazy"
           class="h-full w-full object-cover transition group-hover:scale-105" />
    `;

  // usa JPG (siempre existe) para el lightbox
  const dataFull = img.full;

  return `
    <button
      class="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
      data-full="${dataFull}" aria-label="ver ${img.alt}">
      ${picture}
      <span class="pointer-events-none absolute inset-0 ring-0 ring-inset group-hover:ring-2 group-hover:ring-black/10 rounded-xl"></span>
    </button>
  `;
}

function filtered() {
  return currentFilter === 'all' ? IMAGES : IMAGES.filter(i => i.cat === currentFilter);
}

function renderPage(reset = false) {
  // Si vengo de otra sección o filtro, limpio contenedor y eventos
  if (reset) {
    galeriaEl = resetGaleriaContainer(); // recuerda que galeriaEl debe ser "let"
  }

  const items = filtered();                    // obtiene todas las imágenes filtradas
  const limit = reset ? PAGE_SIZE : PAGE_SIZE + (page - 1) * PAGE_STEP;
  const visibleItems = items.slice(0, limit);  // ← ESTA es la línea importante 👈

  // Renderiza las tarjetas
  galeriaEl.innerHTML = visibleItems.map(card).join('');

  // Controla la visibilidad del botón “Cargar más”
  if (visibleItems.length >= items.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }

  // Reasigna el evento del lightbox al nuevo contenedor
  galeriaEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-full]');
    if (!btn) return;
    const src = btn.getAttribute('data-full');
    const lbImg = document.getElementById('lbImg');
    const overlay = document.getElementById('lightbox');
    if (lbImg && overlay) {
      // Ajusta la ruta del lightbox con el prefijo BASE_URL si es relativo
let resolvedSrc = src;
// si no es http/https y no empieza con la BASE, la anteponemos
if (!/^https?:\/\//.test(src) && !src.startsWith(BASE)) {
  resolvedSrc = path(src);
}
lbImg.srcset = '';
lbImg.sizes  = '';
lbImg.src    = resolvedSrc;
overlay.classList.remove('hidden');
    }
  });
}

  // --- Reset de contenedor y eventos (evita listeners “fantasma”) ---
function resetGaleriaContainer() {
  const old = document.getElementById('galeria');
  const fresh = old.cloneNode(false);        // clona SIN hijos ni eventos
  old.replaceWith(fresh);
  return fresh; // devuelve el nuevo nodo
}

// Deja siempre el overlay limpio
function closeLightbox() {
  const overlay = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  overlay?.classList.add('hidden');
  if (lbImg) {
    lbImg.src = '';
    lbImg.srcset = '';
    lbImg.sizes  = '';
  }
}

// Estado visual del botón activo
function setActive(btn) {
  filtrosEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Primer render
renderPage(true);

// Listeners
filtrosEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-filter]');
  if (!btn) return;
  currentFilter = btn.getAttribute('data-filter');
  page = 1;
  setActive(btn);
  renderPage(true);
  // scroll suave al inicio de la galería
  galeriaEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  renderPage(false);
});

// --- Navegación por anclas: al ir a #fotografia o #diseno, fuerza render limpio
function onRouteChange() {
  const hash = location.hash || '';
  // Siempre cierro cualquier imagen ampliada
  closeLightbox();

  if (hash === '#fotografia') {
    // reset a “Todos” y repinto
    currentFilter = 'all';
    page = 1;

    // marcar botón activo “Todos” si existe
    const btnTodos = filtrosEl?.querySelector('button[data-filter="all"]');
    if (btnTodos) setActive(btnTodos);

    renderPage(true);  // <- reset true para clonar contenedor y evitar eventos viejos
    // opcional: scroll suave al inicio de la galería
    galeriaEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Si más adelante montas la galería de diseño en el MISMO #galeria,
  // aquí harías un render de diseño con reset similar.
}
window.addEventListener('hashchange', onRouteChange);
// Si entras ya con hash (ej: link directo a #fotografia), dispara una vez
onRouteChange();

// ====== Render Diseño ======
const gridDis = document.getElementById('gridDis');
const filtrosDis = document.getElementById('filtrosDis');

function cardDesign(item) {
  // srcset/sizes si tienes optimizadas
  const picture = (USE_OPT && item.srcWebp)
    ? `
      <picture>
        <source type="image/webp"
                srcset="${item.srcWebp.replace('-1200','-600')} 600w, ${item.srcWebp} 1200w"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
        <img
          src="${item.src}"
          srcset="${item.src.replace('-1200','-600')} 600w, ${item.src} 1200w"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          alt="${item.title}" loading="lazy"
          class="h-full w-full object-cover transition group-hover:scale-105" />
      </picture>
    `
    : `
      <img src="${item.src}" alt="${item.title}" loading="lazy"
           class="h-full w-full object-cover transition group-hover:scale-105" />
    `;

  const dataFull = (USE_OPT && item.fullWebp) ? item.fullWebp : item.full;

  return `
    <button class="group text-left rounded-2xl overflow-hidden border border-neutral-200"
            data-full="${dataFull}" aria-label="ver ${item.title}">
      <div class="aspect-[4/3] overflow-hidden">
        ${picture}
      </div>
      <div class="p-4">
        <h3 class="font-medium">${item.title}</h3>
        <div class="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600">
          ${item.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>
    </button>
  `;
}

let currentFilterDis = 'all';
function filteredDesign() {
  return currentFilterDis === 'all' ? DESIGN : DESIGN.filter(d => d.cat === currentFilterDis);
}
function renderDesign(resetActive = true) {
  const items = filteredDesign();
  gridDis.innerHTML = items.map(cardDesign).join('');
  if (resetActive) {
    filtrosDis.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    const btn = filtrosDis.querySelector(`button[data-filter="${currentFilterDis}"]`) || filtrosDis.querySelector('button[data-filter="all"]');
    btn?.classList.add('active');
  }
}
renderDesign(true);

filtrosDis.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-filter]');
  if (!btn) return;
  currentFilterDis = btn.getAttribute('data-filter');
  renderDesign(true);
  gridDis.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Reutiliza el mismo lightbox global
gridDis.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-full]');
  if (!btn) return;
  const src = btn.getAttribute('data-full');
  // soporte 1x/2x si tienes 2400/1200
  if (USE_OPT && src.includes('-2400')) {
    const src1x = src.replace('-2400','-1200');
    document.getElementById('lbImg').srcset = `${src1x} 1x, ${src} 2x`;
    document.getElementById('lbImg').src = src; // fallback
  } else {
    document.getElementById('lbImg').srcset = '';
    document.getElementById('lbImg').src = src;
  }
  document.getElementById('lightbox').classList.remove('hidden');
});

// ---------- LIGHTBOX ----------
let overlay = document.getElementById('lightbox');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.className = 'fixed inset-0 hidden bg-black/80 backdrop-blur-sm z-[60] p-4 md:p-10';
  overlay.innerHTML = `
    <button id="lbClose" class="absolute top-4 right-4 text-white/80 text-2xl" aria-label="Cerrar">✕</button>
    <div class="h-full w-full flex items-center justify-center">
      <img id="lbImg" src="" alt="Foto en grande"
           class="max-h-full max-w-full rounded-xl shadow-2xl border border-white/10" />
    </div>
  `;
  document.body.appendChild(overlay);
}
const lbImg   = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');

overlay.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox' || e.target.id === 'lbClose') {
    overlay.classList.add('hidden');
    lbImg.src = '';
    lbImg.srcset = '';   // 👈
    lbImg.sizes  = '';   // 👈
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.classList.add('hidden');
    lbImg.src = '';
    lbImg.srcset = '';   // 👈
    lbImg.sizes  = '';   // 👈
  }
});

// ---------- util ----------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('y').textContent = new Date().getFullYear();
});

// --- Validación básica de Contacto ---
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const msg = document.getElementById('formMsg');
const consent = document.getElementById('consent');

function isEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form?.addEventListener('submit', (e) => {
  msg.textContent = '';
  msg.className = 'text-sm mt-2';

  const fd = new FormData(form);
  const email = String(fd.get('email') || '').trim();

  if (!consent.checked) {
    e.preventDefault();
    msg.textContent = 'Debes aceptar el consentimiento.';
    msg.classList.add('text-red-600');
    return;
  }
  if (!isEmail(email)) {
    e.preventDefault();
    msg.textContent = 'Ingresa un email válido.';
    msg.classList.add('text-red-600');
    return;
  }

  // UI de envío
  sendBtn.disabled = true;
  sendBtn.textContent = 'Enviando...';
});
