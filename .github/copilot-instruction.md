# 🎯 GitHub Copilot Instructions - iDESIGN Project

**Project:** iDESIGN Interior Design - Next.js 16 Migration  
**Framework:** Next.js 16 (App Router)  
**Version:** 1.0.0  
**Last Updated:** October 29, 2025

---

## 📋 Project Overview

This is a migration project from an HTML template to a modern Next.js 16 application. The goal is to replicate the original design with 95%+ visual fidelity while implementing modern web standards.

**Key Objectives:**
- Maintain visual consistency with original template
- Type-safe codebase with TypeScript
- Server Components by default
- Optimal performance (Lighthouse >90)
- Accessibility compliant (WCAG 2.1 AA)
- Usa Context7 mcp para estar actualizado con las últimas prácticas de Next.js y React.

---

## 🏗️ Architecture Standards

### Next.js 16 App Router

**Directory Structure:**
```
app/
├── layout.tsx           # Root layout (Server Component)
├── page.tsx             # Home page (Server Component)
├── globals.css          # Global styles
├── about/
│   └── page.tsx        # About page
├── services/
│   └── page.tsx        # Services page
└── [other-routes]/
components/
├── layout/              # Header, Footer, etc.
├── home/                # Home-specific components
├── shared/              # Reusable across pages
└── ui/                  # Basic UI primitives
```

**Rules:**
1. **Server Components by default** - Only add `'use client'` when necessary
2. **Async Server Components** for data fetching
3. **Client Components** only for interactivity (hooks, event handlers)
4. **No `useEffect` for data fetching** - Use Server Components instead

---

## 💻 TypeScript Standards

### Strict Mode Configuration

**Always:**
- Use strict TypeScript mode
- Define explicit return types for functions
- Define interfaces for all props
- Use `type` for unions, `interface` for objects
- Never use `any` - use `unknown` if type is truly unknown

**Example:**
```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}

// ❌ Bad
export function Button(props: any) {
  return <button>{props.children}</button>;
}
```

### Type Naming Conventions

- **Props interfaces:** `ComponentNameProps`
- **API responses:** `ComponentNameResponse`
- **Form data:** `ComponentNameFormData`
- **Hook returns:** `UseComponentNameReturn`

---

## 🎨 Component Standards

### Server Components (Default)

```typescript
// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - iDESIGN',
  description: 'Learn more about our interior design services'
};

interface AboutPageProps {
  // Props if needed
}

export default async function AboutPage({ }: AboutPageProps): Promise<JSX.Element> {
  // Can fetch data directly here
  
  return (
    <main>
      <h1>About Us</h1>
    </main>
  );
}
```

### Client Components

**Only use when:**
- Need `useState`, `useEffect`, or other React hooks
- Need event handlers (`onClick`, `onChange`, etc.)
- Need browser APIs (`window`, `document`)
- Need context providers

```typescript
// components/layout/MobileMenu.tsx
'use client';

import { useState } from 'react';

interface MobileMenuProps {
  items: NavItem[];
}

export function MobileMenu({ items }: MobileMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      {isOpen && <MenuContent items={items} />}
    </nav>
  );
}
```

### Component Structure

**Order:**
1. Imports (external, then internal)
2. Types/Interfaces
3. Constants
4. Component function
5. Exports

```typescript
// ✅ Good structure
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const DEFAULT_ICON = 'star';

export function FeatureCard({ title, description, icon = DEFAULT_ICON }: FeatureCardProps): JSX.Element {
  return (
    <div className="feature-card">
      <i className={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

---

## 📁 File Naming Conventions

### Components
- **PascalCase** for component files: `HeaderNav.tsx`, `FeatureCard.tsx`
- **Server Components:** No special suffix
- **Client Components:** No special suffix (identified by `'use client'`)

### Pages
- **lowercase with hyphens:** `app/blog-detail/page.tsx`
- **Dynamic routes:** `app/blog/[slug]/page.tsx`

### Utilities
- **camelCase:** `lib/formatDate.ts`, `lib/apiClient.ts`

### Styles
- **kebab-case:** `components/header-nav.module.css`

---

## 🎨 Styling Standards

### CSS Strategy: Bootstrap 4.5 + Custom CSS

**Global Styles** (`app/globals.css`):
```css
/* CSS Variables */
:root {
  --color-primary: #DFB163;
  --color-secondary: #252531;
  --color-dark: #181818;
  --color-light: #F3F6FF;
  --font-sans: 'Montserrat', sans-serif;
  --font-heading: 'Oswald', sans-serif;
}

/* Bootstrap overrides */
.btn-primary {
  background-color: var(--color-primary);
}
```

**Component-Specific Styles:**
- Use Bootstrap classes directly in JSX
- Use CSS Modules for custom component styles
- Use `clsx` for conditional classes

Reproducibility and dependencies: Follow the project's package manager and configuration; prefer minimal, pinned, widely-used libraries and update manifests or lockfiles appropriately. Prefer adding or updating tests when you change public behavior.
import clsx from 'clsx';
Package manager
----------------
For this project we standardize on pnpm for package management and recommend using `pnpm` and `pnpm dlx` for installing, running, and executing one-off package binaries. Using `pnpm` keeps installs fast, deterministic, and disk-efficient across contributors.

Guidelines:
- Use `pnpm install` to install dependencies (respect `pnpm-lock.yaml`).
- Add dependencies with `pnpm add <pkg>` and dev-dependencies with `pnpm add -D <pkg>`.
- Use `pnpm dlx <tool>` to run one-off CLIs without installing them globally (for example: `pnpm dlx create-next-app`, `pnpm dlx prisma migrate dev`).
- Do not mix package managers in the same repository (avoid running `npm` or `yarn` commands here); follow the project's lockfile.

Example:
```
pnpm install
pnpm add -D typescript eslint
pnpm dlx create-next-app@latest my-app
```

import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps): JSX.Element {
  return (
    <button 
      className={clsx(
        'btn',
        `btn-${variant}`,
        styles.button,
        styles[`button--${size}`]
      )}
    >
      {children}
    </button>
  );
}
```

---

## 🖼️ Image Optimization

**Always use `next/image`:**

```typescript
import Image from 'next/image';

// ✅ Good
<Image
  src="/images/hero-banner.jpg"
  alt="Interior design showcase"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Optional
/>

// ❌ Bad
<img src="/images/hero-banner.jpg" alt="..." />
```

**Image Guidelines:**
- Use `priority` for hero/above-fold images
- Use `loading="lazy"` for below-fold images (default)
- Always provide `width` and `height` to prevent layout shift
- Use descriptive `alt` text for accessibility
- Place images in `/public/images/` directory

---

## 🔤 Font Optimization

**Use `next/font/google`:**

```typescript
// app/layout.tsx
import { Montserrat, Oswald } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-oswald'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🔄 Data Fetching

### Server Components (Preferred)

```typescript
// app/blog/page.tsx
interface Post {
  id: string;
  title: string;
  excerpt: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export default async function BlogPage(): Promise<JSX.Element> {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### Client Components (Only when necessary)

```typescript
'use client';

import { useState, useEffect } from 'react';

interface DataLoaderProps {
  initialData?: Data[];
}

export function DataLoader({ initialData = [] }: DataLoaderProps): JSX.Element {
  const [data, setData] = useState(initialData);
  
  useEffect(() => {
    // Only if data needs to be fetched client-side
    fetchData().then(setData);
  }, []);
  
  return <div>{/* render data */}</div>;
}
```

---

## 🔗 Navigation

**Use `next/link` for internal navigation:**

```typescript
import Link from 'next/link';

// ✅ Good
<Link href="/about" className="nav-link">
  About Us
</Link>

// ✅ Good - Dynamic route
<Link href={`/blog/${post.slug}`}>
  {post.title}
</Link>

// ❌ Bad
<a href="/about">About Us</a>
```

**Active Link Detection:**

```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={clsx('nav-link', isActive && 'active')}
    >
      {children}
    </Link>
  );
}
```

---

## 📝 Forms and Validation

**Use React Hook Form + Zod:**

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  
  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    // Handle response
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      {/* Other fields */}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🎭 Animation Standards

**Use Framer Motion:**

```typescript
'use client';

import { motion } from 'framer-motion';

export function FadeIn({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 🎪 Carousel Standards

**Use Swiper.js:**

```typescript
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps): JSX.Element {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {/* Slide content */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
```

---

## ♿ Accessibility Standards

**Required:**
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels where necessary
- Keyboard navigation support
- Focus visible styles
- Alt text for all images
- Color contrast WCAG AA compliant

```typescript
// ✅ Good
<button 
  aria-label="Open mobile menu"
  aria-expanded={isOpen}
  onClick={handleToggle}
>
  <MenuIcon />
</button>

// ✅ Good - Skip to content
<a href="#main-content" className="skip-link">
  Skip to main content
</a>

// ❌ Bad
<div onClick={handleClick}>Click me</div>
```

---

## 🧪 Error Handling

**API Routes:**

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Process data
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

**Components:**

```typescript
// app/error.tsx
'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## 📊 Performance Standards

**Targets:**
- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.5s

**Best Practices:**
- Use Server Components for static content
- Lazy load heavy components with `dynamic()`
- Optimize images with `next/image`
- Use route prefetching with `<Link>`
- Minimize client-side JavaScript

```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Disable SSR if not needed
});
```

---

## 🔒 Security Standards

**Environment Variables:**
```typescript
// ✅ Good - Server-side only
const API_KEY = process.env.API_KEY;

// ✅ Good - Client-side (must prefix with NEXT_PUBLIC_)
const PUBLIC_URL = process.env.NEXT_PUBLIC_API_URL;

// ❌ Bad - Exposing secret on client
const SECRET = 'my-secret-key';
```

**API Routes:**
- Always validate input data
- Use CSRF protection for mutations
- Implement rate limiting
- Sanitize user input

---

## 📝 Code Comments

**When to comment:**
- Complex business logic
- Non-obvious algorithms
- Workarounds or hacks
- Public API interfaces (JSDoc)

**JSDoc for public components:**

```typescript
/**
 * A reusable button component with multiple variants
 * 
 * @param {ButtonProps} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Button style variant
 * @param {() => void} [props.onClick] - Click handler
 * @returns {JSX.Element} Rendered button element
 * 
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 */
export function Button({ children, variant = 'primary', onClick }: ButtonProps): JSX.Element {
  // Implementation
}
```

---

## 🚫 Anti-Patterns to Avoid

**Don't:**
- ❌ Use `'use client'` at the top of every component
- ❌ Use `useEffect` for data fetching in Server Components
- ❌ Fetch data in Client Components when it can be done server-side
- ❌ Use `<img>` instead of `<Image>`
- ❌ Use `<a>` instead of `<Link>` for internal navigation
- ❌ Use inline styles (use classes/CSS)
- ❌ Use `any` type in TypeScript
- ❌ Ignore ESLint warnings
- ❌ Skip accessibility attributes
- ❌ Leave console.log statements in production code

---

## ✅ Code Review Checklist

Before committing:
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] All images use `next/image`
- [ ] All internal links use `next/link`
- [ ] Components have proper TypeScript types
- [ ] Accessibility attributes present
- [ ] No `console.log` statements
- [ ] Responsive design tested
- [ ] Performance optimized

---

## 🎯 Project-Specific Rules

### Visual Fidelity
- Match original template colors exactly
- Use Bootstrap classes from original template
- Maintain same spacing and layout
- Test against original for visual comparison

### Template Compatibility
- Bootstrap 4.5 classes preserved where possible
- Flaticon fonts copied and integrated
- Font Awesome icons maintained
- Original CSS variables extracted

### Component Structure
- Follow architecture in `/docs/04-COMPONENTES.md`
- Use shared components for reusability
- Keep components small and focused
- One component per file

---

## 📚 Reference Documentation

Internal docs in `/docs`:
- `02-CHECKLIST-TAREAS.md` - Task tracking
- `03-DECISIONES-TECNICAS.md` - Technical decisions
- `04-COMPONENTES.md` - Component architecture
- `05-TESTING-VISUAL.md` - Testing guidelines

Prompts en `/.github/prompts`:
- `dev.prompt.md` - Inspecciona la web con Chrome DevTools en el navegador para validar el diseño, responsividad y funcionalidad. Usa Next DevTools para detectar y resolver errores específicos de Next.js 16.

External docs:
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)


## Notas finales

El servidor de la plantilla "interior-design-template" corre el servidor 🏡 Local:     http://localhost:8080. Si no corriera allí, puedes iniciarlo en otra terminal con:

```bash
$ pnpm dlx servor

  🗂  Serving:   G:\DEV\tmp\interior-design\interior-design-template

  🏡 Local:     http://localhost:8080
```
Para que puedas ver la plantilla original y compararla con la migración a Next.js.

---

**Last Updated:** October 29, 2025  
**Version:** 1.0.0

_These instructions are maintained alongside the project and should be updated as standards evolve._
