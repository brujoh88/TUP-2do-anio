# Resumen Unidad 1: HTML Semántico y Accesibilidad

## Programación III

---

## 1. ¿Qué es HTML?

**HyperText Markup Language** - Un lenguaje de marcado (no de programación).

Dos conceptos fundamentales:
- **Hipertexto:** Capacidad de enlazar páginas web entre sí
- **Lenguaje de Marcado:** Sistema de etiquetas para definir estructura y significado del contenido

### Proceso de renderizado

1. **Solicitud:** El navegador solicita el archivo (URL o carga local)
2. **Interpretación:** El navegador lee el código línea por línea y procesa las etiquetas
3. **Renderizado:** El navegador muestra el contenido organizado al usuario

---

## 2. Estructura del documento HTML5

```html
<!DOCTYPE html>          <!-- Declara el estándar HTML5 -->
<html lang="es">         <!-- Elemento raíz, idioma del documento -->
  <head>                 <!-- Metadatos (no visible al usuario) -->
    <meta charset="UTF-8">                              <!-- Codificación de caracteres (ñ, tildes) -->
    <meta name="viewport" content="width=device-width">  <!-- Control responsive -->
    <title>Título pestaña</title>                        <!-- Nombre en la pestaña del navegador -->
  </head>
  <body>                 <!-- Todo el contenido visible -->
  </body>
</html>
```

### Anatomía de una etiqueta

- Etiqueta de apertura: `<p>`
- Contenido: Texto o elementos internos
- Etiqueta de cierre: `</p>`
- **Excepción:** Etiquetas vacías/autocerradas (ej. `<img>`, `<br>`, `<hr>`) no requieren cierre

---

## 3. Elementos de texto

### Encabezados

| Etiqueta | Uso |
|----------|-----|
| `<h1>` | Encabezado principal (uno solo por documento, importante para SEO) |
| `<h2>` a `<h6>` | Sub-encabezados (pueden repetirse según necesidad) |

### Párrafos y saltos

| Etiqueta | Uso |
|----------|-----|
| `<p>` | Bloque de párrafo (el navegador agrega espaciado automático) |
| `<br>` | Salto de línea (autocerrada, fuerza salto sin nuevo párrafo) |
| `<hr>` | Línea horizontal (separador visual de secciones) |

### Formato de texto y semántica

| Etiqueta | Tipo | Uso |
|----------|------|-----|
| `<strong>` | Semántica | Importancia semántica (negrita + indica dato crucial) |
| `<b>` | Visual | Solo visual (negrita sin significado semántico) |
| `<em>` | Semántica | Énfasis verbal (indica tono acentuado al leer) |
| `<i>` | Visual | Texto técnico, idioma extranjero o pensamientos |
| `<mark>` | Semántica | Resalta texto como marcador fluorescente |
| `<ins>` | Semántica | Texto insertado (generalmente subrayado) |
| `<small>` | Visual | Tamaño de fuente menor (comentarios, letra chica) |
| `<u>` | Visual | Texto subrayado |

---

## 4. Listas

### Lista ordenada (`<ol>`)

- Usa números o letras para secuencia jerárquica
- Ideal para: pasos, instrucciones, rankings, secuencias
- El navegador asigna índices automáticamente

### Lista desordenada (`<ul>`)

- Usa viñetas para ítems no jerárquicos
- Ideal para: características, ingredientes, puntos clave donde el orden no importa

### Ítem de lista (`<li>`)

- Tanto `<ol>` como `<ul>` contienen ítems `<li>`
- Nunca usar guiones manuales en lugar de etiquetas `<li>`

---

## 5. Rutas de archivos

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Absoluta** | Dirección completa incluyendo protocolo y dominio | `https://ejemplo.com/imagen.jpg` |
| **Relativa** | Ubicación relativa al documento HTML actual | `assets/imagen.jpg` |

---

## 6. Multimedia

### Imágenes (`<img>`)

Elemento vacío autocerrado. Atributos clave:
- `src` - Ruta de la imagen
- `alt` - Descripción textual (crucial para accesibilidad y SEO)
- `width` / `height` - Dimensiones visuales

### Video (`<video>`) y Audio (`<audio>`)

Atributos esenciales:
- `controls` - Muestra interfaz de reproducción (play, pausa, volumen)
- `autoplay` - Reproduce automáticamente (generalmente requiere `muted`)
- `loop` - Reproducción infinita
- `<source>` - Soporte de múltiples formatos para compatibilidad

### Hipervínculos (`<a>`)

- `href` - URL de destino
- **Tipos:** Externos (otros sitios), internos (secciones del mismo sitio), especiales (`mailto:`, teléfono)
- `target="_blank"` - Abre enlace en nueva pestaña

---

## 7. Formularios

### Elemento `<form>`

Componente interactivo para recopilar datos del usuario.
- `action` - URL del servidor donde se envían los datos
- `method` - Método HTTP (comúnmente POST)

### Tipos de input y validación semántica

HTML5 provee validación implícita según el tipo:

| Tipo | Descripción |
|------|-------------|
| `type="text"` | Caracteres alfanuméricos |
| `type="email"` | Valida formato de email (requiere @) |
| `type="number"` | Solo valores numéricos |
| `type="file"` | Subida de archivos (combinar con `accept` para limitar formatos) |

### `<textarea>`

Para mensajes largos/comentarios. Define filas y columnas para bloques de texto extensos.

### Atributos de validación del lado del cliente

| Atributo | Función |
|----------|---------|
| `required` | Impide envío si el campo está vacío |
| `minlength` / `maxlength` | Mínimo/máximo de caracteres para campos de texto |
| `min` / `max` | Mínimo/máximo para inputs numéricos |
| `pattern` | Validación con expresión regular para formato estricto |

### Accesibilidad y UX en formularios

| Elemento/Atributo | Función |
|-------------------|---------|
| `<label>` + `for` | Texto descriptivo asociado al input (el `for` debe coincidir con el `id` del input) |
| `placeholder` | Texto de ejemplo temporal dentro del campo |
| `title` | Tooltip al pasar el mouse (explica formato requerido) |
| `<fieldset>` | Agrupa controles relacionados visual y semánticamente |
| `<legend>` | Título del grupo fieldset (ej. "Datos Personales") |
| `<button type="submit">` | Dispara todas las validaciones HTML antes de enviar |

---

## 8. Tablas

### Uso correcto vs. incorrecto

- **Correcto:** Solo datos tabulares (listas de precios, horarios, calendarios, estadísticas)
- **Incorrecto:** Nunca para diseño/layout de página (usar CSS en su lugar)

### Elementos básicos

| Etiqueta | Función |
|----------|---------|
| `<table>` | Contenedor principal |
| `<tr>` | Fila de tabla (línea horizontal) |
| `<th>` | Celda de encabezado (negrita/centrada, título de columna) |
| `<td>` | Celda de datos (contenido estándar) |

### Estructura semántica

| Etiqueta | Función |
|----------|---------|
| `<thead>` | Agrupa filas de encabezado (títulos de columnas) |
| `<tbody>` | Agrupa filas de datos principales |
| `<tfoot>` | Agrupa filas de pie (resúmenes, totales) |

### Fusión de celdas

- `colspan` - Celda abarca múltiples columnas horizontalmente
- `rowspan` - Celda abarca múltiples filas verticalmente

---

## 9. HTML5 Semántico

### ¿Qué es HTML semántico?

Usar etiquetas que describan claramente su propósito y el significado del contenido, en lugar de usar `<div>` genéricos para todo.

### Ventajas

1. **Accesibilidad:** Lectores de pantalla navegan e interpretan mejor el contenido
2. **SEO:** Los motores de búsqueda entienden la estructura y relevancia, mejorando el posicionamiento
3. **Mantenibilidad:** El código es más legible para los desarrolladores

### Etiquetas estructurales HTML5

| Etiqueta | Función |
|----------|---------|
| `<header>` | Encabezado del sitio/sección (logo, título, a veces navegación) |
| `<nav>` | Bloques de navegación con enlaces/menús principales |
| `<main>` | Contenido principal único (solo uno por documento) |
| `<section>` | Agrupación temática de contenido (capítulos, secciones lógicas) |
| `<article>` | Contenido independiente y autónomo (distribuible de forma aislada) |
| `<aside>` | Contenido tangencial/complementario (barras laterales, publicidades) |
| `<footer>` | Pie de página (copyright, links legales, info de contacto) |

### `<section>` vs `<article>`

- `<section>` agrupa contenido **relacionado** (ej. "Sobre Nosotros", "Servicios")
- `<article>` es contenido **independiente** que podría distribuirse por separado (ej. un post de blog)

---

## Preguntas de repaso

**1.** ¿Qué es HTML y cuáles son sus dos conceptos fundamentales?

<details>
<summary>Ver respuesta</summary>

HyperText Markup Language. Sus dos conceptos son: **Hipertexto** (capacidad de enlazar páginas web) y **Lenguaje de Marcado** (sistema de etiquetas para definir estructura y significado).
</details>

**2.** ¿Cuál es la diferencia entre `<strong>` y `<b>`?

<details>
<summary>Ver respuesta</summary>

`<strong>` tiene importancia semántica (negrita + indica dato crucial para lectores de pantalla y SEO). `<b>` es solo visual (negrita sin significado semántico).
</details>

**3.** ¿Cuál es la diferencia entre `<em>` e `<i>`?

<details>
<summary>Ver respuesta</summary>

`<em>` indica énfasis verbal (tono acentuado al leer). `<i>` es para texto técnico, idioma extranjero o pensamientos (cursiva sin énfasis especial).
</details>

**4.** ¿Cuándo usar `<ol>` y cuándo `<ul>`?

<details>
<summary>Ver respuesta</summary>

`<ol>` cuando el orden importa (pasos, instrucciones, rankings). `<ul>` cuando el orden no importa (características, ingredientes, puntos clave).
</details>

**5.** ¿Cuáles son los atributos esenciales de `<img>`?

<details>
<summary>Ver respuesta</summary>

`src` (ruta de la imagen), `alt` (descripción textual para accesibilidad y SEO), y opcionalmente `width`/`height` (dimensiones).
</details>

**6.** ¿Qué hace el atributo `required` en un formulario?

<details>
<summary>Ver respuesta</summary>

Impide que el formulario se envíe si el campo está vacío. Es una validación del lado del cliente que el navegador ejecuta automáticamente.
</details>

**7.** ¿Cuál es la diferencia entre ruta absoluta y relativa?

<details>
<summary>Ver respuesta</summary>

**Absoluta:** Dirección completa con protocolo y dominio (https://ejemplo.com/imagen.jpg). **Relativa:** Ubicación respecto al documento HTML actual (assets/imagen.jpg).
</details>

**8.** ¿Por qué no se deben usar tablas para diseño de página?

<details>
<summary>Ver respuesta</summary>

Las tablas son solo para datos tabulares. Para diseño y layout se debe usar CSS (Flexbox, Grid). Usar tablas para layout es una práctica obsoleta que afecta la accesibilidad y el mantenimiento.
</details>

**9.** ¿Cuál es la diferencia entre `<section>` y `<article>`?

<details>
<summary>Ver respuesta</summary>

`<section>` agrupa contenido relacionado temáticamente. `<article>` es contenido independiente y autónomo que podría distribuirse de forma aislada (ej. un post de blog, una noticia).
</details>

**10.** ¿Cuáles son las 3 ventajas del HTML semántico?

<details>
<summary>Ver respuesta</summary>

1. **Accesibilidad:** Lectores de pantalla navegan e interpretan mejor. 2. **SEO:** Motores de búsqueda entienden estructura y relevancia. 3. **Mantenibilidad:** Código más legible y fácil de mantener.
</details>

**11.** ¿Para qué sirven `<thead>`, `<tbody>` y `<tfoot>`?

<details>
<summary>Ver respuesta</summary>

`<thead>` agrupa las filas de encabezado (títulos de columnas). `<tbody>` agrupa las filas de datos principales. `<tfoot>` agrupa filas de pie (resúmenes, totales, información complementaria).
</details>

**12.** ¿Qué hace `<label>` y cómo se asocia a un input?

<details>
<summary>Ver respuesta</summary>

`<label>` es texto descriptivo para un input. Se asocia mediante el atributo `for` que debe coincidir exactamente con el `id` del input. Mejora la accesibilidad (lectores de pantalla) y aumenta el área clickeable.
</details>
