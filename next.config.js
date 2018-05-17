module.exports = {

  webpack: function (cfg, {isServer}) {

    if (!isServer){
      cfg.module.rules.push({
        test: /\.worker\.js$/,
        loader: ['worker-loader']
      })
    }

    return cfg
  }

}
