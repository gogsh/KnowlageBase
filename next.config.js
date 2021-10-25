require('dotenv').config()

module.exports = {
  env: {
    DB_URI: process.env.DB_URI,
    // DB_URI: process.env.LOCAL_URI,
    DOMAIN: process.env.DOMAIN,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  async rewrites() {
    return [
      {
        source: '/api/:any*',
        destination: '/api/:any*',
      },
      {
        source: '/:any*',
        destination: '/',
      },
    ]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name][ext]',
      },
    })

    return config
  },
}
