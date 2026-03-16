# Autoevaluacion 1 - Repaso y Conceptos Fundamentales

Resultado: **10/10** (100%)

---

### 1. ¿Cual de las siguientes afirmaciones es correcta?
**R: En SQL, CREATE TABLE pertenece al lenguaje DDL.**
> CREATE TABLE es una instruccion de DDL (Data Definition Language).

### 2. ¿Cual de las siguientes afirmaciones es incorrecta?
**R: INSERT es parte de DQL.**
> INSERT pertenece al DML, no al DQL.

### 3. El DML nos permite crear, modificar y obtener datos. (V/F)
**R: Falso**
> DML solo manipula datos (INSERT, UPDATE, DELETE). Para obtener datos se usa DQL (SELECT).

### 4. Una subconsulta siempre se ejecuta de manera independiente y nunca puede depender de la consulta principal. (V/F)
**R: Falso**
> Existen subconsultas correlacionadas que dependen de la consulta principal.

### 5. Analiza: `UPDATE usuarios SET email = 'juan.nuevo@gmail.com'`
**R: Le falta la clausula WHERE.**
> Sin WHERE actualizaria el email de todos los registros.

### 6. ¿Es consulta multitabla? `SELECT nombre, email FROM usuarios WHERE fecha_registro > '2026-05-25'`
**R: Falso**
> Es consulta basica (una sola tabla). Multitabla requiere JOIN.

### 7. El modelo relacional organiza la informacion en tablas compuestas por filas y columnas. (V/F)
**R: Verdadero**
> Esa es la definicion del modelo relacional.

### 8. Error en: `INSERT usuarios (id, nombre, email, fecha_registro) VALUES (...)`
**R: Falta la palabra clave INTO.**
> Lo correcto es `INSERT INTO usuarios`.

### 9. La integridad referencial garantiza que las relaciones mediante claves foraneas se mantengan inconsistentes. (V/F)
**R: Falso**
> Las claves foraneas aseguran consistencia en las relaciones.

### 10. ¿Que hace? `SELECT u.nombre, COUNT(p.id) ... FROM usuarios LEFT JOIN pedidos ON u.id = p.usuario_id GROUP BY u.id, u.nombre`
**R: Devuelve la lista de usuarios con la cantidad de pedidos de cada uno.**
> LEFT JOIN incluye tambien a los usuarios sin pedidos (mostrando 0).
