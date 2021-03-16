export default {
  head: {
    title: 'ああ言えば、こう言う。',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'デフォルトの説明文が入ります。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css: ['~/assets/css/reset.css', '~/assets/css/style.css'],
  components: true,
}
