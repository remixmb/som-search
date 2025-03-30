# Yale SOM Search Vibe Coding Exploration

This project is a modern search interface for Yale School of Management resources.

## Live Demo

Visit the live demo: [https://remixmb.github.io/som-search/](https://remixmb.github.io/som-search/)

## Prerequisites

- Node.js (version specified in package.json)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/remixmb/som-search.git
   cd som-search
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Development

- The project uses TypeScript, React, and Tailwind CSS
- Main source code is in the `src` directory
- Configuration files are in the root directory

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is deployed on GitHub Pages at: [https://remixmb.github.io/som-search/](https://remixmb.github.io/som-search/)

### Deployment Configuration

- The site is automatically deployed using GitHub Actions whenever changes are pushed to the main branch
- The workflow is defined in `.github/workflows/deploy.yml`
- It uses the [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) to deploy to GitHub Pages
- Vite is configured with a base path of `/som-search/` in `vite.config.ts`

### Manual Deployment

If you need to manually trigger a deployment:

1. Go to the GitHub repository
2. Navigate to Actions → Deploy to GitHub Pages
3. Click "Run workflow"

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT 