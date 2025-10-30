# API Route Creation Prompt

Use this prompt when creating API routes for the iDESIGN project.

---

## Context
You are creating an API route for the iDESIGN Interior Design Next.js 16 application.

## API Route Requirements

**Endpoint:** `/api/[route]`  
**Methods:** [ ] GET | [ ] POST | [ ] PUT | [ ] DELETE  
**Location:** `app/api/[route]/route.ts`

## Template

```typescript
import { NextRequest, NextResponse } from 'next/server';

/**
 * [Endpoint description]
 * 
 * @param {NextRequest} request - The incoming request
 * @returns {Promise<NextResponse>} JSON response
 */

// GET Request
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const param = searchParams.get('param');
    
    // Process request
    const data = await fetchData(param);
    
    return NextResponse.json({ 
      success: true, 
      data 
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST Request
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate input
    if (!body.requiredField) {
      return NextResponse.json(
        { error: 'Missing required field' },
        { status: 400 }
      );
    }
    
    // Process request
    const result = await processData(body);
    
    return NextResponse.json({ 
      success: true, 
      result 
    }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Input Validation with Zod

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define schema
const requestSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

type RequestData = z.infer<typeof requestSchema>;

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    
    // Validate with Zod
    const validatedData = requestSchema.parse(body);
    
    // Process validated data
    const result = await processData(validatedData);
    
    return NextResponse.json({ success: true, result });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Dynamic Route Parameters

```typescript
// app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  const { slug } = await params;
  
  const post = await getPost(slug);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ post });
}
```

## Environment Variables

```typescript
// Access server-only env vars
const API_KEY = process.env.API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

// Validate env vars exist
if (!API_KEY) {
  throw new Error('API_KEY is not defined');
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  
  const data = await response.json();
  return NextResponse.json({ data });
}
```

## CORS Configuration

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const data = { message: 'Hello World' };
  
  return NextResponse.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
```

## Rate Limiting

```typescript
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter (use Redis in production)
const rateLimitMap = new Map<string, number[]>();

function rateLimit(ip: string, limit: number = 10, window: number = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Remove old timestamps
  const validTimestamps = timestamps.filter(t => now - t < window);
  
  if (validTimestamps.length >= limit) {
    return false; // Rate limit exceeded
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  
  return true;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = request.ip || 'unknown';
  
  if (!rateLimit(ip, 10, 60000)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }
  
  // Process request
  return NextResponse.json({ success: true });
}
```

## Response Headers

```typescript
export async function GET(request: NextRequest): Promise<NextResponse> {
  const data = { message: 'Hello' };
  
  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Custom-Header': 'value',
    },
  });
}
```

## Error Responses

```typescript
// Standard error response format
interface ErrorResponse {
  error: string;
  details?: any;
  code?: string;
}

function errorResponse(
  message: string, 
  status: number, 
  details?: any
): NextResponse<ErrorResponse> {
  return NextResponse.json(
    {
      error: message,
      ...(details && { details }),
    },
    { status }
  );
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    
    if (!body.email) {
      return errorResponse('Email is required', 400);
    }
    
    // Process...
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return errorResponse('Internal server error', 500);
  }
}
```

## Example: Contact Form API

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact form submission endpoint
 * 
 * @param {NextRequest} request - The incoming request with form data
 * @returns {Promise<NextResponse>} Success or error response
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'contact@idesign.com',
      to: 'admin@idesign.com',
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    
    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        id: data?.id 
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.errors 
        },
        { status: 400 }
      );
    }
    
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
```

## Checklist

Before completing API route:
- [ ] Input validation implemented (Zod)
- [ ] Error handling for all cases
- [ ] Appropriate HTTP status codes
- [ ] Environment variables secured
- [ ] Rate limiting if needed
- [ ] CORS configured if needed
- [ ] TypeScript types defined
- [ ] Error responses standardized
- [ ] Logging for errors
- [ ] No sensitive data in responses

## Testing API Routes

```typescript
// Example test with fetch
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Test',
    message: 'Test message',
  }),
});

const data = await response.json();
console.log(data);
```

## HTTP Status Codes

Use appropriate status codes:
- `200` - OK (GET, PUT, PATCH successful)
- `201` - Created (POST successful)
- `204` - No Content (DELETE successful)
- `400` - Bad Request (validation error)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (authenticated but not authorized)
- `404` - Not Found
- `429` - Too Many Requests (rate limit)
- `500` - Internal Server Error

---

**Reference:** See Next.js API Routes documentation for more details.
