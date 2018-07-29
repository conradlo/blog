module.exports = function (env, argv) {
  return {
    mode: "development",
    entry: __dirname + "/src/index.js",
    output: {
      path: __dirname + '/dist',
      filename: "[name].[chunkhash:8].js"
    },
    devtool: "source-map",
    devServer: {
      contentBase: __dirname + '/dist',
      compress: true,
      port: 9000
    },
    watch: true,
    module: {
      rules: [{
          enforce: "pre",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "eslint-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              "presets": [
                "env"
              ]
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    }
  }
}