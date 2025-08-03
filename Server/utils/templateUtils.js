const fs = require('fs-extra')
const path = require('path')

const createFileFromConfig = async (config, targetDir) =>{
    const {
        projectName= 'my-app',
        framework='react',
        css= 'tailwind',
        font= 'Open Sans',
        icons = [],
    } = config;


const srcDir = path.join(targetDir, projectName, 'src');
await fs.ensureDir(srcDir);

const packageJson = {
    name: projectName,
    version: "1.0.0",
    private: true,
    dependencies: {
       react: "^18.0.0",
       "react-dom": "^18.0.0"

    },
    devDependencies:{
      vite: "^5.0.0",
      "@vitejs/plugin-react": "^4.0.0",
      eslint: "^8.0.0",
      prettier: "^3.0.0"
    },
    scripts: {
      dev: "vite",
      build: "vite build",
      preview: "vite preview"
    }
  };

  if (css === 'tailwind') {
      Object.assign(packageJson.devDependencies, {
      tailwindcss: "^3.0.0",
      autoprefixer: "^10.0.0",
      postcss: "^8.0.0"
    });
  }

  await fs.outputFile(
    path.join(targetDir, projectName, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  await fs.outputFile(
    path.join(targetDir, projectName, 'vite.config.js'),
    `import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  
  export default defineConfig({
    plugins: [react()],
  })`
  );
  
  await fs.outputFile(
    path.join(targetDir, projectName, '.eslintrc.json'),
    `{
    "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
    "plugins": ["react"],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "env": {
      "browser": true,
      "es2021": true
    },
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {}
  }`
  );
  

  await fs.outputFile(
    path.join(targetDir, projectName, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${projectName}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`
  );

  await fs.outputFile(
    path.join(srcDir, 'main.jsx'),
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
${css === 'tailwind' ? "import './index.css';" : ""}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
  );

  await fs.outputFile(
    path.join(srcDir, 'App.jsx'),
    `export default function App() {
  return (
    <div className="text-3xl font-bold text-center mt-10">
      🚀 Welcome to ${projectName}
    </div>
  );
}`
  );

  if (css === 'tailwind') {
    await fs.outputFile(
      path.join(srcDir, 'index.css'),
      `@tailwind base;
@tailwind components;
@tailwind utilities;`
    );

    await fs.outputFile(
      path.join(targetDir, projectName, 'tailwind.config.js'),
      `module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};`
    );

    await fs.outputFile(
      path.join(targetDir, projectName, 'postcss.config.js'),
      `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`
    );
  };
};

module.exports = { createFileFromConfig };