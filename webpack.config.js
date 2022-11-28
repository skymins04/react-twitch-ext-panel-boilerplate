//@ts-check

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {
  projectTitle,
  bundleDirName,
  templateHtmlPath,
  entryPointOption,
  devServerHost,
  devServerPort,
} = require("./twitch.ext.config");

const bundlePath = path.resolve(__dirname, bundleDirName);
const getSrcFilePath = (filename) => path.resolve(__dirname, "src", filename);

module.exports = (_env, argv) => {
  /**
   * Entry points for each component of the Twitch Extension Panel
   * @type {{[key: string]: {path: string; outputHtml: string; build: boolean;}}}
   */
  const entryPoints = {
    Panel: {
      path: getSrcFilePath("Panel.ts"),
      outputHtml: "panel.html",
      build: entryPointOption.Panel,
    },
    Mobile: {
      path: getSrcFilePath("Mobile.ts"),
      outputHtml: "mobile.html",
      build: entryPointOption.Mobile,
    },
    Config: {
      path: getSrcFilePath("Config.ts"),
      outputHtml: "config.html",
      build: entryPointOption.Config,
    },
    LiveConfig: {
      path: getSrcFilePath("LiveConfig.ts"),
      outputHtml: "live_config.html",
      build: entryPointOption.LiveConfig,
    },
    VideoComponent: {
      path: getSrcFilePath("VideoComponent.ts"),
      outputHtml: "video_component.html",
      build: entryPointOption.VideoComponent,
    },
    VideoOverlay: {
      path: getSrcFilePath("VideoOverlay.ts"),
      outputHtml: "video_overlay.html",
      build: entryPointOption.VideoOverlay,
    },
  };

  /**
   * @type {{[key: string]: string}}
   */
  const entry = {};

  /**
   * @type {Array<any>}
   */
  const plugins = [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
  if (argv.mode === "production")
    plugins.push(
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: [path.resolve(bundlePath, "**", "*")],
      }),
    );

  for (const key in entryPoints) {
    if (entryPoints[key].build) {
      entry[key] = entryPoints[key].path;
      if (argv.mode === "production") {
        plugins.push(
          new HtmlWebpackPlugin({
            inject: true,
            chunks: [key],
            template: templateHtmlPath,
            filename: entryPoints[key].outputHtml,
            title: projectTitle,
            minify: false,
          }),
        );
      }
    }
  }

  /**
   * @type {{[key: string]: any}}
   */
  const config = {
    entry,
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/i,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
        },
        {
          test: /\.json$/i,
          type: "json",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: path.join("img", "[name].[ext]"),
          },
        },
      ],
    },
    resolve: { extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".json"] },
    output: {
      filename: "[name].bundle.js",
      path: bundlePath,
    },
    plugins,
  };

  if (argv.mode === "development") {
    config.devServer = {
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      host: argv.devrig ? "localhost.rig.twitch.tv" : devServerHost,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      port: devServerPort,
      hot: true,
    };
  }
  if (argv.mode === "production") {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: "all",
          test: /node_modules/,
          name: false,
        },
      },
      name: false,
    };
  }

  return config;
};
