CSS:

1 - episodios, peliculas, comentarios, novedades, favoritos, user

7 - breakpoints:

actual: @media (max-width: 720px) {}

necesarios:
mobile
tablet
desktop
large desktop

8 - utilities de grid podria ser util, y utilizar repeat(auto-fit, minmax(...)).

9 - refactor en utilidades flex.

11 - deudas de desarrollo /*outline: auto;*/.

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

15 - duplicaciones en novedades:

.novedades
.novedades__container
.novedades__list

padding
border-radius
background
box-shadow
width

17 - 
🟡 Nivel junior / mejorable
Sistema de breakpoints.
Responsive.
Consistencia de tokens.
Grid.
Accesibilidad.
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

Java Script - React:

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

10 - Terminar Season.

11 - animeDetail: proteccion contra id inexistente:

const anime = Object.values(dataAnime).find(
    item => item.id == animeId
);

12 - realizar <Notfound/>

13 - animePlayer funcionando.

14 - separacion y mejora a mockdata.

15 - 🔴 Bugs/cosas obligatorias
[ ] Cambiar react-router → react-router-dom
[ ] arreglar Favorites
[ ] eliminar seasons roto del mock
[ ] proteger AnimeDetail contra ID inexistente
[ ] proteger AnimePlayer contra ID inexistente
[ ] revisar Carousel con 5/8/10 elementos
[ ] corregir Badge.__icon
[ ] añadir className a Badge
[ ] añadir type a Button
🟠 Limpieza antes de cerrar
[ ] eliminar Form
[ ] separar mock data
[ ] añadir IDs a episodes
[ ] revisar navegación de Season
[ ] quitar links de testing del Header
[ ] quitar console.log
[ ] revisar nombres description/descripcion
[ ] revisar imports/exportaciones
🟢 Funcionalidad V1
[ ] Home
[ ] Movies
[ ] Series
[ ] Favorites mock
[ ] AnimeDetail
[ ] AnimePlayer
[ ] Header
[ ] Menu
[ ] Novedades
[ ] Login visual
[ ] Modal
[ ] Carousel
[ ] Actions
[ ] Seasons
[ ] Comments visuales.