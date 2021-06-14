<template>
  <div class="wrapper dark">
    <Sidebar :class="{'on': isActive}" />
    <div class="right-side">
      <span @click="toggle" class="sp-only toggle-button">▼</span>
      <h1 class="contents_h1">WORKS</h1>
      <p class="lead">BLなどの作品一覧です。</p>
      <div class="contents">
        <p class="contents_p">
          やおいなどの作品用。
        </p>
        <h2 class="contents_h2">sp-dark</h2>
        <div class="contents_flex">
          <div class="contents_column">
            <img src="~/assets/img/200_300.png" alt="sp-darkのバナー" />
          </div>
          <div class="contents_column">
            <p class="contents_p">
              sp-darkの説明書き。<br />
              作品紹介というやつです。
            </p>
            <ul class="contents_ul">
              <li v-for="sp in sps" :key="sp.slug">
                <NuxtLink :to="'/sp-dark/'+sp.slug">{{ sp.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
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
        description: '紅茶が美味しい国の特殊作品一覧。',
        url: '/dark',
        image: '/og_img.jpg',
      },
      isActive: false,
    }
  },
  methods: {
    toggle(){
      this.isActive = !this.isActive
    }
  },
  async asyncData({ $content, params }){
    const sps = await $content('sp-dark', params.slug)
      .sortBy('date','asc')
      .fetch()
    return {
      sps
    }
  },
}
</script>
