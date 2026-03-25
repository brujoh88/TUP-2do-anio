# Resumen Unidad 2: Modelos de Desarrollo de Software

## Metodologia de Sistemas I

---

## 1. Que es un Modelo de Desarrollo de Software

Un **modelo de desarrollo de software** es un esquema que estructura y organiza las fases del proceso de creacion de software, desde la concepcion de la idea hasta el mantenimiento.

> **Modelo vs. Metodologia:** El **modelo** es el enfoque estructural general que guia el proyecto (ej. Cascada, Incremental). La **metodologia** es un conjunto de practicas y reglas especificas que implementan ese modelo (ej. Scrum, XP). El modelo define el "que"; la metodologia define el "como".

### Resumen de Modelos

| Modelo | Tipo | Caracteristica Principal |
|--------|------|--------------------------|
| **Cascada** | Secuencial y rigido | Fases en orden estricto, una tras otra |
| **Prototipado** | Iterativo y exploratorio | Construir versiones tempranas para obtener feedback |
| **Espiral** | Evolutivo y centrado en el riesgo | Desarrollo iterativo con analisis formal de riesgos en cada ciclo |
| **Incremental** | Modular y progresivo | Software entregado en piezas funcionales completas |

---

## 2. Modelo en Cascada

### 2.1 Origen y Filosofia

- Origen en industrias como la manufactura y la construccion, no en la informatica.
- Formalizado por **Winston W. Royce** en **1970** ("Managing the Development of Large Software Systems").
- Trata el desarrollo de software como un **proceso de fabrica predecible**: planificacion exhaustiva + documentacion detallada = exito.

**Filosofia central:**
1. **Divide y venceras:** Fases discretas y bien definidas
2. **Una cosa a la vez:** Cada fase debe completarse al 100% antes de avanzar
3. **No mires atras:** Volver a una fase anterior es fuertemente desaconsejado

> **Dato historico:** Ironicamente, Royce presento el modelo secuencial puro como un modelo **defectuoso** ("flawed") y propuso agregar iteraciones y "hacerlo dos veces" (construir un prototipo primero). La industria adopto la version simplificada que el mismo critico, porque era mas facil de entender y gestionar contractualmente.

### 2.2 Fases y Flujo de Trabajo

El flujo es **lineal y unidireccional** (como una cascada de agua):

1. **Requerimientos** - Comprender y documentar exhaustivamente lo que el sistema debe hacer. El documento se "congela" como contrato.
2. **Analisis** - Estudiar los requerimientos para definir reglas de negocio y flujos de datos (el "que" exactamente debe hacer).
3. **Diseno** - Traducir el "que" en el "como": arquitectura, base de datos, componentes, plataformas tecnologicas.
4. **Implementacion** - Escribir el codigo fuente traduciendo el diseno a un lenguaje de programacion concreto.
5. **Pruebas** - Verificar que el software funciona correctamente y cumple con los requerimientos originales.
6. **Mantenimiento** - Correcciones, mejoras y adaptaciones post-entrega. Es la etapa mas larga del ciclo de vida.

### 2.3 Ecosistema Tecnologico

| Aspecto | Descripcion |
|---------|-------------|
| **Lenguajes** | COBOL, FORTRAN, C, Pascal (compilados, tipado fuerte, programacion estructurada) |
| **Control de versiones** | Centralizado: RCS, CVS, Subversion (SVN). Un unico repositorio central |
| **Gestion de proyecto** | Diagrama de Gantt (tareas secuenciales y dependientes) |
| **Pruebas** | Fase final y diferenciada, equipo de QA separado, proceso manual |
| **Despliegue** | "Big Bang": la version completa se libera de una sola vez |

### 2.4 Ventajas y Desventajas

**Ventajas:**
- **Claridad y predictibilidad:** Fases discretas con hitos claros, facil planificacion y medicion del progreso
- **Documentacion exhaustiva:** Invaluable para mantenimiento a largo plazo e incorporacion de nuevos miembros
- **Disciplina y estructura:** Obliga a un analisis y diseno cuidadosos al inicio

**Desventajas:**
1. **Poca flexibilidad ante los cambios:** Su debilidad mas critica. Cualquier cambio a mitad de proyecto es extremadamente costoso
2. **Deteccion tardia de errores:** Los errores conceptuales no se descubren hasta la fase de pruebas. Corregirlos es **exponencialmente mas caro**
3. **Entrega tardia de valor:** El cliente no ve software funcional hasta que el proyecto esta practicamente terminado

### 2.5 Casos de Uso Ideales

Proyectos donde el **riesgo de cambio es minimo y el costo del fracaso es altisimo**:

- **Requerimientos estables y conocidos:** Firmware para hardware especifico (microondas, controlador industrial)
- **Sistemas criticos y entornos regulados:** Aeroespacial, defensa, dispositivos medicos (marcapasos). Exigen trazabilidad documental completa
- **Proyectos gubernamentales y contratos fijos:** Alcance, presupuesto y cronograma definidos desde el inicio

---

## 3. Modelo de Prototipado

### 3.1 Origen y Filosofia

- Nace para resolver la **brecha de comunicacion** entre quienes imaginan el producto y quienes lo construyen.
- Premisa fundamental: los usuarios **"no saben lo que quieren hasta que lo ven"**.
- Surgio como critica directa al modelo en Cascada.
- **Autor clave:** Frederick P. Brooks, Jr. - "The Mythical Man-Month" (1975). Propone **"construir uno para tirar"** (Plan to Throw One Away): el prototipo es una herramienta de aprendizaje que debe desecharse.

**Filosofia central: "Validar antes de construir"**

El prototipo es una **herramienta, a menudo desechable, para el dialogo**. No es la primera pieza del software final, sino un medio para descubrir requisitos.

**Ideas clave:**
1. **Hacerlo tangible:** Convertir ideas abstractas en algo que el usuario pueda experimentar
2. **Fallar rapido y barato:** Descubrir errores de concepto en una maqueta de bajo costo
3. **La conversacion es la clave:** El prototipo es un punto de partida para el feedback

### 3.2 Fases y Flujo de Trabajo

Flujo **ciclico e iterativo** (no lineal como la cascada):

1. **Recoleccion de Requerimientos Iniciales** - Breve, solo lo necesario para visualizar una solucion
2. **Diseno Rapido** - Boceto centrado en UX (flujos de navegacion, pantallas principales). Prioridad: velocidad
3. **Construccion del Prototipo** - Version interactiva que simula la funcionalidad principal (puede no tener logica real ni BD)
4. **Evaluacion del Cliente (Ciclo de Refinamiento)** - El corazon del modelo. Se repite el ciclo (Diseno -> Construccion -> Evaluacion) hasta satisfacer al usuario
5. **Desarrollo del Producto Final** - El prototipo se descarta y se construye el sistema de produccion desde cero, con requisitos claros y validados

### 3.3 Ecosistema Tecnologico

| Aspecto | Descripcion |
|---------|-------------|
| **Lenguajes** | Dinamicos y de alto nivel: JavaScript, Python, Ruby. Frameworks: React, Django, Rails |
| **Herramientas de diseno** | Figma, Sketch, Adobe XD (prototipos de alta fidelidad sin codigo) |
| **Plataformas Low-Code/No-Code** | Bubble, Webflow, Microsoft Power Apps |
| **Practicas asociadas** | Diseno Centrado en el Usuario (UCD), tecnica dentro de Agiles (Scrum) |

### 3.4 Ventajas y Desventajas

**Ventajas:**
- **Reduccion del riesgo de malentendidos:** Se eliminan ambiguedades antes de invertir en el desarrollo
- **Mayor satisfaccion del usuario:** Se sienten involucrados y escuchados
- **Flexibilidad para la innovacion:** Probar ideas rapidamente y de forma economica
- **Deteccion temprana de problemas:** Errores de usabilidad se detectan cuando es facil corregirlos

**Desventajas:**
- **Riesgo de gestionar mal las expectativas:** Los usuarios pueden confundir el prototipo con el producto casi terminado
- **Scope creep:** El ciclo de retroalimentacion puede volverse interminable sin limites claros
- **Posible descuido de la calidad interna:** Tentacion de tomar atajos en la construccion del prototipo
- **Costo del trabajo "desechable":** Tiempo invertido en algo que no sera parte del producto final

### 3.5 Casos de Uso Ideales

La pregunta clave: **"que deberiamos construir?"** (no "como lo construimos"):

- **Productos innovadores o sin precedentes:** Startups buscando el "product-market fit"
- **Alta carga de UI/UX:** Apps moviles, e-commerce, productos donde la experiencia visual es critica
- **Clientes con requisitos ambiguos:** El prototipo sirve como lenguaje comun para concretar ideas vagas
- **Validacion de viabilidad tecnica:** Pruebas de concepto para tecnologias nuevas

---

## 4. Modelo en Espiral

### 4.1 Origen y Filosofia

- Propuesto por **Barry Boehm** en **1986** ("A Spiral Model of Software Development and Enhancement").
- Respuesta a los fracasos de la Cascada en proyectos de **gran escala y alta complejidad**.
- Filosofia central: el desarrollo de software es una mision de **exploracion y gestion de riesgos**, no un proceso de manufactura predecible.

**Idea clave:** Un **ciclo evolutivo basado en iteraciones**. El proyecto "crece" hacia afuera en una espiral. Ninguna vuelta comienza sin antes identificar y neutralizar los mayores riesgos.

### 4.2 Fases y Flujo de Trabajo

No tiene fases secuenciales, sino un ciclo de **4 cuadrantes** que se repite en cada iteracion:

1. **Determinar objetivos, alternativas y restricciones** - Definir que se va a lograr en este ciclo
2. **Identificar y analizar riesgos** - El **corazon del modelo**. Evaluar que podria salir mal y como mitigarlo. A menudo se construye un prototipo para reducir riesgos
3. **Desarrollo y validacion** - Desarrollar y probar el incremento de software para ese ciclo
4. **Planificacion de la siguiente iteracion** - Revisar resultados y planificar la siguiente vuelta

Con cada vuelta, el producto se vuelve mas completo y los riesgos mas controlados.

### 4.3 Ecosistema Tecnologico

| Aspecto | Descripcion |
|---------|-------------|
| **Enfoque** | Agnostico tecnologicamente, definido por practicas de gestion |
| **Practica central** | Analisis Formal de Riesgos (matrices de riesgo, probabilidad e impacto) |
| **Prototipado** | Para reducir riesgos tecnicos (no para validar UX como en Prototipado) |
| **Gestion** | Procesos pesados (heavyweight): documentacion detallada, revisiones formales |

### 4.4 Ventajas y Desventajas

**Ventajas:**
- **Gestion de riesgos superior:** Su principal razon de ser. Excelente cuando el fracaso no es una opcion
- **Adaptable a los cambios:** Permite reevaluar la direccion del proyecto en cada ciclo
- **Flexible:** Puede incorporar otros modelos (Cascada o Prototipado) dentro de sus iteraciones

**Desventajas:**
- **Muy complejo:** Requiere alta madurez en gestion y personal experto en analisis de riesgos
- **Costoso y lento:** El analisis formal en cada ciclo consume mucho tiempo y recursos
- **Inadecuado para proyectos pequenos:** Es un modelo "pesado", excesivo para proyectos de bajo riesgo

### 4.5 Casos de Uso Ideales

Proyectos de **muy gran escala, costo elevado y alto riesgo tecnico**:

- Software militar y de defensa
- Sistemas aeroespaciales (software para un satelite)
- Sistemas de control de plantas de energia
- Proyectos de I+D donde la viabilidad tecnologica es la principal incognita

---

## 5. Ejes de Decision: Incertidumbre y Riesgo (Apunte Complementario Parte I)

Los tres modelos clasicos representan tres filosofias diferentes para manejar dos problemas centrales:

### Eje 1: Incertidumbre de los Requisitos

*"Que tan bien entendemos lo que debemos construir?"*

| Modelo | Nivel de Incertidumbre | Filosofia |
|--------|----------------------|-----------|
| **Cascada** | Minima (asume requisitos 100% conocidos) | "Congelar" requisitos al inicio |
| **Prototipado** | Maxima (los usuarios no saben lo que quieren) | "Validar antes de construir" |
| **Espiral** | Variable (se descubre iterando) | Evaluar en cada ciclo |

### Eje 2: Gestion del Riesgo

*"Cual es el mayor riesgo y como lo gestiona el modelo?"*

| Modelo | Estrategia de Riesgo | Problema / Fortaleza |
|--------|---------------------|---------------------|
| **Cascada** | Riesgo **acumulado al final**. Evitarlo con planificacion exhaustiva | Si la planificacion falla, corregir es exponencialmente caro |
| **Prototipado** | Riesgo **atacado al inicio**. "Fallar rapido y barato" | Mitiga riesgo de mercado/usuario. No mitiga riesgo tecnico |
| **Espiral** | Riesgo como **eje central**. Cada ciclo comienza con analisis de riesgos | Superior para alto riesgo tecnico y proyectos de gran escala |

---

## 6. Modelo Incremental

### 6.1 Origen y Filosofia

- Nacio en los anios 80 como solucion pragmatica a los dos mayores riesgos de la Cascada: el largo tiempo de espera y el peligro del despliegue "big bang".
- Es la **base sobre la que se construyeron las metodologias Agiles**.
- **Autor clave:** David Lorge Parnas - trabajos sobre **diseno modular y ocultacion de informacion** (information hiding).

**Filosofia central: "Construir y entregar el producto en piezas funcionales y operativas"**

Cada incremento **no es una maqueta** (como el prototipo), sino una **pieza de software de produccion**: completamente codificada, probada y funcional.

**Ideas clave:**
- **Valor temprano y continuo:** Entregar software funcional lo antes posible. Cada incremento agrega valor
- **Cada incremento es un producto usable:** El 1er incremento puede ser login + registro, el 2do gestionar perfiles, etc.
- **Reduccion del riesgo de integracion:** Problemas se detectan de forma continua, no al final
- **Feedback sobre un producto real:** No sobre una simulacion

### 6.2 Fases y Flujo de Trabajo

Serie de **mini-proyectos** o "incrementos", cada uno con sus propias fases:

1. **Planificacion General y Definicion de Incrementos** - Arquitectura base + descomposicion en incrementos priorizados (mayor valor de negocio primero)
2. **Ciclo de Desarrollo del Incremento** - Cada incremento es una "mini-cascada": Analisis -> Diseno -> Implementacion -> Pruebas
3. **Integracion y Entrega** - El nuevo modulo se integra con los anteriores, se prueba la integracion y se entrega al cliente
4. **Retroalimentacion y Planificacion del Siguiente Incremento** - El cliente usa el producto y da feedback para ajustar prioridades

> **Ejemplo (e-commerce):** Incremento 1: Visualizacion de productos. Incremento 2: Carrito de compras. Incremento 3: Proceso de pago.

### 6.3 Ecosistema Tecnologico

| Aspecto | Descripcion |
|---------|-------------|
| **Paradigma** | Programacion Orientada a Objetos (C++, Smalltalk, Java). Componentes autonomos y reutilizables |
| **Arquitectura** | Modular o basada en componentes. Diseno de APIs como contratos entre modulos |
| **Control de versiones** | SVN (centralizado). Gestion de multiples incrementos |
| **Practica clave** | **Pruebas de regresion**: al agregar un incremento, reprobar todo el sistema existente |
| **Automatizacion** | Los primeros esfuerzos hacia la automatizacion de pruebas |
| **Precursor de** | Mini-Cascadas, Integracion Continua (CI), Feedback Continuo |

### 6.4 Ventajas y Desventajas

**Ventajas:**
1. **Entrega temprana de valor:** El cliente recibe software funcional mucho antes de terminar el proyecto completo
2. **Mayor flexibilidad que la cascada:** El plan puede ajustarse entre un ciclo y otro basandose en feedback
3. **Reduccion del riesgo del proyecto:** Si el presupuesto se agota, el cliente tiene un producto funcional (aunque incompleto)
4. **Feedback mas relevante:** Basado en uso de producto real, no de maquetas

**Desventajas:**
- **Requiere un diseno inicial robusto:** La arquitectura debe ser solida y extensible desde el principio, o la deuda tecnica se acumula
- **Mayor complejidad en la gestion:** Coordinar multiples mini-proyectos, versiones e integraciones
- **Costo total puede ser mas alto:** Pruebas de regresion en cada integracion + posible retrabajo
- **El producto completo no esta definido al inicio:** Puede generar incertidumbre en clientes que necesitan alcance fijo

### 6.5 Casos de Uso Ideales

- **Producto Minimo Viable (MVP):** Startups que construyen un primer incremento con funcionalidades esenciales para validar en el mercado
- **Proyectos grandes y complejos:** ERPs, sistemas bancarios. Dividir en partes manejables
- **Productos con requerimientos que evolucionan:** Nucleo conocido, detalles secundarios cambiantes
- **Reemplazo de sistemas heredados (legacy):** Migrar funcionalidad pieza por pieza, no "big bang"

---

## 7. Desarrollo Agil

### 7.1 Contexto de Surgimiento

Respuesta a la **"crisis del software"** (anos 80-90). Los modelos tradicionales (especialmente Cascada) generaban:
- **Proyectos excesivamente largos** (anos en completarse)
- **Incapacidad para gestionar el cambio** (el cambio se trataba como un error)
- **Producto final insatisfactorio** (cumplia el documento original pero ya no las necesidades reales)

### 7.2 El Manifiesto Agil (2001)

17 referentes de la industria se reunieron en **Snowbird, Utah, febrero de 2001**. El resultado fue el **Manifiesto por el Desarrollo Agil de Software**.

### Los 4 Valores Fundamentales

> El manifiesto **no elimina** los elementos de la derecha, sino que **valora mas** los de la izquierda.

| Valoramos mas... | ...sobre |
|-------------------|---------|
| **Individuos e interacciones** | Procesos y herramientas |
| **Software funcionando** | Documentacion exhaustiva |
| **Colaboracion con el cliente** | Negociacion de contratos |
| **Respuesta al cambio** | Seguir un plan |

**Desglose de cada valor:**

1. **Individuos e interacciones sobre procesos y herramientas:** Los mejores resultados provienen de equipos motivados con buena comunicacion, no de herramientas complejas o procesos rigidos. Una conversacion directa vale mas que un formulario burocratico.

2. **Software funcionando sobre documentacion exhaustiva:** La unica medida real de progreso es la entrega de software funcional. La documentacion se reduce a lo esencial y necesario.

3. **Colaboracion con el cliente sobre negociacion de contratos:** El cliente se integra como parte del equipo, da feedback frecuente. El objetivo es construir el producto correcto juntos, no "ganar" una negociacion.

4. **Respuesta al cambio sobre seguir un plan:** El cambio es inevitable y se acepta como **ventaja competitiva**. El plan es una guia que evoluciona, no una hoja de ruta rigida.

### 7.3 Los 12 Principios del Manifiesto Agil

**A. Centrados en la Entrega de Valor al Cliente:**

1. Satisfacer al cliente mediante la **entrega temprana y continua** de software con valor
2. **Aceptar que los requisitos cambien**, incluso tarde en el desarrollo
3. **Entregar software funcional frecuentemente** (semanas a meses, preferir lo mas corto)

**B. Centrados en el Equipo y la Colaboracion:**

4. Gente de negocio y desarrolladores deben **trabajar juntos de forma cotidiana**
5. Construir proyectos en torno a **individuos motivados**
6. La **conversacion cara a cara** es el metodo mas eficiente de comunicacion
8. Los procesos Agiles promueven el **desarrollo sostenible** (ritmo constante, evitar burnout)

**C. Centrados en la Excelencia Tecnica:**

7. El **software funcionando** es la medida principal de progreso
9. Atencion continua a la **excelencia tecnica y al buen diseno**
10. **La simplicidad es esencial** (maximizar la cantidad de trabajo no hecho)
11. Las mejores arquitecturas emergen de **equipos auto-organizados**

**D. Centrados en la Mejora Continua:**

12. A intervalos regulares, el equipo **reflexiona sobre como ser mas efectivo** y ajusta su comportamiento (base de las "retrospectivas")

### 7.4 Scrum: Marco de Trabajo para la Gestion de Sprints

Scrum es el **marco de trabajo agil mas popular del mundo**. No es una metodologia de ingenieria, sino un **marco de gestion de proyectos** disenado para la adaptabilidad.

**Filosofia:** Enfoque iterativo e incremental para gestionar la complejidad y entregar producto funcional.

**Roles Clave:**

| Rol | Responsabilidad |
|-----|----------------|
| **Product Owner** | Voz del cliente. Unico responsable de gestionar y priorizar el **Backlog** para maximizar el valor |
| **Scrum Master** | Lider-servidor. Ayuda al equipo a entender y aplicar Scrum, elimina obstaculos, protege de interrupciones |
| **Equipo de Desarrollo** | Grupo auto-organizado y multifuncional que construye el incremento del producto |

**Eventos y Artefactos:**

| Elemento | Descripcion |
|----------|-------------|
| **Sprint** | Iteracion de tiempo fijo (1-4 semanas). El equipo completa un incremento de software funcional |
| **Backlog** | Lista de todo el trabajo pendiente, priorizada por el Product Owner |
| **Reuniones Diarias (Daily Scrum)** | 15 min diarios para sincronizarse, reportar progreso e identificar impedimentos |

### 7.5 Extreme Programming (XP): Foco en la Excelencia Tecnica

Mientras Scrum gestiona el **proceso**, XP se centra en las **practicas de ingenieria** y la calidad del codigo.

**Filosofia:** Al mantener alta calidad tecnica de forma continua, el equipo mantiene alta velocidad de desarrollo y se adapta facilmente a cambios.

**Practicas Clave de XP:**

| Practica | Descripcion |
|----------|-------------|
| **Programacion en Pareja (Pair Programming)** | Dos desarrolladores en una misma computadora. Mejora calidad, difunde conocimiento, reduce errores |
| **Integracion Continua (CI)** | Integrar a la rama principal varias veces al dia. Cada integracion dispara builds y pruebas automatizadas |
| **Feedback Constante** | Ciclos de retroalimentacion lo mas cortos posible: cliente real en el equipo, TDD, entregas frecuentes |

### 7.6 Scrum + XP = Exito Agil

Son **complementarios**, no competidores:

| | Scrum | XP |
|---|-------|-----|
| **Enfoque** | Gestion ("Que" y "Cuando") | Tecnica ("Como" con calidad) |
| **Define** | Roles, eventos, artefactos | Practicas de ingenieria |
| **Responde a** | Como gestionar la complejidad | Como asegurar calidad del codigo |

> Un equipo puede usar **Scrum** para gestionar sus Sprints y su Backlog, mientras usa **XP** para escribir el codigo.

---

## 8. Comparacion de Enfoques: Predictivo vs. Adaptativo

Esta es la **diferencia mas importante de toda la unidad**. No es entre Cascada y Scrum, sino entre las dos filosofias opuestas que subyacen a todos los modelos.

### Enfoque Predictivo (El Mapa)

- **Modelos:** Cascada, Espiral
- **Filosofia:** Es posible **predecir y planificar** el proyecto desde el inicio
- **Objetivo:** Crear un plan detallado y ejecutarlo con la menor desviacion posible
- **Manejo del cambio:** El cambio es un **error** de planificacion, costoso y evitable
- **Analogia:** Un **mapa detallado**. Ruta fija trazada antes de empezar

### Enfoque Adaptativo (La Brujula)

- **Modelos:** Agiles (Scrum, XP)
- **Filosofia:** La incertidumbre y el cambio son **inevitables y normales**
- **Objetivo:** Entregar valor al cliente continuamente, **ajustando la direccion** en el camino
- **Manejo del cambio:** El cambio es una **ventaja competitiva**
- **Analogia:** Una **brujula**. Se conoce el destino, la ruta se descubre durante el viaje

### Tabla Comparativa

| Caracteristica | Predictivos (Tradicionales) | Adaptativos (Agiles) |
|----------------|---------------------------|----------------------|
| **Planificacion** | Rigida | Adaptativa |
| **Cambios de requerimientos** | Dificiles de incorporar | Se espera que ocurran |
| **Documentacion** | Exhaustiva | Minima y necesaria |
| **Participacion del cliente** | Limitada (inicio y final) | Constante |
| **Entregas** | Al final del proyecto | Frecuentes e incrementales |
| **Medida de progreso** | Documentos completados | Software funcionando |
| **Riesgo** | Se acumula al final | Se distribuye continuamente |

### Cuando Aplicar Cada Enfoque

**Predictivo (Cascada/Espiral):**
- Requisitos fijos, conocidos e inamovibles
- Alta regulacion y criticidad (aeroespacial, defensa, dispositivos medicos)
- Contratos fijos con alcance y presupuesto predefinidos

**Adaptativo (Agil):**
- Requisitos cambiantes o desconocidos
- Necesidad de rapidez (Time-to-Market)
- Proyectos complejos donde es mejor dividir y obtener feedback

> **Conclusion:** Ningun modelo es universalmente superior. La eleccion es una **decision estrategica** basada en la naturaleza del proyecto, no una cuestion de moda.

---

## 9. El Puente Dorado: Evolucion de los Modelos

Los modelos modernos no nacen de la nada. Cada modelo clasico aporto una leccion:

1. **Cascada** demostro que la rigidez total y posponer el riesgo al final es una mala idea para la mayoria del software
2. **Prototipado** demostro el inmenso valor de la **retroalimentacion directa** del usuario y la validacion temprana
3. **Espiral** demostro el poder de un **ciclo evolutivo basado en iteraciones**

El **Modelo Incremental** tomo la mejor idea (entregar en piezas funcionales) y el **Desarrollo Agil** le agrego una filosofia completa (Manifiesto) + marcos de gestion (Scrum, XP), buscando obtener los beneficios de la iteracion y el feedback **sin la complejidad del Espiral**, y con enfoque en entregar **software funcional real** (no solo prototipos).

| Incremental | Agil |
|-------------|------|
| Modelo enfocado en la **entrega** | Filosofia enfocada en la **adaptabilidad, colaboracion y personas** |

---

## Preguntas de Repaso

### Bloque 1: Conceptos Fundamentales y Modelo en Cascada

**1.** Cual es la diferencia entre un modelo de desarrollo y una metodologia?

<details>
<summary>Ver respuesta</summary>

El **modelo** es el enfoque estructural general que guia el proyecto (ej. Cascada, Incremental). La **metodologia** es un conjunto de practicas y reglas especificas que implementan ese modelo (ej. Scrum, XP). El modelo define el "que"; la metodologia define el "como".
</details>

**2.** Quien formalizo el modelo en Cascada y en que anio? Que tiene de ironico la adopcion de este modelo?

<details>
<summary>Ver respuesta</summary>

**Winston W. Royce** en **1970**. Lo ironico es que Royce presento el modelo secuencial puro como **defectuoso** ("flawed") y propuso agregar iteraciones. La industria adopto la version simplificada que el mismo critico, porque era mas facil de gestionar contractualmente.
</details>

**3.** Cuales son las 6 fases del modelo en Cascada en orden?

<details>
<summary>Ver respuesta</summary>

1. Requerimientos
2. Analisis
3. Diseno
4. Implementacion
5. Pruebas
6. Mantenimiento
</details>

**4.** Cuales son los 3 principios filosoficos centrales de la Cascada?

<details>
<summary>Ver respuesta</summary>

1. **Divide y venceras:** Fases discretas y bien definidas
2. **Una cosa a la vez:** Cada fase debe completarse al 100% antes de avanzar
3. **No mires atras:** Volver a una fase anterior es fuertemente desaconsejado
</details>

**5.** Cual es la debilidad mas critica del modelo en Cascada?

<details>
<summary>Ver respuesta</summary>

La **poca flexibilidad ante los cambios**. Asume que los requerimientos no cambiaran, lo cual es casi imposible en la realidad. Cualquier cambio a mitad de proyecto es extremadamente costoso y disruptivo.
</details>

**6.** Nombra 3 casos de uso ideales para el modelo en Cascada.

<details>
<summary>Ver respuesta</summary>

1. Proyectos con requerimientos estables y conocidos (firmware para hardware)
2. Sistemas criticos y entornos regulados (aeroespacial, dispositivos medicos)
3. Proyectos gubernamentales y contratos fijos (alcance y presupuesto cerrados)
</details>

### Bloque 2: Modelo de Prototipado

**7.** Cual es la filosofia central del modelo de Prototipado y de que premisa parte?

<details>
<summary>Ver respuesta</summary>

Filosofia: **"Validar antes de construir"**. Parte de la premisa de que los usuarios **"no saben lo que quieren hasta que lo ven"**. El prototipo es una herramienta desechable para el dialogo, no la primera pieza del software final.
</details>

**8.** Cuales son las 5 fases del modelo de Prototipado?

<details>
<summary>Ver respuesta</summary>

1. Recoleccion de Requerimientos Iniciales
2. Diseno Rapido
3. Construccion del Prototipo
4. Evaluacion del Cliente (Ciclo de Refinamiento - se repite)
5. Desarrollo del Producto Final
</details>

**9.** Que propuso Frederick Brooks con su concepto de "Plan to Throw One Away"?

<details>
<summary>Ver respuesta</summary>

Brooks argumenta en "The Mythical Man-Month" (1975) que es practicamente imposible acertar con el diseno de un sistema al primer intento. Por lo tanto, se debe planificar la construccion de una primera version (prototipo) con el unico fin de aprender y descubrir problemas, y luego **desecharla por completo** antes de construir el sistema real. Es la esencia del prototipado desechable.
</details>

**10.** Cuando es ideal usar Prototipado? Cual es la pregunta clave que indica que se necesita?

<details>
<summary>Ver respuesta</summary>

Es ideal cuando la pregunta mas importante no es "como lo construimos?", sino **"que deberiamos construir?"**. Casos ideales: productos innovadores, alta carga de UI/UX, clientes con requisitos ambiguos, validacion de viabilidad tecnica.
</details>

### Bloque 3: Modelo en Espiral

**11.** Quien propuso el modelo en Espiral, en que anio, y cual es su filosofia central?

<details>
<summary>Ver respuesta</summary>

**Barry Boehm** en **1986**. Su filosofia central es que el desarrollo de software es una mision de **exploracion y gestion de riesgos**. Es el unico modelo donde la gestion de riesgos no es una idea secundaria, sino **la filosofia central**.
</details>

**12.** Cuales son los 4 cuadrantes del ciclo de la Espiral?

<details>
<summary>Ver respuesta</summary>

1. Determinar objetivos, alternativas y restricciones
2. Identificar y analizar riesgos (el corazon del modelo)
3. Desarrollo y validacion
4. Planificacion de la siguiente iteracion
</details>

**13.** Cual es la principal desventaja del modelo en Espiral y por que se usa poco actualmente?

<details>
<summary>Ver respuesta</summary>

Es **muy complejo, costoso y lento**. Requiere alta madurez en gestion de proyectos y personal experto en analisis de riesgos. Es inadecuado para proyectos pequenos. Ha sido superado en flexibilidad y velocidad por las metodologias Agiles, pero sigue siendo relevante para proyectos de muy gran escala y alto riesgo tecnico.
</details>

### Bloque 4: Ejes de Decision (Incertidumbre y Riesgo)

**14.** Cuales son los dos "ejes" de decision para elegir un modelo de desarrollo?

<details>
<summary>Ver respuesta</summary>

1. **Eje de Incertidumbre de los Requisitos:** "Que tan bien entendemos lo que debemos construir?"
2. **Eje de Gestion del Riesgo:** "Cual es el mayor riesgo del proyecto y como lo gestiona el modelo?"
</details>

**15.** Como maneja cada modelo clasico el riesgo?

<details>
<summary>Ver respuesta</summary>

- **Cascada:** Riesgo **acumulado al final**. Intenta evitarlo con planificacion exhaustiva. Si falla, corregir es exponencialmente caro.
- **Prototipado:** Riesgo **atacado al inicio**. "Fallar rapido y barato". Se centra en riesgo de mercado/usuario.
- **Espiral:** Riesgo como **eje central**. Cada ciclo comienza evaluando riesgos. Superior para riesgo tecnico.
</details>

### Bloque 5: Modelo Incremental

**16.** Cual es la filosofia central del modelo Incremental y en que se diferencia del Prototipado?

<details>
<summary>Ver respuesta</summary>

Filosofia: **"Construir y entregar el producto en piezas funcionales y operativas"**. A diferencia del Prototipado (donde se construye una maqueta desechable para descubrir requisitos), en el Incremental cada pieza es **software de produccion real**: completamente codificado, probado y funcional.
</details>

**17.** Cuales son las 4 fases del flujo de trabajo incremental?

<details>
<summary>Ver respuesta</summary>

1. Planificacion General y Definicion de Incrementos
2. Ciclo de Desarrollo del Incremento (Analisis -> Diseno -> Implementacion -> Pruebas)
3. Integracion y Entrega
4. Retroalimentacion y Planificacion del Siguiente Incremento
</details>

**18.** Que practica de pruebas introduce el modelo Incremental y por que es tan importante?

<details>
<summary>Ver respuesta</summary>

Las **pruebas de regresion**. Cada vez que se anade un nuevo incremento, no solo se prueba la nueva funcionalidad, sino que se vuelve a probar **todo el sistema existente** para asegurar que el nuevo codigo no rompio nada. Esta necesidad impulso los primeros esfuerzos hacia la **automatizacion de pruebas**.
</details>

**19.** Cual es la principal desventaja arquitectonica del modelo Incremental?

<details>
<summary>Ver respuesta</summary>

Requiere un **diseno inicial robusto y extensible** (arquitectura modular basada en componentes, APIs bien definidas). Si la arquitectura no es solida desde el principio, la integracion de futuros incrementos se vuelve dificil y costosa, acumulando deuda tecnica.
</details>

### Bloque 6: Desarrollo Agil

**20.** En que contexto surgio el Manifiesto Agil y cuando fue creado?

<details>
<summary>Ver respuesta</summary>

Surgio como respuesta a la "crisis del software" de los anos 80-90 (proyectos largos, rigidos, productos insatisfactorios). Fue creado en **febrero de 2001** en **Snowbird, Utah**, por 17 referentes de la industria.
</details>

**21.** Cuales son los 4 valores del Manifiesto Agil?

<details>
<summary>Ver respuesta</summary>

1. **Individuos e interacciones** sobre procesos y herramientas
2. **Software funcionando** sobre documentacion exhaustiva
3. **Colaboracion con el cliente** sobre negociacion de contratos
4. **Respuesta al cambio** sobre seguir un plan

Importante: no se eliminan los de la derecha, se **valoran mas** los de la izquierda.
</details>

**22.** Nombra los 12 principios del Manifiesto Agil agrupados por categoria.

<details>
<summary>Ver respuesta</summary>

**Entrega de Valor:** (1) Entrega temprana y continua, (2) Aceptar cambios en requisitos, (3) Entregar software funcional frecuentemente.

**Equipo y Colaboracion:** (4) Negocio y desarrollo trabajan juntos diariamente, (5) Individuos motivados, (6) Conversacion cara a cara, (8) Desarrollo sostenible.

**Excelencia Tecnica:** (7) Software funcionando = medida de progreso, (9) Excelencia tecnica y buen diseno, (10) Simplicidad es esencial, (11) Equipos auto-organizados.

**Mejora Continua:** (12) Reflexion regular sobre como ser mas efectivo.
</details>

**23.** Cuales son los 3 roles de Scrum y que hace cada uno?

<details>
<summary>Ver respuesta</summary>

- **Product Owner:** Voz del cliente, gestiona y prioriza el Backlog para maximizar valor
- **Scrum Master:** Lider-servidor, ayuda a aplicar Scrum, elimina obstaculos, protege al equipo
- **Equipo de Desarrollo:** Grupo auto-organizado y multifuncional que construye el incremento
</details>

**24.** Que es un Sprint, que es el Backlog, y que es el Daily Scrum?

<details>
<summary>Ver respuesta</summary>

- **Sprint:** Iteracion de tiempo fijo (1-4 semanas) donde el equipo completa un incremento de software funcional
- **Backlog:** Lista de todo el trabajo pendiente, priorizada por el Product Owner
- **Daily Scrum:** Reunion diaria de 15 min para sincronizarse, reportar progreso e identificar impedimentos
</details>

**25.** En que se diferencia Scrum de XP? Como se complementan?

<details>
<summary>Ver respuesta</summary>

- **Scrum** es un marco de **gestion** (el "que" y "cuando"): define roles, eventos y artefactos para gestionar la complejidad
- **XP** es un conjunto de **practicas de ingenieria** (el "como" con calidad): Pair Programming, CI, TDD, feedback constante

Se complementan: un equipo puede usar **Scrum para gestionar** sus Sprints y Backlog, mientras usa **XP para escribir** el codigo con calidad.
</details>

### Bloque 7: Comparacion y Sintesis

**26.** Cual es la diferencia mas importante de toda la unidad?

<details>
<summary>Ver respuesta</summary>

La diferencia entre el **enfoque Predictivo** (El Mapa) y el **enfoque Adaptativo** (La Brujula):
- **Predictivo** (Cascada, Espiral): cree que es posible predecir y planificar todo al inicio. El cambio es un error.
- **Adaptativo** (Agil): asume que la incertidumbre es inevitable. El cambio es una ventaja competitiva.
</details>

**27.** Compara los 5 modelos/enfoques de la unidad segun su manejo de la incertidumbre.

<details>
<summary>Ver respuesta</summary>

| Modelo | Incertidumbre | Estrategia |
|--------|---------------|-----------|
| Cascada | Asume minima | Congelar requisitos al inicio |
| Prototipado | Asume maxima | Validar con maqueta antes de construir |
| Espiral | Variable | Evaluar riesgos en cada ciclo |
| Incremental | Moderada | Entregar piezas funcionales y ajustar |
| Agil | Asume alta e inevitable | Adaptarse continuamente con feedback |
</details>

**28.** Que leccion aporto cada modelo clasico a la evolucion del software?

<details>
<summary>Ver respuesta</summary>

1. **Cascada:** La rigidez total y posponer el riesgo al final es una mala idea
2. **Prototipado:** La retroalimentacion directa del usuario y la validacion temprana son invaluables
3. **Espiral:** Los ciclos evolutivos basados en iteraciones son poderosos

Los modelos modernos tomaron la **iteracion** del Espiral, el **feedback** del Prototipado, y la **entrega funcional** del Incremental para crear el enfoque Agil.
</details>

**29.** Cual es la relacion evolutiva entre el Modelo Incremental y el Desarrollo Agil?

<details>
<summary>Ver respuesta</summary>

El Incremental establecio la base pragmatica: "construir y entregar en piezas funcionales". El Agil tomo esa idea central y le agrego una filosofia completa (Manifiesto) + marcos de gestion (Scrum, XP). **Incremental** es un modelo enfocado en la **entrega**; **Agil** es una filosofia enfocada en la **adaptabilidad, la colaboracion y las personas**.
</details>

**30.** Cuando conviene usar un enfoque Predictivo y cuando un enfoque Adaptativo?

<details>
<summary>Ver respuesta</summary>

**Predictivo:** Requisitos fijos, conocidos e inamovibles; alta regulacion y criticidad (aeroespacial, defensa, dispositivos medicos); contratos con alcance y presupuesto cerrados.

**Adaptativo:** Requisitos cambiantes o desconocidos; necesidad de rapidez (Time-to-Market); proyectos complejos donde es mejor dividir, obtener feedback y adaptar. Esto describe a la **mayoria de los proyectos de software de negocios modernos**.
</details>
