const withSourceMaps = require('@zeit/next-source-maps');
module.exports = withSourceMaps({

  webpack(cfg, {isServer}){

    if (!isServer){
      cfg.module.rules.push({
        test: /\.worker\.js$/,
        use: ['worker-loader', 'babel-loader']
      })
    }

    return cfg
  }

})
