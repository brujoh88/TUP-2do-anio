# Cuestionario - Actividad 2: BEM, Display, Selectores y Grid

Resultado: **10/10** (100%)

## Resumen rápido

| Concepto | Clave |
|----------|-------|
| `display: block` | Ocupa todo el ancho disponible y comienza en nueva línea |
| `position: sticky` | Híbrido: actúa como `relative` hasta un punto de scroll, luego se fija como `fixed` |
| `visibility: hidden` | Se oculta visualmente pero sigue ocupando su espacio original |
| `position: absolute` | Se posiciona respecto al ancestro posicionado más cercano |
| Combinador de hijo `>` | Selecciona solo hijos directos e inmediatos |
| BEM | Block, Element, Modifier (Bloque, Elemento, Modificador) |
| Modificador en BEM | Doble guion medio (`--`) |
| Unidad `fr` en Grid | Representa una fracción del espacio disponible en la cuadrícula |
| `:nth-child` | Selecciona elementos según su posición numérica o patrón (pares/impares) |
| `inline` vs `inline-block` | `inline-block` permite definir ancho y alto, `inline` no los respeta |

---

## Preguntas y respuestas

**1. ¿Cuál es el comportamiento por defecto de un elemento con `display: block`?**
- **Respuesta: Ocupa todo el ancho disponible de su contenedor y comienza en una nueva línea.**

**2. ¿Cómo se describe mejor el comportamiento de `position: sticky`?**
- **Respuesta: Es un híbrido: actúa como `relative` hasta un punto de desplazamiento (scroll), luego se fija como `fixed`.**

**3. ¿Qué sucede con el espacio que ocupa un elemento cuando se le aplica `visibility: hidden`?**
- **Respuesta: El elemento se oculta visualmente, pero sigue ocupando su espacio original en el diseño.**

**4. Cuando un elemento tiene `position: absolute`, ¿con respecto a qué elemento se posiciona?**
- **Respuesta: Al ancestro posicionado más cercano (que tenga position relative, absolute, fixed o sticky).**

**5. ¿Qué selector se utiliza para aplicar estilos únicamente a los hijos directos e inmediatos de un elemento padre (ej. `div > p`)?**
- **Respuesta: Combinador de hijo (`>`)**

**6. ¿Qué significan las siglas de la metodología BEM?**
- **Respuesta: Block, Element, Modifier (Bloque, Elemento, Modificador)**

**7. Según la metodología BEM, ¿qué separador se debe utilizar para un "Modificador"?**
- **Respuesta: Doble guion medio (`--`)**

**8. En CSS Grid, ¿qué función cumple la unidad `fr`?**
- **Respuesta: Representa una fracción del espacio disponible dentro del contenedor de la cuadrícula.**

**9. ¿Qué permite hacer la pseudo-clase `:nth-child`?**
- **Respuesta: Seleccionar elementos hermanos basándose en su posición numérica o patrón (pares/impares).**

**10. ¿Qué diferencia principal existe entre `display: inline` y `display: inline-block`?**
- **Respuesta: `inline-block` permite definir ancho y alto del elemento, mientras que `inline` no los respeta.**
