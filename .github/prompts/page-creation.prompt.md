# Page Creation Prompt

Use this prompt when creating new pages for the iDESIGN project.

---

## Context
You are creating a page for the iDESIGN Interior Design Next.js 16 application using the App Router.

## Page Requirements

**Page Name:** [NAME]  
**Route:** `/[route]`  
**Location:** `app/[route]/page.tsx`  
**Type:** Server Component (default)

## Template

```typescript
import { Metadata } from 'next';
import { /* components */ } from '@/components';

// Metadata for SEO
export const metadata: Metadata = {
  title: '[Page Title] - iDESIGN',
  description: '[Page description for SEO]',
  openGraph: {
    title: '[Page Title] - iDESIGN',
    description: '[Page description]',
    images: ['/images/og-[page].jpg'],
  },
};

/**
 * [Page Name] Page
 * 
 * @returns {Promise<JSX.Element>} Rendered page
 */

interface PageNamePageProps {
  // If dynamic route
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PageNamePage({
  params,
  searchParams
}: PageNamePageProps): Promise<JSX.Element> {
  // Data fetching if needed
  
  return (
    <main id="main-content">
      {/* Page content */}
    </main>
  );
}
```

## Page Structure

### 1. Page Header Section
```typescript
<section className="page-header">
  <div className="container">
    <h1>[Page Title]</h1>
    {/* Breadcrumb navigation */}
  </div>
</section>
```

### 2. Main Content
```typescript
<section className="content-section py-5">
  <div className="container">
    {/* Page content */}
  </div>
</section>
```

### 3. Components
- Import and use existing components
- Create new components if needed
- Keep page component focused on layout

## Metadata Configuration

### Basic Metadata
```typescript
export const metadata: Metadata = {
  title: 'About Us - iDESIGN Interior Design',
  description: 'Learn about our interior design services and expertise in creating beautiful spaces.',
  keywords: ['interior design', 'about us', 'design services'],
};
```

### Complete Metadata
```typescript
export const metadata: Metadata = {
  title: 'About Us - iDESIGN Interior Design',
  description: 'Learn about our interior design services and expertise.',
  keywords: ['interior design', 'about us', 'design services'],
  
  openGraph: {
    title: 'About Us - iDESIGN',
    description: 'Learn about our interior design services',
    url: 'https://example.com/about',
    siteName: 'iDESIGN Interior Design',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About iDESIGN Interior Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - iDESIGN',
    description: 'Learn about our interior design services',
    images: ['/images/og-about.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
};
```

## Data Fetching (Server Component)

```typescript
async function getData(): Promise<DataType> {
  const res = await fetch('https://api.example.com/data', {
    next: { 
      revalidate: 3600 // Revalidate every hour
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  const data = await getData();
  
  return (
    <main>
      {/* Use data */}
    </main>
  );
}
```

## Dynamic Routes

### File: `app/blog/[slug]/page.tsx`

```typescript
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata dynamically
export async function generateMetadata({ 
  params 
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} - iDESIGN Blog`,
    description: post.excerpt,
  };
}

// Generate static params at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ 
  params 
}: BlogPostPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

## Loading States

### Create `loading.tsx`
```typescript
export default function Loading(): JSX.Element {
  return (
    <div className="loading-container">
      <div className="spinner" aria-label="Loading...">
        {/* Loading spinner */}
      </div>
    </div>
  );
}
```

## Error Handling

### Create `error.tsx`
```typescript
'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

## Not Found Page

### Create `not-found.tsx`
```typescript
export default function NotFound(): JSX.Element {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
```

## Checklist

Before completing page:
- [ ] Metadata configured (title, description)
- [ ] Open Graph tags added
- [ ] Semantic HTML used (`<main>`, `<article>`, etc.)
- [ ] Skip to content link added
- [ ] Page header section included
- [ ] Responsive design implemented
- [ ] Images optimized with `next/image`
- [ ] Links use `next/link`
- [ ] Loading and error states created
- [ ] Accessibility tested
- [ ] Performance tested (Lighthouse)
- [ ] Visual comparison with template

## Example: About Page

```typescript
// app/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { TeamSection } from '@/components/about/TeamSection';
import { FactsSection } from '@/components/about/FactsSection';

export const metadata: Metadata = {
  title: 'About Us - iDESIGN Interior Design',
  description: 'Learn about our expertise in creating beautiful interior spaces',
};

export default async function AboutPage(): Promise<JSX.Element> {
  return (
    <>
      <PageHeader 
        title="About Us" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
      />
      
      <main id="main-content">
        <section className="about-content py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Image
                  src="/images/about-us.jpg"
                  alt="iDESIGN team workspace"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <h2>Our Story</h2>
                <p>Content here...</p>
              </div>
            </div>
          </div>
        </section>
        
        <TeamSection />
        <FactsSection />
      </main>
    </>
  );
}
```

## Testing

After creation:
1. Verify page loads without errors
2. Check metadata in browser dev tools
3. Test responsive at 375px, 768px, 1440px
4. Verify accessibility (Lighthouse >95)
5. Check performance (Lighthouse >90)
6. Compare visually with original template
7. Test all links and images

---

**Reference:** See `/docs/01-PLAN-MIGRACION.md` for page structure guidelines.
