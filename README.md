# Swift Bookings — Website Project

## Student Information

| Field | Details |
|---|---|
| Student Name | Aphiwe Magwaza |
| Student Number | ST10499504 |
| Institution | Rosebank College (IIE) — Durban |
| Module | Web Development (Introduction) — WEDE5020 |
| Year | 2026 |

---

## Project Overview

Swift Bookings is a fictional hotel booking platform based in South Africa. The website was built as part of the WEDE5020 Portfolio of Evidence (PoE) and covers three development phases: HTML structure (Part 1), CSS styling and responsive design (Part 2), and JavaScript functionality with SEO (Part 3).

The site is designed to allow potential guests to browse available room types, learn about the company, submit booking enquiries, and get in touch with the team. It targets South African leisure and business travellers aged 22 to 55.

---

## Website Goals and Objectives

- Give potential guests a clear, professional first impression of the Swift Bookings brand.
- Make it easy to understand what rooms and services are available, with pricing.
- Reduce the number of calls and emails needed to make a booking by providing an online enquiry form.
- Build trust with new visitors through honest, straightforward content.
- Lay the foundation for future SEO and digital marketing efforts.

---

## Key Features and Functionality

- **5-page website** — Homepage, About Us, Services, Enquiry, Contact
- **Image slideshow** on the homepage featuring three Unsplash hotel images
- **Two room types** — Standard Room and Deluxe Suite, each with pricing and features
- **Two additional services** — Airport Shuttle and Spa & Wellness Centre
- **Enquiry form** — room selection, check-in/out dates, guest count, and add-on service options
- **Contact form** — general message form with subject dropdown
- **Two location maps** — Durban (head office) and Johannesburg (branch) embedded via Google Maps
- **Consistent navigation** — functional links across all 5 pages
- **Semantic HTML5** — uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<fieldset>`, `<legend>`

---

## File and Folder Structure

```
swift-bookings/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html             
└── img/
    ├── valeriia-bugaiova-_pPHgeHz1uk-unsplash__1_.jpg
    ├── vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg
    ├── oswald-elsaboath-ym_EI-DTS1g-unsplash.jpg
    ├── frames-for-your-heart-FqqiAvJejto-unsplash__1_.jpg
    ├── antonio-araujo-DnZiQ0hSk6M-unsplash.jpg
    ├── prakash-rao-q1AaspfOgBA-unsplash.jpg
    ├── proxyclick-visitor-management-system-VnACB-m22es-unsplash.jpg
    ├── spencer-davis-Lt3EElsqyuQ-unsplash.jpg
    └── the-anam-X1s5YSBw8lU-unsplash.jpg
```

---

## Sitemap

```
Homepage (index.html)
├── About Us (about.html)
├── Services (services.html)
│   ├── Standard Room
│   ├── Deluxe Suite
│   ├── Airport Shuttle
│   └── Spa & Wellness Centre
├── Enquiry (enquiry.html)
└── Contact (contact.html)
    ├── Durban Office
    └── Johannesburg Branch
```

---

## Timeline and Milestones

| Part | Focus | Key Deliverables |
|---|---|---|
| Part 1 | Planning & HTML | Project proposal, wireframes, 5 HTML pages, GitHub setup |
| Part 2 | CSS & Responsive Design | External stylesheet, desktop layout, media queries for tablet and mobile |
| Part 3 | JavaScript & SEO | Form validation, interactive elements, meta tags, robots.txt, sitemap.xml, Netlify deployment |

---

## Part 1 Details

### What Was Done

- Created two website project proposals for two different organisations (Swift Bookings and a second fictional client).
- Swift Bookings was selected as the primary organisation following the proposal process.
- Designed a sitemap covering all 5 required pages.
- Built all 5 HTML pages with semantic HTML5 elements, consistent navigation, and real content.
- Added images to all service and room sections using relevant Unsplash photography.
- Included a booking enquiry form (`enquiry.html`) with room selection, dates, guest count, and add-on options.
- Included a contact form (`contact.html`) with a subject dropdown and two Google Maps embeds for Durban and Johannesburg.
- Added short, descriptive HTML comments throughout all pages.
- Confirmed that all navigation links function correctly across all 5 pages.
- Pushed all files to this GitHub repository with descriptive commit messages.

### Pages Included

| Page | File | Purpose |
|---|---|---|
| Homepage | index.html | Hero, slideshow, room types preview, services overview |
| About Us | about.html | Company history, mission, vision, team |
| Services | services.html | Detailed room types and add-on services with pricing |
| Enquiry | enquiry.html | Booking enquiry form |
| Contact | contact.html | General contact form and location maps |

### Images Used

All images sourced from Unsplash under the Unsplash Licence (free to use, no attribution required but credited here for academic purposes).

| File | Photographer | Used On | Source |
|---|---|---|---|
| valeriia-bugaiova-_pPHgeHz1uk-unsplash__1_.jpg | Valeriia Bugaiova | Homepage slideshow | https://unsplash.com/photos/_pPHgeHz1uk |
| oswald-elsaboath-ym_EI-DTS1g-unsplash.jpg | Oswald Elsaboath | Homepage slideshow | https://unsplash.com/photos/ym_EI-DTS1g |
| vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg | Vojtech Bruzek | Homepage slideshow, Standard Room | https://unsplash.com/photos/Yrxr3bsPdS0 |
| frames-for-your-heart-FqqiAvJejto-unsplash__1_.jpg | Frames For Your Heart | Deluxe Suite | https://unsplash.com/photos/FqqiAvJejto |
| antonio-araujo-DnZiQ0hSk6M-unsplash.jpg | Antonio Araujo | Complimentary Breakfast | https://unsplash.com/photos/DnZiQ0hSk6M |
| prakash-rao-q1AaspfOgBA-unsplash.jpg | Prakash Rao | Airport Shuttle | https://unsplash.com/photos/q1AaspfOgBA |
| proxyclick-visitor-management-system-VnACB-m22es-unsplash.jpg | Proxyclick Visitor Management System | Express Check-in | https://unsplash.com/photos/VnACB-m22es |
| spencer-davis-Lt3EElsqyuQ-unsplash.jpg | Spencer Davis | 24/7 Guest Support | https://unsplash.com/photos/Lt3EElsqyuQ |
| the-anam-X1s5YSBw8lU-unsplash.jpg | The Anam | Spa & Wellness Centre | https://unsplash.com/photos/X1s5YSBw8lU |

---

## Changelog

### v0.2.0 — 2026-04-19 — Added images to all pages

- Added 6 new Unsplash images to the project: breakfast, deluxe suite, check-in, shuttle, spa, and guest support.
- Updated `index.html` to display images alongside each room type and service section.
- Updated `services.html` with correct image filenames for all sections.
- Fixed slideshow script to use class-based selection for more reliable slide toggling.
- Updated README images table with all 9 image files, photographers, and usage locations.

### v0.1.0 — 2026-04-19 — Part 1 Initial Submission

- Built `index.html` with hero section, image slideshow, room type previews, and services overview.
- Built `about.html` with company history, mission and vision statements, team member profiles, and a "why choose us" list.
- Built `services.html` with full details for Standard Room, Deluxe Suite, Airport Shuttle, and Spa & Wellness Centre, including pricing and feature lists.
- Built `enquiry.html` with a booking enquiry form covering guest details, room type selection, check-in/out dates, guest count, optional add-ons (shuttle and spa), and a special requests textarea.
- Built `contact.html` with a general contact form, subject dropdown, and two Google Maps embeds (Durban and Johannesburg offices).
- Added short HTML comments to all pages (navigation, hero, footer, form sections, etc.).
- Confirmed that all navigation links function correctly across all 5 pages.
- Pushed initial project structure to GitHub repository.

---

## References

All sources are cited using the IEEE referencing style as required for ICT modules at The IIE.

[1] Unsplash, "Beautiful free images and pictures," *Unsplash.com*. [Online]. Available: https://unsplash.com. [Accessed: 19 Apr. 2026].

[2] V. Bugaiova, "Hotel pool at sunset photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/_pPHgeHz1uk. [Accessed: 19 Apr. 2026].

[3] O. Elsaboath, "Hotel lobby with chandelier photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/ym_EI-DTS1g. [Accessed: 19 Apr. 2026].

[4] V. Bruzek, "Luxury hotel room photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/Yrxr3bsPdS0. [Accessed: 19 Apr. 2026].

[5] Frames For Your Heart, "Deluxe hotel room with gold decor photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/FqqiAvJejto. [Accessed: 19 Apr. 2026].

[6] A. Araujo, "Hotel breakfast spread by the pool photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/DnZiQ0hSk6M. [Accessed: 19 Apr. 2026].

[7] P. Rao, "Airport shuttle bus at terminal photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/q1AaspfOgBA. [Accessed: 19 Apr. 2026].

[8] Proxyclick Visitor Management System, "Hotel self check-in tablet photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/VnACB-m22es. [Accessed: 19 Apr. 2026].

[9] S. Davis, "Hotel guest on phone photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/Lt3EElsqyuQ. [Accessed: 19 Apr. 2026].

[10] The Anam, "Spa treatment photograph," *Unsplash.com*. [Online]. Available: https://unsplash.com/photos/X1s5YSBw8lU. [Accessed: 19 Apr. 2026].

[11] Google Maps Platform, "Maps Embed API," *Google Developers*. [Online]. Available: https://developers.google.com/maps/documentation/embed. [Accessed: 19 Apr. 2026].

[12] Mozilla Developer Network, "HTML: HyperText Markup Language," *MDN Web Docs*. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/HTML. [Accessed: 19 Apr. 2026].

[13] W3Schools, "HTML Tutorial," *W3Schools.com*. [Online]. Available: https://www.w3schools.com/html. [Accessed: 19 Apr. 2026].

[14] The Independent Institute of Education (IIE), *Web Development (Introduction) — WEDE5020 Module Guide*, Rosebank College, Durban, 2026.

[15] GitHub, "GitHub Docs — Getting started," *GitHub.com*. [Online]. Available: https://docs.github.com. [Accessed: 19 Apr. 2026].

[16] Netlify, "Deploy your site," *Netlify.com*. [Online]. Available: https://docs.netlify.com. [Accessed: 19 Apr. 2026].

---

## Part 2 Details

### What Was Done

- Created an external CSS stylesheet (`css/style.css`) and linked it to all 5 HTML pages.
- Established base/default styles: CSS custom properties (variables) for colours, fonts, spacing, shadows, and transitions.
- Applied typography styles using Google Fonts — `Playfair Display` (headings) and `Source Sans 3` (body).
- Implemented a full desktop layout using CSS Flexbox and Grid with a sticky navigation bar, hero banner, card-based article grid, and styled footer.
- Applied decorative styles including colour scheme from the proposal, hover effects, box shadows, and a gold accent underline on section headings.
- Used CSS pseudo-classes (`:hover`, `:focus`, `:focus-visible`, `:active`, `::before`, `::after`) throughout.
- Added responsive design using media queries at two breakpoints:
  - **Tablet (≤ 900px):** Typography scales down, navigation gaps reduce, slideshow height adjusts, form padding reduces.
  - **Mobile (≤ 600px):** Hamburger navigation toggle, vertical nav menu, single-column layout, full-width buttons, stacked footer links.
- Added `srcset` and `sizes` attributes to images on `services.html` and `index.html` for responsive image loading.
- Added a mobile hamburger menu using a `<button class="nav-toggle">` and JavaScript `classList.toggle('open')`, with `aria-expanded` attribute management.
- Added `aria-current="page"` to the active nav link on each page for accessibility.
- Added skip-to-content links on all pages for screen reader accessibility.
- Added `autocomplete` attributes to all form input fields.
- Updated all HTML comments to remain descriptive and complete.

### Screen Size Screenshots

Screenshots showing the website at desktop, tablet, and mobile sizes are to be committed to the repository alongside this README update.

### CSS File Created

| File | Purpose |
|---|---|
| css/style.css | Single external stylesheet covering all pages — base reset, typography, layout, decoration, pseudo-classes, responsive breakpoints |

---

## Changelog (continued)

### v0.3.0 — 2026-05-20 — Part 2: CSS Styling and Responsive Design

- Created `css/style.css` and linked it to all 5 HTML pages via `<link rel="stylesheet" href="css/style.css">`.
- Defined CSS custom properties (variables) for brand colours, fonts, spacing, and shadows based on the proposal colour scheme (#1F3864, #2E5A9C, #C9A84C).
- Applied Google Fonts: Playfair Display for headings, Source Sans 3 for body text.
- Styled sticky navigation bar with hover underline effects and active page indicator.
- Added hero/banner gradient background to all page intro sections.
- Styled article cards with border-radius, box-shadow, and hover lift effect.
- Styled all form elements: fieldsets, legends, labels, inputs, selects, textareas, and the submit button.
- Added CSS pseudo-classes: `:hover` and `:focus` on links and buttons, `::before` and `::after` for decorative section heading underlines.
- Implemented hamburger navigation toggle for mobile with `aria-expanded` accessibility attribute.
- Added two media query breakpoints: tablet (≤ 900px) and mobile (≤ 600px).
- Responsive adjustments include: typography scaling, single-column layout, image height reduction, vertical nav menu, full-width form submit button.
- Added `srcset` and `sizes` attributes to images for responsive image delivery.
- Added `aria-current="page"` to active nav links across all pages.
- Added `.skip-link` element on all pages for keyboard and screen reader accessibility.
- Added `autocomplete` attributes to all form fields.
- Added slideshow auto-advance (every 5 seconds) to the homepage script.


---

## Part 3 Details

### What Was Done

- Created `js/main.js` as the single external JavaScript file, linked to all five pages via `<script src="js/main.js">`.
- Enhanced the homepage slideshow with auto-advance (5-second interval), keyboard arrow-key navigation, and dot indicators.
- Implemented gallery lightbox on all pages — clicking any article image opens a full-screen overlay with keyboard navigation (Escape, arrow keys) and background-click to close.
- Added tab component on `about.html` — "Meet the Team" and "Why Choose Us" tabs using `classList` manipulation and `aria-selected` attributes.
- Added accordion component on `services.html` — all room and service cards collapse/expand with smooth CSS `max-height` transitions.
- Implemented real-time keyword search/filter on `services.html` — filters `.service-card` elements on input with a "no results" message.
- Added "Get Directions" buttons under both Google Maps iframes on `contact.html` — opens Google Maps with the office address pre-filled as destination.
- Built full client-side validation on `enquiry.html`: name regex, email regex, SA phone format, check-in date cannot be in the past, check-out must be after check-in, all required fields checked on blur and on submit.
- Built enquiry process response panel: on valid submission, a confirmation card replaces the form showing guest name, room type, check-in/out dates, number of nights, add-ons selected, and estimated total cost calculated from nights × room rate.
- Built full client-side validation on `contact.html`: name, email, optional phone (validated only if entered), subject selection, message minimum 10 characters.
- Implemented `mailto:` email compilation on `contact.html` — on valid submission, opens the user's email client with `info@swiftbookings.co.za` as recipient, subject pre-populated, and message body assembled from form data.
- Added SEO `<meta name="description">`, `<meta name="keywords">`, and Open Graph tags to all five pages.
- Updated all five page `<title>` tags with unique, keyword-rich titles.
- Created `robots.txt` in project root with sitemap reference.
- Created `sitemap.xml` in project root listing all five pages with lastmod dates and priority values.
- Added `aria-live="polite"` and `role="alert"` to response/confirmation panels for screen reader support.
- Deployed site to Netlify: https://swiftbookings.netlify.app

### Files Added / Modified in Part 3

| File | Change |
|---|---|
| js/main.js | Created — all JavaScript functionality |
| index.html | SEO meta tags, dot indicators, JS link |
| about.html | SEO meta tags, tab component, JS link |
| services.html | SEO meta tags, accordion, search filter, JS link |
| enquiry.html | SEO meta tags, error spans, response panel, JS link |
| contact.html | SEO meta tags, error spans, directions buttons, confirmation panel, JS link |
| robots.txt | Created — crawl rules and sitemap reference |
| sitemap.xml | Created — all 5 pages with lastmod and priority |



---

## Changelog (continued)

### v0.4.0 — 2026-05-31 — Part 3: JavaScript Functionality and SEO

- Created js/main.js with 10 self-contained IIFE modules.
- Slideshow: auto-advance every 5 seconds, keyboard arrow navigation, dot indicators synced to current slide.
- Lightbox: full-screen image overlay on all article/slideshow images; Escape/arrow key/background-click to close.
- Tabs: about.html team and "Why Choose Us" sections wrapped in tab component; first tab active by default.
- Accordion: all service cards on services.html collapse by default; smooth max-height CSS transition on expand.
- Search filter: real-time keyword filter on services.html; hides non-matching .service-card elements; "no results" message shown when zero matches.
- Directions: "Get Directions" buttons on contact.html open Google Maps in new tab with office address as destination.
- Enquiry validation: blur + submit validation on all 8 required fields; regex for name, email, SA phone; date comparison logic; inline red error messages under each field; smooth scroll to first error.
- Enquiry response: confirmation panel replaces form on valid submission; calculates nights and estimated total (nights × room rate); displays reference number, room, dates, guests, add-ons.
- Contact validation: blur + submit validation; optional phone field only validated if non-empty; message minimum 10 characters.
- Contact email: mailto: link compiled from form data; opens user's email client; success confirmation panel shown.
- SEO: added description, keywords, og:title, og:description meta tags to all 5 pages.
- Title tags: updated all 5 pages with unique keyword-rich titles.
- Created robots.txt with Disallow: /js/ and sitemap reference.
- Created sitemap.xml with all 5 pages, lastmod 2026-05-31, changefreq, and priority values.
- Added aria-live="polite" and role="alert" to dynamic panels for screen reader accessibility.


### New References for Part 3

[17] Mozilla Developer Network, "JavaScript — MDN Web Docs," MDN Web Docs. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript. [Accessed: 31 May 2026].

[18] jQuery Foundation, "jQuery API Documentation," jQuery.com. [Online]. Available: https://api.jquery.com. [Accessed: 31 May 2026].

[19] Google Search Central, "Introduction to robots.txt," Google LLC. [Online]. Available: https://developers.google.com/search/docs/crawling-indexing/robots/intro. [Accessed: 31 May 2026].

[20] Sitemaps.org, "Protocol for Sitemaps," Sitemaps.org. [Online]. Available: https://www.sitemaps.org/protocol.html. [Accessed: 31 May 2026].

[21] Mozilla Developer Network, "HTML forms — Form validation," MDN Web Docs. [Online]. Available: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation. [Accessed: 31 May 2026].

[22] Google Search Central, "SEO Starter Guide," Google LLC. [Online]. Available: https://developers.google.com/search/docs/fundamentals/seo-starter-guide. [Accessed: 31 May 2026].


