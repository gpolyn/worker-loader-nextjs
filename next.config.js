const withSourceMaps = require('@zeit/next-source-maps');
console.log(process.env);
module.exports = withSourceMaps({

  webpack(cfg, {isServer}){

    const { NODE_ENV } = process.env;
    // if (!isServer && NODE_ENV === 'production'){
    if (false){
      cfg.module.rules.push(
        {
          test: /\.worker\.js$/,
          // use: ['worker-loader', 'babel-loader']
          // use: [{loader: 'worker-loader', options:{publicPath:'/workers/'}}, 'babel-loader']
          use: ['babel-loader', {loader: 'emit-file-loader', options: {name: 'dist/dist/[path][name].[ext]'}}]
        },
				// {
				// 	test: /\.worker\.js$/,
				// 	loader: 'emit-file-loader',
				// 	options: {
				// 		name: 'dist/[path][name].[ext]'
				// 	}
				// },
      )
    }

    return cfg
  }

})
