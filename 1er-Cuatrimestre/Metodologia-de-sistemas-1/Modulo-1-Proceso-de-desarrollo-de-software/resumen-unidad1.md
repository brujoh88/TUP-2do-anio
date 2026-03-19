# Resumen Unidad 1: Proceso de Desarrollo de Software

## Metodologia de Sistemas I

---

## 1. Introduccion al Proceso de Desarrollo de Software

### 1.1 Definiciones Clave

- **Ingenieria de Software (definicion IEEE):** La aplicacion de un enfoque sistematico, disciplinado y cuantificable al desarrollo, operacion y mantenimiento del software.

- **Programacion:** La actividad tecnica especifica de escribir codigo fuente en un lenguaje de programacion. Es solo **una fase** dentro del proceso general de desarrollo.

- **Desarrollo de Software:** Abarca el conjunto **completo** de actividades del ciclo de vida del software (SDLC), desde la concepcion hasta el mantenimiento continuo.

> **Diferencia central:** Programacion = construccion tecnica (escribir y depurar codigo). Desarrollo de Software = proceso completo (analisis, diseno, gestion, QA, colaboracion multidisciplinaria).

### 1.2 IEEE (Institute of Electrical and Electronics Engineers)

- Asociacion profesional tecnica mas grande del mundo (+160 paises).
- Publica estandares globales reconocidos:
  - **IEEE 1074:** Gestion de procesos del ciclo de vida del software
  - **IEEE 830:** Especificacion de Requisitos de Software (ERS)
  - **IEEE 12207:** Procesos del ciclo de vida del software

### 1.3 Los Tres Pilares de la Ingenieria de Software (las 3 "P")

| Pilar | Descripcion | Ejemplos |
|-------|-------------|----------|
| **Producto (Product)** | El software final + artefactos asociados | Documentacion tecnica, diagramas UML, manuales de usuario |
| **Proceso (Process)** | Metodologias y practicas para construir el producto | Cascada, Agil (Scrum, Kanban), DevOps |
| **Personas (People)** | El equipo + todos los stakeholders | Desarrolladores, clientes, usuarios finales, patrocinadores |

### 1.4 Atributos de Calidad del Software

| Atributo | Descripcion | Dato clave |
|----------|-------------|------------|
| **Fiabilidad (Reliability)** | Operar sin fallos durante un periodo bajo condiciones definidas. Incluye disponibilidad, tolerancia a fallos y recuperacion | - |
| **Eficiencia y Rendimiento** | Uso optimo de recursos: CPU, RAM, almacenamiento, ancho de banda | - |
| **Mantenibilidad (Maintainability)** | Facilidad para modificar, corregir o adaptar el software | Consume entre **60-80% del presupuesto** total del proyecto |
| **Usabilidad (Usability)** | Facilidad de aprendizaje, ejecucion eficiente de tareas y experiencia satisfactoria | - |

---

## 2. Ciclo de Vida de Desarrollo de Software (SDLC)

### 2.1 Concepto

El SDLC es un **modelo conceptual** que estructura y describe las etapas secuenciales necesarias para desarrollar un proyecto de software exitoso. Se basa en el estandar **IEEE 1074**.

En el enfoque clasico, cada fase debe completarse antes de avanzar a la siguiente.

### 2.2 Las 7 Fases del SDLC

#### Fase 1: Planificacion (Inicio)

- **Objetivo:** Establecer los fundamentos y alcance inicial del proyecto.
- **Actividades:** Definir restricciones del proyecto: **Costo, Tiempo y Alcance/Calidad**.
- **Entregable:** Plan de proyecto de alto nivel.

**Estudio de Viabilidad (Feasibility Study):**

| Tipo | Pregunta clave |
|------|---------------|
| **Tecnica** | Disponemos de la tecnologia y capacidades necesarias? |
| **Economica** | El retorno de inversion (ROI) justifica el proyecto? |
| **Operacional** | La organizacion puede operar y adoptar el sistema? |
| **Legal/Etica** | Cumple con regulaciones y estandares eticos? |

#### Fase 2: Analisis de Requisitos (el "QUE" del sistema)

- **Foco:** Descubrimiento y documentacion de necesidades reales del cliente.
- **Entregable:** Especificacion de Requisitos de Software (**ERS**), segun estandar **IEEE 830**.
- Establece el **contrato** entre desarrolladores y cliente.

**Tipos de requisitos:**

| Tipo | Descripcion | Ejemplo |
|------|-------------|---------|
| **Funcionales** | Comportamiento especifico del sistema | "El usuario debe poder iniciar sesion con credenciales validas" |
| **No Funcionales** | Caracteristicas de calidad (rendimiento, seguridad, usabilidad) | "El sistema debe responder en menos de 2 segundos" |

**Caracteristicas de un requisito de calidad:**
1. **No Ambiguo:** Una sola interpretacion posible
2. **Consistente:** Sin contradicciones con otros requisitos
3. **Completo:** Cubre todos los aspectos necesarios
4. **Medible/Verificable:** Se puede comprobar objetivamente

#### Fase 3: Diseno (el "COMO" del sistema)

Transicion critica desde las necesidades del cliente hacia la solucion tecnica concreta.

| Nivel | Descripcion | Ejemplo |
|-------|-------------|---------|
| **Alto Nivel (Arquitectura)** | Componentes principales y sus interrelaciones | Microservicios, patron tres capas (presentacion, logica, datos) |
| **Bajo Nivel (Detalle)** | Estructuras de datos, algoritmos y logica a nivel de clase/funcion | Diagramas de clases, pseudocodigo |

#### Fase 4: Implementacion

- Traduccion del diseno detallado en **codigo fuente ejecutable**.
- En modelos clasicos, la codificacion solo inicia cuando el diseno esta completamente aprobado.
- Practicas: Estandares de codificacion, control de versiones (Git), revisiones de codigo (code reviews).

#### Fase 5: Pruebas

Aseguramiento de la calidad mediante verificacion y validacion.

**Verificacion vs. Validacion:**
- **Verificacion:** "Estamos construyendo el producto **correctamente**?" (cumple las especificaciones)
- **Validacion:** "Estamos construyendo el producto **correcto**?" (cumple las necesidades reales)

**Niveles de prueba (de menor a mayor alcance):**

| Nivel | Que verifica |
|-------|-------------|
| 1. **Pruebas Unitarias** | Componentes individuales (funciones, metodos, clases) |
| 2. **Pruebas de Integracion** | Interaccion entre modulos o subsistemas |
| 3. **Pruebas de Sistema** | Sistema completo en entorno controlado |
| 4. **Pruebas de Aceptacion (UAT)** | Validacion final por el cliente en condiciones reales |

#### Fase 6: Despliegue

- Instalacion y puesta en produccion en el entorno del usuario final.
- Incluye: migracion de datos, capacitacion y documentacion de usuario.

#### Fase 7: Mantenimiento (la mas larga y costosa)

Inicia tras la entrega y puede extenderse durante anios. Representa el **60-80% del costo total** del ciclo de vida.

| Tipo | Descripcion | Ejemplo |
|------|-------------|---------|
| **Correctivo** | Correccion de errores y fallos | Arreglar un bug que causa crash |
| **Adaptativo** | Modificaciones por cambios externos | Adaptar a nueva legislacion |
| **Perfectivo** | Mejoras y nuevas funcionalidades | Agregar modo oscuro por pedido de usuarios |
| **Preventivo** | Refactorizacion y optimizacion interna | Mejorar estructura del codigo para prevenir problemas |

---

## 3. Metodologias de Desarrollo y Gestion de Proyectos

### 3.1 Conceptos Base

- **Metodologia:** Conjunto estructurado de principios, practicas y procesos que guian el desarrollo de software. Su objetivo es organizar el trabajo de manera sistematica, predecible y eficiente.

- **Metodologia vs. Marco de Trabajo:**
  - **Metodologia:** Principios, valores y filosofias (el *por que* y *como* estrategico). Ej: Desarrollo Agil.
  - **Marco de Trabajo (Framework):** Herramientas, procesos y roles **concretos** que implementan la metodologia. Ej: Scrum, Kanban, XP.

### 3.2 Componentes de una Metodologia

1. **Fases y Tareas:** Secuencia ordenada de actividades
2. **Roles y Responsabilidades:** Quien hace que en cada etapa
3. **Artefactos y Entregables:** Documentos y productos tangibles de cada fase
4. **Tecnicas y Herramientas:** Metodos especificos y tecnologias empleadas

### 3.3 Enfoques Metodologicos

| Aspecto | Predictivos (Plan-Driven) | Adaptativos (Agiles) |
|---------|---------------------------|----------------------|
| **Premisa** | Requisitos definidos completamente al inicio | El cambio es bienvenido en cualquier momento |
| **Proceso** | Secuencial y lineal | Iteraciones cortas e incrementales |
| **Documentacion** | Exhaustiva | Minima necesaria |
| **Control de cambios** | Estricto | Flexible, basado en feedback |
| **Validacion** | Al final del ciclo | Continua y frecuente |
| **Ideal para** | Requisitos estables, alta criticidad (medicina, aeronautica) | Proyectos complejos, inciertos, con cambios rapidos |
| **Ejemplos** | Cascada, V-Model, Espiral | Scrum, Kanban, XP, Lean |

### 3.4 Producto (SDLC) vs. Proyecto (PMI)

| | SDLC (Producto) | PMI (Proyecto) |
|---|---|---|
| **Se centra en** | Creacion del software | Gestion del esfuerzo organizacional |
| **Responde a** | "QUE se construye?" | "COMO se gestiona la construccion?" |
| **Define** | Fases tecnicas (analisis, diseno, implementacion, pruebas) | Control de tiempo, costo, riesgo, calidad, RRHH |

> **Clave:** El SDLC y el PMI son **complementarios**. Uno define el ciclo tecnico, el otro gestiona el esfuerzo para ejecutarlo con exito.

### 3.5 Grupos de Procesos del PMI (PMBOK)

El PMI (Project Management Institute) documenta estos grupos en el PMBOK (Project Management Body of Knowledge).

| # | Grupo PMI | Descripcion | Alineacion con SDLC |
|---|-----------|-------------|---------------------|
| 1 | **Inicio** | Autorizacion formal, objetivos de alto nivel | Planificacion inicial, viabilidad |
| 2 | **Planificacion** | Plan detallado: alcance, cronograma, presupuesto | Analisis de Requisitos y Diseno |
| 3 | **Ejecucion** | Realizar el trabajo del plan | Implementacion y Pruebas |
| 4 | **Seguimiento y Control** | Monitoreo continuo, acciones correctivas | **Transversal** a todas las fases |
| 5 | **Cierre** | Finalizacion formal, lecciones aprendidas | Despliegue y Mantenimiento |

---

## 4. Stakeholders en Proyectos de Software

### 4.1 Definicion

Un **stakeholder** es cualquier individuo, grupo u organizacion que puede **afectar, ser afectado, o percibirse como afectado** por las decisiones, actividades o resultados del proyecto.

Son la **fuente principal de requisitos** y expectativas. Sin gestion efectiva de stakeholders, incluso el mejor codigo puede fracasar comercialmente.

### 4.2 Clasificaciones

**A) Por relacion con la organizacion:**

| Tipo | Descripcion | Ejemplos |
|------|-------------|----------|
| **Internos** | Pertenecen a la organizacion. Acceso a info privilegiada | Product Manager, equipo de desarrollo, CEO, legal |
| **Externos** | No forman parte de la organizacion pero tienen intereses legitimos | Usuarios finales, proveedores, reguladores, competencia |

**B) Por nivel de interes:**

| Tipo | Descripcion | Ejemplos |
|------|-------------|----------|
| **Primarios** | Interes directo y fundamental. Su exito esta vinculado al proyecto | Usuarios que pagan, artistas con regalias, Product Owners |
| **Secundarios** | Afectados indirectamente, interes gerencial o de soporte | Marketing, auditores, proveedores cloud |

### 4.3 Matriz Poder/Interes

Herramienta para priorizar esfuerzos de gestion segun poder de influencia y nivel de interes.

```
                    ALTO INTERES              BAJO INTERES
                ┌─────────────────────┬─────────────────────┐
   ALTO PODER   │  GESTIONAR DE CERCA │ MANTENER SATISFECHOS│
                │  CEO, PM, inversores│ Junta directiva,    │
                │  activos            │ inversores pasivos   │
                ├─────────────────────┼─────────────────────┤
   BAJO PODER   │ MANTENER INFORMADOS │     MONITOREAR      │
                │ Usuarios beta, QA,  │ Publico general,    │
                │ community managers  │ medios              │
                └─────────────────────┴─────────────────────┘
```

### 4.4 Sponsor vs. Suscriptor

| Aspecto | Sponsor/Inversor | Usuario Final/Suscriptor |
|---------|-----------------|--------------------------|
| **Financia** | El **PROYECTO** (desarrollo) | El **PRODUCTO** (uso del software) |
| **Cuando** | Durante planificacion y desarrollo | Despues del lanzamiento, recurrente |
| **Motivacion** | ROI a largo plazo | Valor inmediato, calidad, experiencia |
| **Riesgo** | Capital invertido puede perderse | Minimo, puede cancelar cuando quiera |
| **Evalua exito por** | Retorno financiero | Satisfaccion personal y utilidad |

### 4.5 Participacion del Stakeholder en el SDLC

1. **Iniciacion y Planificacion:** Sponsors aprueban presupuesto y definen objetivos
2. **Analisis de Requisitos:** Product Managers y usuarios son fuente primaria de requisitos
3. **Diseno y Desarrollo:** Equipos tecnicos con revisiones periodicas de stakeholders clave
4. **Pruebas y UAT:** Usuarios finales validan que el producto cumple expectativas
5. **Despliegue y Operacion:** Equipos de soporte y usuarios dan feedback continuo

### 4.6 Scope Creep

**Definicion:** Adicion gradual de funcionalidades no presupuestadas ni contempladas en el alcance inicial.

**Datos:**
- **71%** de proyectos de software lo experimentan (segun PMI)
- **43%** de sobrecosto promedio
- **3-6 meses** de retraso tipico

**Causas comunes:**
- Requisitos vagos al inicio
- Gestion permisiva (aceptar cambios sin evaluacion formal)
- Ausencia de proceso de control de cambios
- Presion de stakeholders poderosos

**Estrategias de prevencion:**
1. Documentacion clara del alcance con criterios de aceptacion medibles
2. Proceso de Control de Cambios (**Change Control Board**)
3. Comunicacion proactiva sobre consecuencias de cambios
4. Backlog priorizado (nuevas ideas van a futuras versiones)

---

## 5. Gestion de Riesgos en Proyectos de Software

### 5.1 Definicion de Riesgo

Un **riesgo** es un evento o condicion incierta que, de materializarse, puede afectar significativamente los objetivos del proyecto: **alcance, costo, tiempo y calidad**.

**Doble naturaleza:**
- **Amenaza:** Efecto negativo sobre los objetivos
- **Oportunidad:** Efecto positivo si se capitaliza

### 5.2 Tipos de Riesgos

| Tipo | Que amenaza | Ejemplo |
|------|-------------|---------|
| **De Proyecto** | Cronograma, presupuesto, recursos | Renuncia de personal clave, retrasos en licencias |
| **Tecnicos / Producto** | Calidad tecnica, viabilidad funcional | Arquitectura que no escala, deuda tecnica, incompatibilidad |
| **De Negocio** | Rentabilidad, validez estrategica en el mercado | Competidor lanza algo mejor, cambios regulatorios, baja adopcion |

### 5.3 Riesgo segun la Metodologia

| Metodologia | Enfoque ante el riesgo | Vulnerabilidad/Fortaleza |
|-------------|----------------------|--------------------------|
| **Predictivas (Cascada)** | Intentan **eliminar** el riesgo congelando requisitos | Alta exposicion a cambios tardios |
| **Evolutivas (Espiral)** | Ponen el riesgo **en el centro**, evaluandolo en cada ciclo | Evaluacion continua permite ajustes tempranos |
| **Agiles** | **Aceptan** el cambio como riesgo constante | Mitigan con entregas frecuentes y feedback continuo |

### 5.4 Proceso de Analisis de Riesgos (3 pasos)

#### Paso 1: Identificacion ("Que puede salir mal?")

Crear un inventario completo de eventos inciertos sin filtrar.

**Tecnicas:**
- Brainstorming estructurado
- Analisis de lecciones aprendidas de proyectos anteriores
- Entrevistas con expertos y stakeholders
- Revision de documentacion de requisitos y arquitectura

**Preguntas clave:**
1. Que requisitos son ambiguos?
2. Que tecnologia es nueva para el equipo?
3. Que dependencias externas son inestables?
4. Que supuestos podrian ser incorrectos?

#### Paso 2: Evaluacion (Probabilidad x Impacto)

**Formula:** `E = P x I`

- **P (Probabilidad):** Escala 1-5 (1 = <10%, 3 = 30-50%, 5 = >70%)
- **I (Impacto):** Escala 1-5 (1 = insignificante, 3 = moderado, 5 = critico)
- **E (Exposicion):** Valor que determina la prioridad

**Matriz de priorizacion:**

| Exposicion (E) | Nivel | Accion requerida |
|----------------|-------|------------------|
| **E >= 16** | CRITICO | Respuesta inmediata, plan de mitigacion, escalamiento a direccion |
| **E = 9-15** | ALTO | Mitigacion activa, monitoreo frecuente |
| **E = 5-8** | MEDIO | Monitoreo regular, contingencias basicas |
| **E <= 4** | BAJO | Aceptar y observar, revision ocasional |

#### Paso 3: Plan de Accion

| Estrategia | Tipo | Descripcion | Ejemplo |
|------------|------|-------------|---------|
| **Mitigacion** | Prevencion (ANTES) | Acciones proactivas para reducir probabilidad o impacto | Pruebas de carga, capacitacion tecnica, checkpoints de calidad |
| **Contingencia** | Reaccion (DESPUES) | Acciones predefinidas cuando el riesgo ya ocurrio | Proveedor alternativo de backup, planes de recuperacion, protocolos de escalamiento |

> **Importante:** La gestion de riesgos es un **ciclo continuo e iterativo**, no una actividad unica. Debe repetirse a lo largo de todo el proyecto.

---

## Preguntas de Repaso

### Bloque 1: Conceptos Fundamentales

**1.** Cual es la definicion de Ingenieria de Software segun la IEEE?

<details>
<summary>Ver respuesta</summary>

La aplicacion de un enfoque sistematico, disciplinado y cuantificable al desarrollo, operacion y mantenimiento del software.
</details>

**2.** Cual es la diferencia principal entre Programacion y Desarrollo de Software?

<details>
<summary>Ver respuesta</summary>

Programacion es solo la actividad tecnica de escribir codigo (una fase del proceso). Desarrollo de Software abarca el proceso completo del SDLC: analisis, diseno, implementacion, pruebas, despliegue y mantenimiento, con colaboracion multidisciplinaria.
</details>

**3.** Cuales son las 3 "P" de la Ingenieria de Software y que representa cada una?

<details>
<summary>Ver respuesta</summary>

- **Producto:** El software final y artefactos asociados (documentacion, diagramas, manuales)
- **Proceso:** Las metodologias y practicas usadas (Cascada, Agil, DevOps)
- **Personas:** El equipo de desarrollo y todos los stakeholders
</details>

**4.** Que atributo de calidad del software consume entre el 60% y 80% del presupuesto total del proyecto?

<details>
<summary>Ver respuesta</summary>

La **Mantenibilidad**. Es el factor de calidad mas critico en el ciclo de vida del software.
</details>

**5.** Nombra los 4 atributos esenciales de calidad del software.

<details>
<summary>Ver respuesta</summary>

Fiabilidad, Eficiencia/Rendimiento, Mantenibilidad y Usabilidad.
</details>

### Bloque 2: SDLC

**6.** Que es el SDLC y en que estandar IEEE se basa?

<details>
<summary>Ver respuesta</summary>

Es un modelo conceptual que estructura las etapas secuenciales necesarias para desarrollar software exitoso. Se basa en el estandar **IEEE 1074**.
</details>

**7.** Cuales son las 7 fases clasicas del SDLC en orden?

<details>
<summary>Ver respuesta</summary>

1. Planificacion
2. Analisis de Requisitos
3. Diseno
4. Implementacion
5. Pruebas
6. Despliegue
7. Mantenimiento
</details>

**8.** Cuales son los 4 tipos de viabilidad que se evaluan en un estudio de factibilidad?

<details>
<summary>Ver respuesta</summary>

Tecnica, Economica, Operacional y Legal/Etica.
</details>

**9.** Que documento se genera en la fase de Analisis de Requisitos y bajo que estandar?

<details>
<summary>Ver respuesta</summary>

La **ERS** (Especificacion de Requisitos de Software), elaborada segun el estandar **IEEE 830**.
</details>

**10.** Cual es la diferencia entre requisitos funcionales y no funcionales? Da un ejemplo de cada uno.

<details>
<summary>Ver respuesta</summary>

- **Funcionales:** Describen el comportamiento especifico del sistema. Ej: "El usuario debe poder iniciar sesion con credenciales validas."
- **No Funcionales:** Especifican caracteristicas de calidad (rendimiento, seguridad). Ej: "El sistema debe responder en menos de 2 segundos."
</details>

**11.** Cuales son las 4 caracteristicas que debe tener un requisito de calidad?

<details>
<summary>Ver respuesta</summary>

No Ambiguo, Consistente, Completo y Medible/Verificable.
</details>

**12.** Cual es la diferencia entre Verificacion y Validacion?

<details>
<summary>Ver respuesta</summary>

- **Verificacion:** "Estamos construyendo el producto **correctamente**?" (cumple especificaciones tecnicas)
- **Validacion:** "Estamos construyendo el producto **correcto**?" (cumple las necesidades reales del usuario)
</details>

**13.** Cuales son los 4 niveles de prueba en orden de menor a mayor alcance?

<details>
<summary>Ver respuesta</summary>

1. Pruebas Unitarias (componentes individuales)
2. Pruebas de Integracion (interaccion entre modulos)
3. Pruebas de Sistema (sistema completo)
4. Pruebas de Aceptacion - UAT (validacion por el cliente)
</details>

**14.** Nombra y describe los 4 tipos de mantenimiento de software.

<details>
<summary>Ver respuesta</summary>

- **Correctivo:** Correccion de errores y fallos
- **Adaptativo:** Modificaciones por cambios externos (leyes, tecnologia)
- **Perfectivo:** Mejoras y nuevas funcionalidades solicitadas
- **Preventivo:** Refactorizacion y optimizacion para prevenir problemas futuros
</details>

**15.** Que fase del SDLC es la mas larga y costosa, y que porcentaje del presupuesto consume?

<details>
<summary>Ver respuesta</summary>

El **Mantenimiento**. Consume entre el 60-80% del costo total del ciclo de vida.
</details>

### Bloque 3: Metodologias y PMI

**16.** Cual es la diferencia entre una Metodologia y un Marco de Trabajo (Framework)?

<details>
<summary>Ver respuesta</summary>

- **Metodologia:** Principios, valores y filosofias que guian el trabajo (el por que y como estrategico). Ej: Desarrollo Agil.
- **Marco de Trabajo:** Herramientas, procesos y roles concretos que implementan la metodologia. Ej: Scrum, Kanban, XP.
</details>

**17.** Cuales son los 4 componentes clave de toda metodologia?

<details>
<summary>Ver respuesta</summary>

1. Fases y Tareas
2. Roles y Responsabilidades
3. Artefactos y Entregables
4. Tecnicas y Herramientas
</details>

**18.** Compara enfoques Predictivos vs. Adaptativos: para que tipo de proyecto es ideal cada uno?

<details>
<summary>Ver respuesta</summary>

- **Predictivos:** Proyectos con requisitos fijos, estables y bien comprendidos, especialmente en sistemas de alta criticidad (medicina, aeronautica, infraestructura).
- **Adaptativos:** Proyectos complejos e inciertos, sujetos a cambios rapidos de mercado, donde la innovacion y la respuesta agil son ventajas competitivas.
</details>

**19.** Que responde el SDLC y que responde el PMI? Como se relacionan?

<details>
<summary>Ver respuesta</summary>

- **SDLC:** "QUE se construye?" (fases tecnicas del producto)
- **PMI:** "COMO se gestiona la construccion?" (tiempo, costo, riesgo, calidad, RRHH)
- Son **complementarios**: uno define el ciclo tecnico, el otro gestiona el esfuerzo organizacional.
</details>

**20.** Cuales son los 5 Grupos de Procesos del PMI?

<details>
<summary>Ver respuesta</summary>

1. Inicio
2. Planificacion
3. Ejecucion
4. Seguimiento y Control (transversal a todas las fases)
5. Cierre
</details>

### Bloque 4: Stakeholders

**21.** Que es un stakeholder?

<details>
<summary>Ver respuesta</summary>

Cualquier individuo, grupo u organizacion que puede afectar, ser afectado, o percibirse como afectado por las decisiones, actividades o resultados del proyecto.
</details>

**22.** Cual es la diferencia entre stakeholders internos y externos? Da ejemplos.

<details>
<summary>Ver respuesta</summary>

- **Internos:** Pertenecen a la organizacion (Product Manager, equipo de desarrollo, CEO, legal)
- **Externos:** No forman parte de la organizacion pero tienen intereses legitimos (usuarios finales, proveedores, reguladores, competencia)
</details>

**23.** En la Matriz Poder/Interes, que estrategia se usa con un stakeholder de alto poder y alto interes?

<details>
<summary>Ver respuesta</summary>

**Gestionar de Cerca:** Requieren comunicacion frecuente y participacion en decisiones estrategicas. Ejemplos: CEO, Product Manager, inversores activos.
</details>

**24.** Cual es la diferencia entre un Sponsor y un Suscriptor?

<details>
<summary>Ver respuesta</summary>

- **Sponsor:** Aporta capital para financiar el **proyecto** (durante desarrollo). Busca ROI a largo plazo.
- **Suscriptor:** Paga por el **producto** (despues del lanzamiento, de forma recurrente). Busca valor inmediato y experiencia de uso.
</details>

**25.** Que es el Scope Creep, que porcentaje de proyectos afecta y como se previene?

<details>
<summary>Ver respuesta</summary>

Es la adicion gradual de funcionalidades no presupuestadas. Afecta al **71%** de los proyectos (PMI). Se previene con:
1. Documentacion clara del alcance
2. Change Control Board
3. Comunicacion proactiva
4. Backlog priorizado para futuras versiones
</details>

### Bloque 5: Gestion de Riesgos

**26.** Que es un riesgo y cual es su doble naturaleza?

<details>
<summary>Ver respuesta</summary>

Un evento o condicion incierta que puede afectar alcance, costo, tiempo o calidad del proyecto. Tiene doble naturaleza:
- **Amenaza:** Efecto negativo
- **Oportunidad:** Efecto positivo si se capitaliza
</details>

**27.** Cuales son los 3 tipos de riesgos en proyectos de software?

<details>
<summary>Ver respuesta</summary>

- **De Proyecto:** Amenazan cronograma, presupuesto o recursos
- **Tecnicos/Producto:** Amenazan calidad tecnica y viabilidad funcional
- **De Negocio:** Amenazan rentabilidad y validez estrategica en el mercado
</details>

**28.** Como aborda cada tipo de metodologia la gestion de riesgos?

<details>
<summary>Ver respuesta</summary>

- **Predictivas (Cascada):** Intentan eliminar el riesgo congelando requisitos
- **Evolutivas (Espiral):** Ponen el riesgo en el centro, evaluandolo en cada ciclo
- **Agiles:** Aceptan el cambio como riesgo constante, mitigan con entregas frecuentes y feedback continuo
</details>

**29.** Cual es la formula de Exposicion al Riesgo y que significan los niveles resultantes?

<details>
<summary>Ver respuesta</summary>

**E = P x I** (Probabilidad x Impacto, escala 1-5 cada uno)
- E >= 16: Critico (respuesta inmediata)
- E = 9-15: Alto (mitigacion activa)
- E = 5-8: Medio (monitoreo regular)
- E <= 4: Bajo (aceptar y observar)
</details>

**30.** Cual es la diferencia entre Mitigacion y Contingencia?

<details>
<summary>Ver respuesta</summary>

- **Mitigacion (Prevencion):** Acciones proactivas **antes** de que el riesgo ocurra, para reducir probabilidad o impacto. Ej: pruebas de carga.
- **Contingencia (Reaccion):** Acciones predefinidas que se ejecutan **cuando el riesgo ya se materializo**. Ej: activar proveedor alternativo de backup.
</details>
