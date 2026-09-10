# Matthew Coatney Portfolio — Angular 20

Angular conversion of the original static portfolio. The design is preserved, but the site is now split into standalone Angular components and routes, with a blog scaffold already in place.

## Run locally

```bash
npm install
npm start
```

Angular will open the site at `http://localhost:4200`.

## Production build

```bash
npm run build
```

Output is written to:

```text
dist/portfolio/browser
```

## Component structure

```text
src/app/
  components/
    site-header/
    hero/
    project-showcase/
    project-card/
    about/
    contact-footer/
  pages/
    home/
    blog-index/
    blog-post/
  data/projects.ts
  models/project.ts
  app.routes.ts
```

### Add/edit projects

Edit only:

```text
src/app/data/projects.ts
```

The infinitely looping project rail renders from that data automatically.

### Contact links

Update the email and LinkedIn placeholders in:

```text
src/app/components/contact-footer/contact-footer.component.html
```

GitHub and YouTube are already configured.

## Replace the existing static repository

If this is going into the existing `portfolio` repository, first make sure you are on `production`:

```bash
git checkout production
```

Then replace the old static files with the contents of this Angular project. From the repository root:

```bash
rm -f index.html styles.css script.js
```

Copy all files from this project into the repo root, then:

```bash
npm install
npm start
```

Once it looks right:

```bash
git add .
git commit -m "Convert portfolio to Angular"
git push
```

## AWS Amplify

This repo includes `amplify.yml`. For the connected `production` branch, Amplify should use:

- Build command: handled by `amplify.yml`
- Artifact directory: `dist/portfolio/browser`

The build pipeline is `npm ci` → `npm run build` → deploy Angular browser output.

## Routes

- `/` — portfolio home
- `/blog` — blog index
- `/blog/building-an-ai-assisted-ebay-lister` — first project case study

