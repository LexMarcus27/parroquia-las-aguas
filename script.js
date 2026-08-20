const page = document.body.dataset.page;

const navigation = [
  ["inicio", "index.html", "Inicio"],
  ["sacramentos", "sacramentos.html", "Sacramentos"],
  ["cenizarios", "cenizarios.html", "Cenizarios"],
  ["faro", "https://centroculturalelfaro.wixsite.com/elfaro", "Centro Cultural El Faro"],
  ["fraternidad", "http://sancarlo.org/es/", "Fraternidad San Carlos Borromeo"],
];

const externalAttributes = (href) =>
  href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

document.querySelector("#site-header").innerHTML = `
  <a class="skip-link" href="#main-content">Pasar al contenido principal</a>
  <div class="topbar">
    <div class="container">
      <a href="mailto:plasaguas@arquibogota.org.co">Contacto</a>
      <span>·</span>
      <a href="https://elcatolicismo.com.co/" target="_blank" rel="noopener noreferrer">El Catolicismo</a>
      <span>·</span>
      <a href="https://arquibogota.org.co/" target="_blank" rel="noopener noreferrer">Arquidiócesis de Bogotá</a>
      <span>·</span>
      <a href="https://vicariadeevangelizacion.arquibogota.org.co/" target="_blank" rel="noopener noreferrer">Vicaría de Evangelización</a>
    </div>
  </div>
  <header class="site-header">
    <div class="container header-row">
      <a class="brand" href="index.html" aria-label="Ir al inicio">
        <img src="assets/logo-arquidiocesis.png" alt="Arquidiócesis de Bogotá, Parroquia Nuestra Señora de Las Aguas">
      </a>
      <nav id="main-nav" class="main-nav" aria-label="Navegación principal">
        <ul class="nav-list">
          ${navigation
            .map(
              ([id, href, label]) => `<li><a href="${href}"${externalAttributes(href)}${
                id === page ? ' aria-current="page"' : ""
              }>${label}</a></li>`,
            )
            .join("")}
        </ul>
      </nav>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">☰</button>
    </div>
  </header>`;

document.querySelector("#site-footer").innerHTML = `
  <section class="contact-strip" aria-label="Datos de la parroquia">
    <div class="container">
      <strong>Nuestra Señora de Las Aguas</strong>
      <div>
        <p class="contact-item">☎ <a href="tel:+576013412985">341 2985</a></p>
        <p class="contact-item">⌖ Carrera 2A #18A-66</p>
      </div>
      <div>
        <p class="contact-item">@ <a href="mailto:plasaguas@arquibogota.org.co">plasaguas@arquibogota.org.co</a></p>
        <p class="contact-item">⌖ Bogotá, Colombia</p>
      </div>
    </div>
  </section>
  <footer>
    <div class="footer-main">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="assets/logo-arquidiocesis-footer.png" alt="Arquidiócesis de Bogotá">
        </div>
        <div>
          <h2>Enlaces</h2>
          <ul>
            <li><a href="https://www.office.com/" target="_blank" rel="noopener noreferrer">Correo</a></li>
            <li><a href="https://elcatolicismo.com.co/" target="_blank" rel="noopener noreferrer">El Catolicismo</a></li>
            <li><a href="https://www.cec.org.co/" target="_blank" rel="noopener noreferrer">Conferencia Episcopal de Colombia</a></li>
            <li><a href="https://www.vatican.va/content/vatican/es.html" target="_blank" rel="noopener noreferrer">El Vaticano</a></li>
            <li><a href="https://arquibogota.org.co/node/1044" target="_blank" rel="noopener noreferrer">Términos y condiciones</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h2>Información de contacto</h2>
          <p>PBX: 601 3505511 · 601 5803491 · Celular: 317 3549191</p>
          <p><a href="mailto:secretaria2_cancilleria@arquibogota.org.co">secretaria2_cancilleria@arquibogota.org.co</a></p>
          <p>Carrera 7 No. 10-20 · Bogotá, Colombia</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">Todos los derechos reservados © 2020 · Arquidiócesis de Bogotá</div>
  </footer>`;

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
