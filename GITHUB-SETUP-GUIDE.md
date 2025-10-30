# 🚀 Guía para Subir el Proyecto a GitHub

## ✅ Estado Actual

¡El proyecto está listo para ser subido a GitHub!

- ✅ Commit creado: `feat: Add 11 professional blog posts with dynamic routing`
- ✅ 11 blogs profesionales agregados
- ✅ Sistema de routing dinámico implementado
- ✅ 0 errores de compilación
- ✅ README.md actualizado

---

## 📋 Pasos para Crear y Subir el Repositorio

### Opción 1: Usando GitHub CLI (gh) - MÁS RÁPIDO

Si tienes GitHub CLI instalado:

```bash
cd /g/DEV/tmp/interior-design

# Crear repositorio y subirlo automáticamente
gh repo create interior-design-nextjs --public --source=. --push

# O si prefieres privado:
gh repo create interior-design-nextjs --private --source=. --push
```

### Opción 2: Manual - PASO A PASO

#### 1. Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Completa los datos:
   - **Repository name**: `interior-design-nextjs` (o el nombre que prefieras)
   - **Description**: `Modern interior design website built with Next.js 16, React 19, and TypeScript. Features 11 professional blog posts with dynamic routing.`
   - **Visibility**: Public o Private (elige según tu preferencia)
   - ⚠️ **NO marques** "Initialize this repository with:"
     - NO README
     - NO .gitignore
     - NO license
3. Click en **"Create repository"**

#### 2. Conectar tu Proyecto Local con GitHub

GitHub te mostrará instrucciones. Ejecuta estos comandos en la terminal:

```bash
cd /g/DEV/tmp/interior-design

# Asegurar que estamos en la rama main
git branch -M main

# Agregar el remote de GitHub (reemplaza TU_USUARIO con tu username)
git remote add origin https://github.com/TU_USUARIO/interior-design-nextjs.git

# Subir el código a GitHub
git push -u origin main
```

**Ejemplo con tu usuario:**
```bash
git remote add origin https://github.com/jordi/interior-design-nextjs.git
git push -u origin main
```

#### 3. Autenticación

Cuando te pida credenciales:
- **Username**: Tu usuario de GitHub
- **Password**: Tu **Personal Access Token** (NO tu contraseña)

**Si no tienes un token:**
1. Ve a https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Selecciona scope: `repo` (Full control of private repositories)
4. Copia el token y úsalo como password

### Opción 3: Usando SSH (Si tienes SSH configurado)

```bash
cd /g/DEV/tmp/interior-design

git branch -M main
git remote add origin git@github.com:TU_USUARIO/interior-design-nextjs.git
git push -u origin main
```

---

## 🎉 Después de Subir a GitHub

### 1. Verifica el Repositorio

Ve a `https://github.com/TU_USUARIO/interior-design-nextjs` y verifica que todos los archivos estén ahí.

### 2. Configura GitHub Pages (Opcional)

Si quieres deployar gratis en GitHub Pages:

1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save

### 3. Despliega en Vercel (Recomendado)

Para un deploy profesional con dominios y analíticas:

**Opción A: Desde la Web**
1. Ve a https://vercel.com/new
2. Importa tu repositorio de GitHub
3. Vercel detectará Next.js automáticamente
4. Click "Deploy"
5. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

**Opción B: Desde la Terminal**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
cd /g/DEV/tmp/interior-design
vercel

# Para producción
vercel --prod
```

### 4. Añade Badges al README

Añade estos badges al inicio de tu README.md:

```markdown
[![GitHub repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/TU_USUARIO/interior-design-nextjs)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://tu-proyecto.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green)]()
```

---

## 📝 Comandos Útiles para el Futuro

### Hacer Cambios y Subirlos

```bash
# Ver cambios
git status

# Agregar todos los cambios
git add .

# Crear commit
git commit -m "descripción de los cambios"

# Subir a GitHub
git push
```

### Ver Historial

```bash
# Ver commits
git log --oneline

# Ver cambios en un archivo
git log -p app/blog/[slug]/page.tsx
```

### Crear Nueva Rama

```bash
# Crear y cambiar a nueva rama
git checkout -b feature/nueva-funcionalidad

# Hacer cambios y commitear
git add .
git commit -m "feat: nueva funcionalidad"

# Subir nueva rama
git push -u origin feature/nueva-funcionalidad
```

---

## 🎯 Resumen del Proyecto

### Estadísticas
- **Commits**: 1 (inicial con blogs)
- **Archivos**: 618 líneas agregadas
- **Blogs**: 11 artículos profesionales
- **Páginas**: 7 (Home, About, Services, Projects, Blog, Blog Detail, Contact)
- **Errores**: 0

### Archivos Principales Agregados
- `app/data/blogPosts.ts` - Data source con 11 blogs
- `app/blog/[slug]/page.tsx` - Página dinámica de blog
- `app/components/home/BlogSection.tsx` - Componente actualizado
- `README.md` - Documentación completa
- `git-setup.sh` - Script de configuración git

### Tecnologías
- Next.js 16.0.1
- React 19
- TypeScript (strict)
- Bootstrap 4.5.3
- Swiper.js
- SCSS

---

## 🐛 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/interior-design-nextjs.git
git push -u origin main
```

### Error: "Authentication failed"
- Usa un Personal Access Token en lugar de tu contraseña
- O configura SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Error: "refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación de GitHub: https://docs.github.com
2. Revisa la documentación de Vercel: https://vercel.com/docs
3. Verifica que tengas git instalado: `git --version`
4. Verifica que estás en el directorio correcto: `pwd`

---

## ✅ Checklist Final

Antes de considerar el proyecto completo:

- [x] ✅ Crear 11 blogs profesionales
- [x] ✅ Implementar routing dinámico
- [x] ✅ Actualizar README
- [x] ✅ Crear commit
- [ ] 🔄 Crear repositorio en GitHub
- [ ] 🔄 Push a GitHub
- [ ] 🔄 Deploy en Vercel
- [ ] 🔄 Configurar dominio custom (opcional)
- [ ] 🔄 Añadir analytics (opcional)

---

**¡Felicitaciones!** 🎉

Tu proyecto está listo para ser compartido con el mundo. Los próximos pasos son crear el repositorio en GitHub y deployar en Vercel.

**Comando rápido para crear el repo (si tienes gh CLI):**
```bash
gh repo create interior-design-nextjs --public --source=. --push --description "Modern interior design website with Next.js 16 and 11 professional blog posts"
```

¡Éxito! 🚀
