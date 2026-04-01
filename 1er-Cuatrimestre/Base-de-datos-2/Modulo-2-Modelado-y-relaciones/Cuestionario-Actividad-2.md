# Cuestionario Actividad 2 - Relaciones en Distintos Contextos

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (2 pts)

**Se utilizan documentos embebidos y referencias para modelar distintos tipos de relaciones.**

- **Verdadero** ✓
- Falso

> Las relaciones en MongoDB pueden modelarse mediante documentos embebidos o mediante referencias, segun el contexto. El embebido reduce consultas multiples, la referencia mejora modularidad.

---

### Pregunta 2 (2 pts)

**En MongoDB, los arrays y los subdocumentos son considerados estructuras de datos primitivas.**

- **Verdadero** ✓
- Falso

> En MongoDB se utilizan arrays (listas) y subdocumentos como estructuras de datos primitivas, fundamentales para modelar relaciones embebidas o listas de elementos relacionados.

---

### Pregunta 3 (1.5 pts)

**Un patron hibrido consiste en embeber algunos datos esenciales y referenciar detalles que se usan con menos frecuencia.**

- **Verdadero** ✓
- Falso

> Se embeben campos esenciales para consultas rapidas y se referencian los detalles menos utilizados.

---

### Pregunta 4 (1.5 pts) - Relacionar Columnas: Relaciones Uno a Uno

| Concepto | Respuesta |
|---|---|
| **Definicion** | Ocurre cuando una entidad se relaciona solamente con otra entidad. |
| **Ejemplo** | Un usuario que tiene un unico perfil de detalle. |
| **Embebido** | El perfil del usuario, con su fecha de nacimiento y direccion, se guarda dentro del mismo documento del usuario. |
| **Referencia** | Se guarda el perfil_id dentro del documento del usuario. |

---

### Pregunta 5 (1.5 pts) - Relacionar Columnas: Relaciones Uno a Muchos

| Concepto | Respuesta |
|---|---|
| **Embebido** | El documento del curso contiene un array con los datos de los estudiantes inscritos. |
| **Referencia** | El documento del estudiante contiene el campo curso_id, que apunta al curso en el que esta inscrito. |
| **Definicion** | Existe cuando una entidad esta relacionada con multiples instancias de otra. |
| **Ejemplo** | Un curso que tiene multiples estudiantes. |

---

### Pregunta 6 (1.5 pts) - Relacionar Columnas: Relaciones Muchos a Muchos

| Concepto | Respuesta |
|---|---|
| **Coleccion Asociativa** | Se crea una coleccion intermedia (ej. "inscripciones") que enlaza estudiante_id con curso_id. |
| **Definicion** | Ocurre cuando muchas instancias de una entidad se relacionan con muchas de otra. |
| **Arreglos de Referencias** | Se guarda un array de curso_ids en el documento de cada estudiante. |
| **Ejemplo** | Un estudiante puede estar en muchos cursos, y un curso tiene muchos estudiantes. |
