const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const favicon = require('./src/favicon.ico');

module.exports ={
	entry:{
		app:'./src/index.js',
		print:'./src/print.js'
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	// module:{
	// 	rules: [
	// 		{
	// 			test:/\.(jpg|svg|png|gif|ico)$/,
	// 			use:{
	// 				loader:"url-loader",
	// 				options: {
	// 					limit:1024
	// 				}
	// 			}
	// 		}
	// 	]
	// },
	plugins:[
		new htmlWebpackPlugin(),
		new htmlWebpackPlugin({
			title:'my custom html',
			template:'./src/my-index.html',
			inject:'body',
			favicon:'./src/favicon.ico',
			minify:{
				removeComments:true,
				removeEmptyAttributes:true,
				removeEmptyElements:true,
				minifyCSS:true,
				minifyJS:true
			},
			hash:true,
			cache:true,//默认true
			showErrors:true//默认true
			// chunks:[],
			// chunksSortMode:[],
			// excludeChunks:[],
			// xhtml:true

		}),
		new CleanWebpackPlugin(['dist'])
	]
}