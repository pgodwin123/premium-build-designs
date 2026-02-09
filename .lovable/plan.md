
# Building Company Website Redesign

A complete redesign of the 5-page construction company template with a refined dark theme, new layout patterns, and enhanced user experience.

---

## Design System Updates

### Color Palette (CSS Variables)
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A0A` | Main page background |
| Card | `#111111` | Card surfaces, elevated elements |
| Text | `#F5F5F5` | Primary text color |
| Accent | `#F59E0B` | Amber/gold highlights, CTAs |
| Muted Text | `#A1A1AA` | Secondary text |
| Border | `#1F1F1F` | Subtle borders |

---

## Page-by-Page Breakdown

### 1. HOME PAGE

**Split-Screen Hero**
- Left side (50%): Headline, subtext, CTA buttons, stats bar
- Right side (50%): Full-height construction image from Pexels
- No overlay on text area - clean dark background
- Image with subtle dark edge blend

**Stats Bar**
- Horizontal row below hero with 4 animated counters
- Numbers in amber (#F59E0B), labels in muted text
- Stats: Years Experience, Projects Completed, Happy Clients, Team Members

**Alternating Service Cards**
- 6 services displayed as full-width alternating rows (not grid)
- Row 1: Image left, text right
- Row 2: Image right, text left
- Pattern repeats
- Each card: Image (50%), Title + description + "Learn More" link (50%)

**Horizontal Testimonial Carousel**
- Single row with horizontal scroll/swipe
- Cards visible: 1 on mobile, 2 on tablet, 3 on desktop
- Each card: Quote text, client name, location, star rating
- Left/right navigation arrows
- Auto-scroll with pause on hover

**CTA Banner**
- Full-width amber background section
- "Ready to Start?" headline with phone + quote buttons

---

### 2. SERVICES PAGE

**Hero Section**
- Dark background with "Our Services" label
- Main headline and description
- No image, just text

**Full-Width Alternating Rows**
- Each service as a large horizontal section
- Pattern: Image left (50%) → Text right (50%) → swap for next
- Text side includes: Service title, detailed description, bullet points, CTA button
- Images from Pexels construction library

**Services List:**
1. Extensions
2. Loft Conversions
3. New Builds
4. Renovations
5. Kitchens & Bathrooms
6. Garage Conversions

---

### 3. GALLERY PAGE

**Hero Section**
- "Our Work" / "Project Gallery" headline
- Filter tabs for categories (All, Extensions, Loft Conversions, etc.)

**Masonry Grid Layout**
- CSS masonry using columns or grid with varying heights
- Mix of landscape, portrait, and square images
- No uniform grid - organic feel
- Hover effect: Dark overlay fades in with project title + location
- Hidden by default, revealed on hover

**Project Data:**
- Title, category, location per image
- 9-12 sample projects with Pexels placeholder images

---

### 4. REVIEWS PAGE

**Hero Section**
- "What Our Clients Say" headline
- Average rating display (5 stars)
- Total review count

**Single Column Quote Cards**
- Large, spacious cards stacked vertically
- 4px left border in amber (#F59E0B) on each card
- Quote icon at top
- Review text (large, readable)
- Client name, location, project type, date
- Star rating

**8 Sample Reviews**
- Varied project types and locations
- All 5-star for template purposes

---

### 5. CONTACT PAGE

**Hero Section**
- "Get In Touch" / "Request a Quote" headline

**Two-Column Layout**
- Main area (70%): Full contact form
  - Name, Email, Phone, Postcode
  - Project type dropdown
  - Message textarea
  - Submit button

- Sidebar (30%): Contact details card
  - Phone (click-to-call)
  - Email (mailto link)
  - WhatsApp (external link)
  - Opening hours
  - Service areas list

**Google Maps Embed**
- Full-width map at bottom
- Dark/greyscale filter to match theme
- [PLACEHOLDER] coordinates for London

---

## Global Components

### Header (Sticky)
- Company name as text (no logo icon)
- Navigation: Home, Services, Gallery, Reviews, Contact
- Phone number (click-to-call)
- "Get a Quote" CTA button
- Mobile: Hamburger menu with slide-out nav

### Footer
- 4-column layout
- Company info + description
- Services links
- Service areas
- Contact details + social icons

### WhatsApp Floating Button
- Fixed bottom-right position
- Green WhatsApp icon
- Opens WhatsApp with pre-filled message

---

## Placeholder Content (Marked with [PLACEHOLDER])

All customizable content will be clearly marked for easy client onboarding:

**Global:**
- Company name, tagline
- Phone number, email, address
- WhatsApp number
- Social media links
- Service areas list

**Per Page:**
- Hero headlines and descriptions
- Service titles and descriptions
- Project names, categories, locations
- Testimonial names, quotes, locations
- Image URLs (Pexels placeholders)
- Google Maps embed coordinates
- Opening hours

---

## Technical Implementation

### New/Modified Files

```text
src/
├── index.css                    # Updated color variables
├── pages/
│   ├── HomePage.tsx             # Split hero + alternating services
│   ├── ServicesPage.tsx         # Full-width alternating rows
│   ├── GalleryPage.tsx          # Masonry layout + hover reveals
│   ├── ReviewsPage.tsx          # Single column + amber border
│   └── ContactPage.tsx          # Form + sidebar + map
├── components/
│   ├── home/
│   │   ├── SplitHero.tsx        # NEW - Split-screen hero
│   │   ├── StatsBar.tsx         # NEW - Animated counters
│   │   ├── AlternatingServices.tsx # NEW - Image/text rows
│   │   └── TestimonialCarousel.tsx # NEW - Horizontal scroll
│   ├── layout/
│   │   ├── Header.tsx           # Updated - text logo only
│   │   ├── Footer.tsx           # Updated
│   │   └── WhatsAppButton.tsx   # Existing
│   └── shared/
│       └── PageCTA.tsx          # Existing
└── assets/                      # Pexels placeholder images
```

### Pexels Images to Use
- Hero: Construction workers on site
- Extensions: Rear extension with glass doors
- Loft: Finished loft bedroom
- New Build: Modern house exterior
- Renovation: Period property interior
- Kitchen: Contemporary kitchen
- Garage: Converted home office

---

## Mobile Responsiveness

- Split hero stacks vertically (image on top)
- Alternating rows stack (image on top, text below)
- Masonry becomes 2-column on tablet, 1-column on mobile
- Testimonial carousel shows 1 card at a time
- Contact form becomes single column
- Sidebar moves below form on mobile

---

## Summary of Key Changes

| Current | New Design |
|---------|------------|
| Full-width hero with overlay | Split-screen hero (text left, image right) |
| 3-column service grid | Full-width alternating rows |
| Uniform project grid | Masonry layout with hover reveals |
| Slider testimonials | Horizontal scrolling carousel |
| Two-column reviews | Single column with amber left border |
| Basic contact form | Form + sidebar with all contact methods |
| Logo icon + text | Text-only company name |
| Background #111111 | Background #0A0A0A (deeper black) |
