<template>
  <div class="wrapper">
    <Sidebar />
    <div class="right-side">
      <h1 class="contents_h1">WORKS</h1>
      <p class="lead">作品一覧です。</p>
      <div class="contents">
        <ul class="contents_ul">
          <li v-for="work in works" :key="work.slug">
            <NuxtLink :to="'/novels/'+work.slug">{{ work.title }}</NuxtLink>
          </li>
        </ul>
      </div><!-- contents -->
    </div><!-- right-side -->
  </div><!-- wrapper -->
</template>
<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data(){
    return {
      title: 'WORKS',
      meta: {
        title: 'WORKS',
        description: '紅茶が美味しい国の作品一覧。',
        url: '/works',
        image: '/og_img.jpg',
      },
    }
  },
  async asyncData({ $content, params }){
    const works = await $content('novels', params.slug)
      .sortBy('date','asc')
      .fetch()
    return { works }
  },
}
</script>
