
# Plan de Migración de Plantilla HTML a Next.js 16
Planifica y documenta el proceso para transformar la plantilla ubicada en la carpeta **"interior-design-template"** en una aplicación de **Next.js 16**.  
La aplicación de Next.js ya está instalada en la carpeta **"interior-design"**.

### Instrucciones:
1. **Planificación inicial**  
   - Define los pasos necesarios para migrar la plantilla HTML a la estructura de Next.js 16.  
   - Es una plantilla estática, por lo que no se requiere funcionalidad dinámica.
   - Contiene bootstrap y estilos personalizados en SCSS.
   - Incluye la organización de componentes, páginas y estilos. 
   - Se trata de pasar la plantilla a Next.js 16, con React y TypeScript. Averigua cómo pasarlo de manera automática o semiautomática y óptima como instalando dependencias necesarias (ejemplo: sass para SCSS).
   - Elimina jquery si está presente, ya que Next.js y React no lo requieren.

2. **Gestión de tareas y documentación**  
   - Crea una carpeta llamada **"docs"** dentro del proyecto.  
   - En ella, registra las tareas planificadas y el progreso (checklists, notas, decisiones técnicas).  
   - Usa esta carpeta como espacio de documentación de la app. 
   - Mantén el registro simple y claro. Sin que sea extenso, pero sí útil para futuras referencias. 

3. **Migración y validación**  
   - Integra progresivamente los archivos de la plantilla en la app de Next.js.  
   - Corrige errores de **ESLint** y de código a medida que avances.  
   - Supervisa la **consola de DevTools en Chrome** para detectar y resolver errores en tiempo real.  

4. **Comparación visual y funcional**
  - Para verificar la app utiliza 'dev.prompt.md' en la carpeta .github/prompts
   - Verifica que la aplicación en Next.js se exacta a la plantilla original.  
   - Ajusta estilos, estructura y comportamiento hasta lograr una equivalencia visual y funcional exacta.  

### Objetivo final:
Obtener una aplicación en Next.js 16 que replique fielmente la plantilla original, con un flujo de trabajo documentado y controlado mediante la carpeta **"docs"**.

