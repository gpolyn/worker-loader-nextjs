const withSourceMaps = require('@zeit/next-source-maps');
module.exports = withSourceMaps({

  webpack(cfg, {isServer}){

    if (!isServer){
      cfg.module.rules.push(
        {
          test: /\.worker\.js$/,
          use: ['worker-loader', 'babel-loader']
          // use: [{loader: 'worker-loader', options:{publicPath:'/workers'}}, 'babel-loader']
        },
				{
					test: /\.worker\.js$/,
					loader: 'emit-file-loader',
					options: {
						name: 'dist/[path][name].[ext]'
					}
				},
      )
    }

    return cfg
  }

})
