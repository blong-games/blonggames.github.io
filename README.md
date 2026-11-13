# Blong Games

English-language studio website built with React and Vite. The site uses one page with section anchors for Home, Games, About, and Contact.

## Run locally

Use Node.js 22.12+ on the 22.x line or Node.js 24+.

```sh
npm ci
npm run dev
```

Build and preview the production output:

```sh
npm run build
npm run preview
```

## Brand and contact

The supplied dark wordmark and orbital symbol are in `src/assets/` and are used as supplied. The hero's moving point and orbit lines are separate decorative elements. The animation has a pause control and is disabled when the visitor prefers reduced motion.

Set `VITE_CONTACT_EMAIL` in `.env.local` to the studio’s confirmed public email, then restart Vite or rebuild. On GitHub, set it under **Settings → Secrets and variables → Actions → Variables**. The address becomes public in the built website. Without that setting, Contact displays an availability message.

## Publish on GitHub Pages

1. After approving the site for publication, push the source files to the intended GitHub repository. Include the lockfile and `.github/workflows/pages.yml`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. In **Actions → Publish to GitHub Pages**, choose **Run workflow** on the default branch. The workflow builds and uploads `dist/`. Open the Pages URL shown by the deployment.

Publication is manually triggered. Vite uses relative asset paths, so the build works at the root of a Pages site or in a repository subdirectory.

[GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
