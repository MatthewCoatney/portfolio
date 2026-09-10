# Matthew Coatney Portfolio — v1

A static, responsive portfolio site with a continuously looping project showcase.

## Files
- `index.html` — page structure
- `styles.css` — visual system and responsive layout
- `script.js` — project data and infinite-loop showcase behavior

## Before deploying
Replace these placeholders in `index.html`:
- `YOUR_EMAIL_HERE`
- `YOUR_LINKEDIN_URL_HERE`
- `YOUR_GITHUB_URL_HERE`

## Adding a project
Edit the `projects` array in `script.js`. Each project accepts:
- `id`
- `number`
- `eyebrow`
- `badge`
- `title`
- `thesis`
- `description`
- `tech`
- `link`
- `linkLabel`
- `gradient`

The project rail automatically loops regardless of how many projects are added.

## Deploy
This is plain HTML/CSS/JS and can be hosted on S3 + CloudFront, GitHub Pages, Netlify, Vercel, or any static host.
