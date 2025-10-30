# Testing Checklist Prompt

Use this checklist for testing components, pages, and features.

---

## Pre-Testing Setup

- [ ] Development server running (`pnpm dev`)
- [ ] Chrome DevTools open
- [ ] Console tab visible
- [ ] Network tab visible
- [ ] No existing errors in console

---

## Component Testing

### Visual Testing
- [ ] Component renders without errors
- [ ] All props are correctly applied
- [ ] Styles match design (Bootstrap classes)
- [ ] Colors match original template
- [ ] Spacing matches design (padding, margins)
- [ ] Typography correct (fonts, sizes)
- [ ] Icons display correctly
- [ ] Images load and display

### Responsive Testing
Test at these breakpoints:
- [ ] Mobile Small (375px)
- [ ] Mobile (414px)
- [ ] Tablet (768px)
- [ ] Desktop Small (1024px)
- [ ] Desktop (1440px)
- [ ] Large Desktop (1920px)

Check for:
- [ ] No horizontal scroll
- [ ] Text readable at all sizes
- [ ] Touch targets ≥44x44px (mobile)
- [ ] Images scale properly
- [ ] Layout stacks appropriately

### Functionality Testing
- [ ] All buttons clickable
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Form validation works
- [ ] Error messages display
- [ ] Loading states show
- [ ] Success messages appear
- [ ] Dropdowns open/close
- [ ] Modals open/close
- [ ] Carousels navigate
- [ ] Filters work correctly

### Accessibility Testing
- [ ] Semantic HTML used
- [ ] ARIA labels present where needed
- [ ] Alt text on all images
- [ ] Keyboard navigation works
  - [ ] Tab through all interactive elements
  - [ ] Enter/Space activate buttons
  - [ ] Escape closes modals
- [ ] Focus visible on all elements
- [ ] Color contrast sufficient (WCAG AA)
- [ ] Screen reader friendly
- [ ] No accessibility errors in Lighthouse

---

## Page Testing

### Initial Load
- [ ] Page loads without errors
- [ ] No console errors
- [ ] No console warnings (critical)
- [ ] All images load
- [ ] All fonts load
- [ ] No 404 errors in Network tab
- [ ] Favicon displays

### SEO & Metadata
- [ ] Page title correct in tab
- [ ] Meta description present
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URL set
- [ ] Structured data valid (if applicable)

### Navigation
- [ ] All internal links work
- [ ] Active page highlighted in nav
- [ ] Breadcrumbs correct (if present)
- [ ] Back button works
- [ ] Links open in correct target

### Performance
Run Lighthouse audit:
- [ ] Performance score >90
- [ ] Accessibility score >95
- [ ] Best Practices score >90
- [ ] SEO score >90

Check Core Web Vitals:
- [ ] First Contentful Paint <1.5s
- [ ] Largest Contentful Paint <2.5s
- [ ] Cumulative Layout Shift <0.1
- [ ] Time to Interactive <3.5s
- [ ] Total Blocking Time <300ms

### Visual Comparison
- [ ] Compare with original template
- [ ] Colors match exactly
- [ ] Layout matches
- [ ] Spacing matches
- [ ] Typography matches
- [ ] Visual similarity >95%

---

## Form Testing

### Field Validation
- [ ] Required fields enforced
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Min/max length validation
- [ ] Pattern validation works
- [ ] Error messages clear

### Submission
- [ ] Submit button works
- [ ] Loading state during submit
- [ ] Success message on completion
- [ ] Error message on failure
- [ ] Form clears after success
- [ ] Form persists on error
- [ ] No duplicate submissions

### Edge Cases
- [ ] Empty form submission blocked
- [ ] Invalid data rejected
- [ ] XSS attempts prevented
- [ ] SQL injection prevented
- [ ] File upload limits enforced (if applicable)

---

## API Route Testing

### Request Testing
- [ ] Endpoint responds
- [ ] Correct HTTP method works
- [ ] Wrong HTTP method returns 405
- [ ] Request body parsed correctly
- [ ] Query parameters work
- [ ] Headers processed correctly

### Response Testing
- [ ] Correct status codes returned
- [ ] Response format valid JSON
- [ ] Error responses formatted correctly
- [ ] CORS headers set (if needed)
- [ ] Cache headers appropriate

### Validation
- [ ] Invalid input rejected (400)
- [ ] Missing required fields rejected
- [ ] Data types validated
- [ ] Zod schema working

### Security
- [ ] API key not exposed
- [ ] Environment variables secure
- [ ] Rate limiting working (if implemented)
- [ ] Input sanitized
- [ ] No SQL injection possible

---

## Cross-Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) - Mac/iOS
- [ ] Edge (latest)

Check for:
- [ ] Consistent rendering
- [ ] No browser-specific errors
- [ ] CSS works in all browsers
- [ ] JavaScript works in all browsers
- [ ] Polyfills loaded if needed

---

## Animation Testing

### Framer Motion Animations
- [ ] Animations trigger correctly
- [ ] Animations smooth (60fps)
- [ ] No janky animations
- [ ] Reduced motion respected
- [ ] Animations don't block interaction

### Carousels (Swiper)
- [ ] Autoplay works
- [ ] Navigation arrows work
- [ ] Pagination dots work
- [ ] Keyboard navigation works
- [ ] Touch gestures work (mobile)
- [ ] Loop works correctly
- [ ] Responsive breakpoints work

---

## Lightbox Testing

- [ ] Opens on image click
- [ ] Images load correctly
- [ ] Navigation arrows work
- [ ] Keyboard navigation works (←/→)
- [ ] Escape key closes lightbox
- [ ] Click outside closes lightbox
- [ ] Zoom works (if applicable)
- [ ] Multiple images work

---

## Error Scenario Testing

### Network Errors
- [ ] Offline behavior graceful
- [ ] API timeout handled
- [ ] Failed requests show error
- [ ] Retry mechanism works

### Invalid Data
- [ ] 404 pages display correctly
- [ ] Invalid routes handled
- [ ] Missing images show fallback
- [ ] Broken links handled

### Edge Cases
- [ ] Empty states display
- [ ] No data scenarios handled
- [ ] Long text doesn't break layout
- [ ] Special characters handled
- [ ] Very long URLs work

---

## Code Quality Testing

### TypeScript
- [ ] No TypeScript errors
- [ ] All types defined
- [ ] No `any` types used
- [ ] Proper type inference

### ESLint
- [ ] No ESLint errors
- [ ] No ESLint warnings (critical)
- [ ] Code follows style guide

### Build
- [ ] Build completes successfully
- [ ] No build warnings (critical)
- [ ] Bundle size reasonable
- [ ] No unused dependencies

### Console
- [ ] No console.log statements
- [ ] No console errors
- [ ] No console warnings
- [ ] Clean console output

---

## Documentation Testing

- [ ] Component documented (JSDoc)
- [ ] Props documented
- [ ] README updated if needed
- [ ] Changelog updated if needed
- [ ] Examples provided

---

## Final Checklist

Before marking as complete:
- [ ] All tests passed
- [ ] Visual comparison approved
- [ ] Performance targets met
- [ ] Accessibility verified
- [ ] Cross-browser tested
- [ ] Code reviewed
- [ ] Documentation complete
- [ ] Ready for production

---

## Testing Tools

### Chrome DevTools
- **Console:** Check for errors
- **Network:** Check requests
- **Performance:** Profile page load
- **Lighthouse:** Run audits
- **Application:** Check storage, cache

### Testing Commands
```bash
# Run development server
pnpm dev

# Run build
pnpm build

# Run linting
pnpm lint

# Type checking
npx tsc --noEmit
```

### Lighthouse Audit
```bash
# CLI
npx lighthouse http://localhost:3000 --view

# Or use Chrome DevTools > Lighthouse tab
```

---

## Bug Reporting

If you find issues, document:
1. **What:** Description of the bug
2. **Where:** Page/component affected
3. **How:** Steps to reproduce
4. **Expected:** What should happen
5. **Actual:** What actually happens
6. **Screenshot:** Visual evidence
7. **Console:** Any errors logged

---

**Remember:** Test early, test often, test thoroughly!
