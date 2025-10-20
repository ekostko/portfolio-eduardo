(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();const L="/portfolio-eduardo/",s=t=>`${L}${String(t).replace(/^\/+/,"")}`,W=`
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
`,T=`
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
`;document.querySelector("#app").innerHTML=`
  ${W}

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
        <img src="${s("hero.jpg")}" class="w-full rounded-2xl shadow-sm" />
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
          <img src="${s("me.jpg")}" alt="Eduardo Kostko — Fotógrafo y Diseñador Visual"
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

  ${T}
`;document.getElementById("y").textContent=new Date().getFullYear();const M=document.getElementById("menuBtn"),F=document.getElementById("mobileMenu");M?.addEventListener("click",()=>F.classList.toggle("hidden"));const D=26,O=Array.from({length:D},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`fotos/retrato/ret-${e}-1200.jpg`),a=s(`fotos/retrato/ret-${e}-1200.webp`),l=s(`fotos/retrato/ret-${e}-2400.jpg`),n=s(`fotos/retrato/ret-${e}-2400.webp`);return s(`fotos/retrato/ret-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,alt:`Retrato editorial ${o+1}`,cat:"retrato"}}),_=14,P=Array.from({length:_},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`fotos/eventos/eve-${e}-1200.jpg`),a=s(`fotos/eventos/eve-${e}-1200.webp`),l=s(`fotos/eventos/eve-${e}-2400.jpg`),n=s(`fotos/eventos/eve-${e}-2400.webp`);return s(`fotos/eventos/eve-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,alt:`Evento ${o+1}`,cat:"eventos"}}),N=4,z=Array.from({length:N},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`fotos/animales/ani-${e}-1200.jpg`),a=s(`fotos/animales/ani-${e}-1200.webp`),l=s(`fotos/animales/ani-${e}-2400.jpg`),n=s(`fotos/animales/ani-${e}-2400.webp`);return s(`fotos/animales/ani-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,alt:`Animales ${o+1}`,cat:"animales"}}),q=3,J=Array.from({length:q},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`fotos/producto/prod-${e}-1200.jpg`),a=s(`fotos/producto/prod-${e}-1200.webp`),l=s(`fotos/producto/prod-${e}-2400.jpg`),n=s(`fotos/producto/prod-${e}-2400.webp`);return s(`fotos/producto/prod-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,alt:`Producto ${o+1}`,cat:"producto"}}),H=4,R=Array.from({length:H},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`fotos/autor/aut-${e}-1200.jpg`),a=s(`fotos/autor/aut-${e}-1200.webp`),l=s(`fotos/autor/aut-${e}-2400.jpg`),n=s(`fotos/autor/aut-${e}-2400.webp`);return s(`fotos/autor/aut-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,alt:`Proyecto autoral ${o+1}`,cat:"autor"}}),V=7,G=Array.from({length:V},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`diseno/social/social-${e}-1200.jpg`),a=s(`diseno/social/social-${e}-1200.webp`),l=s(`diseno/social/social-${e}-2400.jpg`),n=s(`diseno/social/social-${e}-2400.webp`);return s(`diseno/social/social-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,title:`Social ${e}`,tags:["Social Media"],cat:"social"}}),U=5,Z=Array.from({length:U},(t,o)=>{const e=String(o+1).padStart(2,"0"),r=s(`diseno/impresos/imp-${e}-1200.jpg`),a=s(`diseno/impresos/imp-${e}-1200.webp`),l=s(`diseno/impresos/imp-${e}-2400.jpg`),n=s(`diseno/impresos/imp-${e}-2400.webp`);return s(`diseno/impresos/imp-${e}.jpg`),{src:r,srcWebp:a,full:l,fullWebp:n,title:`Impreso ${e}`,tags:["Impresos"],cat:"impresos"}}),k=[...G,...Z],$=[...O,...P,...z,...J,...R];let u=document.getElementById("galeria");const x=document.getElementById("filtros"),h=document.getElementById("loadMore");let f="all",b=1;const I=12,K=6;function Y(t){const o=t.srcWebp?`
      <picture>
        <source type="image/webp" srcset="${t.srcWebp}" />
        <img src="${t.src}" alt="${t.alt}" loading="lazy"
             class="h-full w-full object-cover transition group-hover:scale-105" />
      </picture>
    `:`
      <img src="${t.src}" alt="${t.alt}" loading="lazy"
           class="h-full w-full object-cover transition group-hover:scale-105" />
    `;return`
    <button
      class="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
      data-full="${t.full}" aria-label="ver ${t.alt}">
      ${o}
      <span class="pointer-events-none absolute inset-0 ring-0 ring-inset group-hover:ring-2 group-hover:ring-black/10 rounded-xl"></span>
    </button>
  `}function Q(){return f==="all"?$:$.filter(t=>t.cat===f)}function v(t=!1){t&&(u=X());const o=Q(),e=t?I:I+(b-1)*K,r=o.slice(0,e);u.innerHTML=r.map(Y).join(""),r.length>=o.length?h.classList.add("hidden"):h.classList.remove("hidden"),u.addEventListener("click",a=>{const l=a.target.closest("button[data-full]");if(!l)return;const n=l.getAttribute("data-full"),p=document.getElementById("lbImg"),w=document.getElementById("lightbox");if(p&&w){let E=n;!/^https?:\/\//.test(n)&&!n.startsWith(L)&&(E=s(n)),p.srcset="",p.sizes="",p.src=E,w.classList.remove("hidden")}})}function X(){const t=document.getElementById("galeria"),o=t.cloneNode(!1);return t.replaceWith(o),o}function tt(){const t=document.getElementById("lightbox"),o=document.getElementById("lbImg");t?.classList.add("hidden"),o&&(o.src="",o.srcset="",o.sizes="")}function A(t){x.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}v(!0);x.addEventListener("click",t=>{const o=t.target.closest("button[data-filter]");o&&(f=o.getAttribute("data-filter"),b=1,A(o),v(!0),u.scrollIntoView({behavior:"smooth",block:"start"}))});h.addEventListener("click",()=>{b+=1,v(!1)});function B(){const t=location.hash||"";if(tt(),t==="#fotografia"){f="all",b=1;const o=x?.querySelector('button[data-filter="all"]');o&&A(o),v(!0),u.scrollIntoView({behavior:"smooth",block:"start"})}}window.addEventListener("hashchange",B);B();const y=document.getElementById("gridDis"),m=document.getElementById("filtrosDis");function et(t){const o=t.srcWebp?`
      <picture>
        <source type="image/webp"
                srcset="${t.srcWebp.replace("-1200","-600")} 600w, ${t.srcWebp} 1200w"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
        <img
          src="${t.src}"
          srcset="${t.src.replace("-1200","-600")} 600w, ${t.src} 1200w"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          alt="${t.title}" loading="lazy"
          class="h-full w-full object-cover transition group-hover:scale-105" />
      </picture>
    `:`
      <img src="${t.src}" alt="${t.title}" loading="lazy"
           class="h-full w-full object-cover transition group-hover:scale-105" />
    `;return`
    <button class="group text-left rounded-2xl overflow-hidden border border-neutral-200"
            data-full="${t.fullWebp?t.fullWebp:t.full}" aria-label="ver ${t.title}">
      <div class="aspect-[4/3] overflow-hidden">
        ${o}
      </div>
      <div class="p-4">
        <h3 class="font-medium">${t.title}</h3>
        <div class="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600">
          ${t.tags.map(r=>`<span class="chip">${r}</span>`).join("")}
        </div>
      </div>
    </button>
  `}let g="all";function ot(){return g==="all"?k:k.filter(t=>t.cat===g)}function C(t=!0){const o=ot();y.innerHTML=o.map(et).join(""),t&&(m.querySelectorAll("button").forEach(r=>r.classList.remove("active")),(m.querySelector(`button[data-filter="${g}"]`)||m.querySelector('button[data-filter="all"]'))?.classList.add("active"))}C(!0);m.addEventListener("click",t=>{const o=t.target.closest("button[data-filter]");o&&(g=o.getAttribute("data-filter"),C(!0),y.scrollIntoView({behavior:"smooth",block:"start"}))});y.addEventListener("click",t=>{const o=t.target.closest("button[data-full]");if(!o)return;const e=o.getAttribute("data-full");if(e.includes("-2400")){const r=e.replace("-2400","-1200");document.getElementById("lbImg").srcset=`${r} 1x, ${e} 2x`,document.getElementById("lbImg").src=e}else document.getElementById("lbImg").srcset="",document.getElementById("lbImg").src=e;document.getElementById("lightbox").classList.remove("hidden")});let i=document.getElementById("lightbox");i||(i=document.createElement("div"),i.id="lightbox",i.className="fixed inset-0 hidden bg-black/80 backdrop-blur-sm z-[60] p-4 md:p-10",i.innerHTML=`
    <button id="lbClose" class="absolute top-4 right-4 text-white/80 text-2xl" aria-label="Cerrar">✕</button>
    <div class="h-full w-full flex items-center justify-center">
      <img id="lbImg" src="" alt="Foto en grande"
           class="max-h-full max-w-full rounded-xl shadow-2xl border border-white/10" />
    </div>
  `,document.body.appendChild(i));const d=document.getElementById("lbImg");document.getElementById("lbClose");i.addEventListener("click",t=>{(t.target.id==="lightbox"||t.target.id==="lbClose")&&(i.classList.add("hidden"),d.src="",d.srcset="",d.sizes="")});document.addEventListener("keydown",t=>{t.key==="Escape"&&(i.classList.add("hidden"),d.src="",d.srcset="",d.sizes="")});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("y").textContent=new Date().getFullYear()});const j=document.getElementById("contactForm"),S=document.getElementById("sendBtn"),c=document.getElementById("formMsg"),st=document.getElementById("consent");function at(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}j?.addEventListener("submit",t=>{c.textContent="",c.className="text-sm mt-2";const o=new FormData(j),e=String(o.get("email")||"").trim();if(!st.checked){t.preventDefault(),c.textContent="Debes aceptar el consentimiento.",c.classList.add("text-red-600");return}if(!at(e)){t.preventDefault(),c.textContent="Ingresa un email válido.",c.classList.add("text-red-600");return}S.disabled=!0,S.textContent="Enviando..."});
