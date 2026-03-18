// TP1 Parte 2: Base de Datos No Relacionales (MongoDB)
// Base de Datos 2 - Modulo 1

// ===========================================
// Ejercicio 2a: Crear documentos para los tres perfiles
// Todos coexisten en la misma coleccion "perfiles"
// ===========================================

// Perfil Regular
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

// Perfil Premium
db.perfiles.insertOne({
    tipo: "premium",
    nombre: "Carlos Garcia",
    email: "carlos@email.com",
    fecha_suscripcion: new Date("2026-01-10"),
    limite_credito: 50000
});

// Perfil Corporativo
db.perfiles.insertOne({
    tipo: "corporativo",
    razon_social: "Tech Solutions SRL",
    email: "contacto@techsolutions.com",
    empleados: 45
});

// Verificar los documentos insertados
db.perfiles.find().pretty();

// ===========================================
// Ejercicio 2b: Polimorfismo en NoSQL
// ===========================================

// La coexistencia de los perfiles Regular, Premium y Corporativo en la
// misma coleccion "perfiles" demuestra el concepto de Polimorfismo en
// bases de datos NoSQL. A diferencia de SQL donde cada tipo de perfil
// requeriria su propia tabla (o una tabla con muchos campos nulos),
// en NoSQL cada documento puede tener una estructura diferente.
// Los tres perfiles comparten algunos campos (como email) pero cada uno
// tiene campos propios: Regular tiene "intereses" y "direccion",
// Premium tiene "limite_credito" y "fecha_suscripcion", y Corporativo
// tiene "razon_social" y "empleados". MongoDB no impone un esquema fijo,
// permitiendo que documentos con distintas estructuras convivan en la
// misma coleccion.

// ===========================================
// Ejercicio 2c: Anidamiento en NoSQL
// ===========================================

// El Anidamiento (o embedding) en NoSQL es la tecnica de incluir
// documentos dentro de otros documentos, creando subdocumentos.
// En el perfil Regular, el campo "direccion" es un subdocumento que
// contiene "ciudad" y "domicilio", en lugar de ser campos separados
// en el documento raiz. De forma similar, "intereses" es un array
// embebido dentro del documento.
// Esta tecnica evita la necesidad de crear colecciones separadas
// (como se haria con tablas en SQL) y permite acceder a toda la
// informacion del perfil en una sola consulta, mejorando el rendimiento
// de lectura.
