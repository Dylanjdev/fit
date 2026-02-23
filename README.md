# fit

Fit & Fierce website built with React + Vite.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

The project is configured for deployment to:

https://fitandfierce.studio/

### One-time GitHub setup

1. Push your latest code to the `main` branch.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set branch to **gh-pages** and folder to **/(root)**.
5. Under **Custom domain**, set `fitandfierce.studio` and save.
6. Enable **Enforce HTTPS** after DNS is configured.

### Deploy command

```bash
npm run deploy
```

This command builds the app and publishes `dist/` to the `gh-pages` branch.

The published site should resolve at:

https://fitandfierce.studio/
