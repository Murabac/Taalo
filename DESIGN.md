# Taalo Marketing Company — Website Design Spec

This document records **everything** visible in the landing-page mockup, plus the real logo files in this folder, and the **small implementation steps** used to build the Next.js site.

---

## 1. Brand

| Item | Value |
| --- | --- |
| Company name | **TAALO MARKETING COMPANY** |
| Short name | Taalo |
| Founder & CEO | Sacad Sheekh Muuse |
| Signature style | Gold script: `Sacad S. Muuse` |
| Location | Hargeisa, Somaliland |
| Positioning | Full-service marketing, branding, digital, film, and public-communication agency |

### Logo files (use these, do not recreate)

| File | Background | Use |
| --- | --- | --- |
| `logo.jpeg` | White | Header, footer, favicon source (readable mark: navy “T” + TAALO + bright-blue MARKETING) |
| `logo.png` | Black | Optional dark-on-dark treatments; prefer `logo.jpeg` on the live site |

The live logo is a geometric **T** (navy blocks + a small bright-blue triangle), the word **TAALO** in bold navy, and **MARKETING** in spaced bright blue with flanking lines. The mockup page is navy + gold; the site follows the **mockup layout** and uses the **real logo** in the header and footer.

---

## 2. Design tokens (from the mockup)

### Colors

| Token | Hex | Role |
| --- | --- | --- |
| Navy | `#0A1128` | Hero overlay, process/industries, footer, primary buttons |
| Navy deep | `#050814` | Darker overlay / footer bottom bar |
| Gold | `#D4AF37` | Accent text, icons, primary CTAs, underlines |
| Gold hover | `#C4A030` | Button hover |
| White | `#FFFFFF` | Cards, light section backgrounds, text on navy |
| Off-white | `#F4F5F7` | Alternate section background |
| Body gray | `#5C6370` | Paragraphs on light backgrounds |
| Border | `#E6E8EC` | Service cards |
| WhatsApp | `#25D366` | Floating chat button |

### Typography

- Family: **Poppins** (headings) + **Inter** (body)
- Headings: bold / extra-bold, tight tracking
- Nav links: uppercase, small, letter-spacing
- Accent words in headings: **gold**
- Section labels (e.g. ABOUT TAALO): small, gold, uppercase, tracked

### UI patterns

- Transparent header over the hero; solid navy after scroll
- Gold underline on the active nav item (HOME)
- Primary button: solid gold, black text, right arrow
- Secondary button: transparent, white border, white text, right arrow
- Navy button on light sections: solid navy, white text, right arrow
- Service cards: white, thin gray border, line-art icon, title, short description
- WhatsApp bubble fixed bottom-right

---

## 3. Page structure (single long-scroll home page)

1. Header (sticky)
2. Hero
3. About
4. Services
5. Process + Industries (one dark navy band)
6. Founder message
7. Final CTA band
8. Footer
9. Floating WhatsApp

Anchor IDs: `#home` `#about` `#services` `#process` `#industries` `#contact`

---

## 4. Header

- **Left:** Taalo logo (`logo.jpeg`), height ~48–56px
- **Center nav (uppercase):** HOME · ABOUT · SERVICES · PROCESS · INDUSTRIES · CONTACT  
  HOME has a short gold underline
- **Right:** outline gold button **LET'S TALK** → `#contact`
- **Far right:** hamburger (mobile; also shown in the mockup on desktop)
- Background: transparent on hero, navy after scroll

---

## 5. Hero

- Full-viewport photo of a modern office (workstations + lounge), **navy overlay**
- Headline:  
  **Every Great Brand Starts With a Story.**  
  **Let Us Tell Yours.** ← gold
- Subtext:  
  We are a full-service marketing company helping brands, institutions, and organizations communicate with clarity — through branding, digital marketing, documentaries, commercial video, and public communication.
- Buttons:
  - **START YOUR PROJECT** (solid gold) → `#contact`
  - **CONTACT US** (outline white) → `#contact`
- Right edge: vertical social icons — Facebook, Instagram, LinkedIn, YouTube
- Bottom right: play icon + **WATCH OFFICE TOUR**

---

## 6. About

Two columns on a light background.

**Left**

- Label: **ABOUT TAALO** (gold)
- Heading: We Help You Communicate Your Ideas With **Impact.** (Impact in gold)
- Intro: Taalo Marketing Company exists to turn ideas into stories people remember. We combine strategy, design, and production so your message lands with purpose — whether you are a government office, an NGO, or a growing brand.
- Three value blocks (gold icon + title + short copy):
  - **Our Mission** — Deliver creative work that makes complex ideas simple, visible, and trusted.
  - **Our Vision** — Be the communication partner organizations in Somaliland and beyond rely on for impact.
  - **Our Values** — Integrity, craft, collaboration, and results that serve the people we speak to.
- Button: **MORE ABOUT US** (navy)

**Right**

- Tall photo of a modern office / building at night (Taalo office stand-in)
- Overlapping founder portrait card:
  - Photo of Sacad Sheekh Muuse
  - Quote: *“A great brand is not only seen. It is understood.”*
  - Gold script signature
  - Sacad Sheekh Muuse, Founder & CEO

---

## 7. Services

Light / white background.

- Label: **OUR SERVICES** (gold)
- Heading: Creative Solutions For **Every Need**
- 4×3 grid (12 cards). Each card: line icon, bold title, one-sentence description.

| # | Service | Description |
| --- | --- | --- |
| 1 | Branding & Identity | Names, logos, and visual systems that make a brand unmistakable. |
| 2 | Digital Marketing | Campaigns that reach the right audience across search, social, and the web. |
| 3 | Website Design | Fast, elegant sites that explain who you are and convert visitors. |
| 4 | Mobile App Development | Useful, well-designed apps for customers and internal teams. |
| 5 | Documentary Production | Long-form film that captures real stories with cinematic care. |
| 6 | Commercial Videos | Ads and brand films built to hold attention and drive action. |
| 7 | Photography | Studio and on-location photography for people, products, and places. |
| 8 | Graphic Design | Print and digital design — from reports to campaign visuals. |
| 9 | Social Media Management | Content, community, and calendars that keep your channels alive. |
| 10 | Awareness Campaigns | Public-interest campaigns that educate, mobilize, and stick. |
| 11 | Government Communication | Clear, dignified messaging for public institutions. |
| 12 | NGO Communication | Storytelling and materials that help missions raise support. |

- Centered button: **VIEW ALL SERVICES** (navy)

---

## 8. Process + Industries (dark navy band)

### Our Process — “From Idea To Impact”

Horizontal 6-step flow, gold circular icons, dotted connectors:

| Step | Title | Description |
| --- | --- | --- |
| 01 | Consultation | We listen to your goals, audience, and constraints. |
| 02 | Strategy | We define the message, channels, and plan. |
| 03 | Creative Design | Concepts, visuals, and scripts take shape. |
| 04 | Production | We shoot, build, write, and refine. |
| 05 | Delivery | Finished work, on brand and on time. |
| 06 | Support | We stay with you after launch. |

### Industries We Serve — “We Work With Purpose”

4×3 gold line-art icons:

Government · NGOs · Businesses · Startups · Healthcare · Education · Real Estate · Retail · Hospitality · Technology · Finance · And More

---

## 9. Founder message

Two columns, light background.

- Left: large photo of the founder at a desk with a laptop
- Right:
  - Label: **FOUNDER MESSAGE** (gold)
  - Heading: **Our Commitment To You**
  - Body: At Taalo, we treat every brief as a responsibility. I founded this company so organizations in our region could access world-class branding, media, and communication without leaving their story half-told. We will listen first, work with care, and measure success by the impact your message creates.
  - Gold script: Sacad S. Muuse
  - Sacad Sheekh Muuse, Founder & CEO

---

## 10. Final CTA

Navy block, centered.

- Gold rocket icon
- **Ready To Start Your Project?**
- Subtext: Tell us what you want to build. We will help you say it with impact.
- Button: **LET'S WORK TOGETHER** (solid gold)

---

## 11. Footer (navy)

Five columns:

1. **Brand** — logo, short about line, circular social icons (Facebook, Instagram, LinkedIn, YouTube)
2. **Quick Links** — Home, About Us, Services, Process, Industries, Contact
3. **Services** — Branding, Digital Marketing, Website Design, Video Production, Social Media, Government Communication
4. **Contact Us**
   - Phone: +252 63 000 0000 *(placeholder — replace with real number)*
   - Email: hello@taalomarketing.com *(placeholder)*
   - Address: Hargeisa, Somaliland
   - Hours: Sat–Thu, 8:00 AM – 6:00 PM
5. **Get In Touch** — “Let's build something great together” + outline button **SEND US A MESSAGE**

Bottom bar: `© 2026 Taalo Marketing Company. All rights reserved.` · Privacy Policy | Terms & Conditions

---

## 12. Contact (in-page form, `#contact`)

Simple form used by LET'S TALK / START YOUR PROJECT:

- Full name, email, phone, organization, message
- Submit button: **SEND MESSAGE** (gold)
- WhatsApp float: `https://wa.me/252630000000` *(placeholder)*

---

## 13. Implementation steps (small)

| Step | What |
| --- | --- |
| 1 | Write this spec |
| 2 | Scaffold Next.js (App Router, TypeScript, Tailwind) in this folder |
| 3 | Copy logos into `public/` and set theme tokens + fonts |
| 4 | Shared shell: Header, Footer, WhatsApp button, root layout |
| 5 | Hero |
| 6 | About |
| 7 | Services |
| 8 | Process + Industries |
| 9 | Founder + final CTA |
| 10 | Contact form + responsive pass |

---

## 14. Tech

- Next.js (App Router) + TypeScript + Tailwind CSS
- `next/font` for Poppins, Inter, and Great Vibes (signatures)
- `lucide-react` for line icons; social marks are inline SVGs
- `next/image` for the real logo (`public/logo.jpeg`) and photography
- Single page (`app/page.tsx`) composed of small section components

## 15. How to run

```bash
cd Taalo
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Replace placeholder phone, email, WhatsApp, and social URLs in `lib/content.ts` when the real details are ready. Swap the Unsplash photos for office and founder images in `public/` when you have them.
