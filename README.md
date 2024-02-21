# Secure Athlete

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

**SecureAthlete**  Personal Finance Education and management tools for student-athletes.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ Generation of **project sitemap** based on your routes.
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.


**Tech-Stack**
**[BUN](https://bun.sh), [ASTRO](https://astro.build), [HTMX](https://htmx.org), [ALPINE](https://alpine.io), [ELYSIA](https://elysia.io), [TURSO](https://turso.dev), [Tailwind CSS](https://tailwindcss.com/), [MOTION_ONE](https://motionone.com), [DRIZZLE](https://drizzle.org), [SHADCN](https://shadcn.com), [VISX](https://visx)**. 

Meticulously curated tech-stack, designed taking into account web best practices, user experience, and blazing fast speeds.

<br>

<img src="https://raw.githubusercontent.com/virgosdesign/secure_athlete/.github/main/resources/secure-athlete/screenshot-sa.png" alt="Secure Athlete Website Screenshot">

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/astrowind)

<br>

<details open>
<summary>TOC</summary>
- [Developer](#developer)
  - [Repo](#repository-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deployment](#deployment)
  - [TechStack](#tech-stack)
- [License](#license)
</details>

## Developer

**AstroWind** tries to give you quick access to creating a website using [Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals..

### Repository-Structure

Within this **Secure Athlete** repository, the following file structure has been utilized:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.mjs
└── ...
```

Astro is used as the backend SSR server, using `.astro` or `.md` files in the `src/pages/` directory to compose HTMX swap endpoints. Each page is exposed as a route based on its file name.

Components used to build pages exist in: `src/components/`.

Static assets that do not require transformation: `public/` directory. Any static assets that are imported directly in files exist in:  `assets/` directory if they are imported directly.

[![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/virgosdesign/secureathlete/tree/main) [![Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/virgosdesign/secureathlete) [![StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/virgosdesign/secureathlete)

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `bun install`         | Installs dependencies                              |
| `bun run dev`         | Starts local dev server at `localhost:3000`        |
| `bun run build`       | Build your production site to `./dist/`            |
| `bun run preview`     | Preview your build locally, before deploying       |
| `bun run format`      | Format codes with Prettier                         |
| `bun run lint:eslint` | Run Eslint                                         |
| `bun run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Secure Athlete'
  site: 'https://secureathlete.net'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# SEO metadata
metadata:
  title:
    default: 'Secure Athlete'
    template: '%s — Secure Athlete'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.jpg'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

### Deployment

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
bun run build
```
Outputs to the: `dist` folder.

#### Deploy to Netlify
[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/virgosdesign/secureathlete)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvirgosdesign%2Fsecureathlete)

<br>

## License

**SECURE ATHLETE** is private licensed software. Please see [LICENSE](./LICENSE.md) file for details.
