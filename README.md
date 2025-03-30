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

This project is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions workflow will automatically build and deploy the site
3. The deployed site will be available at https://remixmb.github.io/som-search/

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT 