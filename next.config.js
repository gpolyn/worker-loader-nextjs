module.exports = {

  webpack: function (cfg, {isServer}) {

    if (!isServer){
      cfg.module.rules.push({
        test: /\.worker\.js$/,
        use: ['worker-loader', 'babel-loader']
      })
    }

    return cfg
  }

}
