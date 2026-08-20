# Parroquia Nuestra Señora de Las Aguas

Sitio estático, accesible y responsive de la Parroquia Nuestra Señora de Las Aguas, en el centro histórico de Bogotá. El rediseño usa HTML, CSS y JavaScript puro; no requiere dependencias, compilación ni conexión a un CMS.

**Rama del rediseño:** `redesign/parroquia-web`

## Ejecutar localmente

Desde la raíz del repositorio:

```bash
python -m http.server 8000
```

Luego visite `http://localhost:8000/`. Las páginas disponibles son:

- `index.html`: portada y acceso a toda la información.
- `horarios.html`: misas, confesiones, Hora Santa y despacho.
- `sacramentos.html`: bautismos y requisitos.
- `cenizarios.html`: disponibilidad y horarios de visita.

## Estructura

```text
.
├── assets/
│   ├── fonts/
│   ├── iglesia-las-aguas.jpeg
│   ├── fondo-horarios.png
│   ├── fondo-horarios-movil.png
│   └── logos y favicon
├── index.html
├── horarios.html
├── sacramentos.html
├── cenizarios.html
├── styles.css
├── script.js
└── README.md
```

## Actualizar contenido

### Horarios, contacto y enlaces

Los datos repetidos se centralizan al inicio de `script.js`, dentro de `siteData`:

- `siteData.parish`: nombre, dirección, teléfono, correo y mapa.
- `siteData.schedules`: misas, confesiones, Hora Santa y despacho.
- `siteData.links`: Centro Cultural El Faro, Fraternidad y enlaces institucionales.

Las páginas consumen esos datos mediante atributos `data-schedule` y `data-parish`. Modifique primero `siteData` para evitar diferencias entre páginas.

### Eventos

Los tres eventos están en `index.html`, dentro de la sección `events`. Están precedidos por el comentario:

```html
<!-- CONTENIDO PROVISIONAL: reemplazar los tres eventos siguientes. -->
```

Reemplace fecha, título, descripción, hora y lugar. Mantenga una fecha válida en el atributo `datetime`.

### Imágenes

Los recursos locales están en `assets/`. La imagen principal se referencia como `assets/iglesia-las-aguas.jpeg` en el hero, la bienvenida, el video y los encabezados interiores. Puede sustituirse conservando el nombre, o actualizar las rutas correspondientes en HTML y CSS. Evite depender de imágenes remotas.

### Colores, tipografía, espacios y sombras

El sistema visual se define con variables CSS en `:root`, al comienzo de `styles.css`. Las principales son:

- `--ivory`, `--paper`: fondos claros.
- `--petrol`, `--petrol-dark`: colores institucionales.
- `--gold`, `--gold-light`, `--terracotta`: acentos.
- `--font-serif`, `--font-sans`: familias tipográficas.
- `--space-*`, `--shadow-*`, `--radius-*`: espaciado, elevación y radios.

## Contenido provisional

Debe revisarse y reemplazarse antes de publicar:

1. Los tres eventos de la portada: “Encuentro de bienvenida”, “Recorrido por el templo” y “Jornada de oración”, incluidas sus fechas, horas y lugares.
2. Los textos editoriales nuevos de bienvenida, historia, Centro Cultural El Faro y Fraternidad San Carlos Borromeo. Se redactaron a partir del contexto existente, pero requieren aprobación institucional.

## Datos originales por confirmar

Se conservaron las diferencias encontradas sin decidir arbitrariamente:

1. **Misas de martes a viernes:** la portada original incluía `7 am · 12:30 pm · 6 pm`; `horarios.html` incluía únicamente `7 am · 6 pm`. Ambas variantes permanecen en `siteData` y se muestra un aviso en la página de horarios.
2. **Confesiones:** la portada original indicaba contactar a los sacerdotes a través del despacho; la página de horarios indicaba tocar el timbre de la casa cural. Se conservaron ambas formulaciones en sus respectivos contextos.
3. **Dirección:** la portada original mostraba `Carrera 2A #18A-68`, mientras el pie de página mostraba `Carrera 2A #18A-66`. El sitio usa `#18A-66` como dato principal, conserva ambos valores en `siteData` y muestra un aviso visible en la sección de ubicación.

Confirme estos tres puntos con la parroquia y unifique luego los valores en `siteData`.

## Accesibilidad y comportamiento

- Un único `h1` por página y estructura semántica.
- Enlace para saltar al contenido principal.
- Menú móvil accesible por teclado, cierre con `Escape` y estados ARIA.
- Textos alternativos y foco visible.
- Objetivos táctiles de al menos 48 px en controles principales.
- Adaptación a móvil sin desplazamiento horizontal.
- Reducción de animaciones con `prefers-reduced-motion`.

## Créditos

El contenido y los recursos institucionales pertenecen a la Parroquia Nuestra Señora de Las Aguas y a la Arquidiócesis de Bogotá.
