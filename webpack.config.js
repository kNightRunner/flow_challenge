const path  = require ('path');
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    entry: './src/app/index.js',
    //entry: path.resolve(__dirname, 'src') + './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        //path: path.resolve(__dirname, "../src/dist"),
        filename: 'bundle.js'

    },

    devServer:{
        port: 3000
    },
    module:{
        rules: [
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
        ]


    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

    ]

};