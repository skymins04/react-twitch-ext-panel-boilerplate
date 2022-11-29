# React boilerplate for Twitch extension panel

```
  React boilerplate for Twitch extension panel development (Typescript supported)
```

----

## What does this include?

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">

<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=black"> <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=Babel&logoColor=black">

<img src="https://img.shields.io/badge/Tailwind css-06B6D4?style=for-the-badge&logo=Tailwind css&logoColor=white"> <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=PostCSS&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">

----

## How to use this?

### 1. Clone this repository :
```bash
$ git clone https://github.com/skymins04/react-twitch-ext-panel-boilerplate.git
```

### 2. Install packages :
```bash
$ cd react-twitch-ext-panel-boilerplate
$ npm install (or "yarn install")
```

### 3. Edit twitch.ext.config.js file :
```js
// twitch.ext.config.js

const path = require("path");

const templateHtmlPath = path.resolve(__dirname, "template.html");

/* EDIT THIS */
module.exports = {
  projectTitle: "Webpack App",   /* project title of Twitch extension */
  bundleDirName: "dist",         /* Directory name where the bundled file is located */
  templateHtmlPath,              /* Path to template HTML file */
  entryPointOption: {            /* Type of Twitch extension to enable build (true: enable, false: disable)*/
    Panel: true,
    Mobile: true,
    Config: true,
    LiveConfig: true,
    VideoComponent: true,
    VideoOverlay: true,
  },
  devServerHost: "localhost",    /* Host of webpack-dev-server */
  devServerPort: 8080            /* Port of webpack-dev-server */
};
```

### 4. Run Webpack-Dev-Server
```bash
$ npm run start (or "yarn run start")
```

### 5. Run build
The command below creates a .zip file that can be uploaded to the **"Twitch Developer Console"** within the directory where the bundled file is located.

```bash
$ npm run build (or "yarn run build")
```

### 6. Run lint
You can run eslint with the command below (if you want to use the "--fix" option, run lint:fix)
```bash
$ npm run lint (or "yarn run lint")
```
with --fix option:
```bash
$ npm run lint:fix (or "yarn run lint:fix")
```

----

## Boilerplate Base Structure
```
/
┣━ public/
┃   ┣━ panel.html
┃   ┣━ mobile.html
┃   ┣━ config.html
┃   ┣━ live_config.html
┃   ┣━ video_component.html
┃   ┗━ video_overlay.html
┣━ src/
┃   ┣━ @types/
┃   ┣━ style/
┃   ┃   ┗━ tailwind.css
┃   ┣━ Panel.ts
┃   ┣━ Mobile.ts
┃   ┣━ Config.ts
┃   ┣━ LiveConfig.ts
┃   ┣━ VideoComponent.ts
┃   ┗━ VideoOverlay.ts
┣━ .gitignore
┣━ .eslintrc
┣━ .prettierrc
┣━ .prettierignore
┣━ tailwind.config.js
┣━ postcss.config.js
┣━ babel.config.js
┣━ tsconfig.json
┣━ webpack.config.js
┣━ twitch.ext.config.js
┣━ package.json
┣━ template.html
┗━ yarn.lock
```