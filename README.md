# Northline — Global Logistics Website

A complete static PHP 8+ website, using reusable PHP includes, semantic HTML, custom CSS and vanilla JavaScript. NORTHLINE is a demonstration brand; replace it with your company details.

## Run locally

Install PHP 8 or newer and add it to PATH. In this folder run:

```sh
php -S localhost:8000
```

Open http://localhost:8000. No Composer, npm, database or build step is required. PHP's development server is for local use; deploy these source files to a PHP-enabled web host for production.

## Structure

```text
Logistics/
├── index.php                 # Complete homepage
├── about.php                 # Company page
├── services.php              # Six services with expandable details
├── contact.php               # Quote form and FAQ
├── privacy.php               # Replaceable policy placeholder
├── terms.php                 # Replaceable terms placeholder
├── includes/
│   ├── config.php            # Editable company details, icons, service data
│   ├── header.php            # Document head and SEO metadata
│   ├── navbar.php
│   ├── footer.php
│   └── *-section.php         # Shared homepage and inner-page sections
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/hero.jpg       # Locally bundled cargo photograph
│   ├── images/world-map.svg  # Geographic world map
│   └── icons/favicon.svg
└── README.md
```

## Features

- Always-visible sticky navigation with five primary links and a clearly labelled mobile menu.
- Large photographic hero, overlapping quick-service card, six services, eight industries, network map, benefits, tracking, animated statistics, partner placeholder, CTA and contact sections.
- Mobile-first refinements at 480, 768, 1050 and 1200px, with scalable desktop typography and a 4K-friendly maximum content width.
- Content and statistics are visible immediately, with restrained hover animation, animated route lines and support for reduced-motion preferences.
- Accessible form labels, native required/email/phone validation, status announcements, keyboard focus styling, skip link and Escape-to-close navigation.
- Quote links preselect the requested service; industry links prefill the message.
- Local image assets, lazy loading below the fold, a prioritized hero image and no animation libraries.
- Unique page titles, descriptions, canonical placeholders, Open Graph text metadata and favicon.

## Customize before launch

1. Replace the company array in includes/config.php, including the canonical URL.
2. Replace NORTHLINE text in hero labels and the brand's accessible label where appropriate.
3. Replace illustrative statistics and confirm routes, capabilities and delivery claims.
4. Add approved partner logos and real social profile links; current social symbols are deliberately non-clickable placeholders.
5. Replace privacy.php and terms.php with your business's approved policies.
6. Connect forms and tracking only if a real backend is required later. Currently no API, email delivery, database or storage is implemented.

## Demo behavior

Tracking displays: “Tracking functionality will be available soon.”

The enquiry form shows inline validation errors, focuses the first invalid field and preserves entered details. Valid input displays an honest demo confirmation without claiming delivery. Company and phone fields are optional; an unsure-service option is available. It does not send or store information. Buttons remain disabled if JavaScript is unavailable, to prevent accidental browser form submission. All user-supplied URL parameters are applied as text or checked against predefined options.

## Images and fonts

The hero/about/CTA photograph is by Daniel Miksha: https://unsplash.com/photos/busy-shipping-port-with-cranes-and-cargo-containers-A0IOJ34brD0 (Unsplash License: https://unsplash.com/license). It is bundled locally at 2000px wide; replace with licensed company imagery as desired. Optional warehouse/truck/air-cargo photographs can replace the repeated image in the relevant sections.

World map geography: https://github.com/johan/world.geo.json, derived from Natural Earth data. The bundled SVG is a geographic visualization; route connections are illustrative.

Manrope loads from Google Fonts with an Arial fallback. For a fully offline website, self-host the font and replace the Google Fonts links in includes/header.php. All other assets are local. No social-preview image was generated.

## Verification

All 18 PHP files passed PHP 8.5.11 syntax checks. All six routes returned HTTP 200 without PHP errors, local link/anchor targets resolved, and JavaScript parsed successfully. The temporary PHP runtime was obtained from the official PHP download service and its SHA-256 verified.

Browser tools were unavailable in this session, so visual checks and real browser interaction checks at 1920, 1440, 1024, 768, 480 and 375px remain unverified. Responsive styles are implemented for these sizes. Use browser device emulation to confirm layouts, menu behavior, form validation and reduced-motion behavior before launch.
