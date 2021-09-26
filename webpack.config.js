const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    watch: true,
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
      modules: [__dirname, "src", "node_modules"],  
      extensions: [".ts", ".tsx", ".js", ".json","jsx"],
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback:true,
        port:7070
    },
    module: {
      rules: [
        {
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:require.resolve("babel-loader"),
        },
        { 
            test: /\.s?css$/, 
            use: [ "style-loader", "css-loader", "sass-loader" ], 
        },
        { 
            test: /\.tsx?$/, 
            loader: "babel-loader" 
        },
        { 
            test: /\.tsx?$/, 
            loader: "ts-loader" ,
        },
        {
            test:/\.png|svg|jpg|gif$/,
            use:["file-loader"],
        },
        { 
            enforce: "pre", 
            test: /\.js$/, 
            loader: "source-map-loader", 
        }
      ]
    }
  };