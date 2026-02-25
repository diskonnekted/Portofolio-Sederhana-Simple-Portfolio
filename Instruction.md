# Role
Act as a Senior Frontend Engineer and UI/UX Designer specializing in high-performance static websites using Astro and Tailwind CSS.

# Project Objective
Build a modern, responsive, and lightweight personal portfolio website for "Arif Susilo" (domain: arifsusilo.com). The site must be optimized for speed (Core Web Vitals), SEO, and accessibility, leveraging Astro's island architecture and Tailwind's utility-first approach.

# Tech Stack
1.  **Framework:** Astro (latest stable version).
2.  **Language:** TypeScript (for type safety).
3.  **Styling:** Tailwind CSS (configured for minimal bundle size via purging).
4.  **Icons:** Astro Icons (using Phosphor or Heroicons set).
5.  **Animations:** Astro Transition API or lightweight CSS transitions (avoid heavy JS libraries).
6.  **Deployment:** Optimized for Vercel or Netlify static hosting.

# Design Requirements
1.  **Style:** Minimalist, Clean, Professional, and Modern.
2.  **Theme:** Implement a Dark/Light mode toggle with system preference detection.
3.  **Typography:** Use a clean sans-serif font (e.g., 'Inter' or 'Plus Jakarta Sans') via Google Fonts or self-hosted.
4.  **Color Palette:**
    -   Primary: Slate/Zinc neutrals.
    -   Accent: A professional blue or emerald green (reflecting tech/data expertise).
5.  **Layout:** Mobile-first responsive design. Single-page scroll with smooth anchor navigation.

# Content Sections
1.  **Navbar:** Sticky header with logo (text "Arif Susilo") and links (About, Skills, Projects, Contact).
2.  **Hero Section:**
    -   Headline: "Hi, I'm Arif Susilo".
    -   Subheadline: "Backend Engineer | Data Enthusiast | Go & Web Specialist".
    -   CTAs: "View My Work" (primary) & "Contact Me" (secondary).
    -   Visual: Clean layout with space for a profile image or abstract tech illustration.
3.  **About Section:** Brief biography highlighting expertise in Golang, Data Analytics, and Web Development.
4.  **Skills Section:** Grid layout displaying technical skills (e.g., Go, Astro, Vue, Postgres, Docker, Tailwind) using icons.
5.  **Projects Section:** Card-based layout showcasing 3-4 key projects. Each card must have: Title, Description, Tech Stack tags, GitHub Link, and Live Demo Link.
6.  **Experience Section:** Simple timeline view of work history.
7.  **Contact Section:** Simple layout with email link, social media icons (GitHub, LinkedIn, Twitter), and a note encouraging collaboration.
8.  **Footer:** Copyright "© 2024 Arif Susilo" and current year dynamically updated.

# Technical Constraints & Best Practices
-   **Performance:** Aim for 100/100 Lighthouse score. Zero JavaScript by default unless interactivity is needed (Astro Islands).
-   **SEO:** Include proper meta tags, Open Graph tags, Twitter cards, and generate a sitemap.xml.
-   **Accessibility:** Ensure WCAG 2.1 compliance (proper contrast ratios, aria-labels, semantic HTML).
-   **Code Quality:** Component-based structure, reusable layouts, clean code with comments.
-   **Images:** Use Astro's `<Image />` component for automatic optimization (WebP/AVIF).
-   **Config:** Setup `astro.config.mjs` and `tailwind.config.mjs` correctly.

# Directory Structure
/src
  /components (Navbar, Hero, Skills, Projects, etc.)
  /layouts (BaseLayout.astro)
  /pages (index.astro, 404.astro)
  /content (Blog or Project data collections if needed)
  /public (favicon, robots.txt)
  /styles (global.css)

# Deliverables
1.  Initialize the Astro project with TypeScript and Tailwind.
2.  Create the base layout and global styles.
3.  Implement all sections as reusable components.
4.  Ensure the dark mode toggle works correctly and persists preference.
5.  Provide instructions on how to run locally (`npm run dev`) and build (`npm run build`).

# Specific Instruction
Start by setting up the project configuration files (`package.json`, `astro.config.mjs`, `tailwind.config.mjs`) and the main layout. Then proceed to build the Hero section. Ensure the design feels premium, trustworthy, and fast.
