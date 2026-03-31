# Resumen Unidad 3: JavaScript

## Programación III

---

## 1. ¿Qué es JavaScript?

Lenguaje de programación **interpretado y dinámico**, creado en 1995 por Brendan Eich en Netscape. Aporta **interactividad y comportamiento** a las páginas web.

### El trío fundamental de la Web (analogía de la casa)

| Tecnología | Rol | Analogía |
|---|---|---|
| **HTML** | Estructura | Paredes, puertas y ventanas |
| **CSS** | Estilo | Decoración, pintura y muebles |
| **JavaScript** | Comportamiento | Electricidad y mecanismos |

### Historia

- **1995:** Creado en 10 días. Mocha → LiveScript → JavaScript (sin relación con Java)
- **1997:** Estandarizado como ECMAScript
- **ES5 (2009):** Gran adopción, mejoras en arrays y objetos
- **ES6 (2015):** Revolución: `const`, `let`, arrow functions, clases, módulos
- **Actualidad:** Versiones anuales

### Motores de JavaScript

| Motor | Navegador |
|---|---|
| V8 | Google Chrome y Edge |
| SpiderMonkey | Mozilla Firefox |
| JavaScriptCore | Safari |

---

## 2. Tipos de datos

JavaScript es **dinámicamente tipado**: no es necesario indicar el tipo de dato al declarar una variable, el lenguaje lo determina según el valor asignado.

### Tipos primitivos

| Tipo | Descripción | Ejemplo |
|---|---|---|
| `String` | Texto o cadenas de caracteres | `"Hola"`, `'mundo'` |
| `Number` | Enteros y decimales | `42`, `3.14` |
| `Boolean` | Verdadero o falso | `true`, `false` |
| `undefined` | Variable declarada sin valor asignado | `let x;` → x es `undefined` |
| `null` | Valor vacío intencional | `let x = null;` |

> Los primitivos se comparan **por valor**. Si copias uno a otra variable, se crea una copia independiente.

---

## 3. Variables

| Palabra clave | Alcance (Scope) | Redeclaración | Uso recomendado |
|---|---|---|---|
| `var` | Global o de función | Permitida | **Evitar**. Causa errores confusos (hoisting) y está en desuso |
| `let` | De bloque `{}` | No permitida | Para valores que **cambiarán** (contadores, acumuladores) |
| `const` | De bloque `{}` | No permitida | **Opción por defecto**. No se puede reasignar (pero si es objeto/array, su contenido interno sí puede cambiar) |

### Buenas prácticas

1. Usar `const` por defecto
2. Usar `let` solo si el valor necesita cambiar
3. Nombres descriptivos (`usuarioActivo` en vez de `x`)

---

## 4. Operadores

### Aritméticos

| Operador | Función | Ejemplo |
|---|---|---|
| `+` | Suma | `5 + 3` → `8` |
| `-` | Resta | `10 - 4` → `6` |
| `*` | Multiplicación | `3 * 4` → `12` |
| `/` | División | `10 / 3` → `3.33...` |
| `%` | Módulo (resto) | `10 % 3` → `1` |

### De comparación

| Operador | Función | Ejemplo |
|---|---|---|
| `===` | Igualdad estricta (valor Y tipo) **Recomendada** | `5 === "5"` → `false` |
| `==` | Igualdad no estricta (convierte tipos) | `5 == "5"` → `true` |
| `!==` | Desigualdad estricta | `5 !== "5"` → `true` |
| `>`, `<`, `>=`, `<=` | Mayor/menor | `5 > 3` → `true` |

### Lógicos

| Operador | Función |
|---|---|
| `&&` (AND) | `true` solo si **ambas** condiciones son verdaderas |
| `\|\|` (OR) | `true` si **al menos una** condición es verdadera |
| `!` (NOT) | Invierte el valor lógico |

### Operador ternario

```javascript
const resultado = condicion ? valor_si_verdadero : valor_si_falso;
```

---

## 5. Estructuras de control

### Condicionales

**if / else if / else** - Evalúa condiciones booleanas en secuencia:

```javascript
if (edad >= 18) {
    console.log("Mayor de edad");
} else if (edad >= 13) {
    console.log("Adolescente");
} else {
    console.log("Menor");
}
```

**switch** - Compara una variable contra múltiples casos (usa igualdad estricta). Requiere `break` para evitar ejecutar los casos siguientes. `default` es la opción por defecto.

### Bucles

| Tipo | Uso | Nota |
|---|---|---|
| `for` | Cuando sabemos cuántas iteraciones | 3 partes: inicialización, condición, actualización |
| `while` | Cuando no sabemos cuántas iteraciones | Cuidado con bucles infinitos |
| `do...while` | Garantiza al menos una ejecución | Evalúa la condición al final |
| `for...of` | Recorrer arrays/strings sin índices | Sintaxis simple y moderna |
| `forEach` | Método de arrays, más legible | No soporta `break` ni `continue` |

```javascript
// forEach - recibe: elemento, índice (opcional), array completo (opcional)
const frutas = ["manzana", "banana", "naranja"];
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`);
});
```

---

## 6. Funciones

### Tipos de declaración

**A. Function Declaration** - Tiene **hoisting** (se puede llamar antes de ser declarada):

```javascript
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
```

**B. Function Expression** - Se guarda en una variable. **No** tiene hoisting:

```javascript
const sumar = function(a, b) {
    return a + b;
};
```

**C. Arrow Function (ES6)** - Sintaxis corta y moderna. Si tiene una sola línea, el `return` es **implícito**:

```javascript
const multiplicar = (a, b) => a * b;
```

### Parámetros vs Argumentos

- **Parámetros:** Variables definidas en la declaración (`a`, `b`)
- **Argumentos:** Valores reales pasados al ejecutar (`5`, `2`)

---

## 7. Programación Orientada a Objetos (POO)

Desde ES6, JavaScript incorporó la sintaxis de **clases** (similar a Java o C#).

- **Clase:** El "plano" o molde. Define propiedades y comportamientos
- **Objeto:** La instancia creada a partir de la clase (el producto final)

```javascript
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

const alumno = new Usuario("Santiago", "santiago@utn.edu.ar");
console.log(alumno.saludar()); // "Hola, soy Santiago"
```

### Conceptos clave

| Concepto | Descripción |
|---|---|
| `constructor` | Método especial que inicializa las propiedades del objeto |
| `this` | Referencia al objeto actual que ejecuta el código |
| `extends` | Herencia: crear una clase nueva basada en una existente |

```javascript
class Admin extends Usuario {
    eliminarCuenta() {
        console.log("Cuenta eliminada");
    }
}
```

---

## 8. Manipulación del DOM

El **DOM (Document Object Model)** es la representación del HTML en forma de árbol que el navegador crea en memoria. JavaScript lo usa para hacer la página dinámica.

### Selección de elementos

| Método | Función | Ejemplo |
|---|---|---|
| `getElementById('id')` | Selecciona por ID (único) | `document.getElementById('titulo')` |
| `querySelector('.clase')` | Selecciona el **primer** elemento que coincida (sintaxis CSS) | `document.querySelector('.btn')` |
| `querySelectorAll('p')` | Selecciona **todos** los que coincidan | `document.querySelectorAll('p')` |

### Modificación de contenido y estilos

```javascript
const titulo = document.querySelector('h1');
titulo.textContent = "Nuevo Título desde JS";  // Cambiar texto
titulo.style.color = "blue";                    // Cambiar estilo
titulo.classList.add('destacado');               // Agregar clase CSS
```

### Creación e inyección de elementos (no cubierto en PDFs, necesario para el TP)

Para generar HTML dinámicamente, se necesitan estos métodos:

**Opción A: `createElement` + `appendChild`** - Crea nodos del DOM uno a uno:

```javascript
const li = document.createElement("li");       // Crear un elemento <li>
li.textContent = "Nuevo item";                  // Asignarle contenido
li.className = "mi-clase";                      // Asignarle una clase CSS
document.getElementById("mi-lista").appendChild(li);  // Inyectarlo en el DOM
```

| Método | Función |
|---|---|
| `document.createElement('tag')` | Crea un nuevo nodo HTML en memoria (no lo agrega al DOM aún) |
| `elemento.appendChild(hijo)` | Agrega un nodo hijo al final de un elemento padre |
| `elemento.className` | Asigna una o más clases CSS al elemento (como string) |
| `elemento.classList.add('clase')` | Agrega una clase CSS sin pisar las existentes |

**Opción B: `innerHTML` con Template Strings** - Inyecta HTML como string (más rápido para estructuras complejas):

```javascript
const contenedor = document.getElementById("productos");
const producto = { nombre: "Pizza", precio: 18000, imagen: "pizza.png" };

contenedor.innerHTML += `
    <article class="producto-card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: <strong>$${producto.precio}</strong></p>
        <button type="button">Agregar</button>
    </article>
`;
```

| Propiedad | Función | Precaución |
|---|---|---|
| `innerHTML` | Lee o establece el contenido HTML dentro de un elemento | No usar con datos ingresados por el usuario (riesgo de XSS) |
| `textContent` | Lee o establece solo el texto (sin interpretar HTML) | Más seguro que `innerHTML` |

> **Combinación recomendada:** Usar `createElement` para el contenedor y `innerHTML` con template strings para el contenido interno. Es lo que se usa en el TP integrador.

---

## 9. Eventos

Los eventos son acciones que ocurren en el sistema (clics, teclas, envío de formularios). Se usa `addEventListener` para "escuchar" estos eventos.

```javascript
const boton = document.querySelector('#miBoton');
boton.addEventListener('click', () => {
    alert("¡Hiciste clic!");
});
```

### Eventos comunes

| Evento | Se dispara cuando... |
|---|---|
| `click` | Se hace clic en el elemento |
| `submit` | Se envía un formulario |
| `keydown` / `keyup` | Se presiona / suelta una tecla |
| `input` | Cambia el valor de un input |
| `load` | La página termina de cargar |

---

## 10. LocalStorage y SessionStorage

La API de **Web Storage** permite guardar datos en el navegador del usuario (clave-valor).

### Diferencias

| Característica | LocalStorage | SessionStorage |
|---|---|---|
| **Duración** | Persiste indefinidamente (hasta borrado manual) | Se borra al cerrar la pestaña o navegador |
| **Alcance** | Todas las pestañas del mismo origen | Solo la pestaña actual |
| **Capacidad** | ~5MB-10MB | ~5MB |

### Métodos (iguales para ambos)

| Método | Función |
|---|---|
| `setItem('clave', 'valor')` | Guardar un dato |
| `getItem('clave')` | Recuperar un dato |
| `removeItem('clave')` | Borrar un dato específico |
| `clear()` | Borrar todo |

### El truco del JSON

Web Storage **solo guarda strings**. Para guardar objetos o arrays, se convierten con JSON:

```javascript
const usuario = { nombre: "Luciano", rol: "Profe" };

// Guardar (Objeto → String)
localStorage.setItem('usuarioActivo', JSON.stringify(usuario));

// Recuperar (String → Objeto)
const datos = localStorage.getItem('usuarioActivo');
const usuarioObjeto = JSON.parse(datos);
console.log(usuarioObjeto.nombre); // "Luciano"
```

---

## 11. Asincronía en JavaScript

JavaScript es **Single Thread** (un solo hilo): solo puede ejecutar una tarea a la vez en el hilo principal. Para operaciones lentas (peticiones HTTP, timers), usa un modelo **asíncrono** que delega estas tareas al navegador.

### Callbacks

Funciones que se pasan como argumento a otra función para ejecutarse después:

```javascript
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
```

### Promesas (Promise)

Objeto que representa el resultado futuro de una operación asíncrona.

| Estado | Descripción |
|---|---|
| **Pending** | En espera, la operación aún no terminó |
| **Fulfilled (Resolved)** | La operación terminó exitosamente |
| **Rejected** | La operación falló |

```javascript
const promesa = new Promise((resolve, reject) => {
    // operación asíncrona
    resolve("Éxito");  // o reject("Error");
});

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
```

### async / await

Sintaxis moderna para manejar promesas de forma más legible (parece código síncrono):

- `async` declara que una función es asíncrona
- `await` **pausa** la ejecución hasta que la promesa se resuelva

```javascript
const obtenerDatos = async () => {
    const respuesta = await fetch("https://api.ejemplo.com/datos");
    const datos = await respuesta.json();
    console.log(datos);
};
```

---

## 12. Fetch y consumo de APIs

`fetch('url')` devuelve inmediatamente una **Promesa**. Se necesitan dos `await`:

1. **Primer await:** Para la petición de red (obtener la respuesta)
2. **Segundo await:** Para convertir el body (stream) a formato JSON

```javascript
const cargarProductos = async () => {
    try {
        const respuesta = await fetch("https://api.ejemplo.com/productos");
        const productos = await respuesta.json();
        console.log(productos);
    } catch (error) {
        console.error("Error:", error);
    }
};
```

### Fetch vs Axios

| Característica | Fetch | Axios |
|---|---|---|
| **Instalación** | Nativo del navegador (no requiere) | Requiere instalación (`npm install axios`) |
| **Parseo JSON** | Manual (`.json()`) | Automático |
| **Manejo de errores** | No lanza error en respuestas 4xx/5xx | Lanza error automáticamente |

---

## 13. Separación de responsabilidades (Patrón del TP)

El TP integrador aplica este patrón fundamental:

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Estructura vacía con contenedores (`id`) para inyección |
| `css/styles.css` | Estilos visuales |
| `js/data.js` | Datos (arrays de objetos/strings simulando base de datos) |
| `js/main.js` | Lógica de renderizado (tomar datos → crear DOM → inyectar) |

### Flujo de renderizado

```
data.js (datos) → main.js (forEach + createElement/innerHTML) → DOM (visual)
```

> Este patrón prepara el proyecto para reemplazar `data.js` por una API real (`fetch`) sin modificar la estructura visual.

---

## Preguntas de repaso

**1.** ¿Qué significa que JavaScript es dinámicamente tipado?

<details>
<summary>Ver respuesta</summary>

El tipo de dato se determina automáticamente según el valor asignado. No es necesario declarar el tipo al crear una variable (`let x = 5` → Number, `let x = "hola"` → String).
</details>

**2.** ¿Cuál es la diferencia entre `const`, `let` y `var`?

<details>
<summary>Ver respuesta</summary>

`const`: no se puede reasignar, alcance de bloque, opción por defecto. `let`: se puede reasignar, alcance de bloque, para valores que cambian. `var`: alcance global/función, permite redeclaración, **evitar** (causa errores de hoisting).
</details>

**3.** ¿Qué devuelve `5 === "5"` y por qué?

<details>
<summary>Ver respuesta</summary>

Devuelve `false`. El operador `===` (igualdad estricta) compara **valor Y tipo**. `5` es Number y `"5"` es String, por lo tanto son diferentes.
</details>

**4.** ¿Cuál es la diferencia entre Function Declaration y Arrow Function?

<details>
<summary>Ver respuesta</summary>

**Function Declaration** tiene **hoisting** (se puede llamar antes de ser declarada) y usa la sintaxis `function nombre() {}`. **Arrow Function** no tiene hoisting, usa sintaxis corta `() => {}`, y si tiene una sola línea el `return` es **implícito**.
</details>

**5.** ¿Qué es una Clase en POO y qué hace el `constructor`?

<details>
<summary>Ver respuesta</summary>

Una **Clase** es el "plano" o molde que define propiedades y comportamientos de los objetos. El **constructor** es un método especial que se ejecuta al crear un objeto (`new Clase()`) e inicializa sus propiedades usando `this`.
</details>

**6.** ¿Para qué sirven `getElementById` y `querySelector`?

<details>
<summary>Ver respuesta</summary>

Ambos **seleccionan elementos del DOM**. `getElementById('id')` selecciona por ID único. `querySelector('.clase')` selecciona el primer elemento que coincida usando sintaxis de selectores CSS (más flexible).
</details>

**7.** ¿Qué hacen `createElement` y `appendChild`?

<details>
<summary>Ver respuesta</summary>

`document.createElement('tag')` crea un nuevo nodo HTML **en memoria** (no lo agrega al DOM aún). `elemento.appendChild(hijo)` toma ese nodo y lo **inyecta** como hijo al final de un elemento padre en el DOM, haciéndolo visible en la página.
</details>

**8.** ¿Cuál es la diferencia entre `innerHTML` y `textContent`?

<details>
<summary>Ver respuesta</summary>

`innerHTML` lee o establece el contenido HTML dentro de un elemento (interpreta etiquetas). `textContent` lee o establece solo el texto plano (no interpreta HTML). `textContent` es más seguro ya que `innerHTML` puede ser vulnerable a inyecciones XSS si se usa con datos del usuario.
</details>

**9.** ¿Cómo se "escucha" un clic en un elemento con JavaScript?

<details>
<summary>Ver respuesta</summary>

Con `element.addEventListener('click', callback)`. Ejemplo: `boton.addEventListener('click', () => { alert("Clic!"); });`. Este método permite asociar múltiples eventos al mismo elemento.
</details>

**10.** ¿Cuál es la diferencia entre LocalStorage y SessionStorage?

<details>
<summary>Ver respuesta</summary>

**LocalStorage** persiste indefinidamente y está disponible en todas las pestañas del mismo origen. **SessionStorage** se borra al cerrar la pestaña/navegador y solo está disponible en la pestaña actual. Ambos usan los mismos métodos (`setItem`, `getItem`, etc.).
</details>

**11.** ¿Por qué se necesita `JSON.stringify()` para guardar un objeto en LocalStorage?

<details>
<summary>Ver respuesta</summary>

Porque Web Storage **solo guarda strings**. `JSON.stringify()` convierte un objeto/array a string JSON para poder almacenarlo. Para recuperarlo se usa `JSON.parse()` que lo convierte de vuelta a objeto/array.
</details>

**12.** ¿Cuáles son los tres estados de una Promesa?

<details>
<summary>Ver respuesta</summary>

**Pending** (en espera, la operación no terminó), **Fulfilled/Resolved** (la operación terminó exitosamente), **Rejected** (la operación falló). Se manejan con `.then()` y `.catch()`, o con `async/await` y `try/catch`.
</details>

**13.** ¿Qué hace `await` dentro de una función `async`?

<details>
<summary>Ver respuesta</summary>

**Pausa** la ejecución de la función hasta que la promesa se resuelva, permitiendo escribir código asíncrono que se lee como si fuera síncrono. Solo se puede usar dentro de funciones declaradas con `async`.
</details>

**14.** ¿Por qué se necesitan dos `await` al usar `fetch`?

<details>
<summary>Ver respuesta</summary>

El **primer await** espera la respuesta de red (obtiene el objeto Response). El **segundo await** (`respuesta.json()`) espera la conversión del cuerpo de la respuesta (que es un stream) a formato JSON utilizable.
</details>

**15.** ¿Qué ventaja tiene separar los datos (`data.js`) de la lógica (`main.js`)?

<details>
<summary>Ver respuesta</summary>

Permite modificar los datos sin tocar la lógica de renderizado y viceversa. Además, prepara el proyecto para reemplazar el archivo de datos local por una petición a una API externa (`fetch`) sin tener que cambiar la estructura visual del sitio.
</details>
