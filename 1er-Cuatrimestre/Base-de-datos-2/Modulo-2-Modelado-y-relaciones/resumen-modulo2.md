# Resumen Modulo 2: Modelado y Relaciones

## Base de Datos 2

---

## 1. Modelado de datos en NoSQL

El modelado en MongoDB consiste en definir como representar **entidades**, sus **atributos** y sus **relaciones**. A diferencia de SQL, MongoDB no impone esquemas fijos: el diseño se centra en **como se consultan y actualizan los datos**.

### Regla dorada

> "Data that is accessed together, should be stored together"

Si dos datos se consultan juntos, deben almacenarse juntos (embebidos). Si requieren independencia o acceso separado, se usan referencias.

### Conceptos clave

| Concepto | Descripcion |
|---|---|
| **Entidades** | Objetos con significado propio (usuarios, productos). Se agrupan en colecciones |
| **Atributos** | Pares clave-valor que describen una entidad |
| **Colecciones** | Agrupaciones de documentos (equivalente a tablas en SQL) |

### Principio de diseño

MongoDB **no busca normalizar al maximo** como en SQL, sino **equilibrar redundancia con rendimiento**.

---

## 2. Embebido vs Referencia

### Embebido de documentos

Se usa cuando:
- Los datos se leen/escriben juntos
- La relacion es estrecha o jerarquica (ej: cliente con sus direcciones)
- La data embebida no cambia habitualmente
- Solo se embeben los atributos relevantes (no toda la entidad)

**Ventaja:** Una sola consulta trae toda la informacion.
**Desventaja:** El documento puede crecer demasiado.

```javascript
{
    _id: ObjectId("U1"),
    nombre: "Maria",
    perfil: {
        fecha_nacimiento: "1990-05-10",
        direccion: "Cordoba 123"
    }
}
```

### Referencia entre documentos

Se usa cuando:
- La relacion es debil o de gran tamaño (ej: productos y categorias)
- Se necesita independencia y escalabilidad
- Los datos se acceden por separado frecuentemente

**Ventaja:** Modularidad, documentos mas chicos.
**Desventaja:** Requiere multiples consultas.

```javascript
// Coleccion usuarios
{ _id: ObjectId("U1"), nombre: "Maria", perfil_id: ObjectId("P1") }

// Coleccion perfiles
{ _id: ObjectId("P1"), fecha_nacimiento: "1990-05-10", direccion: "Cordoba 123" }
```

### Patron hibrido

Combina ambos: se embeben campos esenciales para consultas rapidas y se referencian los detalles menos usados. Tambien conocido como **Extended Reference Pattern**.

---

## 3. Tipos de relaciones

### Relacion uno a uno (1:1)

Una entidad se relaciona con exactamente una entidad.

**Ejemplo:** Cada usuario tiene un unico perfil.

| Estrategia | Cuando usar |
|---|---|
| **Embebido** | Si siempre consultas ambos juntos |
| **Referencia** | Si el perfil es grande o independiente |

### Relacion uno a muchos (1:N)

Una entidad se relaciona con multiples instancias de otra.

**Ejemplo:** Un curso tiene varios estudiantes.

**Embebido** (array de subdocumentos dentro del curso):
```javascript
{
    _id: ObjectId("Curso1"),
    nombre: "Base de Datos II",
    estudiantes: [
        { estudiante_id: ObjectId("E1"), nombre: "Valentina" },
        { estudiante_id: ObjectId("E2"), nombre: "Juan" }
    ]
}
```

**Referencia** (el estudiante guarda el id del curso):
```javascript
{ _id: ObjectId("E1"), nombre: "Valentina", curso_id: ObjectId("Curso1") }
```

### Relacion muchos a muchos (N:M)

Muchas instancias de una entidad se relacionan con muchas de otra. Se usa una **coleccion asociativa** (equivalente a tabla intermedia en SQL).

**Ejemplo:** Estudiantes y cursos.

**Coleccion asociativa (inscripciones):**
```javascript
{
    _id: ObjectId("I1"),
    estudiante_id: ObjectId("E1"),
    curso_id: ObjectId("Curso1"),
    fecha_inscripcion: "2025-10-05"
}
```

**Con arrays de referencias** (para consultas rapidas, genera duplicacion):
```javascript
// Estudiante
{ _id: ObjectId("E2"), nombre: "Juan", curso_ids: [ObjectId("Curso1"), ObjectId("Curso2")] }

// Curso
{ _id: ObjectId("Curso1"), nombre: "BD II", estudiante_ids: [ObjectId("E1"), ObjectId("E2")] }
```

---

## 4. Generalizacion y especializacion (herencia)

MongoDB permite modelar jerarquias de tipo herencia con tres enfoques:

| Enfoque | Descripcion | Ejemplo |
|---|---|---|
| **Un solo documento** | Todos los subtipos en la misma coleccion, diferenciados por campo `type` | `"type": "Profesor"`, `"type": "Alumno"` |
| **Colecciones separadas** | Cada subtipo en su propia coleccion | Coleccion `profesores`, coleccion `alumnos` |
| **Hibrido** | Atributos generales en coleccion base, especificos embebidos o referenciados | Base `personas` + detalles embebidos |

La eleccion depende del volumen de datos, frecuencia de acceso y complejidad de las consultas.

---

## 5. Bases de datos para aplicaciones moviles

### Tipos de bases de datos moviles

| Tipo | Descripcion | Ejemplos |
|---|---|---|
| **Local (on-device)** | Datos en el dispositivo, funciona sin conexion, sincroniza cuando hay red | Realm, SQLite, Core Data |
| **Remota (cloud-based)** | Datos en servidores, acceso mediante API/SDK | MongoDB Atlas, Firebase, Couchbase Cloud |
| **Hibrida/sincronizada (Edge/Sync)** | Combina local + nube, sincronizacion eventual | MongoDB Atlas Device Sync, Couchbase Mobile |

### Servicios de MongoDB para moviles

- **MongoDB Atlas:** Base de datos en la nube
- **Realm (Atlas Device SDKs):** Base de datos local en dispositivos
- **Atlas Edge / Mobile Sync:** Sincronizacion entre dispositivo y servidor

### Propiedades de consistencia en MongoDB

| Propiedad | Descripcion |
|---|---|
| **Write concern** | Cuantos nodos deben confirmar una escritura antes de considerarla exitosa |
| **Read concern** | Que tan "reciente" debe ser la lectura |
| **Transacciones** | Agrupan multiples operaciones atomicamente |
| **Consistencia causal** | Sesiones que garantizan orden logico de lecturas/escrituras |

### Decisiones de diseño en entornos moviles

- **Consistencia eventual vs fuerte:** Aceptar que los datos tarden en actualizarse (mejor rendimiento) o exigir reflejo inmediato
- **Tolerancia a desconexion:** Los usuarios deben poder operar sin red y sincronizar despues
- **Manejo de conflictos:** Estrategias como "ultimo que escribe gana", resolucion manual o versionado

### Ejemplo: App de inventario

1. El celular guarda movimientos de stock localmente: `{ id_local, producto_id, cantidad, fecha }`
2. Al recuperar conexion, sincroniza con la coleccion `movimientos` en el servidor
3. Se usan transacciones y write/read concern para evitar conflictos

---

## Resumen de decisiones de modelado

| Pregunta | Embebido | Referencia |
|---|---|---|
| ¿Se leen juntos? | Si | No |
| ¿Relacion estrecha? | Si | No |
| ¿Dato crece mucho? | No | Si |
| ¿Se accede por separado? | No | Si |
| ¿Dato cambia seguido? | No | Si |

---

## 10 Preguntas de repaso

1. **¿Cual es la regla dorada del modelado en MongoDB?** "Data that is accessed together, should be stored together."

2. **¿Cuando usar embebido?** Cuando los datos se leen/escriben juntos, la relacion es estrecha y la data embebida no crece descontroladamente.

3. **¿Cuando usar referencia?** Cuando la relacion es debil, los datos son grandes o se acceden por separado frecuentemente.

4. **¿Que es un patron hibrido?** Combina embebido parcial (campos esenciales) con referencia (detalles completos). Extended Reference Pattern.

5. **¿Como se modela una relacion N:M en MongoDB?** Con una coleccion asociativa (tipo tabla intermedia) o con arrays de referencias en ambas colecciones.

6. **¿Que enfoques existen para modelar herencia?** Un solo documento con campo `type`, colecciones separadas por subtipo, o modelo hibrido.

7. **¿Que es write concern?** Cuantos nodos del replica set deben confirmar una escritura antes de que se considere exitosa.

8. **¿Que tipos de BD moviles existen?** Local (on-device), remota (cloud), e hibrida/sincronizada (edge/sync).

9. **¿Que es consistencia eventual?** Los datos pueden tardar en actualizarse en todos los nodos, pero eventualmente convergen al mismo estado.

10. **¿Como se manejan conflictos en sincronizacion movil?** Estrategias como "ultimo que escribe gana", resolucion manual, versionado o transacciones.
