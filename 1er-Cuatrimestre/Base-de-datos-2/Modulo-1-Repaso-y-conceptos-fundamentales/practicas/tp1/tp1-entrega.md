# Practico 1: Base de Datos Relacionales y No Relacionales

**Materia:** Base de Datos 2 - Modulo 1
**Alumno:** Tiseira Gustavo Hernan

---

## Parte 1: Base de Datos Relacional (SQL)

### Ejercicio 1 - Creacion de tablas con integridad referencial

Se crearon las tablas PRODUCTOS, CLIENTES y PEDIDOS. La tabla PEDIDOS incluye `producto_id` como clave foranea adicional para vincular pedidos con productos, segun la observacion de la consigna.

```sql
CREATE TABLE PRODUCTOS (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0
);

CREATE TABLE CLIENTES (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    fecha_registro DATE NOT NULL
);

CREATE TABLE PEDIDOS (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    producto_id INT NOT NULL,
    fecha DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES CLIENTES(id_cliente),
    FOREIGN KEY (producto_id) REFERENCES PRODUCTOS(id_producto)
);
```

![CREATE TABLE ejecutado en DBeaver](capturas/01-create-tables.png)

---

### a) Insertar 1 cliente y 2 productos

```sql
INSERT INTO CLIENTES (nombre, email, fecha_registro)
VALUES ('Juan Perez', 'juan@email.com', '2026-01-15');

INSERT INTO PRODUCTOS (nombre, precio, stock)
VALUES ('Monitor LED 24"', 150.00, 10),
       ('Teclado Mecanico', 85.50, 20);

INSERT INTO PEDIDOS (cliente_id, producto_id, fecha, total)
VALUES (1, 1, '2025-06-10', 150.00),
       (1, 2, '2026-02-20', 85.50);
```

![INSERT ejecutado en DBeaver](capturas/02-inserts.png)

---

### b) Actualizar stock de un producto a 5 unidades

```sql
UPDATE PRODUCTOS
SET stock = 5
WHERE id_producto = 1;
```

![UPDATE ejecutado en DBeaver](capturas/03-update.png)

---

### c) Eliminar pedidos con fecha anterior al 2026

```sql
DELETE FROM PEDIDOS
WHERE fecha < '2026-01-01';
```

![DELETE ejecutado en DBeaver](capturas/04-delete.png)

---

### d) Listar productos con precio mayor a 100

```sql
SELECT * FROM PRODUCTOS
WHERE precio > 100;
```

![Resultado SELECT precio mayor a 100](capturas/05-select-precio.png)

---

### e) Mostrar nombre del cliente y fecha de cada pedido

```sql
SELECT c.nombre, p.fecha
FROM PEDIDOS p
JOIN CLIENTES c ON p.cliente_id = c.id_cliente;
```

![Resultado JOIN cliente-pedidos](capturas/06-join-pedidos.png)

---

### f) Obtener cantidad de pedidos por cliente

```sql
SELECT c.nombre, COUNT(p.id_pedido) AS cantidad_pedidos
FROM CLIENTES c
LEFT JOIN PEDIDOS p ON c.id_cliente = p.cliente_id
GROUP BY c.id_cliente, c.nombre;
```

![Resultado COUNT pedidos por cliente](capturas/07-count-pedidos.png)

---

## Parte 2: Base de Datos No Relacional (MongoDB)

### Ejercicio 2a - Estructura de los tres perfiles

Los tres tipos de perfiles coexisten en la misma coleccion `perfiles`:

**Perfil Regular:**
```javascript
db.perfiles.insertOne({
    tipo: "regular",
    nombre: "Maria Lopez",
    email: "maria@email.com",
    intereses: ["deportes", "viajes", "tecnologia"],
    direccion: {
        ciudad: "Cordoba",
        domicilio: "Libertad 1500"
    }
});
```

**Perfil Premium:**
```javascript
db.perfiles.insertOne({
    tipo: "premium",
    nombre: "Carlos Garcia",
    email: "carlos@email.com",
    fecha_suscripcion: new Date("2026-01-10"),
    limite_credito: 50000
});
```

**Perfil Corporativo:**
```javascript
db.perfiles.insertOne({
    tipo: "corporativo",
    razon_social: "Tech Solutions SRL",
    email: "contacto@techsolutions.com",
    empleados: 45
});
```

![Insercion de perfiles en MongoDB](capturas/08-mongo-inserts.png)

**Consulta de todos los perfiles:**

```javascript
db.perfiles.find().pretty();
```

![db.perfiles.find() mostrando los 3 documentos](capturas/09-mongo-find.png)

---

### Ejercicio 2b - Polimorfismo en NoSQL

La coexistencia de los perfiles Regular, Premium y Corporativo en la misma coleccion `perfiles` demuestra el concepto de **Polimorfismo** en bases de datos NoSQL. A diferencia de SQL, donde cada tipo de perfil requeriria su propia tabla (o una tabla con muchos campos nulos), en NoSQL cada documento puede tener una estructura diferente dentro de la misma coleccion.

Los tres perfiles comparten algunos campos (como `email`), pero cada uno tiene campos propios:
- **Regular** tiene `intereses` (array) y `direccion` (subdocumento)
- **Premium** tiene `limite_credito` y `fecha_suscripcion`
- **Corporativo** tiene `razon_social` y `empleados`

MongoDB no impone un esquema fijo, permitiendo que documentos con distintas estructuras convivan en la misma coleccion. Esto es analogo al polimorfismo en programacion orientada a objetos, donde distintas clases pueden compartir una interfaz comun pero tener comportamientos y atributos propios.

---

### Ejercicio 2c - Anidamiento en NoSQL

El **Anidamiento** (o embedding) en NoSQL es la tecnica de incluir documentos dentro de otros documentos, creando subdocumentos. En el perfil Regular:

- El campo `direccion` es un **subdocumento** que contiene `ciudad` y `domicilio`, en lugar de ser campos separados en el documento raiz o en una coleccion aparte.
- El campo `intereses` es un **array embebido** dentro del documento, conteniendo multiples valores.

Esta tecnica evita la necesidad de crear colecciones separadas (como se haria con tablas relacionadas en SQL) y permite acceder a toda la informacion del perfil en una sola consulta, mejorando el rendimiento de lectura. En un modelo relacional, `direccion` requeriria una tabla aparte con una clave foranea, y `intereses` necesitaria una tabla intermedia (relacion muchos a muchos). El anidamiento simplifica este modelo al embeber los datos directamente en el documento.
