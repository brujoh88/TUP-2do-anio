# Cuestionario Actividad 1 - Modelado de Datos NoSQL

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (1 pt)

**La coleccion es la unidad minima de almacenamiento en MongoDB.**

- Verdadero
- **Falso** ✓

> La unidad minima de almacenamiento en MongoDB es el **documento**, que representa una entidad y contiene sus campos.

---

### Pregunta 2 (1 pt)

**En NoSQL, los documentos embebidos son utiles cuando los datos suelen consultarse o modificarse juntos.**

- **Verdadero** ✓
- Falso

> El principio clave es "data that is accessed together, should be stored together".

---

### Pregunta 3 (1 pt)

**Segun la "regla dorada" del modelado NoSQL, los datos que se acceden juntos deben:**

- **1. Almacenarse juntos** ✓
- 2. Guardarse en tablas separadas
- 3. Normalizarse al maximo

---

### Pregunta 4 (1 pt)

**¿Cuando se recomienda usar documentos embebidos en lugar de referencias?**

- **1. Cuando la relacion entre entidades es estrecha.** ✓
- **2. Cuando los datos se leen o escriben juntos.** ✓
- 3. Cuando se necesita independencia total entre entidades
- 4. Cuando los datos cambian frecuentemente de forma independiente.

---

### Pregunta 5 (1 pt)

**¿Cual de las siguientes opciones NO es una ventaja del modelo embebido en NoSQL?**

- 1. Mejora la velocidad de lectura.
- 2. Reduce la cantidad de consultas necesarias.
- **3. Aumenta la independencia entre entidades.** ✓
- 4. Facilita el acceso conjunto de datos relacionados.

---

### Pregunta 6 (1 pt)

**¿Cual de las siguientes afirmaciones sobre referencias entre documentos es incorrecta?**

- 1. Permiten mantener la independencia entre colecciones.
- 2. Favorecen la escalabilidad.
- 3. Se utilizan para relaciones de gran tamaño.
- **4. Son ideales cuando los datos se actualizan siempre juntos.** ✓

---

### Pregunta 7 (1 pt)

**¿Cual es el principio que guia el diseño de atributos en MongoDB?**

- 1. Los datos deben ser siempre normalizados.
- 2. Los documentos deben evitar redundancia en todos los casos.
- 3. Cada entidad debe tener una tabla propia.
- **4. Los datos que se acceden juntos, deben almacenarse juntos.** ✓

---

### Pregunta 8 (1 pt)

**¿Que enfoque de generalizacion en MongoDB guarda todos los subtipos en una misma coleccion?**

- **1. Un solo documento por jerarquia** ✓
- 2. Modelo referencial cruzado.
- 3. Colecciones separadas por subtipo.
- 4. Modelo hibrido.

---

### Pregunta 9 (1 pt)

**¿Cual de las siguientes decisiones de diseño se busca al modelar en NoSQL?**

- 1. Usar claves foraneas en todas las relaciones.
- **2. Equilibrar la redundancia con el rendimiento.** ✓
- 3. Evitar la duplicacion de datos a toda costa.
- 4. Alcanzar la maxima normalizacion posible.

---

### Pregunta 10 (1 pt)

**El modelo hibrido en MongoDB se caracteriza por:**

- 1. Guardar todos los datos en una unica coleccion sin diferenciacion.
- 2. Usar solo referencias entre colecciones hijas.
- **3. Combinar atributos generales en una coleccion base y especificos embebidos o referenciados.** ✓
- 4. Duplicar datos en todas las entidades para evitar dependencias.
