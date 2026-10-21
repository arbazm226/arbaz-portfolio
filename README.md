# Arbaz Malik — Finance & Business Intelligence Portfolio

A responsive portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS. Professional details are limited to information supplied in the project brief; proposed portfolio work is labelled as such.

## Requirements

- Node.js 20.19+, 22.13+, or 24+
- npm

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000` for local development.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content and CV

Profile and portfolio content is maintained in `src/data/content.ts`. Proposed projects are not represented as completed work. Replace or extend these entries only when approved evidence is available.

The approved CV PDF was not supplied, so CV actions currently open a pre-addressed email asking for a copy rather than linking to a missing file. To enable direct downloads:

1. Add the approved PDF as `public/Arbaz-Malik-CV.pdf`.
2. Set `CV_FILE_AVAILABLE` to `true` in `src/data/content.ts`.

No phone number, dissertation findings, unpublished methodology, or employer financial data is included.

## Contact form

The form uses a clearly disclosed `mailto:` fallback because no delivery provider or server credentials were provided. It validates the required fields in the browser and opens the visitor's email application with a prepared message. The visitor must send the message themselves; the website does not claim to have delivered it.

## Deployment to Vercel

1. Push this project to a Git provider and import it into Vercel.
2. Configure `NEXT_PUBLIC_SITE_URL` in Vercel to the actual deployment origin (for example, the Vercel project URL). No custom domain is assumed.
3. Deploy and verify the routes, email links, and CV fallback. If a CV is added, verify its download URL too.

The app does not require email API keys or other secrets.

## Remaining owner-provided materials

- Approved CV PDF.
- Verification or credential links and dates for professional development.
- Approved dissertation details or report, if intended for publication.
- Genuine project evidence, screenshots, datasets, and findings before any proposal is presented as completed work.
- The production URL for metadata, sitemap, and robots configuration.
