# Ejercitacion Propuesta: Unidad 1 - Resoluciones

## 1) Diferencia entre tabla, fila y columna

- **Tabla:** Conjunto de datos organizados en filas y columnas.
- **Fila (registro):** Representa una instancia de datos (ejemplo: un cliente).
- **Columna (campo):** Representa un atributo (ejemplo: nombre del cliente).

---

## 2) Diferencia entre DDL, DML y DQL

- **DDL (Data Definition Language):** Define la estructura de las tablas (ej. `CREATE TABLE`).
- **DML (Data Manipulation Language):** Manipula los datos (ej. `INSERT`, `UPDATE`, `DELETE`).
- **DQL (Data Query Language):** Consulta los datos (ej. `SELECT`).

---

## 3) Integridad referencial

Es la propiedad que garantiza que las relaciones entre tablas sean consistentes. Se implementa con **claves foraneas (FK)** que aseguran que un valor en una tabla exista previamente en otra.

---

## 4) Diferencia entre BD relacionales y no relacionales

La diferencia principal radica en como organizan, almacenan y gestionan los datos.

| Aspecto | Relacionales (SQL) | No Relacionales (NoSQL) |
|---------|-------------------|------------------------|
| Modelo de datos | Tablas con filas y columnas | Documentos, clave-valor, grafos o columnas |
| Esquema | Rigido (estructuras fijas) | Flexible (pueden variar entre registros) |
| Relaciones | Explicitas con claves foraneas (FK) | Implicitas o embebidas en los documentos |
| Consultas | Lenguaje estandar SQL | Propio de cada motor (ej: MongoDB usa consultas JSON) |
| Escalabilidad | Vertical (mas potencia al mismo servidor) | Horizontal (distribucion en clusteres) |

**Ventajas y desventajas:**

| Tipo BD | Ventajas | Desventajas |
|---------|----------|-------------|
| SQL | Estructura clara y unificada, estandar maduro y estable, integridad referencial garantizada, soporte a transacciones ACID | Escalabilidad limitada, dificultad para cambios de esquema |
| NoSQL | Esquema flexible, escalabilidad horizontal, buen rendimiento en grandes volumenes | Falta de estandar unificado, consistencia no siempre garantizada, menor madurez en comparacion con SQL |

---

## 5) SQL o NoSQL segun el caso

a) **Sistema bancario:** SQL, por transacciones ACID e integridad de datos.

b) **Aplicacion de streaming de videos con millones de usuarios:** NoSQL, por escalabilidad y flexibilidad.

---

## 6) Tipos de BD NoSQL con ejemplos reales

- **Documento** → MongoDB (almacenar perfiles de usuarios)
- **Clave-Valor** → Redis (gestion de sesiones)
- **Columnas** → Cassandra (historicos de datos masivos)
- **Grafos** → Neo4j (redes sociales, rutas)

---

## 7) Verdadero/Falso

a) En una BD relacional, cada fila puede tener un esquema distinto. → **Falso** (el esquema es rigido, todas las filas tienen la misma estructura)

b) MongoDB almacena documentos en formato JSON/BSON. → **Verdadero**

c) SQL garantiza integridad referencial mediante claves primarias y foraneas. → **Verdadero**

d) NoSQL siempre reemplaza a SQL. → **Falso** (son complementarios, cada uno tiene su caso de uso)

---

## 8) Multiple Choice - Caracteristicas de NoSQL

**Respuesta:** a), c), d)

- a) Esquema flexible → **Correcto**
- b) Modelo basado solo en tablas → Incorrecto (eso es SQL)
- c) Escalabilidad horizontal → **Correcto**
- d) Almacenamiento de datos semi-estructurados → **Correcto**

---

## 9) Verdadero/Falso

a) En SQL, `INSERT INTO` pertenece al DML. → **Verdadero**

b) En SQL, `CREATE TABLE` pertenece al DQL. → **Falso** (pertenece al DDL)

c) En NoSQL no existe el concepto de coleccion. → **Falso** (en MongoDB las colecciones son el equivalente a las tablas)

d) Redis es un ejemplo de base de datos clave-valor. → **Verdadero**

e) NoSQL siempre reemplaza a SQL en sistemas modernos. → **Falso** (son complementarios)

---

## 10) Esquema rigido vs esquema flexible

- **Esquema rigido (SQL):** Todos los registros deben tener la misma estructura.
- **Esquema flexible (NoSQL):** Los registros pueden variar en los campos que incluyen.

---

## 11) Crear tablas (SQL)

```sql
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0
);

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_registro DATE
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    fecha DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (usuario_id) REFERENCES clientes(id_cliente)
);
```

---

## 12) Insertar registros (SQL)

```sql
INSERT INTO productos (nombre, precio, stock)
VALUES ('Manzana', 500.00, 10),
       ('Naranja', 600.00, 10);
```

---

## 13) CONSULTA, UPDATE y DELETE (SQL)

```sql
-- Mostrar productos con precio mayor a 100
SELECT * FROM productos WHERE precio > 100;

-- Actualizar stock del producto "Manzana" a 5 unidades
UPDATE productos
SET stock = 5
WHERE nombre = 'Manzana';

-- Eliminar todos los productos cuyo stock sea 0
DELETE FROM productos WHERE stock = 0;
```

---

## 14) JOIN (SQL)

```sql
SELECT c.nombre, p.fecha
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.usuario_id;
```

---

## 15) Multiple Choice - Jerarquia en MongoDB

**Respuesta:** a), b), c), e)

- a) Documento → **Correcto**
- b) Coleccion → **Correcto**
- c) Base de datos → **Correcto**
- d) Tabla → Incorrecto (concepto de SQL, no de MongoDB)
- e) Cluster → **Correcto**
