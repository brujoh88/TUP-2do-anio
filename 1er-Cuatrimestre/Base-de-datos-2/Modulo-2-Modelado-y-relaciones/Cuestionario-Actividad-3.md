# Cuestionario Actividad 3 - Bases de Datos para Apps Moviles

**Calificacion: 10/10 (100%)**

---

### Pregunta 1 (2 pts)

**¿Que describe mejor las bases de datos locales en dispositivos con sincronizacion eventual?**

- **a. Datos almacenados en el dispositivo y que funcionan sin conexion, luego se sincronizan cuando hay red** ✓
- b. Solo almacenamiento en el servidor central
- c. Una mezcla de almacenamiento en nube y dispositivo sin sincronizacion
- d. Datos almacenados en la nube y accesibles solo con conexion constante

---

### Pregunta 2 (1.5 pts)

**¿Que opcion describe mejor la consistencia y sincronizacion en un modelo hibrido/Edge?**

- a. Solo escritura en el dispositivo
- b. Sincronizacion forzada en tiempo real en cada operacion
- c. Escribir solo en la nube, sin sincronizacion local
- **d. Guardar datos en el dispositivo temporalmente y sincronizarlos mediante sincronizacion eventual o replicacion** ✓

---

### Pregunta 3 (1.5 pts)

**¿Que tipo de aplicacion se usa como ejemplo donde cada movimiento se guarda localmente y luego se sincroniza con el servidor?**

- a. App de edicion de imagenes
- **b. App de inventario** ✓
- c. App de reproducciones de musica
- d. App de gestion de contactos

---

### Pregunta 4 (1.5 pts)

**En MongoDB, ¿que concepto garantiza que lecturas y escrituras respeten el orden logico de las operaciones dentro de una sesion?**

- a. Consistencia fuerte
- **b. Consistencia y sesion causal** ✓
- c. Write concern alto
- d. Transacciones solamente

---

### Pregunta 5 (2 pts)

**¿Que opcion describe mejor el control de cuantos nodos deben confirmar una escritura en MongoDB?**

- a. Sesiones
- b. Read concern
- c. Transacciones
- **d. Write concern** ✓

---

### Pregunta 6 (1.5 pts) - Completar texto

**Texto completo con respuestas:**

> En el mundo de las aplicaciones moviles, las bases de datos juegan un papel crucial para gestionar la informacion de los usuarios y las operaciones de la app. Existen varias estrategias para garantizar que la app funcione incluso cuando la conexion a Internet es **desconectada**, y que los datos se sincronicen de forma correcta cuando la red vuelva a estar **disponible**.
>
> Una de las decisiones mas importantes es elegir entre una consistencia eventual y una consistencia **fuerte**, ya que esto afecta el rendimiento, la disponibilidad y la precision de los datos. En un esquema de sincronizacion **eventual**, los cambios pueden guardarse localmente en el dispositivo y luego replicarse con el servidor cuando sea posible, reduciendo la dependencia de la conexion continua.
>
> Los sistemas modernos a menudo usan un concepto llamado **concurrencia** de escritura para controlar cuantos nodos deben confirmar una operacion. En MongoDB, este control se gestiona mediante el parametro de **write concern**, que determina el grado de confirmacion que se requiere para una escritura.
>
> En un modelo hibrido o Edge, las apps pueden almacenar datos en el dispositivo y, a su vez, sincronizarlos con la nube. Este enfoque permite que la app funcione sin conexion y, despues, realice la sincronizacion mediante un proceso de **sincronizacion eventual** o de replicacion para mantener la consistencia entre dispositivos y servidores.
>
> Para garantizar que las operaciones sigan un orden logico dentro de una sesion, las bases de datos proporcionan mecanismos de **consistencia de sesion** y, a veces, transacciones. En este contexto, la frase mas adecuada para describir el comportamiento esperado es "consistencia y sesion **causal**".
>
> Ejemplos practicos muestran que, en una app de mensajes, cada nuevo mensaje puede guardarse primero en la memoria del dispositivo y luego enviarse al servidor cuando haya conectividad. Este patron se relaciona con el concepto de Edge/Mobile Sync, que busca minimizar la latencia y mejorar la experiencia del usuario, especialmente en entornos con conectividad **limitada**.
