require('dotenv').config()
const { baseUrl } = process.env

export default {
  head: {
    titleTemplate: '%s - ああ言えば、こう言う。',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'デフォルトの説明文が入ります。' },
      { hid: 'og:title', property: 'og:title', content: 'ああ言えば、こう言う。' },
      { hid: 'og:description', property: 'og:description', content: 'デフォルトの説明文が入ります。' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
    ],
    script:[
      { src: 'https://kit.fontawesome.com/bb1405746d.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css: ['~/assets/css/reset.css', '~/assets/css/style.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/date-fns'
  ],
  components: true,
  content: {},
  target: 'static',
}
