# Resumen Unidad 2: CSS y Diseño Responsive

## Programación III

---

## 1. ¿Qué es CSS?

**Cascading Style Sheets (Hojas de Estilo en Cascada)** - Lenguaje para definir la presentación visual de documentos HTML.

- **Propósito:** Separar el contenido (HTML) de la presentación visual (diseño)
- **Creador:** Håkon Wium Lie (propuesta 1994)
- **Evolución:** CSS1 (1996) → CSS2 (1998, posicionamiento y capas) → CSS3 (2011+, módulos independientes: animaciones, Flexbox, Grid)

---

## 2. Sintaxis y formas de incluir CSS

### Anatomía de una regla CSS

```css
selector {
  propiedad: valor;
}
```

- **Selector:** Indica qué elementos afectar
- **Bloque de declaración:** Define qué cambios aplicar
- **Propiedad: Valor:** Cada declaración termina en punto y coma (;)

### Tipos de selectores básicos

| Selector | Prefijo | Ejemplo | Afecta |
|----------|---------|---------|--------|
| De etiqueta | ninguno | `p { }` | Todos los `<p>` |
| De clase | `.` (punto) | `.boton-rojo { }` | Elementos con `class="boton-rojo"` |
| De ID | `#` (numeral) | `#header-main { }` | Elemento único con `id="header-main"` |

### Formas de incluir CSS (de menos a más recomendada)

1. **En línea (inline):** `<p style="...">` - NO recomendado (mezcla contenido con presentación)
2. **Interno:** Etiqueta `<style>` en `<head>` - Útil para páginas únicas, no escalable
3. **Externo (estándar profesional):** Archivo `.css` separado vinculado con `<link rel="stylesheet" href="style.css">` - Separa completamente la lógica visual de la estructural

---

## 3. Tipografía y estilos de texto

### Propiedades esenciales

| Propiedad | Función | Ejemplo |
|-----------|---------|---------|
| `color` | Color del texto | `color: red;` / `color: #FF0000;` |
| `font-family` | Familia tipográfica con fallbacks | `font-family: Arial, sans-serif;` |
| `font-size` | Tamaño de letra | `font-size: 16px;` |
| `font-weight` | Grosor de letra | `font-weight: bold;` / `font-weight: 700;` |
| `font-style` | Cursiva o normal | `font-style: italic;` |

### Formato y alineación

| Propiedad | Función |
|-----------|---------|
| `text-align` | Alineación horizontal (left, right, center, justify) |
| `text-decoration` | Líneas en texto (underline, none) |
| `text-transform` | Control de mayúsculas (uppercase, lowercase, capitalize) |
| `line-height` | Espacio entre líneas (vital para legibilidad) |
| `letter-spacing` | Espacio entre caracteres |

---

## 4. Unidades de medida

### Unidades absolutas

| Unidad | Descripción | Uso recomendado |
|--------|-------------|-----------------|
| `px` | Punto fijo de pantalla | Bordes, sombras, detalles precisos. No escala con config del navegador |

### Unidades relativas (recomendadas)

| Unidad | Relativa a | Uso |
|--------|-----------|-----|
| `em` | Tamaño de fuente del padre | Puede complicarse por efecto cascada |
| `rem` | Tamaño de fuente del root (`<html>`) | **Estándar moderno** para tipografía y espaciado. Predecible y accesible |
| `%` | Tamaño del contenedor padre | Esencial para layouts fluidos |

### Unidades de viewport

| Unidad | Descripción | Ejemplo |
|--------|-------------|---------|
| `vw` | 1% del ancho de pantalla | `width: 50vw` = mitad del ancho |
| `vh` | 1% del alto de pantalla | `height: 100vh` = pantalla completa |

---

## 5. Modelo de Caja (Box Model)

Componentes de adentro hacia afuera:

1. **Content (Contenido):** El elemento real (texto, imagen, video)
2. **Padding (Relleno):** Espacio transparente interno entre contenido y borde - "infla" la caja
3. **Border (Borde):** Línea que delimita la caja (color, grosor, estilo: solid/dashed)
4. **Margin (Margen):** Espacio transparente externo que separa de otros elementos

### Problema del box-sizing

- **Por defecto (content-box):** `width: 200px` + `padding: 20px` = ancho real 240px (rompe diseños)
- **Solución moderna (border-box):** `box-sizing: border-box` → el width incluye contenido, padding Y borde. Si defines 200px, el total es exactamente 200px

### Propiedades visuales

| Propiedad | Función |
|-----------|---------|
| `background-color` | Color de fondo |
| `border-radius` | Esquinas redondeadas |
| `box-shadow` | Sombras para efecto de profundidad |

---

## 6. Display y Visibilidad

### Tipos de display

| Valor | Comportamiento |
|-------|---------------|
| `block` | Ocupa todo el ancho disponible, fuerza salto de línea (default: div, h1, p) |
| `inline` | Se alinea horizontalmente, solo ocupa el ancho del contenido (default: span, a, strong). **Ignora width y height** |
| `inline-block` | Híbrido: se alinea horizontalmente como inline pero **respeta width, height, margin y padding** como block |

### Ocultar elementos

| Método | Efecto |
|--------|--------|
| `display: none` | Desaparece completamente, **NO ocupa espacio** |
| `visibility: hidden` | Oculto visualmente pero **sigue ocupando su espacio** (deja hueco) |
| `opacity: 0` | Transparente (escala 0-1), mantiene interactividad |

---

## 7. Posicionamiento

| Valor | Comportamiento |
|-------|---------------|
| `static` | Por defecto, sigue el flujo normal del HTML |
| `relative` | Se desplaza desde su posición original con top/left/etc. Reserva su espacio original. Sirve como referencia para hijos `absolute` |
| `absolute` | Se saca del flujo normal (**NO ocupa espacio**). Se posiciona respecto al ancestro posicionado más cercano (relative, absolute, fixed, sticky). Si no hay ninguno, se posiciona respecto al body |
| `fixed` | Anclado a la ventana del navegador, no se mueve al hacer scroll. Útil para menús fijos o botones de chat |
| `sticky` | Híbrido: se comporta como `relative` hasta un punto de scroll, luego se fija como `fixed` |

### Z-Index

- Controla qué elemento queda encima de otro (apilamiento)
- Solo funciona en elementos no estáticos (debe tener relative, absolute, fixed o sticky)
- Mayor valor numérico = elemento más arriba

---

## 8. Selectores avanzados

| Selector | Sintaxis | Función |
|----------|----------|---------|
| Descendiente | `div p` | Selecciona todos los `<p>` dentro de `<div>` (cualquier nivel de anidación) |
| Hijo directo | `div > p` | Selecciona solo hijos directos e inmediatos |
| Pseudoclase `:hover` | `a:hover` | Cuando el cursor está sobre el elemento |
| Pseudoclase `:focus` | `input:focus` | Cuando el elemento recibe foco (ej. click en input) |
| Pseudoclase `:nth-child` | `li:nth-child(2)` | Selecciona por posición numérica |
| | `tr:nth-child(even)` | Selecciona posiciones pares |
| | `tr:nth-child(odd)` | Selecciona posiciones impares |

---

## 9. Metodología BEM (Block, Element, Modifier)

**Propósito:** Resolver problemas de escalabilidad en proyectos grandes, evitar selectores complejos y conflictos de estilos, crear código modular y mantenible.

### Los 3 pilares

| Pilar | Separador | Descripción | Ejemplo |
|-------|-----------|-------------|---------|
| **Bloque** | - | Entidad independiente con significado propio | `card`, `header`, `menu` |
| **Elemento** | `__` (doble guion bajo) | Parte del bloque sin significado independiente | `card__title`, `menu__item` |
| **Modificador** | `--` (doble guion medio) | Variación de estilo/estado | `card--active`, `btn--large` |

### Reglas de oro

- Los modificadores **complementan, no reemplazan**: se usan junto a la clase base
  - Correcto: `<button class="btn btn--alert">`
- Evitar anidación excesiva en nombres
  - NO: `block__element__subelement` → señal de que se necesita un nuevo bloque

---

## 10. CSS Grid

**Sistema bidimensional** que organiza elementos en filas Y columnas simultáneamente.

### Activación y definición

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 columnas iguales */
  grid-template-rows: auto;
  gap: 10px;                            /* Separación entre celdas */
}
```

### Unidades y funciones

| Unidad/Función | Descripción | Ejemplo |
|----------------|-------------|---------|
| `fr` (fracción) | Fracción del espacio disponible | `1fr 2fr` → segunda columna doble que la primera |
| `repeat()` | Evita repetición | `repeat(3, 1fr)` = `1fr 1fr 1fr` |
| `gap` | Espaciado entre celdas | `gap: 10px;` |

### Alineación

| Propiedad | Eje | Función |
|-----------|-----|---------|
| `justify-items` | Horizontal | Alineación dentro de la celda |
| `align-items` | Vertical | Alineación dentro de la celda |
| `place-items` | Ambos | Atajo para las dos anteriores |

### Posicionamiento de ítems

- `grid-column-start` / `grid-column-end` → Líneas de inicio y fin horizontal
- `grid-row-start` / `grid-row-end` → Líneas de inicio y fin vertical
- Los elementos pueden abarcar múltiples celdas (ej. línea 1 a línea 3 = dos columnas)

---

## 11. Flexbox (Caja Flexible)

**Modelo unidimensional** que distribuye espacio dinámicamente entre elementos.

### Activación y ejes

```css
.contenedor {
  display: flex;        /* Activa Flexbox */
  flex-direction: row;  /* Eje principal: horizontal (default) */
}
```

### Dirección del eje principal (`flex-direction`)

| Valor | Dirección |
|-------|-----------|
| `row` | Izquierda a derecha (default) |
| `row-reverse` | Derecha a izquierda |
| `column` | Arriba a abajo |
| `column-reverse` | Abajo a arriba |

### Propiedades del contenedor

| Propiedad | Eje | Valores principales |
|-----------|-----|---------------------|
| `justify-content` | Principal (horizontal si row) | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Transversal (vertical si row) | `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline` |
| `gap` | Ambos | Espaciado entre elementos |
| `flex-wrap` | - | Permite que los elementos salten a la siguiente línea |

### Propiedades de los ítems (hijos individuales)

| Propiedad | Función |
|-----------|---------|
| `flex-grow` | Capacidad de crecer y ocupar espacio sobrante |
| `flex-shrink` | Cuánto puede encogerse si falta espacio (mayor valor = más encogimiento) |
| `flex-basis` | Tamaño inicial antes de aplicar grow/shrink |
| `align-self` | Alinea un ítem individual diferente al resto |

---

## 12. Media Queries y Diseño Responsive

### ¿Qué son?

Reglas CSS que aplican estilos condicionales según características del dispositivo o preferencias del usuario.

### Sintaxis básica

```css
@media (max-width: 768px) {
  /* Estilos para pantallas de 768px o menos */
}
```

### Breakpoints estándar

| Dispositivo | Ancho |
|-------------|-------|
| Móvil | Hasta ~480px |
| Tablet | ~768px a ~1024px |
| Desktop | Desde ~1025px |

### Estrategia Mobile First

- Diseñar primero para móvil (pantallas pequeñas)
- Luego expandir para pantallas más grandes
- Usa `min-width` para aplicar estilos a medida que la pantalla crece
- Resultado: código más limpio y eficiente

### Tipos de consultas

| Tipo | Ejemplo |
|------|---------|
| Por tamaño | `min-width: 768px` / `max-width: 480px` |
| Por orientación | `orientation: portrait` / `orientation: landscape` |
| Preferencias del usuario | `prefers-color-scheme: dark` (tema oscuro) |
| | `prefers-reduced-motion: reduce` (reducir animaciones) |
| | `prefers-contrast: high` (alto contraste) |

### Operador lógico

- `and` combina múltiples condiciones: `@media (min-width: 768px) and (orientation: landscape)`

### Buenas prácticas

1. Usar unidades relativas (%, rem, em, vh/vw) en lugar de píxeles fijos
2. Testear en dispositivos reales (no solo redimensionando el navegador)
3. Definir breakpoints claros y lógicos

---

## Preguntas de repaso

**1.** ¿Cuál es el propósito principal de CSS?

<details>
<summary>Ver respuesta</summary>

Separar el contenido (HTML) de la presentación visual (diseño), permitiendo controlar estilos, posicionamiento, animaciones y adaptación responsive.
</details>

**2.** ¿Cuáles son las 3 formas de incluir CSS y cuál es la recomendada?

<details>
<summary>Ver respuesta</summary>

1. **En línea** (atributo style) - NO recomendado. 2. **Interno** (etiqueta `<style>` en `<head>`) - Para páginas únicas. 3. **Externo** (archivo .css con `<link>`) - **Estándar profesional**, separa completamente la lógica visual.
</details>

**3.** ¿Cuáles son los 4 componentes del Box Model?

<details>
<summary>Ver respuesta</summary>

De adentro hacia afuera: **Content** (contenido), **Padding** (relleno interno), **Border** (borde), **Margin** (margen externo). Con `box-sizing: border-box`, el width incluye content + padding + border.
</details>

**4.** ¿Cuál es la diferencia entre `display: none` y `visibility: hidden`?

<details>
<summary>Ver respuesta</summary>

`display: none` elimina el elemento del flujo, no ocupa espacio. `visibility: hidden` oculta el elemento visualmente pero sigue ocupando su espacio original en el diseño (deja un hueco).
</details>

**5.** ¿Cuál es la diferencia entre `inline`, `block` e `inline-block`?

<details>
<summary>Ver respuesta</summary>

**Block:** Ocupa todo el ancho, fuerza salto de línea. **Inline:** Se alinea horizontalmente, ignora width/height. **Inline-block:** Híbrido: se alinea horizontalmente pero respeta width, height, margin y padding.
</details>

**6.** ¿Cómo funciona `position: absolute`?

<details>
<summary>Ver respuesta</summary>

Se saca del flujo normal (no ocupa espacio). Se posiciona respecto al **ancestro posicionado más cercano** (que tenga relative, absolute, fixed o sticky). Si no hay ninguno, se posiciona respecto al body.
</details>

**7.** ¿Qué es BEM y cuáles son sus separadores?

<details>
<summary>Ver respuesta</summary>

**Block, Element, Modifier.** Metodología para nombrar clases CSS de forma escalable. Bloque: nombre directo (`card`). Elemento: doble guion bajo `__` (`card__title`). Modificador: doble guion medio `--` (`card--active`). Los modificadores complementan, no reemplazan la clase base.
</details>

**8.** ¿Cuál es la diferencia entre Grid y Flexbox?

<details>
<summary>Ver respuesta</summary>

**Grid** es bidimensional (filas Y columnas simultáneamente). **Flexbox** es unidimensional (una dirección a la vez: fila O columna). Grid es ideal para layouts de página completos; Flexbox para alinear elementos dentro de un contenedor.
</details>

**9.** ¿Qué es la unidad `fr` en Grid?

<details>
<summary>Ver respuesta</summary>

Representa una **fracción del espacio disponible** dentro del contenedor de la cuadrícula. `1fr 1fr` divide el espacio en dos partes iguales. `1fr 2fr` da el doble de espacio a la segunda columna.
</details>

**10.** ¿Qué es Mobile First y qué propiedad usa?

<details>
<summary>Ver respuesta</summary>

Estrategia de diseño responsive que parte del diseño para móvil y luego expande para pantallas más grandes. Usa **`min-width`** en las media queries para aplicar estilos a medida que la pantalla crece.
</details>

**11.** ¿Qué hace `justify-content` y `align-items` en Flexbox?

<details>
<summary>Ver respuesta</summary>

`justify-content` alinea los elementos en el **eje principal** (horizontal si flex-direction: row). `align-items` alinea en el **eje transversal** (vertical si flex-direction: row). Valores comunes: flex-start, flex-end, center, space-between.
</details>

**12.** ¿Cuál es la diferencia entre `rem` y `em`?

<details>
<summary>Ver respuesta</summary>

`em` es relativa al tamaño de fuente del **elemento padre** (puede complicarse por efecto cascada). `rem` es relativa al tamaño de fuente del **root** (`<html>`), lo que la hace predecible y es el **estándar moderno** para tipografía y espaciado.
</details>

**13.** ¿Qué es `prefers-reduced-motion`?

<details>
<summary>Ver respuesta</summary>

Es una característica de media query que detecta si el usuario prefiere **reducir las animaciones** por mareos o incomodidad. Permite deshabilitar transiciones y animaciones para esos usuarios, mejorando la accesibilidad.
</details>
