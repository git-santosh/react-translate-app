### Folder Structure
```
my-app/
├── public/
│   └── index.html
├── src/
│   └── index.jsx
├── .babelrc
├── package.json
├── webpack.config.js

```

### Initialize the Project
```
mkdir my-app && cd my-app
npm init -y

npm install react react-dom

// Install Webpack and Babel
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev html-webpack-plugin

// Add CSS Support
npm install --save-dev style-loader css-loader

// Add ESLint for Linting & Code Quality
npm install --save-dev eslint eslint-plugin-react

```
### Initialize ESLint config

```
npx eslint --init

```
Answer these prompts:
- How would you like to use ESLint? → "To check syntax, find problems, and enforce code style"
- What type of modules? → "JavaScript modules (import/export)"
- Which framework? → "React"
- TypeScript? → "No"
- Run in browser or Node? → "Browser"
- Use a popular style guide? → Up to you, e.g., "Airbnb" (requires more packages) or "None"
- Install dependencies now? → Yes

### Sample .eslintrc.json for basic setup
```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off" // turn off if using React 17+
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

```
```
"scripts": {
  "lint": "eslint src --ext .js,.jsx"
}

npm run lint
```

### Create .babelrc
```
{
  "presets": [
    ["@babel/preset-env"],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}

```

### Create webpack.config.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

```
### Create public/index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Manual React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

```
### Create and use a CSS file

```
/* src/styles.css */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
}

```
### Create src/index.jsx

```
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, React without CRA!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

### Update package.json Scripts

```
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack"
}

```
### `npm start`
