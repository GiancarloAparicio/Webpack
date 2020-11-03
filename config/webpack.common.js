const paths = require('./paths');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: [paths.src + '/index.js'],

	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/',
	},

	plugins: [
		new Dotenv({
			path: paths.env,
		}),
		new CleanWebpackPlugin(),

		new CopyWebpackPlugin([
			{
				from: paths.static,
				to: 'assets',
				ignore: ['*.DS_Store'],
			},
		]),

		new HtmlWebpackPlugin({
			title: 'Webpack',
			favicon: paths.static + '/favicon.png',
			template: paths.src + '/index.pug',
			filename: 'index.html', // output file
		}),
	],

	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},

			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1 },
					},
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					context: 'src', // prevent display of src/ in filename
				},
			},

			{
				test: /\.(woff(2)?|eot|ttf|otf|)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: '[path][name].[ext]',
					context: 'src',
				},
			},
		],
	},
};
