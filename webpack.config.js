// webpack.config.js
module.exports = {
  entry: [
    './src/js/app.js',
    './src/css/main.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              // modules: true,
              importLoaders: 1,
              // localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              // minimize: true
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]",
              }
            }
          }
        ]
      }
    ]
  }
};