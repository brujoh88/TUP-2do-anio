# Autoevaluacion - Actividad 1: Repaso SQL

Resultado: **10/10** (100%)

## Resumen rapido

| Concepto | Clave |
|----------|-------|
| DDL | CREATE TABLE, DROP TABLE |
| DML | INSERT, UPDATE, DELETE |
| DQL | SELECT |
| WHERE | Siempre usarlo en UPDATE/DELETE para no afectar todos los registros |
| INSERT INTO | No olvidar la palabra INTO |
| JOINs | LEFT JOIN incluye filas sin coincidencia, INNER JOIN no |
| Subconsultas | Pueden ser correlacionadas (dependen de la consulta principal) |
| Integridad referencial | Claves foraneas aseguran consistencia |
| Normalizacion | Busca eliminar redundancia, no introducirla |

---

## Preguntas

### Lenguajes SQL (DDL, DML, DQL)

**1. ¿Cual de las siguientes afirmaciones es correcta?**
**R: CREATE TABLE pertenece a DDL** (Data Definition Language).

**2. ¿Cual de las siguientes afirmaciones es incorrecta?**
**R: INSERT es parte de DQL.** INSERT pertenece al DML, no al DQL.

**3. El DML nos permite crear, modificar y obtener datos. (V/F)**
**R: Falso.** DML solo manipula (INSERT, UPDATE, DELETE). Para obtener datos se usa DQL (SELECT).

### Consultas y sintaxis SQL

**5. Analiza: `UPDATE usuarios SET email = 'juan.nuevo@gmail.com'`**
**R: Falta WHERE.** Sin WHERE actualizaria el email de todos los registros.

**8. Error en: `INSERT usuarios (id, nombre, email, fecha_registro) VALUES (...)`**
**R: Falta INTO.** Lo correcto es `INSERT INTO usuarios`.

**6. ¿Es consulta multitabla? `SELECT nombre, email FROM usuarios WHERE fecha_registro > '2026-05-25'`**
**R: Falso.** Una sola tabla. Multitabla requiere JOIN.

**10. ¿Que hace? `SELECT u.nombre, COUNT(p.id) ... FROM usuarios LEFT JOIN pedidos ...`**
**R: Lista usuarios con cantidad de pedidos.** LEFT JOIN incluye usuarios sin pedidos (mostrando 0).

### Modelo relacional y conceptos

**7. El modelo relacional organiza la informacion en tablas de filas y columnas. (V/F)**
**R: Verdadero.**

**9. La integridad referencial garantiza que las relaciones se mantengan inconsistentes. (V/F)**
**R: Falso.** Las claves foraneas aseguran consistencia.

**4. Una subconsulta siempre es independiente de la consulta principal. (V/F)**
**R: Falso.** Existen subconsultas correlacionadas que dependen de la consulta principal.
