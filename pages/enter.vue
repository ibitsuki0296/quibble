<template>
  <div class="wrapper">
    <Sidebar />
    <div class="right-side">
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
        <h2 class="record_title">CHANGE LOG</h2>
        <dl class="record_dl">
          <dt><time>2021-03-15</time></dt>
          <dd>制作開始</dd>
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
    }
  },
}
</script>
