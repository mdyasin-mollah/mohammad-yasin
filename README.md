# Mohammad Yasin — Portfolio

Dark futuristic personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, GSAP, Lenis, and Lucide React.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Included
- Responsive animated hero with typing effect and orbiting stack chips
- GSAP entrance animations and Lenis smooth scrolling
- Interactive terminal commands: help, about, skills, projects, ventures, fun-facts, contact, clear
- About, projects, ventures timeline, interests, contact CTA
- SEO metadata and reduced-motion CSS support

## Add your own photos
Put images in `public/assets/images/`, for example `yasin1.png`, `yasin2.png`, `yasin3.png`. Reference them in the app using `/assets/images/yasin1.png`. No personal photos are included yet.

## Before launch
- Add your real public email address to the contact links.
- Verify project URLs and descriptions.
- Add your portrait images in `public/assets/images/`.
- Run `npm run build` and deploy to a Next.js host such as Vercel.

## Structure
```
app/                 # App Router pages, layout, global styles
components/           # Interactive terminal and smooth scrolling
public/assets/images/ # Add yasin1.png, yasin2.png, etc.
```
