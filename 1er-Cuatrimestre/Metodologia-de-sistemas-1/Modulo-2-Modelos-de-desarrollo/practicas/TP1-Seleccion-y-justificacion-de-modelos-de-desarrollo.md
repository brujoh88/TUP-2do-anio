# Práctica Integrada Unidad 2: Selección y Justificación de Modelos de Desarrollo

## Metodología de Sistemas I - TUP a Distancia

**Alumno:** Tiseira Gustavo Hernán

---

## Sección A: Análisis del Modelo en Cascada

### 1. Aplicabilidad al Proyecto A (MedControl)

El Modelo en Cascada es un candidato fuerte para el proyecto MedControl por varias razones que coinciden directamente con sus casos de uso ideales:

- **Requerimientos estables y conocidos:** MedControl posee requisitos fijos, estables y no negociables, definidos por las limitaciones del hardware y por regulaciones gubernamentales de salud. Un cambio a mitad del proyecto es impensable. Esta es precisamente la condición ideal de la Cascada, cuya filosofía de "congelar" los requerimientos al inicio funciona cuando estos no van a cambiar.

- **Sistema crítico y entorno regulado:** El firmware de un marcapasos implantable es un sistema donde el riesgo de fallo es catastrófico, ya que está en juego la vida del paciente. Los apuntes señalan que la Cascada es ideal para "sistemas críticos y entornos regulados: aeroespacial, defensa, dispositivos médicos (marcapasos)", que es exactamente el escenario de MedControl.

- **Documentación exhaustiva como requisito:** Una de las principales ventajas de la Cascada es la generación de documentación exhaustiva en cada fase. MedControl necesita demostrar, mediante documentación completa, que cada requisito ha sido verificado para cumplir con las auditorías de calidad y regulación. La Cascada proporciona esta trazabilidad documental de forma natural, ya que cada fase produce documentos formales que alimentan la siguiente.

- **Predictibilidad y disciplina:** El cliente de MedControl (ingeniería de hardware y auditores de calidad) necesita un proceso predecible con hitos claros y medibles. La filosofía de "divide y vencerás" y "una cosa a la vez" de la Cascada permite planificar y medir el progreso con precisión, algo que un entorno regulado exige.

### 2. Inviabilidad en el Proyecto B (SocialEats)

El Modelo en Cascada sería una elección desastrosa para SocialEats debido a sus desventajas clave:

- **Poca flexibilidad ante los cambios:** Esta es la debilidad más crítica de la Cascada. SocialEats tiene requisitos extremadamente ambiguos: los fundadores "no saben exactamente lo que quieren hasta que lo vean". La Cascada exige congelar los requerimientos al inicio, pero en SocialEats no existen requerimientos claros que congelar. Cualquier intento de definirlos rígidamente al principio resultaría en un producto que no refleje las verdaderas necesidades del mercado. Si a mitad de desarrollo se descubre que los usuarios quieren una funcionalidad diferente, modificar el proyecto sería extremadamente costoso.

- **Detección tardía de errores:** En la Cascada, los errores conceptuales no se descubren hasta la fase de pruebas. En SocialEats, donde el éxito depende de una UI/UX intuitiva y "adictiva", descubrir recién al final del proyecto que la interfaz no es atractiva o que las funcionalidades no son las que el mercado demanda sería un error fatal. Corregirlo en esa etapa avanzada resulta exponencialmente más caro.

- **Entrega tardía de valor:** En la Cascada, el cliente no ve software funcional hasta que el proyecto está prácticamente terminado. Los fundadores de SocialEats necesitan ver progreso rápido para sus inversores, y los usuarios finales necesitan dar feedback vital durante el desarrollo. Esperar meses o años para mostrar un producto terminado implicaría quemar la financiación sin evidencia tangible de avance, y lanzar un producto que nadie validó previamente en un mercado con altísimo riesgo.

En resumen, aplicar Cascada a SocialEats significaría construir a ciegas un producto completo basado en suposiciones que nadie verificó, y entregarlo al final para descubrir que no es lo que el mercado necesita.

### 3. La Paradoja de Royce

Irónicamente, Winston W. Royce, a quien la industria atribuye la creación del modelo en Cascada en su artículo de 1970 ("Managing the Development of Large Software Systems"), presentó el modelo secuencial puro como un modelo **defectuoso** ("flawed"). Royce no propuso la Cascada rígida como la solución, sino que la utilizó como punto de partida para explicar que un flujo puramente lineal era insuficiente. Lo que Royce realmente propuso para "arreglar" el modelo fue agregar **iteraciones** entre fases y **"hacerlo dos veces"** (es decir, construir un prototipo primero antes del sistema final). Sin embargo, la industria adoptó la versión simplificada y rígida que él mismo criticó, porque resultaba más fácil de entender, gestionar y plasmar en contratos. Así, el modelo que lleva implícitamente su nombre es precisamente la versión que Royce consideró inadecuada.

---

## Sección B: Análisis del Modelo de Prototipado

### 1. Aplicabilidad al Proyecto B (SocialEats)

El Modelo de Prototipado es ideal para SocialEats porque el proyecto cumple con todos los casos de uso ideales de este modelo:

- **Producto innovador sin precedentes:** SocialEats es una startup buscando conectar food trucks con clientes en tiempo real, un concepto innovador donde la pregunta clave no es "cómo lo construimos" sino **"qué deberíamos construir"**. Según los apuntes, el Prototipado es ideal para "productos innovadores o sin precedentes: startups buscando el product-market fit", que es exactamente la situación de SocialEats.

- **Alta carga de UI/UX:** El éxito de SocialEats depende críticamente de una interfaz de usuario intuitiva y "adictiva". El Prototipado permite construir versiones interactivas centradas en la experiencia visual (bocetos de flujos de navegación, pantallas principales) que los usuarios pueden experimentar y evaluar. El uso de herramientas como Figma o plataformas low-code permite crear prototipos de alta fidelidad rápidamente, lo cual es perfecto para iterar sobre el diseño de la app.

- **Clientes con requisitos ambiguos:** Los fundadores de SocialEats admiten que "no saben exactamente lo que quieren hasta que lo vean". Esta premisa es precisamente el punto de partida del modelo de Prototipado, que nace para resolver la brecha de comunicación entre quienes imaginan el producto y quienes lo construyen. El prototipo funciona como un "lenguaje común" para concretar ideas vagas, transformando conceptos abstractos en algo tangible que genera feedback concreto.

- **Filosofía de "validar antes de construir":** En lugar de invertir meses de desarrollo en una aplicación completa basada en suposiciones, el Prototipado permite "fallar rápido y barato": descubrir errores de concepto en una maqueta de bajo costo antes de comprometer recursos en el producto final. Para una startup con financiación limitada, esta eficiencia es crucial.

- **Feedback vital del usuario:** El ciclo de refinamiento (Diseño Rápido -> Construcción del Prototipo -> Evaluación del Cliente) permite involucrar tanto a los fundadores como a los futuros usuarios finales desde las primeras etapas, generando mayor satisfacción y asegurando que el producto se alinee con las necesidades reales del mercado.

### 2. Gestión de Expectativas

La desventaja principal que se debería gestionar activamente con los fundadores de SocialEats es la **gestión de expectativas**. Existe un riesgo real de que los fundadores (y especialmente los inversores) confundan el prototipo con el producto casi terminado. Al ver una interfaz interactiva y visualmente atractiva, pueden creer que el desarrollo está mucho más avanzado de lo que realmente está, sin comprender que el prototipo puede no tener lógica real ni base de datos detrás.

Esto es particularmente peligroso en SocialEats porque los fundadores necesitan mostrar progreso rápido a los inversores. Si presentan un prototipo como evidencia de avance y los inversores lo interpretan como un producto casi listo, se generarán expectativas falsas sobre los plazos de entrega. Cuando luego se explique que el prototipo debe descartarse y el sistema real debe construirse desde cero, la frustración puede ser significativa.

Para mitigar este riesgo, es fundamental comunicar desde el inicio que el prototipo es una **herramienta de aprendizaje**, no la primera versión del producto. Se deben establecer límites claros sobre cuántas iteraciones de refinamiento se realizarán antes de pasar al desarrollo del producto final, evitando así también el riesgo asociado de **scope creep** (que el ciclo de retroalimentación se vuelva interminable sin límites claros).

### 3. El Aporte de Brooks

Frederick P. Brooks, en su obra "The Mythical Man-Month" (1975), propuso el concepto de **"Plan to Throw One Away"** ("Construir uno para tirar"), argumentando que es prácticamente imposible acertar con el diseño de un sistema al primer intento. Esta idea se relaciona directamente con el flujo de trabajo del Prototipado de la siguiente manera:

En el modelo de Prototipado, las fases 2, 3 y 4 (Diseño Rápido, Construcción del Prototipo y Evaluación del Cliente) forman un **ciclo iterativo** donde se construyen versiones sucesivas del prototipo que son evaluadas y refinadas. Pero lo clave está en la fase 5 (Desarrollo del Producto Final): el prototipo se **descarta por completo** y se construye el sistema de producción desde cero, ahora con requisitos claros y validados. El prototipo nunca fue concebido como la primera pieza del software final, sino como un medio para descubrir requisitos.

Es valioso "perder" el tiempo en un prototipo desechable porque esa inversión genera un retorno enorme: se eliminan ambigüedades, se descubren problemas de usabilidad cuando es barato corregirlos, y se llega al desarrollo final con una comprensión clara de lo que hay que construir. El costo de construir y desechar un prototipo es significativamente menor que el costo de construir un sistema completo basado en suposiciones erróneas para luego descubrir que no cumple con las necesidades reales. Como dice la filosofía del modelo: es mejor **"fallar rápido y barato"** en un prototipo que fallar tarde y caro en el producto final.

---

## Sección C: Análisis del Modelo en Espiral y Recomendación Final

### 1. El Enfoque en el Riesgo

- **Riesgo dominante en el Proyecto A (MedControl):** El riesgo dominante es el **riesgo técnico y de seguridad crítica** (riesgo de vida). Un fallo en el firmware del marcapasos puede tener consecuencias catastróficas para el paciente. Este riesgo está vinculado a la fiabilidad del software, la correcta implementación de cada requisito y el cumplimiento de las estrictas regulaciones gubernamentales de salud. Es un riesgo donde el fracaso no es una opción.

- **Riesgo dominante en el Proyecto B (SocialEats):** El riesgo dominante es el **riesgo de mercado**. El principal temor es construir un producto que, aunque funcione técnicamente, nadie quiera usar o no sea mejor que las soluciones existentes. No es un riesgo técnico (la tecnología para una app móvil está probada), sino la incertidumbre de si el producto encontrará su encaje en el mercado (product-market fit).

### 2. Espiral como Alternativa

El Modelo en Espiral de Boehm podría ser una alternativa viable para el Proyecto A (MedControl) por las siguientes razones:

- **Gestión de riesgos superior:** La filosofía central de la Espiral es que el desarrollo de software es una misión de exploración y gestión de riesgos. En MedControl, donde el riesgo de fallo es catastrófico, contar con un modelo que coloca el análisis formal de riesgos como el **corazón de cada iteración** (Cuadrante 2: "Identificar y analizar riesgos") ofrece una capa adicional de seguridad. Ningún ciclo avanza sin antes identificar y neutralizar los mayores riesgos.

- **Aplicabilidad en sistemas de alto riesgo:** Los casos de uso ideales de la Espiral incluyen software militar, sistemas aeroespaciales y sistemas de control críticos, categorías análogas al firmware de un dispositivo médico. El modelo está diseñado para proyectos donde el fracaso no es una opción, como lo es MedControl.

- **Flexibilidad para incorporar otros modelos:** La Espiral puede incorporar un enfoque tipo Cascada dentro de sus iteraciones de desarrollo (Cuadrante 3), manteniendo la disciplina y documentación exhaustiva que MedControl requiere, pero añadiendo la evaluación sistemática de riesgos en cada ciclo.

Sin embargo, la Espiral es **costosa y compleja**: requiere personal altamente especializado en análisis de riesgos y consume tiempo y recursos significativos en cada ciclo de evaluación. Para MedControl, donde los requisitos son estables y bien conocidos desde el inicio, esta complejidad adicional podría no justificarse frente a un modelo más directo como la Cascada, que ya proporciona la estructura y documentación necesarias.

### 3. Recomendación Final

**Proyecto A (MedControl): Modelo en Cascada.** Para el firmware del marcapasos, recomiendo el Modelo en Cascada como la mejor opción. Sus requisitos son fijos, estables y no negociables, definidos por el hardware y las regulaciones, lo cual elimina la principal debilidad de la Cascada (la inflexibilidad ante cambios) porque en este proyecto los cambios simplemente no ocurrirán. Además, la Cascada proporciona de forma natural la documentación exhaustiva y la trazabilidad que los auditores de calidad y regulación exigen, algo que ningún otro modelo ofrece con tanta solidez. Si bien la Espiral podría ser una alternativa viable por su gestión superior de riesgos, su complejidad y costo adicional no se justifican cuando los requisitos están completamente definidos y el flujo secuencial y disciplinado de la Cascada ya garantiza que cada fase se complete con rigor antes de avanzar. En un proyecto donde el riesgo se mitiga con planificación exhaustiva y verificación meticulosa de cada requisito, la Cascada es el modelo más adecuado y eficiente.

**Proyecto B (SocialEats): Modelo de Prototipado.** Para la aplicación móvil de food trucks, recomiendo el Modelo de Prototipado como la mejor opción. El riesgo dominante de SocialEats no es técnico sino de mercado: el peligro de construir algo que nadie quiera usar. El Prototipado ataca este riesgo directamente al permitir validar la propuesta de valor con usuarios reales antes de invertir en el desarrollo completo. Con requisitos ambiguos, una dependencia crítica de la UI/UX y la necesidad de mostrar progreso rápido a los inversores, el ciclo iterativo del Prototipado (construir maqueta, evaluar con el cliente, refinar) es la herramienta precisa para descubrir qué es lo que realmente se debe construir. La Cascada sería desastrosa por su rigidez y entrega tardía, y la Espiral sería excesiva en complejidad y costo para un proyecto que no enfrenta riesgos técnicos significativos sino incertidumbre de mercado. El Prototipado, con su filosofía de "validar antes de construir" y "fallar rápido y barato", permite a SocialEats encontrar su product-market fit de manera eficiente, maximizando el uso de su financiación limitada.
