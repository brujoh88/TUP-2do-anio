-- TP1 Parte 1: Base de Datos Relacionales
-- Base de Datos 2 - Modulo 1

-- ===========================================
-- Ejercicio 1: Crear tablas con integridad referencial
-- ===========================================

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

-- ===========================================
-- a) Insertar 1 cliente y 2 productos
-- ===========================================

INSERT INTO CLIENTES (nombre, email, fecha_registro)
VALUES ('Juan Perez', 'juan@email.com', '2026-01-15');

INSERT INTO PRODUCTOS (nombre, precio, stock)
VALUES ('Monitor LED 24"', 150.00, 10),
       ('Teclado Mecanico', 85.50, 20);

-- Insertamos pedidos para poder probar las consultas
INSERT INTO PEDIDOS (cliente_id, producto_id, fecha, total)
VALUES (1, 1, '2025-06-10', 150.00),
       (1, 2, '2026-02-20', 85.50);

-- ===========================================
-- b) Actualizar stock de un producto a 5
-- ===========================================

UPDATE PRODUCTOS
SET stock = 5
WHERE id_producto = 1;

-- ===========================================
-- c) Eliminar pedidos con fecha anterior al 2026
-- ===========================================

DELETE FROM PEDIDOS
WHERE fecha < '2026-01-01';

-- ===========================================
-- d) Listar productos con precio mayor a 100
-- ===========================================

SELECT * FROM PRODUCTOS
WHERE precio > 100;

-- ===========================================
-- e) Mostrar nombre del cliente y fecha de cada pedido
-- ===========================================

SELECT c.nombre, p.fecha
FROM PEDIDOS p
JOIN CLIENTES c ON p.cliente_id = c.id_cliente;

-- ===========================================
-- f) Obtener cantidad de pedidos por cliente
-- ===========================================

SELECT c.nombre, COUNT(p.id_pedido) AS cantidad_pedidos
FROM CLIENTES c
LEFT JOIN PEDIDOS p ON c.id_cliente = p.cliente_id
GROUP BY c.id_cliente, c.nombre;
