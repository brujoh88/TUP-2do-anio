# Autoevaluacion - Unidad 1: Repaso y Conceptos Fundamentales

Resultado: **10/10** (100%)

## Resumen rapido

| Concepto | Clave |
|----------|-------|
| Formato MongoDB | BSON (no JSON, CSV ni XML) |
| INSERT INTO | No olvidar la palabra INTO |
| Integridad referencial | Garantiza consistencia, no inconsistencia |
| Documentos MongoDB | Contienen los campos asociados a una entidad |
| Subconsultas | Pueden ser correlacionadas (depender de la consulta principal) |
| DDL | CREATE TABLE pertenece al DDL |
| Jerarquia MongoDB | Clusters → Nodos → Bases de datos → Colecciones → Documentos |
| NoSQL vs SQL | Modelo flexible, escalabilidad horizontal |
| LEFT JOIN + COUNT | Devuelve todos los usuarios con su cantidad de pedidos (incluso 0) |
| NoSQL significado | Not Only SQL |

---

## Pregunta 1 - Formato de documentos en MongoDB

**Respuesta:** d. BSON

**Explicacion:** MongoDB almacena internamente en BSON (Binary JSON), una representacion binaria de JSON que soporta mas tipos de datos.

---

## Pregunta 2 - Error en instruccion INSERT

**Respuesta:** b. Falta la palabra clave INTO

La sintaxis correcta es `INSERT INTO usuarios (...)` no `INSERT usuarios (...)`.

---

## Pregunta 3 - Integridad referencial garantiza inconsistencia

**Respuesta:** b. Falso

La integridad referencial garantiza **consistencia**, no inconsistencia. Asegura que las FK apunten a registros existentes.

---

## Pregunta 4 - Documentos en MongoDB contienen campos de una entidad

**Respuesta:** b. Verdadero

Cada documento contiene los campos (atributos) asociados a una entidad.

---

## Pregunta 5 - Subconsulta siempre independiente

**Respuesta:** b. Falso

Existen subconsultas correlacionadas que dependen de la consulta principal.

---

## Pregunta 6 - Afirmacion correcta

**Respuesta:** c. En SQL, CREATE TABLE pertenece al lenguaje DDL

Las demas son falsas: DELETE es DML (no DQL), la normalizacion elimina redundancia (no la introduce), y las filas de una tabla tienen la misma estructura.

---

## Pregunta 7 - Jerarquia en MongoDB

**Respuesta:** d. Clusters → Nodos → Bases de datos → Colecciones → Documentos

---

## Pregunta 8 - Caracteristica principal de NoSQL

**Respuesta:** c. Su modelo de datos es mas flexible y suelen ser mas faciles de escalar horizontalmente

---

## Pregunta 9 - Que hace la consulta LEFT JOIN + COUNT

**Respuesta:** c. Devuelve la lista de usuarios con la cantidad de pedidos que realizo cada uno

LEFT JOIN incluye usuarios sin pedidos (con cantidad 0). GROUP BY agrupa por usuario.

---

## Pregunta 10 - Significado de NoSQL

**Respuesta:** a. Not Only SQL

No significa "no usar SQL nunca", sino que va mas alla de SQL, pudiendo complementarlo.
