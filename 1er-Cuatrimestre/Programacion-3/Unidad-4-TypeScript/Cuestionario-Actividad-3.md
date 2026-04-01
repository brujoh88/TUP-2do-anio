# Cuestionario Actividad 3 - TypeScript DOM Parte 1

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (2 pts)

**¿Por que debemos validar si un elemento obtenido con querySelector existe (es decir, que no sea null)?**

- a. Porque TypeScript lanza un error de compilacion si no lo hacemos.
- **b. Para evitar errores en runtime al acceder a propiedades de null.** ✓
- c. No es necesario validar.
- d. Para activar el autocompletado del editor.

---

### Pregunta 2 (2 pts)

**¿Que propiedad es exclusiva de un HTMLButtonElement y no existe en un elemento generico?**

- a. style
- **b. disabled** ✓
- c. className
- d. id

---

### Pregunta 3 (2 pts)

**¿Que retorna document.querySelectorAll?**

- a. Un Array de elementos.
- b. null si no encuentra nada.
- c. Un objeto HTMLCollection.
- **d. Una NodeList, que siempre existe (puede estar vacia).** ✓

---

### Pregunta 4 (2 pts)

**¿Que sintaxis se usa para especificar el tipo exacto de elemento en una seleccion del DOM?**

- **a. querySelector&lt;HTMLDivElement&gt;("div")** ✓
- b. querySelector: HTMLDivElement("div")
- c. querySelector("div").type(Div)
- d. querySelector("div") as Div

> **Nota:** La respuesta correcta usa generics: `querySelector<HTMLDivElement>("div")`. La opcion `as Div` es Type Assertion pero no es la sintaxis correcta (seria `as HTMLDivElement`). En el cuestionario la opcion a) mostraba `querySelector("div")` pero se refiere a la version con generic type parameter.

---

### Pregunta 5 (2 pts)

**¿Que tipo de evento especifico nos da acceso a propiedades como key y code?**

- a. TouchEvent
- **b. KeyboardEvent** ✓
- c. InputEvent
- d. MouseEvent
