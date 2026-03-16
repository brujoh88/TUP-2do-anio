# Autoevaluacion - Actividad 2: Introduccion a BD No Relacionales

Resultado: **10/10** (100%)

## Resumen rapido

| Concepto | Clave |
|----------|-------|
| NoSQL | Not Only SQL |
| Tipos NoSQL | Documentales, clave-valor, columnas, grafos |
| BD documentales | MongoDB, Apache CouchDB, Firebase Cloud Firestore |
| Jerarquia MongoDB | Clusters → Nodos → Bases de datos → Colecciones → Documentos |
| Colecciones | Equivalente a tablas en el modelo relacional |
| Documentos | Campos opcionales, esquema flexible, polimorfismo de datos |
| Formato almacenamiento | BSON (no JSON, XML ni CSV) |
| Ventajas NoSQL | Escalabilidad horizontal, flexibilidad de esquemas, alto rendimiento |
| Clave-valor | Estructura mas simple (clave unica → valor) |
| BD de columnas | Cada columna almacena valores correspondientes a una fila logica |
| BD de grafos | Relaciones almacenadas como entidades de primera clase |

---

## Preguntas

### MongoDB: estructura y caracteristicas

**1. Todos los documentos de una coleccion deben tener los mismos campos. (V/F)**
**R: Falso.** Los campos son opcionales, permite esquema flexible y polimorfismo de datos.

**3. Las colecciones son analogas a las tablas del modelo relacional. (V/F)**
**R: Verdadero.** Agrupan documentos de una misma entidad conceptual.

**6. ¿Jerarquia correcta en MongoDB de mayor a menor?**
**R: Clusters → Nodos → Bases de datos → Colecciones → Documentos.**

**10. ¿En que formato se almacenan los documentos en MongoDB?**
**R: BSON.**

### Tipos de bases de datos NoSQL

**5. ¿Que significa NoSQL?**
**R: Not Only SQL.**

**4. ¿Ejemplos de bases de datos documentales?**
**R: MongoDB, Apache CouchDB y Firebase Cloud Firestore.**

**8. Las bases de datos clave-valor son las mas complejas en estructura. (V/F)**
**R: Falso.** Son las mas simples: una clave unica asociada a un valor.

**9. En BD de columnas, cada columna almacena valores correspondientes a una fila logica. (V/F)**
**R: Verdadero.** La fila logica se infiere a partir de la indexacion de los valores.

**2. En BD de grafos, las conexiones se almacenan como entidades de primera clase. (V/F)**
**R: Verdadero.** Las relaciones se almacenan de forma explicita, no son implicitas ni derivadas.

### Ventajas y limitaciones

**7. ¿Cual NO es una ventaja principal de NoSQL?**
**R: Mejor integridad de datos.** Las ventajas son: escalabilidad horizontal, flexibilidad de esquemas y alto rendimiento.
