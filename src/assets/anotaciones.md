CSS:

1 - .container {
    width: 100%;
    margin-block: var(--space-l);
    padding-inline: clamp(
        var(--space-s),
        5vw,
        var(--space-3xl)
    );
}.  x

2 - cards: medidas. x

3- * {
    outline: 1px solid red;
}

scrollWidth > clientWidth
document.documentElement.scrollWidth
document.documentElement.clientWidth
scrollWidth: 850
clientWidth: 390

4 - Variables: refactor a variables vacias y mal escritas.

5 - --shadow-accent: 0 8px 20px #eeeeee;

6 - clamp(): 

«¿Este valor realmente necesita escalar continuamente o debería cambiar en un breakpoint?»
Ejemplo:
Tamaño de título
Perfecto para clamp().
Layout de navegación
Probablemente breakpoint.
Número de columnas de un grid
Normalmente grid-template-columns/auto-fit/breakpoints.
Padding
Puede ser clamp().
Cambio de estructura
Breakpoint.
Ese criterio es más importante que memorizar clamp().

7 - breakpoints:

actual: @media (max-width: 720px) {}

necesarios:
mobile
tablet
desktop
large desktop

8 - utilities de grid podria ser util, y utilizat repeat(auto-fit, minmax(...)).

9 - refacfor en utilidades flex.

10 - eliminar form.css.

11 - deudas de desarrollo /*outline: auto;*/.

12 - transitions en variables y no utilizar all.

13 - accesibilidad:

botones con icono → aria-label
imágenes → alt
focus visible
navegación por teclado
contraste
button vs div
elementos interactivos reales
aria-modal
cierre de modal con Escape
labels de inputs
estados disabled
prefers-reduced-motion

14 - hero e info, responsive urgente: 
.hero {
    height: 70vh;
}

.hero__image {
    height: 90vh;
}

probar: 
390 × ...
768 × ...
1024 × ...
1440 × ...

15 - duplicaciones en novedades:

.novedades
.novedades__container
.novedades__list

padding
border-radius
background
box-shadow
width

16 - section {outline: none;}

17 - 
🟡 Nivel junior / mejorable
Sistema de breakpoints.
Responsive.
Consistencia de tokens.
Grid.
Accesibilidad.
Limpieza de CSS.
Variables inexistentes.
Convenciones de nombres.
Algunas abstracciones.
Algunas decisiones todavía experimentales.
🔴 Cosas que arreglaría antes de V1
Overflow horizontal / responsive.
Contenedores demasiado grandes en móvil.
Tokens CSS inconsistentes o inexistentes.
Propiedades CSS inválidas.
Limpiar debug CSS.
Revisar grids.
Revisar cards en móvil.
Revisar Hero/Info en móvil.
Accesibilidad básica.
Eliminar abstracciones que ya no aportan, como probablemente Form.

Java Script - React:

1 - react-router -> react-router-dom.

2 - Favorites no funciona, realizar mock data de favorites y solucionarlo.

3 - rediseño a episodes y eliminacion de season en mock data.

4 - revisar y terminar carousel.
const maxPosition = Math.max(
    0,
    Math.ceil(data.length / itemsPerPage) - 1
);

5 - <Button type="submit" /> en forms.

6 - Input preparado para funcionar: 
name
value
onChange
id
disabled
<Input
    name="username"
    value={username}
    onChange={...}
/>

7 - mejora modal: 
Escape
bloqueo del scroll
focus
aria
botón de cerrar
click fuera
animaciones más robustas

8 - Eliminar Form.jsx.

9 - clamp() no sustituye el responsive del carrusel: el itemsPerPage de React y el ancho disponible deben seguir siendo compatibles.

cards, antes: /* card.css */

/* clases base */
.card {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: var(--radius-s);
    transition: var(--transition-card);
}

.card__container {
    position: relative;
    z-index: 0;
    overflow: visible;
    border-radius: var(--radius-s);
}

.card__meta {
    position: relative;
    min-height: var(--meta-min-height);
    inset: 0;
    background: var(--card-meta-bg);
    color: var(--card-meta-color);
    padding: var(--space-2xs) var(--space-2xs);
    margin-top: auto;
    white-space: nowrap;
}

.card__meta h4 {
    font-size: var(--card-title-size);
    margin: 0;
}

.card__meta-hidden {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    font-size: var(--card-text-size);
    margin: 0;
    outline: auto;
}

.card__actions {
    gap: var(--space-2xs);
}

/* size */
.card--size-1 {
    width: var(--space-3xl);
    --card-title-size: var(--font-size-s);
    --card-text-size: var(--font-size-2xs);
}

.card--size-2 {
    width: var(--container-3xs);
    --card-title-size: var(--font-size-m);
    --card-text-size: var(--font-size-xs);
}

.card--size-3 {
    width: var(--container-2xs);
    --card-title-size: var(--font-size-m);
    --card-text-size: var(--font-size-xs);
}

/* layout */
.card--layout-vertical {
    aspect-ratio: 3 / 4;
    --meta-min-height: 32%;
    --card-increase-x-value: 1.7;
    --card-increase-y-value: 1.1;
}

.card--layout-horizontal {
    aspect-ratio: 16 / 9;
    --meta-min-height: 40%;
    --card-increase-x-value: 1.5;
    --card-increase-y-value: 1.5;
}

.card--layout-horizontal.card--size-1 {
    width: var(--space-3xl);
}

.card--layout-horizontal.card--size-2 {
    width: var(--container-2xl);
}

.card--layout-horizontal.card--size-3 {
    width: var(--container-3xl);
}

/* variant */
.card--variant-default {
    --card-meta-color: var(--text-default);
    --card-meta-bg: var(--gradient-1);
}

.card--variant-secondary {
    --card-meta-color: var(--text-default);
    --card-meta-bg: var(--gradient-2);
}

/* utilities */

/**/
.card__container:hover {
    z-index: 10;
}

.card__container:hover .card {
    width: calc(100% * var(--card-increase-x-value));
    height: calc(100% * var(--card-increase-y-value));
    box-shadow: var(--shadow-l);
    left: calc((1 - var(--card-increase-x-value)) * 50%);
    top: calc((1 - var(--card-increase-y-value)) * 50%);
}

.card__container:hover .card__meta {
    height: 50%;
    padding-block: var(--space-2xs);
    gap: var(--space-2xs);
}

.card__container:hover .card__meta-hidden {
    opacity: 1;
    max-height: 6rem;
}

.card__container:focus .card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--accent-default);
    background-size: cover;
    outline: auto;
}