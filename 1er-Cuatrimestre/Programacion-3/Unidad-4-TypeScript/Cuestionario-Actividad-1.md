# Cuestionario Actividad 1 - TypeScript

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (2 pts)

**¿Cual es el tipo de retorno correcto para una funcion que no devuelve ningun valor?**

- a. null
- b. any
- **c. void** ✓
- d. undefined

> Cuando una funcion no devuelve nada, se usa `void` como tipo de retorno para documentar la intencion.

---

### Pregunta 2 (2 pts)

**¿Que comando activa el "Watch Mode" para que TypeScript recompile automaticamente al detectar cambios?**

- a. node app.js
- b. npm start
- **c. tsc -w** ✓
- d. tsc --init

---

### Pregunta 3 (2 pts)

**¿Que configuracion en tsconfig.json activa todas las validaciones estrictas, siendo la mejor forma de aprovechar el tipado estatico?**

- a. "checkJs": true
- **b. "strict": true** ✓
- c. "allowJs": false
- d. "target": "ES6"

---

### Pregunta 4 (2 pts)

**¿Que ocurre si intentamos asignar un numero a una variable que TypeScript infirio como string (ej: let ciudad = "Mendoza"; ciudad = 123;)?**

- a. La variable cambia su tipo a any.
- b. JavaScript permite la operacion sin problemas en tiempo de ejecucion.
- c. TypeScript convierte el numero a string automaticamente.
- **d. Se genera un error de compilacion porque el tipo inferido fue string.** ✓

---

### Pregunta 5 (2 pts)

**¿Que tipo debe evitarse en codigo nuevo porque desactiva completamente el chequeo de tipos?**

- a. object
- **b. any** ✓
- c. void
- d. unknown
