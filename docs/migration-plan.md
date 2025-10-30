# Migration Plan: HTML Template to Next.js 16

## Project Overview
Migrating the interior-design-template (static HTML) to Next.js 16 with React and TypeScript.

## Template Analysis
- **Pages**: index.html, about.html, service.html, project.html, blog.html, single.html, contact.html
- **CSS Framework**: Bootstrap 4 (custom SCSS)
- **Dependencies**: jQuery, Owl Carousel, Isotope, Lightbox, Font Awesome, Flaticon
- **JavaScript**: jQuery-based interactions (dropdowns, carousels, back-to-top, filters)

## Migration Strategy

### Phase 1: Setup & Dependencies ✓
- [x] Install SASS support for Next.js
- [x] Install Bootstrap (React Bootstrap or keep vanilla)
- [x] Install React carousel alternatives (replace Owl Carousel)
- [x] Install image lightbox for React
- [x] Install isotope alternative or custom filter logic
- [x] Remove jQuery dependencies

### Phase 2: Asset Migration
- [ ] Copy images to public/images folder
- [ ] Copy fonts (Flaticon) to public/fonts
- [ ] Convert SCSS to Next.js compatible structure
- [ ] Setup Bootstrap SCSS imports

### Phase 3: Component Creation
- [ ] Layout components:
  - [ ] Topbar (social links, help links)
  - [ ] Navbar (navigation with dropdown)
  - [ ] Footer (contact info, links, newsletter)
  - [ ] BackToTop button
- [ ] Home page sections:
  - [ ] UnderNav (contact info cards)
  - [ ] Carousel/Hero
  - [ ] About section
  - [ ] Services section
  - [ ] Features section
  - [ ] Projects/Portfolio section
  - [ ] Team section
  - [ ] Testimonial section
  - [ ] Blog section

### Phase 4: Page Creation
- [ ] Home page (/)
- [ ] About page (/about)
- [ ] Services page (/service)
- [ ] Projects page (/project)
- [ ] Blog page (/blog)
- [ ] Blog detail page (/blog/[slug])
- [ ] Contact page (/contact)

### Phase 5: Interactive Features
- [ ] Replace jQuery with React hooks
- [ ] Implement carousel with React library
- [ ] Implement portfolio filter with React state
- [ ] Implement lightbox with React library
- [ ] Implement back-to-top with React
- [ ] Implement dropdown hover behavior
- [ ] Implement smooth scrolling

### Phase 6: Testing & Validation
- [ ] Visual comparison with original template
- [ ] Test all pages and routes
- [ ] Test responsive behavior
- [ ] Test interactive elements
- [ ] Fix ESLint errors
- [ ] Check browser console for errors

### Phase 7: Final Adjustments
- [ ] Fine-tune styles for exact match
- [ ] Optimize images
- [ ] Clean up unused code
- [ ] Document any differences

## Dependencies to Install
```bash
pnpm add bootstrap
pnpm add sass
pnpm add react-bootstrap
pnpm add swiper # Replace Owl Carousel
pnpm add yet-another-react-lightbox # Replace Lightbox
pnpm add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

## jQuery Elimination Strategy
- Carousel → Swiper React
- Isotope → Custom React filter state
- Lightbox → yet-another-react-lightbox
- Scroll animations → React hooks with IntersectionObserver
- Event handlers → React event handlers
- DOM manipulation → React state management

## Status: READY TO START
Next step: Install dependencies and begin migration
