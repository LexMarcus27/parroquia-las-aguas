const siteData = {
  parish: {
    name: "Parroquia Nuestra Señora de Las Aguas",
    shortName: "Nuestra Señora de Las Aguas",
    address: "Carrera 2A #18A-66",
    addressOriginalHome: "Carrera 2A #18A-68",
    city: "Bogotá, Colombia",
    phoneDisplay: "(601) 341 2985",
    phoneHref: "+576013412985",
    email: "plasaguas@arquibogota.org.co",
    map: "https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Se%C3%B1ora+de+Las+Aguas+Bogot%C3%A1",
  },
  schedules: {
    // La portada original incluía 12:30 p. m.; la página de horarios no. Conservar hasta confirmar.
    massesHome: [
      ["Lunes", "6:00 p. m."],
      ["Martes a viernes", "7:00 a. m. · 12:30 p. m. · 6:00 p. m."],
      ["Sábado", "6:00 p. m."],
      ["Domingo", "8:00 a. m. · 10:00 a. m. · 12:00 m. · 6:00 p. m."],
    ],
    massesSchedulePage: [
      ["Lunes", "6:00 p. m."],
      ["Martes a viernes", "7:00 a. m. · 6:00 p. m."],
      ["Sábado", "6:00 p. m."],
      ["Domingo", "8:00 a. m. · 10:00 a. m. · 12:00 m. · 6:00 p. m."],
    ],
    holyHour: "Todos los jueves, de 5:00 p. m. a 6:00 p. m.",
    office: [
      ["Lunes a viernes", "9:00 a. m. – 12:30 p. m."],
      ["Tarde", "1:30 p. m. – 5:00 p. m."],
    ],
    confessionsHome: [
      "Antes y después de Misa.",
      "Durante las Misas, cuando hay un sacerdote disponible.",
      "También puede buscar a los sacerdotes a través del despacho.",
    ],
    confessionsSchedulePage: [
      "Antes y después de Misa.",
      "Durante las Misas, cuando hay un sacerdote disponible.",
      "Siempre tocando el timbre de la casa cural.",
    ],
  },
  links: {
    faro: "https://centroculturalelfaro.wixsite.com/elfaro",
    fraternity: "http://sancarlo.org/es/",
    video: "https://www.youtube.com/watch?v=vtWlBnsHJss",
    archdiocese: "https://arquibogota.org.co/",
    evangelization: "https://vicariadeevangelizacion.arquibogota.org.co/",
    elCatolicismo: "https://elcatolicismo.com.co/",
  },
};

const page = document.body.dataset.page;
const { parish, schedules, links } = siteData;

const navigation = [
  ["inicio", "index.html", "Inicio"],
  ["horarios", "horarios.html", "Horarios"],
  ["sacramentos", "sacramentos.html", "Sacramentos"],
  ["cenizarios", "cenizarios.html", "Cenizarios"],
];

const scheduleRows = (rows) =>
  `<dl class="schedule-list">${rows
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("")}</dl>`;

const paragraphList = (items) => items.map((item) => `<p>${item}</p>`).join("");

document.querySelector("#site-header").innerHTML = `
  <a class="skip-link" href="#main-content">Pasar al contenido principal</a>
  <div class="utility-bar">
    <div class="container utility-inner">
      <span>Centro histórico de Bogotá</span>
      <div class="utility-links">
        <a href="mailto:${parish.email}">Escríbenos</a>
        <a href="${links.archdiocese}" target="_blank" rel="noopener noreferrer">Arquidiócesis de Bogotá</a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container header-row">
      <a class="brand" href="index.html" aria-label="${parish.name}: ir al inicio">
        <span class="brand-mark" aria-hidden="true">✦</span>
        <span><strong>Las Aguas</strong><small>Parroquia Nuestra Señora</small></span>
      </a>
      <nav id="main-nav" class="main-nav" aria-label="Navegación principal">
        <ul class="nav-list">
          ${navigation.map(([id, href, label]) => `<li><a href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
        </ul>
        <a class="nav-cta" href="${parish.map}" target="_blank" rel="noopener noreferrer">Cómo llegar</a>
      </nav>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
        <span class="sr-only">Abrir menú</span><span class="menu-icon" aria-hidden="true"></span>
      </button>
    </div>
  </header>`;

document.querySelector("#site-footer").innerHTML = `
  <section class="contact-band" aria-label="Contacto rápido">
    <div class="container contact-band-grid">
      <div><span class="eyebrow light">Estamos para servirte</span><h2>Visita la parroquia</h2></div>
      <a href="${parish.map}" target="_blank" rel="noopener noreferrer"><span>Dirección</span><strong>${parish.address}<br>${parish.city}</strong></a>
      <a href="tel:${parish.phoneHref}"><span>Teléfono</span><strong>${parish.phoneDisplay}</strong></a>
      <a href="mailto:${parish.email}"><span>Correo</span><strong>${parish.email}</strong></a>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-intro">
        <a class="brand brand-footer" href="index.html"><span class="brand-mark" aria-hidden="true">✦</span><span><strong>Las Aguas</strong><small>Parroquia Nuestra Señora</small></span></a>
        <p>Una comunidad de fe en el corazón histórico de Bogotá.</p>
        <img src="assets/logo-arquidiocesis-footer.png" alt="Arquidiócesis de Bogotá">
      </div>
      <div><h2>Explora</h2><ul>${navigation.map(([, href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul></div>
      <div><h2>Comunidad</h2><ul>
        <li><a href="${links.faro}" target="_blank" rel="noopener noreferrer">Centro Cultural El Faro</a></li>
        <li><a href="${links.fraternity}" target="_blank" rel="noopener noreferrer">Fraternidad San Carlos Borromeo</a></li>
        <li><a href="${links.elCatolicismo}" target="_blank" rel="noopener noreferrer">El Catolicismo</a></li>
        <li><a href="${links.evangelization}" target="_blank" rel="noopener noreferrer">Vicaría de Evangelización</a></li>
      </ul></div>
      <div><h2>Enlaces institucionales</h2><ul>
        <li><a href="https://www.office.com/" target="_blank" rel="noopener noreferrer">Correo institucional</a></li>
        <li><a href="https://www.cec.org.co/" target="_blank" rel="noopener noreferrer">Conferencia Episcopal de Colombia</a></li>
        <li><a href="https://www.vatican.va/content/vatican/es.html" target="_blank" rel="noopener noreferrer">El Vaticano</a></li>
        <li><a href="https://arquibogota.org.co/node/1044" target="_blank" rel="noopener noreferrer">Términos y condiciones</a></li>
        <li>PBX: 601 3505511 · 601 5803491</li>
        <li>Celular: 317 3549191</li>
        <li><a href="mailto:secretaria2_cancilleria@arquibogota.org.co">secretaria2_cancilleria@arquibogota.org.co</a></li>
        <li>Carrera 7 No. 10-20 · Bogotá, Colombia</li>
      </ul></div>
    </div>
    <div class="footer-bottom"><div class="container"><span>© <span data-current-year></span> ${parish.name}</span><span>Arquidiócesis de Bogotá</span></div></div>
  </footer>`;

document.querySelectorAll("[data-schedule]").forEach((element) => {
  const value = schedules[element.dataset.schedule];
  if (Array.isArray(value) && Array.isArray(value[0])) {
    element.innerHTML = scheduleRows(value);
  } else if (Array.isArray(value)) {
    element.innerHTML = paragraphList(value);
  } else {
    element.textContent = value ?? "";
  }
});

document.querySelectorAll("[data-parish]").forEach((element) => {
  element.textContent = parish[element.dataset.parish] ?? "";
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
const menuLabel = menuButton.querySelector(".sr-only");

const closeMenu = () => {
  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuLabel.textContent = "Abrir menú";
};

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuLabel.textContent = isOpen ? "Cerrar menú" : "Abrir menú";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});
