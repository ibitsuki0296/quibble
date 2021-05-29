<template>
  <div class="wrapper">
    <div class="container">
      <ol class="bread">
        <li><NuxtLink to="/enter">TOP</NuxtLink></li>
        <li><NuxtLink to="/works">WORKS</NuxtLink></li>
        <li>here</li>
      </ol>
      <h1 class="contents_h1">{{ novel.title }}</h1>
      <nuxt-content :document="novel" />
      <ul class="pagination">
        <li v-if="prev">
          <NuxtLink :to="{ params: { slug: prev.slug } }">
             ＜＜ {{ prev.title }}
          </NuxtLink>
        </li>
        <li v-if="next">
          <NuxtLink :to="{ params: { slug: next.slug } }">
            {{ next.title }} ＞＞
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }){
    const novel = await $content('novels/ex', params.slug).fetch()
    const [prev,next] = await $content('novels/ex')
      .only(['title', 'slug'])
      .sortBy('date','asc')
      .surround(params.slug)
      .fetch()
    return {
      novel,
      prev,
      next
    }
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
