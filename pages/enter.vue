<template>
  <div class="wrapper">
    <Sidebar :class="{'on': isActive}" />
    <div class="right-side">
      <span @click="toggle" class="sp-only toggle-button">▼</span>
      <h1 class="contents_h1">TOP</h1>
      <p class="lead">もし入れる必要があったらリード文</p>
      <div class="contents">
        <p class="contents_p">
          今日も紅茶が美味しい国の住人です。などの文章が入ります。<br />
          ただの改行と、<br />
          <span class="line-through">取り消し線はこんなかんじ</span><br />
          取り消し線のあとに改行入れる場合は＜BR /＞入れてあげてください。
        </p>
        <h2 class="contents_h2">解説</h2>
        <p class="contents_p">
          段落の改行はこんなかんじで。長い文章は端までいくとさらっと次の行にいきます。一応一番端はこのくらいの文章量。ただしデバイスによって変わります。ちゃんとレスポンシブには対応しました。リキッドはデザイン的に厳しそうだったから諦めた。
        </p>
        <p class="contents_p">
          更新履歴はディレクトリ「content/novels」内にある.mdを日付降順で5件取得します。<br />
          日付：タイトルでタイトルにリンクがはってあって適宜とべます。
        </p>
        <h2 class="log_title">CHANGE LOG</h2>
        <dl class="log_dl">
          <div v-for="novel in novels" :key="novel.slug">
            <dt><time v-text="$dateFns.format(new Date(novel.date), 'yyyy-MM-dd')" /></dt>
            <dd><NuxtLink :to="novel.path" class="log_link">{{ novel.title }}</NuxtLink></dd>
          </div>
        </dl>
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
      title: 'TOP',
      meta: {
        title: 'TOP',
        description: '紅茶が美味しい国の住人のページ。',
        url: '/enter',
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
    const novels = await $content('novels', params.slug,{deep:true}).sortBy('date', 'desc').limit(5).fetch()
    return {
      novels
    }
  }
}
</script>
