export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'peterlillian.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-pswipe', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  hooks: {
    'content:file:beforeParse': (document) => {
      if (document.extension === '.md') {
        document.data = document.data.replace(/<img/gi, '<v-img')
        document.data = document.data.replace(/ \/>/gi, '></v-img>')
        document.data = document.data.replace(/ style="[^"]*"/gi, '')
        return document
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    followSymlinks: true,
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*'
      }
    }
  }
}
