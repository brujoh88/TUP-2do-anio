# Autoevaluacion Unidad 4 - TypeScript

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (0.5 pts)

**En el contexto del DOM (Clase 3), ¿que devuelve 'document.querySelector' si no encuentra el elemento?**

- **a. null.** ✓
- b. undefined.
- c. Un error fatal que detiene la aplicacion.
- d. Un elemento HTML vacio.

---

### Pregunta 2 (0.5 pts)

**En la Fetch API (Clase 5), ¿por que es importante verificar 'response.ok'?**

- a. Para cancelar la peticion si tarda mucho.
- b. Es opcional, TypeScript lo hace solo.
- **c. Porque 'fetch' no lanza un error automaticamente en codigos de estado 404 o 500.** ✓
- d. Para convertir la respuesta a JSON.

---

### Pregunta 3 (0.5 pts)

**En la definicion de funciones, ¿como se indica que un parametro es opcional en TypeScript?**

- **a. Agregando el simbolo '?' despues del nombre del parametro (ej: apellido?: string).** ✓
- b. Usando la palabra clave 'optional' antes del nombre.
- c. Asignandole un valor 'null'.
- d. Usando el tipo 'any'.

---

### Pregunta 4 (0.5 pts)

**Segun la Clase 1, ¿cual es la diferencia principal entre JavaScript y TypeScript respecto a la deteccion de errores?**

- a. TypeScript elimina los errores automaticamente sin intervencion del desarrollador.
- **b. TypeScript detecta problemas durante el desarrollo (tiempo de compilacion), antes de que el codigo llegue a produccion.** ✓
- c. JavaScript detecta errores en tiempo de compilacion, mientras que TypeScript lo hace en tiempo de ejecucion.
- d. No hay diferencia, ambos detectan errores solo cuando se ejecuta el codigo en el navegador.

---

### Pregunta 5 (0.5 pts)

**Segun la Clase 4, ¿cual es la ventaja de usar 'FormData' en los formularios?**

- a. Valida automaticamente el email del usuario.
- b. Convierte todos los inputs a tipo number automaticamente.
- **c. Extrae automaticamente todos los valores basandose en el atributo 'name', evitando la seleccion manual de cada input.** ✓
- d. Envia los datos directamente a la base de datos sin codigo extra.

---

### Pregunta 6 (1 pt)

**Si necesito verificar si un elemento del DOM es especificamente un boton para acceder a la propiedad 'disabled', ¿que debo usar?**

- a. typeof elemento
- b. elemento as Button
- c. if (elemento.disabled)
- d. "button" ✓
- **e. elemento instanceof HTMLButtonElement** ✓

> Las respuestas correctas son: "button" y `elemento instanceof HTMLButtonElement`.

---

### Pregunta 7 (1 pt)

**¿Cual es el tipo de retorno correcto para una funcion asincrona (async) que devuelve un array de usuarios?**

- **a. Promise** ✓ (Promise&lt;Usuario[]&gt;)
- b. void
- c. Usuario[]
- d. async Usuario[]

---

### Pregunta 8 (0.5 pts)

**¿Para que se utiliza el operador 'typeof' en los Type Guards (Clase 4)?**

- a. Para definir interfaces nuevas.
- b. Para verificar si un objeto es una instancia de una clase (como HTMLButtonElement).
- **c. Para distinguir tipos primitivos (string, number, boolean) en tiempo de ejecucion.** ✓
- d. Para importar librerias externas.

---

### Pregunta 9 (0.5 pts)

**¿Por que es importante usar generics en querySelector (ej: querySelector&lt;HTMLInputElement&gt;)?**

- a. No es importante, TypeScript infiere todo automaticamente siempre.
- **b. Para desbloquear el acceso a propiedades especificas del elemento (como '.value' en un input) y tener autocompletado.** ✓
- c. Para que el codigo se vea mas profesional.
- d. Para convertir automaticamente el elemento a un string.

---

### Pregunta 10 (1 pt)

**¿Que caracteristica distingue principalmente a una 'Interface' de un 'Type Alias' segun la Clase 2?**

- a. Las interfaces no pueden definir metodos.
- b. Los Type Alias no pueden usar tipos primitivos.
- **c. Las interfaces pueden extenderse mediante herencia (extends), ideal para jerarquias de objetos.** ✓
- d. Las interfaces son solo para funciones, no para objetos.
