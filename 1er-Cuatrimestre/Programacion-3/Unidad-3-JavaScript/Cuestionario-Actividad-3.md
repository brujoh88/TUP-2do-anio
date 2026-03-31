# Cuestionario - Actividad 3: Asincronía, Promesas y Fetch

Resultado: **10/10** (100%)

## Resumen rápido

| Concepto | Clave |
|----------|-------|
| Single Thread | Solo puede ejecutar una tarea a la vez en el hilo principal |
| Estados de una Promise | Pending, Fulfilled (Resolved), Rejected |
| `await` | Pausa la ejecución de la función hasta que la promesa se resuelva |
| `fetch('url')` | Devuelve inmediatamente una Promesa (Promise) |
| Segundo `await` en Fetch | Para convertir el cuerpo de la respuesta (stream) a formato JSON |

---

## Preguntas y respuestas

**1. JavaScript es un lenguaje "Single Thread" (de un solo hilo). ¿Qué significa esto en la práctica?**
- **Respuesta: Que solo puede ejecutar una tarea a la vez en el hilo principal**

**2. ¿Cuáles son los tres estados posibles de una Promesa (Promise) en JavaScript?**
- **Respuesta: Pending, Fulfilled (Resolved), Rejected**

**3. ¿Qué función cumple la palabra clave `await` dentro de una función asíncrona?**
- **Respuesta: Pausa la ejecución de la función hasta que la promesa se resuelva**

**4. Cuando ejecutamos el método `fetch('url')`, ¿qué devuelve inmediatamente?**
- **Respuesta: Una Promesa (Promise)**

**5. Al consumir una API con Fetch, generalmente necesitamos dos `await`. El primero es para la petición de red, ¿y el segundo?**
- **Respuesta: Para convertir el cuerpo de la respuesta (stream) a formato JSON**
