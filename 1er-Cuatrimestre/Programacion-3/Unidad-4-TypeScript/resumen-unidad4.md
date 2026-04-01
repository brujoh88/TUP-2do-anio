# Resumen Unidad 4: TypeScript

## Programacion III

---

## 1. ¿Que es TypeScript?

TypeScript es un **superset (superconjunto) de JavaScript** que agrega **tipado estatico opcional**. Detecta errores durante el desarrollo (tiempo de compilacion), antes de que el codigo se ejecute en el navegador.

| Caracteristica | JavaScript | TypeScript |
|---|---|---|
| Tipado | Dinamico | Estatico opcional |
| Errores | En runtime (produccion) | En compilacion (desarrollo) |
| Archivos | `.js` | `.ts` (se transpila a `.js`) |

### Transpilacion

El navegador NO entiende TypeScript. Se necesita un proceso de **transpilacion** que convierte `.ts` a `.js`.

```bash
npm install -g typescript   # Instalar
tsc --version               # Verificar
tsc --init                  # Crear tsconfig.json
tsc index.ts                # Compilar manual
tsc -w                      # Watch Mode (recompila automaticamente)
```

### tsconfig.json

Archivo de configuracion del proyecto. La opcion mas importante es `"strict": true` que activa todas las validaciones estrictas.

---

## 2. Tipos fundamentales

Se definen con dos puntos `:` despues de la variable.

### Tipos primitivos

```typescript
let nombre: string = "Luciano";
let edad: number = 24;
let activo: boolean = true;
```

### Inferencia de tipos

TypeScript "adivina" el tipo segun el valor inicial y lo mantiene para siempre.

```typescript
let ciudad = "Mendoza";  // Infiere string
// ciudad = 123;          // Error: no se puede asignar number a string
```

### Tipos especiales

| Tipo | Descripcion | Uso |
|---|---|---|
| `any` | Desactiva el chequeo de tipos | EVITAR siempre |
| `unknown` | Acepta cualquier valor pero exige verificacion antes de usar | Alternativa segura a `any` |
| `void` | Funcion que no retorna valor | `function log(): void {}` |
| `never` | Funcion que nunca termina (throw/bucle infinito) | `function error(): never { throw... }` |

### Arrays tipados

```typescript
let frutas: string[] = ["Manzana", "Banana"];
let puntajes: number[] = [10, 5, 8];
// frutas.push(100);  // Error: argumento no es string
```

---

## 3. Funciones tipadas

Se tipan los parametros y opcionalmente el retorno.

```typescript
function multiplicar(a: number, b: number): number {
    return a * b;
}
```

### Parametros opcionales (`?`)

```typescript
function saludar(nombre: string, apellido?: string): string {
    return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

### Valores por defecto

```typescript
function crearUsuario(nombre: string, rol: string = "User") {
    console.log(`${nombre} es ${rol}`);
}
```

### Rest parameters

```typescript
function sumarTodo(...numeros: number[]): number {
    return numeros.reduce((total, actual) => total + actual, 0);
}
```

---

## 4. Objetos tipados

### Tipado inline (literal)

```typescript
let usuario: { nombre: string; edad: number; activo: boolean } = {
    nombre: "Ana", edad: 28, activo: true
};
```

### Type Alias (tipos reutilizables)

La palabra clave `type` crea un nombre para una estructura de datos reutilizable.

```typescript
type Usuario = {
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
};

let usuario1: Usuario = { ... };
```

### Modificadores de propiedades

| Modificador | Sintaxis | Efecto |
|---|---|---|
| Opcional | `propiedad?: tipo` | No es obligatoria |
| Solo lectura | `readonly propiedad: tipo` | No se puede modificar despues de crear el objeto |

```typescript
type Producto = {
    id: number;
    readonly codigo: string;   // Inmutable
    descripcion?: string;      // Opcional
};
```

---

## 5. Interfaces

Definen un **contrato**: "Este objeto tendra, como minimo, estas propiedades y metodos".

```typescript
interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}
```

### Herencia (`extends`)

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    salario: number;
    puesto: string;
}
// Empleado tiene nombre, edad, salario y puesto
```

### Type vs Interface

| Caracteristica | Interface | Type Alias |
|---|---|---|
| Uso principal | Objetos y clases | Primitivos, uniones, tuplas |
| Herencia | `extends` | `&` (interseccion) |
| Merging | Se pueden declarar dos veces y se fusionan | No se pueden duplicar |
| Flexibilidad | Estricta para objetos | Muy flexible |

**Regla de oro:** Interface para objetos/contratos, Type para uniones/tuplas/primitivos.

---

## 6. Tipos avanzados

### Union Types (`|`)

Permiten que una variable acepte mas de un tipo.

```typescript
let id: string | number;
id = "ABC-123";  // OK
id = 456;        // OK
```

### Literal Types

Restringen a valores exactos.

```typescript
type Direccion = "arriba" | "abajo" | "izquierda" | "derecha";
// Cualquier otro string da error
```

### Type Narrowing (estrechamiento)

Dentro de un `if`, TypeScript entiende el tipo especifico.

```typescript
function procesar(valor: string | number) {
    if (typeof valor === "string") {
        return valor.toUpperCase();  // TS sabe que es string
    } else {
        return valor.toFixed(2);     // TS sabe que es number
    }
}
```

---

## 7. TypeScript + DOM (Parte 1)

### El problema

`querySelector` puede devolver `null` si el elemento no existe. TypeScript nos obliga a verificar.

### Tipos especificos de elementos

| Tipo | Etiqueta HTML | Propiedad exclusiva |
|---|---|---|
| `HTMLButtonElement` | `<button>` | `.disabled` |
| `HTMLInputElement` | `<input>` | `.value` |
| `HTMLAnchorElement` | `<a>` | `.href` |
| `HTMLHeadingElement` | `<h1>`-`<h6>` | - |
| `HTMLFormElement` | `<form>` | `.reset()`, `.method` |

### Generics para querySelector

```typescript
const btn = document.querySelector<HTMLButtonElement>("#btn");
const input = document.querySelector<HTMLInputElement>("#correo");
```

### Null Safety (verificar existencia)

```typescript
const titulo = document.querySelector<HTMLHeadingElement>("#titulo");
if (titulo) {
    titulo.style.color = "red";  // Seguro: no es null
}
```

### querySelectorAll y NodeList

```typescript
const botones = document.querySelectorAll<HTMLButtonElement>(".btn");
// NodeList tiene forEach y length, pero NO map/filter/reduce
const array = Array.from(botones);  // Convertir a Array real
```

### Tipado de eventos

| Tipo de evento | Propiedades exclusivas | Uso |
|---|---|---|
| `MouseEvent` | `.clientX`, `.clientY` | click, mouseover |
| `KeyboardEvent` | `.key`, `.code` | keydown, keyup |
| `Event` | `.preventDefault()`, `.currentTarget` | submit, change |

```typescript
boton.addEventListener("click", (event: MouseEvent) => {
    console.log(event.clientX, event.clientY);
});

input.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") { ... }
});
```

---

## 8. TypeScript + DOM (Parte 2)

### Formularios

```typescript
const form = document.querySelector<HTMLFormElement>("#registro");

form?.addEventListener("submit", (event: Event) => {
    event.preventDefault();  // Evitar recarga
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const nombre = formData.get("nombre") as string;
    const edad = parseInt(formData.get("edad") as string);
});
```

### Optional Chaining (`?.`)

Alternativa corta a `if (form)`. Si `form` es null, no ejecuta nada ni lanza error.

```typescript
form?.addEventListener("submit", ...);  // Solo si form existe
```

### FormData

- `FormData.get("campo")` devuelve `FormDataEntryValue | null`
- Se usa `as string` (Type Assertion) para castear a string
- Para numeros: `parseInt(formData.get("edad") as string)`

### Type Guards

| Operador | Uso | Aplica a |
|---|---|---|
| `typeof` | Primitivos (string, number, boolean) | `typeof valor === "string"` |
| `instanceof` | Objetos/clases (DOM, Date) | `elemento instanceof HTMLButtonElement` |

```typescript
function analizar(elemento: HTMLElement) {
    if (elemento instanceof HTMLButtonElement) {
        console.log(elemento.disabled);  // Solo botones
    } else if (elemento instanceof HTMLInputElement) {
        console.log(elemento.value);     // Solo inputs
    }
}
```

### Flujo seguro (Safe Workflow)

1. **Seleccion:** `querySelector<Tipo>()`
2. **Null Check:** `if (elemento)` o `elemento?.`
3. **Type Guard:** `typeof` (primitivos) o `instanceof` (objetos)
4. **Acceso:** Solo despues de pasar los pasos anteriores

---

## 9. Fetch API + TypeScript

### El problema

`response.json()` devuelve `any` por defecto. Perdemos autocompletado y deteccion de errores.

### Async / Await

```typescript
async function obtenerDatos(): Promise<Pokemon[]> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data: PokemonResponse = await response.json();
    return data.results;
}
```

- `async`: La funcion retorna una Promise
- `await`: Pausa la ejecucion hasta que la promesa se resuelva
- El retorno siempre es `Promise<T>`, nunca `T` directamente

### Modelado de datos (interfaces para API)

```typescript
// Entidad individual
interface Pokemon {
    name: string;
    url: string;
}

// Respuesta envoltorio (wrapper)
interface PokemonResponse {
    count: number;
    results: Pokemon[];
}
```

### Manejo de errores (try/catch)

```typescript
async function cargarPokemones() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        const data: PokemonResponse = await response.json();
        // Renderizar datos...
    } catch (error) {
        // Mostrar mensaje de error al usuario
    }
}
```

### Verificar `response.ok`

Un fetch que recibe un 404 NO lanza error por si solo. Hay que verificar `.ok` manualmente y hacer `throw` si falla.

### Estados de la UI

| Estado | Accion |
|---|---|
| **Loading** | Mostrar spinner, deshabilitar boton |
| **Success** | Ocultar spinner, limpiar lista (`innerHTML = ""`), renderizar datos |
| **Error** | Ocultar spinner, mostrar mensaje de error |

---

## 15 Preguntas de repaso

1. **¿Que es TypeScript?** Un superset de JavaScript que agrega tipado estatico opcional. Detecta errores en compilacion.

2. **¿Que comando activa Watch Mode?** `tsc -w` — recompila automaticamente al guardar cambios.

3. **¿Que configuracion activa todas las validaciones estrictas?** `"strict": true` en tsconfig.json.

4. **¿Que es la inferencia de tipos?** TypeScript deduce el tipo segun el valor inicial y lo mantiene.

5. **¿Por que evitar `any`?** Desactiva completamente el chequeo de tipos. Es como no usar TypeScript.

6. **¿Diferencia entre `type` e `interface`?** Interface: objetos, herencia con `extends`, merging. Type: uniones, tuplas, primitivos, mas flexible.

7. **¿Que es Type Narrowing?** Cuando TypeScript entiende el tipo especifico dentro de un `if` (usando `typeof` o `instanceof`).

8. **¿Que operador define un Union Type?** El pipe `|` (ej: `string | number`).

9. **¿Que son los Literal Types?** Tipos que restringen a valores exactos (ej: `type Dir = "arriba" | "abajo"`).

10. **¿Por que validar null en querySelector?** Porque el elemento podria no existir en el HTML. TypeScript no lee el archivo `.html`.

11. **¿Que propiedad es exclusiva de HTMLButtonElement?** `.disabled`.

12. **¿Que retorna querySelectorAll?** Una `NodeList` (siempre existe, puede estar vacia). No es un Array.

13. **¿Que retorna fetch inmediatamente?** Una `Promise`. Se usa `await` para esperar la respuesta.

14. **¿Como manejar errores en async/await?** Con un bloque `try/catch`.

15. **¿Que devuelve FormData.get()?** `FormDataEntryValue | null`. Se castea con `as string` y se parsea con `parseInt()` si es numero.
