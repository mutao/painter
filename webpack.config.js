let path = require("path");
let webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    mode:"development",
    output : {
        //path : path.join(__dirname,'dist'),
        filename:'index.js'
    },
    devServer:{
        contentBase: "./dist",
        historyApiFallback: true,
        inline:false,
        port:3000,
        open:false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页', // 用于生成的HTML文档的标题
            filename: 'index.html', //写入HTML的文件。默认为index.html。也可以指定一个子目录（例如：）assets/admin.html
            template: 'src/index.html' // Webpack需要模板的路径
        }),
        new webpack.HotModuleReplacementPlugin() // 需要结合 启用热替换模块(Hot Module Replacement)，也被称为 HMR
    ]
}