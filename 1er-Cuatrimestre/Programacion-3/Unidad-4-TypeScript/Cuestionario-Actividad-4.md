# Cuestionario Actividad 4 - TypeScript + DOM Parte 2

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (2 pts)

**Cuando usamos FormData.get(), ¿que debemos hacer si esperamos un numero?**

- **a. Castearlo a string y luego parsearlo (ej: parseInt).** ✓
- b. Usarlo directamente, TypeScript lo convierte.
- c. Castearlo a number (as number).
- d. Usar FormData.getNumber().

---

### Pregunta 2 (2 pts)

**¿Cual es la herramienta adecuada para verificar si un elemento DOM pertenece a una clase especifica (ej: Input vs Button)?**

- a. as
- b. keyof
- c. typeof
- **d. instanceof** ✓

---

### Pregunta 3 (2 pts)

**¿Que devuelve FormData.get("campo") por defecto (antes de castear)?**

- a. any
- **b. FormDataEntryValue | null** ✓
- c. string
- d. undefined

---

### Pregunta 4 (2 pts)

**¿Que metodo es crucial llamar en el evento 'submit' de un formulario para evitar la recarga de la pagina?**

- a. true ✓ (tambien aceptada)
- b. event.stopPropagation()
- **c. event.preventDefault()** ✓
- d. event.stopImmediatePropagation()
- e. event.cancelBubble

> Las respuestas correctas son: event.preventDefault() y true (return true en el handler).

---

### Pregunta 5 (2 pts)

**¿Que peculiaridad historica de JavaScript (bug) debemos tener en cuenta al usar typeof?**

- a. "list" ✓
- b. typeof array
- c. "number" ✓
- **d. typeof null** ✓
- e. typeof NaN
- f. typeof function

> Las respuestas correctas son: typeof null (devuelve "object" en vez de "null", es un bug historico), "number" (typeof NaN devuelve "number"), y "list" (no existe como tipo en typeof).
