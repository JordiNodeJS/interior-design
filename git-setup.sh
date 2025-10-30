#!/bin/bash

# Script para inicializar git, commitear cambios y subir a GitHub
# Ejecutar desde: g:\DEV\tmp\interior-design

echo "🚀 Inicializando repositorio Git..."

# Moverse al directorio del proyecto
cd /g/DEV/tmp/interior-design

# Inicializar git si no existe
if [ ! -d ".git" ]; then
  echo "📁 Inicializando repositorio git..."
  git init
  echo "✅ Repositorio inicializado"
else
  echo "✅ Repositorio git ya existe"
fi

# Configurar usuario si no está configurado
if [ -z "$(git config user.name)" ]; then
  echo "⚙️ Configurando usuario git..."
  git config user.name "iDESIGN Developer"
  git config user.email "developer@idesign.com"
  echo "✅ Usuario configurado"
fi

# Agregar todos los archivos
echo "📝 Agregando archivos..."
git add .

# Ver el estado
echo "📊 Estado del repositorio:"
git status --short

# Crear commit
echo "💾 Creando commit..."
git commit -m "feat: Add 11 professional blog posts with dynamic routing

- Created blogPosts.ts with 11 detailed interior design articles
- Updated BlogSection to display posts dynamically
- Implemented dynamic routing for blog detail pages at /blog/[slug]
- Each blog post has 1500+ words of professional content
- Added related posts carousel with Swiper.js
- Integrated comments section with client testimonials
- Added sidebar with categories, recent posts, and tag cloud
- Updated README.md with blog system documentation
- All content is professionally written (zero lorem ipsum)

Blog topics:
1. Timeless Interior Design
2. Modern Minimalist Kitchens
3. Sustainable Materials
4. Biophilic Design
5. Small Space Solutions
6. Luxury Bathrooms
7. Home Office Productivity
8. Color Psychology
9. Lighting Design
10. Open Floor Plans
11. Vintage Modern Fusion"

echo "✅ Commit creado exitosamente"

# Mostrar el último commit
echo ""
echo "📜 Último commit:"
git log -1 --oneline

echo ""
echo "✅ ¡Todo listo!"
echo ""
echo "📋 Próximos pasos para subir a GitHub:"
echo "1. Crea un nuevo repositorio en GitHub (https://github.com/new)"
echo "2. NO inicialices con README, .gitignore o licencia"
echo "3. Ejecuta estos comandos:"
echo ""
echo "   git branch -M main"
echo "   git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git"
echo "   git push -u origin main"
echo ""
echo "O si prefieres SSH:"
echo "   git remote add origin git@github.com:TU_USUARIO/NOMBRE_REPO.git"
echo "   git push -u origin main"
echo ""
