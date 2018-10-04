module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/shards'
  ],
  /*
  ** Modules for the app
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: '{{ google_analytics_id }}'
    }],
    ['bootstrap-vue/nuxt'],
  ],
  /*
  ** Sitemap configuration
  */
  sitemap: {
    path: '/sitemap.xml',
    gzip: true,
    generate: true
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        "@babel/plugin-proposal-function-bind", // Stage-0 replacement in babel 7.X
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-transform-runtime", {
          "corejs": 2,
          "regenerate": true
        }]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
