# TUP - 2do Año

Material de cursada del 2do año de la Tecnicatura Universitaria en Programacion (UTN - modalidad a distancia).

## Estructura del repositorio

```
2Anio/
├── 1er-Cuatrimestre/
│   ├── Base-de-datos-2/          (6 modulos)
│   ├── Ingles-2/                 (4 modulos)
│   ├── Metodologia-de-sistemas-1/ (8 modulos)
│   └── Programacion-3/           (10 unidades)
└── 2do-Cuatrimestre/
```

Cada materia contiene:
- **Programa PDF** de la catedra en la raiz de la materia
- **Cuestionario-inicial.md** - cuestionario obligatorio sobre reglas y condiciones de aprobacion
- **Carpetas por modulo/unidad**, cada una con:
  - `README.md` - links a clases, videos, infografias y materiales
  - `materiales/` - PDFs y slides de la catedra
  - `practicas/` - ejercicios y codigo
  - `Autoevaluacion-Actividad-X.md` - preguntas, respuestas y resumen por tema
- **Trabajos/** - TPs y entregas

## Como usar este repo para estudiar

### 1. Seguir una actividad

Abri el `README.md` del modulo correspondiente. Ahi vas a encontrar en orden:
- Infografia introductoria
- Video de la clase
- PDF con el material
- Asistente IA para repaso interactivo

### 2. Repasar para parciales

Cada autoevaluacion tiene una **tabla resumen** al inicio con los conceptos clave. Ideal para repasar rapido antes de un examen.

Las preguntas estan agrupadas por tema, no por numero, para que puedas identificar que areas reforzar.

### 3. Revisar reglas de la materia

Cada materia tiene un `Cuestionario-inicial.md` en su raiz con un resumen de:
- Canales de comunicacion (cuando usar foro, correo, etc.)
- Condiciones de aprobacion (notas minimas, parciales, global)
- Modalidad de consultas

### 4. Agregar material nuevo

Al completar una nueva actividad, edita el `README.md` del modulo con este formato:

```markdown
## Actividad X - Nombre

- [Infografia](https://link)
- [Video: Titulo](https://youtube.com/...)
- [PDF: Nombre del material](materiales/nombre-del-archivo.pdf)
```

### 5. Documentar autoevaluaciones

Crear un archivo `Autoevaluacion-Actividad-X.md` en la carpeta del modulo con:

```markdown
# Autoevaluacion - Actividad X: Nombre

Resultado: **X/10** (X%)

## Resumen rapido

| Concepto | Clave |
|----------|-------|
| ...      | ...   |

## Preguntas

### Tema agrupador

**1. Pregunta**
**R: Respuesta.** Explicacion breve.
```

## Notas tecnicas

- Los archivos PDF se almacenan con **Git LFS** para mantener el repositorio liviano
- Para clonar el repo con los PDFs: `git clone` descarga todo automaticamente (requiere git-lfs instalado)
- Si solo queres el repo sin PDFs: `GIT_LFS_SKIP_SMUDGE=1 git clone <url>`
