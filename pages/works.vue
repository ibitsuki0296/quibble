<template>
  <div class="wrapper">
    <Sidebar />
    <div class="right-side">
      <span class="sp-only">▼</span>
      <h1 class="contents_h1">WORKS</h1>
      <p class="lead">作品一覧です。</p>
      <div class="contents">
        <p class="contents_p">
          シリーズで分ける場合は「novels」配下にディレクトリ作ってわけてください。<br />
          リンクとかforでループ回してるのはコピペで。<br />
          scriptって書いてあるところ（このファイルの下の方）もコピペして増やすのを忘れずに。
        </p>
        <h2 class="contents_h2">ex</h2>
        <div class="contents_flex">
          <div class="contents_column">
            <img src="~/assets/img/200_300.png" alt="exのバナー" />
          </div>
          <div class="contents_column">
            <p class="contents_p">
              exの説明書き。<br />
              作品紹介というやつです。
            </p>
            <ul class="contents_ul">
              <li v-for="ex in exs" :key="ex.slug">
                <NuxtLink :to="'/novels/ex/'+ex.slug">{{ ex.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <h2 class="contents_h2">cf</h2>
        <div class="contents_flex">
          <div class="contents_column">
            <img src="~/assets/img/200_300.png" alt="cfのバナー" />
          </div>
          <div class="contents_column">
            <p class="contents_p">
              cfの説明書き。<br />
              作品紹介というやつです。
            </p>
            <ul class="contents_ul">
              <li v-for="cf in cfs" :key="cf.slug">
                <NuxtLink :to="'/novels/cf/'+cf.slug">{{ cf.title }}</NuxtLink>
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
        description: '紅茶が美味しい国の作品一覧。',
        url: '/works',
        image: '/og_img.jpg',
      },
    }
  },
  async asyncData({ $content, params }){
    const exs = await $content('novels/ex', params.slug)
      .sortBy('date','asc')
      .fetch()
    const cfs = await $content('novels/cf', params.slug)
      .sortBy('date','asc')
      .fetch()
    return {
      exs,
      cfs
    }
  },
}
</script>
