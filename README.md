# Myles Hobdy | Engineering Portfolio

**Curious about how it works. Driven to build it better.**

Personal engineering portfolio spanning systems and infrastructure, software development, and cloud and platform engineering.

**Live site:** [mylesh.dev](https://mylesh.dev)

## Overview

This site brings together selected technical projects, professional experience, and the thinking behind my work. The focus is on understanding how systems fit together, building practical solutions, and documenting engineering decisions.

The visual direction is inspired by orbital systems and space exploration, with a dark interface, restrained color accents, and interactive illustrations.

## Featured projects

| Project | Focus | Case study |
| --- | --- | --- |
| **Domain Doctor** | DNS, TLS, HTTP, and security-header diagnostics; Python, FastAPI, Docker, and Caddy | [View case study](https://mylesh.dev/work/domain-doctor) |
| **Tapestree** | Multi-tenant change governance; Next.js, TypeScript, PostgreSQL, Supabase, and Azure | [View case study](https://mylesh.dev/work/tapestree) |
| **Infrastructure Lab** | Proxmox virtualization, Linux, containers, networking, and self-hosted services | [View case study](https://mylesh.dev/work/infrastructure-lab) |

The case studies document the ideas, approaches, and technical work behind each project. Projects have different maturity levels, from deployed applications to ongoing experiments.

## Technology

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Custom responsive CSS
- **Interaction and icons:** Motion and Lucide React
- **Deployment:** Vercel, connected to the GitHub repository
- **Search and sharing:** Canonical metadata, Open Graph image generation, sitemap, and robots rules

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Homepage and selected work |
| `/work` | Project gallery |
| `/work/domain-doctor` | Domain Doctor case study |
| `/work/tapestree` | Tapestree case study |
| `/work/infrastructure-lab` | Infrastructure Lab case study |
| `/about` | Personal background and engineering interests |
| `/experience` | Professional experience, skills, certifications, and résumé access |
| `/cv` | Redirect to the résumé section of `/experience` |
| `/sitemap.xml` | Generated search engine sitemap |
| `/robots.txt` | Search crawler directives |
| `/opengraph-image` | Generated social sharing image |

## Run locally

**Prerequisites:** Node.js and npm.

```bash
git clone https://github.com/casual-loops/mylesh-portfolio.git
cd mylesh-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Validation and production build

```bash
npm run lint
npm run build
npm run start
```

`npm run lint` currently runs `tsc --noEmit` (a TypeScript check, not ESLint). `npm run start` serves the production build after `npm run build`.

## Where to make changes

| Path | Responsibility |
| --- | --- |
| `content/site.ts` | Profile details, social links, project summaries, and project metadata |
| `app/page.tsx`, `app/_components/` | Homepage composition and sections |
| `app/work/`, `app/work/[slug]/_components/` | Project gallery and detailed case studies |
| `app/about/`, `app/experience/` | Personal and professional content |
| `components/` | Shared UI, site shell, and visual components |
| `app/globals.css` | Global styling and responsive rules |
| `lib/seo.ts`, `app/layout.tsx` | Search and social metadata |
| `app/opengraph-image.tsx` | Social sharing artwork |
| `app/sitemap.ts`, `app/robots.ts` | Search discovery and crawler directives |
| `public/images/` | Portfolio illustrations and project screenshots |
| `public/Myles-Hobdy-Resume.pdf` | Downloadable résumé |

## GitHub contribution calendar

The Experience page includes a server-rendered GitHub contribution heatmap for the `casual-loops` profile. GitHub's GraphQL API requires authentication to retrieve the contribution calendar.

To enable the calendar locally, add the following to `.env.local`:

```dotenv
GITHUB_ACTIVITY_TOKEN=your_github_token_here
```

For production, add `GITHUB_ACTIVITY_TOKEN` to **Vercel → Project Settings → Environment Variables** for the Production environment, then redeploy. Use a token with only the minimum permissions required for reading your own contribution activity; never commit or expose a token in public code.

Contribution data is fetched on the server and cached for six hours. The site falls back to a GitHub profile link if the token is missing, invalid, or the GitHub API is unavailable. Private contributions may appear as aggregate counts depending on GitHub account visibility settings; private repository details are not displayed.

## Deployment

The production site is hosted on Vercel at **[mylesh.dev](https://mylesh.dev)**. Changes merged into `main` are deployed through the connected GitHub integration.

## Connect

- [Website](https://mylesh.dev)
- [LinkedIn](https://www.linkedin.com/in/myleshobdy/)
- [GitHub](https://github.com/casual-loops)

---

Built to document an ongoing engineering journey, not a finished destination.
