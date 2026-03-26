# Práctica Integrada Unidad 2 (Parte II): Modelos Incrementales y Adaptativos

## Metodología de Sistemas I - TUP a Distancia

**Alumno:** Tiseira Gustavo Hernán

---

## Sección A: Análisis del Modelo Incremental

### 1. Aplicabilidad al Proyecto A (CoreBanc 2.0)

El Modelo Incremental es una elección ideal para el proyecto CoreBanc 2.0 porque sus características coinciden directamente con los casos de uso ideales descritos en los apuntes:

- **Reemplazo de sistemas heredados (legacy):** Los apuntes señalan que el Modelo Incremental es ideal para "migrar funcionalidad pieza por pieza, no Big Bang". Esto encaja perfectamente con CoreBanc 2.0, donde el banco no puede permitirse apagar el sistema viejo y encender el nuevo de golpe. El enfoque incremental permite reemplazar el sistema legacy monolítico módulo por módulo, manteniendo las funciones existentes operativas durante toda la migración. Cada incremento reemplaza una porción del sistema antiguo, y al finalizar, el sistema legacy queda completamente sustituido sin haber interrumpido el servicio en ningún momento.

- **Proyectos grandes y complejos:** CoreBanc 2.0 es un proyecto "grande y complejo" que gestiona todas las operaciones críticas del banco (cuentas, transferencias, depósitos). Los apuntes indican que el Modelo Incremental es ideal para "ERPs, sistemas bancarios: dividir en partes manejables". Al descomponer el sistema monolítico en incrementos priorizados, el proyecto se vuelve manejable y cada pieza puede desarrollarse, probarse e integrarse de forma controlada.

- **Reducción del riesgo del proyecto:** La prioridad número uno de CoreBanc 2.0 es evitar la interrupción del servicio. Una ventaja clave del Modelo Incremental es que "si el presupuesto se agota, el cliente tiene un producto funcional (aunque incompleto)". En este caso, si surgiera algún problema durante la migración, el banco contaría con los módulos ya migrados funcionando junto al sistema legacy, sin perder operatividad. El riesgo se distribuye entre múltiples mini-proyectos en lugar de concentrarse en un único despliegue masivo.

- **Entrega temprana de valor:** El departamento de operaciones del banco puede comenzar a beneficiarse de la arquitectura moderna desde el primer incremento entregado, sin esperar a que todo el sistema esté completo. Cada incremento es software de producción real, completamente codificado, probado y funcional.

- **Núcleo conocido con funcionalidad que evoluciona:** La funcionalidad del sistema antiguo es conocida, lo que permite planificar los incrementos con claridad. Los apuntes mencionan que el Incremental es ideal para "productos con requerimientos que evolucionan: núcleo conocido, detalles secundarios cambiantes", que se ajusta al escenario donde se conoce qué debe hacer el sistema pero se necesita modernizar cómo lo hace.

### 2. Flujo de Trabajo

El flujo de trabajo del Modelo Incremental para CoreBanc 2.0 seguiría las cuatro fases descritas en los apuntes:

**Fase 1 - Planificación General y Definición de Incrementos:** Se diseña la arquitectura base de la nueva plataforma (modular, basada en componentes, con APIs bien definidas como contratos entre módulos). Se descompone el sistema legacy en incrementos priorizados según el valor de negocio y el riesgo. Por ejemplo:
- Incremento 1: Módulo de gestión de cuentas (consultas de saldo, datos del cliente)
- Incremento 2: Módulo de transferencias entre cuentas propias
- Incremento 3: Módulo de transferencias a terceros
- Incremento 4: Módulo de depósitos y extracciones
- Incrementos siguientes: Reportes, auditoría, etc.

**Fase 2 - Ciclo de Desarrollo del Incremento (mini-cascada):** El primer incremento (gestión de cuentas) pasaría por sus propias fases de Análisis → Diseño → Implementación → Pruebas. Se desarrolla el módulo de consulta de cuentas con la nueva arquitectura moderna, asegurando que pueda coexistir con el sistema legacy para las funciones aún no migradas.

**Fase 3 - Integración y Entrega:** El módulo de gestión de cuentas se integra en el entorno productivo, reemplazando esa porción del sistema legacy. Se verifica que funciona correctamente y que no afecta al resto del sistema antiguo que sigue operando.

**Fase 4 - Retroalimentación y Planificación del Siguiente Incremento:** El departamento de operaciones usa el nuevo módulo de cuentas y da feedback. Se ajustan prioridades para el siguiente incremento si es necesario.

**Ejemplo del primer incremento:** El módulo de gestión de cuentas sería un buen candidato porque es una funcionalidad central con alta visibilidad (los operadores la usan constantemente) y relativamente independiente. Entregarlo primero demuestra el valor de la migración rápidamente y permite validar que la nueva arquitectura puede coexistir con el sistema legacy.

**Pruebas de regresión al añadir el segundo incremento:** Al integrar el módulo de transferencias entre cuentas propias (incremento 2), no basta con probar solo la funcionalidad nueva. Se deben ejecutar **pruebas de regresión** sobre el incremento 1 (gestión de cuentas) para asegurar que el nuevo módulo de transferencias no rompió nada en el módulo de cuentas ya desplegado. Esto implica reprobar las consultas de saldo, los datos del cliente y la correcta coexistencia con el sistema legacy. Esta necesidad de reprobar todo lo existente cada vez que se añade un incremento es lo que impulsa la automatización de pruebas, una práctica clave del modelo.

### 3. Diferencia Clave: Incremento vs. Prototipo

La diferencia fundamental entre un "incremento" y un "prototipo" radica en su naturaleza y propósito:

- Un **incremento** es una **pieza de software de producción**: completamente codificada, probada y funcional. Según los apuntes, "cada incremento no es una maqueta, sino una pieza de software de producción". En CoreBanc 2.0, el módulo de gestión de cuentas sería software real que los operadores del banco usarían en su trabajo diario, con lógica de negocio real, conexión a bases de datos reales y cumpliendo todos los estándares de calidad de producción.

- Un **prototipo**, en cambio, es una **herramienta desechable para el diálogo**. Su propósito es descubrir requisitos y validar ideas, no formar parte del producto final. Puede no tener lógica real ni base de datos detrás; es una simulación interactiva que se descarta una vez que cumplió su función de aprendizaje. Como señala Brooks: "construir uno para tirar".

En resumen: el incremento **es** el producto (una pieza funcional del sistema final que se entrega al usuario), mientras que el prototipo es un **medio para descubrir** qué debería ser el producto (y luego se descarta). En CoreBanc 2.0 no se necesitan prototipos porque los requisitos funcionales del sistema son conocidos (el sistema legacy ya los implementa); lo que se necesita es migrar esa funcionalidad pieza por pieza en forma de incrementos de producción.

---

## Sección B: Análisis del Desarrollo Ágil

### 1. Aplicabilidad al Proyecto B (ZenPay)

Un enfoque Ágil es la mejor opción para ZenPay porque aborda directamente los problemas que los modelos clásicos no podían resolver:

- **Gestión del cambio como ventaja competitiva:** Los modelos clásicos (especialmente la Cascada) generaban "incapacidad para gestionar el cambio", tratándolo como un error de planificación. Para ZenPay, cuyos requisitos son "cambiantes o desconocidos" y cuyo mercado es volátil, esto sería fatal. El enfoque Ágil, en cambio, acepta que los requisitos cambien incluso tarde en el desarrollo (Principio 2 del Manifiesto). En ZenPay, donde el cliente "no sabe lo que quiere hasta que lo ve", el cambio no es un problema sino una oportunidad para ajustar el producto a lo que el mercado realmente demanda.

- **Time-to-Market mediante entregas frecuentes:** Los modelos clásicos producían "proyectos excesivamente largos" y un "producto final insatisfactorio" que cumplía el documento original pero ya no las necesidades reales. ZenPay necesita rapidez para competir con startups FinTech. El enfoque Ágil responde con el Principio 3: "entregar software funcional frecuentemente (semanas a meses, preferir lo más corto)". En lugar de esperar meses para lanzar una aplicación completa, ZenPay puede entregar incrementos funcionales cada pocas semanas, validando con el mercado y ajustando continuamente.

- **Participación constante del cliente:** En los modelos clásicos, la participación del cliente era "limitada (inicio y final)". En ZenPay, el Product Owner del área de negocio trabajará "de forma cotidiana" con el equipo, lo que coincide exactamente con el Principio 4 del Manifiesto: "gente de negocio y desarrolladores deben trabajar juntos de forma cotidiana". Esto asegura que cada iteración construya lo que realmente se necesita.

- **Validación rápida del producto:** El riesgo principal de ZenPay es "construir un producto que ya no era lo que el cliente o el mercado necesitaban". El enfoque Ágil mitiga esto al entregar software funcionando como medida de progreso (Principio 7), obteniendo feedback real del mercado de forma continua en lugar de descubrir al final que el producto no encaja.

### 2. Valores del Manifiesto Ágil aplicados a ZenPay

**Valor 1: "Respuesta al cambio sobre seguir un plan"**

En ZenPay, el mercado FinTech es volátil y los requisitos son cambiantes o desconocidos. Un plan rígido trazado al inicio se volvería obsoleto rápidamente: las startups competidoras podrían lanzar nuevas funcionalidades, las regulaciones podrían cambiar, o el feedback de los primeros usuarios podría revelar que las micro-inversiones son más demandadas que los pagos entre pares (o viceversa). Este valor del Manifiesto significa que el plan de ZenPay debe ser una guía que evoluciona, no una hoja de ruta rígida. Si después del primer Sprint el feedback indica que los usuarios prefieren una funcionalidad que no estaba planificada, el equipo puede reorientar el backlog inmediatamente. El cambio se convierte en ventaja competitiva: mientras un competidor con enfoque rígido tardaría meses en reaccionar, ZenPay puede pivotar en el próximo Sprint.

**Valor 2: "Software funcionando sobre documentación exhaustiva"**

Para ZenPay, la única medida real de progreso es tener software funcional que los usuarios puedan probar. Invertir meses en documentar exhaustivamente los requisitos de una aplicación innovadora cuyos requisitos son desconocidos sería contraproducente: se documentaría lo que se supone que el usuario quiere, no lo que realmente necesita. En cambio, al priorizar software funcionando, el equipo de ZenPay puede entregar una versión usable de la app cada pocas semanas. Esto permite al Product Owner mostrar avances tangibles a la dirección del banco, validar funcionalidades con usuarios reales, y tomar decisiones informadas sobre qué construir a continuación. La documentación no se elimina, sino que se reduce a lo esencial y necesario, evitando el desperdicio de tiempo en documentos que quedarían desactualizados con cada cambio de requisitos.

### 3. Scrum y XP aplicados a ZenPay

**Scrum para la gestión del proyecto:**

El proyecto ZenPay se gestionaría mediante Sprints de 2 semanas, iteraciones de tiempo fijo donde el equipo completa un incremento funcional de la aplicación. El **Product Owner** del área de negocio del banco sería responsable de gestionar y priorizar el **Backlog** (la lista de todo el trabajo pendiente), decidiendo qué funcionalidades tienen mayor valor de negocio y deben construirse primero (por ejemplo, priorizar pagos entre pares sobre micro-inversiones si el análisis de mercado lo indica). El **Scrum Master** se encargaría de que el equipo aplique Scrum correctamente, eliminando obstáculos y protegiendo al equipo de interrupciones externas (como pedidos ad-hoc de otros departamentos del banco). Las **reuniones diarias (Daily Scrum)** de 15 minutos permitirían al equipo sincronizarse, reportar progreso e identificar impedimentos rápidamente. Al final de cada Sprint, se tendría un incremento funcional de ZenPay que el Product Owner puede evaluar y que se puede mostrar a usuarios reales para obtener feedback.

**Extreme Programming (XP) para la calidad técnica:**

Mientras Scrum gestiona el "qué" y "cuándo", XP asegura el "cómo" con calidad. Dos prácticas clave de XP serían fundamentales en ZenPay:

- **Programación en Pareja (Pair Programming):** Dos desarrolladores trabajan en la misma computadora. En ZenPay, donde se manejan transacciones financieras (pagos entre pares, micro-inversiones), la calidad del código es crítica. La programación en pareja mejora la calidad al tener una revisión en tiempo real, reduce errores en lógica financiera sensible y difunde el conocimiento del sistema entre todo el equipo, evitando que una sola persona sea el "cuello de botella" de un módulo.

- **Integración Continua (CI):** Cada vez que un desarrollador integra su código a la rama principal, se disparan builds y pruebas automatizadas. En una aplicación financiera como ZenPay, donde cada Sprint añade funcionalidad nueva, la Integración Continua garantiza que los cambios no rompan funcionalidades existentes. Esto permite mantener un ritmo de entregas frecuentes sin sacrificar la estabilidad, algo esencial cuando la app maneja dinero real de los usuarios.

Scrum y XP son **complementarios, no competidores**: el equipo de ZenPay usaría Scrum para gestionar sus Sprints y su Backlog, mientras usa XP para escribir el código con la calidad que una aplicación financiera exige.

---

## Sección C: Comparación y Conclusión

### 1. Predictivo vs. Adaptativo

**CoreBanc 2.0: Enfoque Predictivo.** El proyecto se clasifica dentro de la filosofía predictiva porque sus requisitos son conocidos (la funcionalidad del sistema legacy está definida), el alcance está delimitado (reemplazar un sistema existente) y la planificación puede trazarse desde el inicio con claridad. El cambio no es un factor esperado: se sabe exactamente qué debe hacer cada módulo porque el sistema actual ya lo implementa. La planificación es rígida en el sentido de que los incrementos se definen al inicio según la arquitectura del sistema, y el manejo de requisitos es estable. Se busca ejecutar el plan con la menor desviación posible para garantizar la continuidad operativa.

**ZenPay: Enfoque Adaptativo.** El proyecto se clasifica dentro de la filosofía adaptativa porque sus requisitos son cambiantes o desconocidos, la incertidumbre es alta y el cambio es inevitable. El cliente "no sabe lo que quiere hasta que lo ve", el mercado es volátil y la velocidad de reacción es crítica. La planificación es adaptativa: se conoce la dirección general (competir con startups FinTech) pero la ruta se descubre durante el camino mediante entregas frecuentes y feedback. El cambio no se trata como un error sino como una ventaja competitiva que permite ajustar el producto a las necesidades reales del mercado.

### 2. Analogía: Mapa Detallado vs. Brújula

**CoreBanc 2.0: El Mapa Detallado.** Para este proyecto, la estrategia de planificación es como un mapa detallado con la ruta trazada antes de empezar el viaje. Se conoce el punto de partida (sistema legacy monolítico), el destino (arquitectura moderna modular) y cada parada intermedia (los incrementos: cuentas, transferencias, depósitos, etc.). El equipo puede planificar con precisión qué módulo migrar primero, cuánto tiempo tomará cada incremento y en qué orden se reemplazarán las piezas del sistema antiguo. Esta predictibilidad es esencial porque cualquier desvío inesperado en un sistema bancario crítico podría causar interrupciones del servicio.

**ZenPay: La Brújula.** Para este proyecto, la estrategia es como una brújula que señala el norte (entregar una app FinTech competitiva) pero sin una ruta fija predeterminada. El equipo sabe hacia dónde va, pero la ruta se descubre durante el viaje. Cada Sprint es un paso en una dirección que se evalúa y ajusta: si después de lanzar los pagos entre pares el mercado demanda más las micro-inversiones, el equipo reorienta la brújula y ajusta el backlog. No se necesita un mapa detallado porque el terreno (el mercado FinTech) cambia constantemente; lo que se necesita es la capacidad de adaptarse rápidamente a cada nuevo descubrimiento.

### 3. Recomendación Final

Recomendamos a la dirección del banco adoptar el **Modelo Incremental** para CoreBanc 2.0 y un **enfoque Ágil (Scrum/XP)** para ZenPay, ya que cada modelo mitiga el riesgo principal de su respectivo proyecto. CoreBanc 2.0 enfrenta como riesgo dominante la interrupción del servicio durante la migración del sistema legacy; el Modelo Incremental mitiga este riesgo al permitir reemplazar el sistema pieza por pieza, entregando módulos de producción completamente funcionales que coexisten con el sistema antiguo, de modo que en ningún momento se apaga el viejo para encender el nuevo. Si algún incremento presenta problemas, el impacto es limitado a ese módulo y el resto del sistema sigue operando. ZenPay, por su parte, enfrenta como riesgo dominante construir un producto que el mercado no necesita; el enfoque Ágil mitiga este riesgo al entregar software funcional cada pocas semanas mediante Sprints, obteniendo feedback real del Product Owner y de los usuarios, y ajustando la dirección del producto continuamente. Scrum proporciona la gestión necesaria para priorizar y adaptarse, mientras que XP (con prácticas como Pair Programming e Integración Continua) asegura la calidad técnica que una aplicación financiera exige. En síntesis, cada proyecto exige una filosofía diferente: CoreBanc 2.0 necesita la predictibilidad y estructura del mapa detallado para migrar sin riesgo, y ZenPay necesita la agilidad de la brújula para descubrir y conquistar su mercado.
