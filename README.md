# TAKSHA - Personal Website

A minimalist personal website built with [Docusaurus](https://docusaurus.io/), featuring a Monaco monospace font theme and an interactive life moments graph.

## Features

- **Monaco-styled minimal design** - Terminal-inspired aesthetic
- **Lamhe (Moments) page** - Interactive weighted directed graph showing life journey
- **Dark/Light theme support** - Fully responsive theme switching
- **Local search** - Fast, offline-capable search functionality
- **Blog** - Share thoughts and technical insights

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server at `http://localhost:3000` and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment.

**Steps:**

1. **Create a GitHub repository named `khyaalnix.github.io`:**
   - This special repository name tells GitHub to host at the root URL
   - Go to GitHub and create a new repository with exactly this name

2. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/khyaalnix/khyaalnix.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages in repository settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. **Deployment Triggers:**

   The site will automatically deploy when:
   - **Direct push to `main`** - Deploys immediately
   - **Version tag from `main`** - Release deployment (format: `v1.0.0`, `v2.1.3`, etc.)
   - **Beta tag from `develop`** - Beta deployment (format: `v1.beta.1`, `v2.beta.5`, etc.)
   - **Manual trigger** - Via GitHub Actions "Run workflow" button

5. **Creating Version Tags:**

   **For production release (from main branch):**
   ```bash
   git checkout main
   git tag v1.0.0
   git push origin v1.0.0
   ```

   **For beta release (from develop branch):**
   ```bash
   git checkout develop
   git tag v1.beta.1
   git push origin v1.beta.1
   ```

6. **Access your site:**
   - Your site will be available at: `https://khyaalnix.github.io/`

### Method 2: Manual Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=khyaalnix npm run deploy
```

This command builds the website and pushes to the `gh-pages` branch.

## Customizing Lamhe (Moments)

Edit the `src/data/moments.json` file to add your life moments:

```json
{
  "moments": [
    {
      "time": { "year": 2024, "month": 12 },
      "title": "Your Moment",
      "description": "Description of the moment",
      "image": "img/your-image.jpg",
      "weight": 8
    }
  ]
}
```

- **weight**: 1-10 scale representing importance (affects edge thickness)
- **image**: Optional, place images in `static/img/` folder

See `src/data/LAMHE_README.md` for detailed configuration guide.

## Project Structure

```
nikhil-xb-website/
├── blog/                   # Blog posts
├── docs/                   # Documentation
├── src/
│   ├── css/               # Global styles
│   ├── data/              # Configuration files (moments.json)
│   ├── pages/             # React pages (index, lamhe)
│   ├── utils/             # Utility functions
│   └── components/        # React components
├── static/                # Static assets (images, etc.)
└── docusaurus.config.ts   # Docusaurus configuration
```

## Technologies Used

- **Docusaurus 3.9.2** - Static site generator
- **React 19.0.0** - UI framework
- **React Flow 11.11.4** - Graph visualization
- **TypeScript** - Type safety
- **Monaco font** - Terminal aesthetic

## License

Copyright © 2024 Nikhil Kumar. Built with Docusaurus.