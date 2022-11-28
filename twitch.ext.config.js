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
