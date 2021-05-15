<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="contents_h1">{{ novel.title }}</h1>
      <nuxt-content :document="novel" />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }){
    const novel = await $content('novels', params.slug).fetch()
    return { novel }
  },
  head () {
    const title = this.novel.title
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: `${this.novel.description}` },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: `${this.novel.description}` },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}${this.$route.path}` },
        { hid: 'og:image', property: 'og:image', content: `${process.env.baseUrl}${this.novel.image}` }
      ]
    }
  },
}
</script>
