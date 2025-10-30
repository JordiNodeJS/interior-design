# Component Creation Prompt

Use this prompt when creating new components for the iDESIGN project.

---

## Context
You are creating a component for the iDESIGN Interior Design Next.js 16 application. Follow the project's coding standards and architecture.

## Component Requirements

**Component Name:** [NAME]  
**Type:** [ ] Server Component (default) | [ ] Client Component  
**Location:** `components/[category]/[ComponentName].tsx`

## Template

```typescript
// For Client Components only:
// 'use client';

import { /* dependencies */ } from 'package';

/**
 * [Component description]
 * 
 * @param {ComponentNameProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */

interface ComponentNameProps {
  // Define all props with types
  children?: React.ReactNode;
}

export function ComponentName({ 
  /* destructured props */ 
}: ComponentNameProps): JSX.Element {
  // Implementation
  
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
}
```

## Checklist

Before completing:
- [ ] TypeScript interface defined
- [ ] Props documented with JSDoc
- [ ] Responsive design considered
- [ ] Accessibility attributes added (aria-*, alt, etc.)
- [ ] Images use `next/image`
- [ ] Links use `next/link`
- [ ] Bootstrap classes used where applicable
- [ ] No ESLint errors
- [ ] No TypeScript errors

## Additional Guidelines

1. **Server vs Client:**
   - Use Server Component unless you need hooks, event handlers, or browser APIs
   - Add `'use client'` only at the top of Client Components

2. **Styling:**
   - Prefer Bootstrap classes: `className="btn btn-primary"`
   - Use CSS Modules for custom styles
   - Use `clsx` for conditional classes

3. **Images:**
   ```typescript
   <Image
     src="/images/example.jpg"
     alt="Descriptive alt text"
     width={800}
     height={600}
     priority // If above the fold
   />
   ```

4. **Navigation:**
   ```typescript
   <Link href="/about" className="nav-link">
     About
   </Link>
   ```

5. **Props Types:**
   - Use `interface` for props
   - Provide default values: `variant = 'primary'`
   - Make optional props with `?`: `onClick?: () => void`

6. **Accessibility:**
   - Use semantic HTML (`<header>`, `<nav>`, `<button>`)
   - Add aria-labels for icon buttons
   - Ensure keyboard navigation works

## Example: Service Card Component

```typescript
import Image from 'next/image';
import Link from 'next/link';

/**
 * Service card component displaying service information
 * 
 * @param {ServiceCardProps} props - Component props
 * @returns {JSX.Element} Rendered service card
 */

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  link 
}: ServiceCardProps): JSX.Element {
  const CardContent = (
    <>
      <div className="service-icon">
        <i className={icon} aria-hidden="true" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link href={link} className="service-card card">
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="service-card card">
      {CardContent}
    </div>
  );
}
```

## Testing

After creation:
1. Check component renders without errors
2. Verify responsive design at 375px, 768px, 1440px
3. Test keyboard navigation
4. Verify accessibility with Lighthouse
5. Compare visually with original template

---

**Reference:** See `/docs/04-COMPONENTES.md` for complete architecture guidelines.
