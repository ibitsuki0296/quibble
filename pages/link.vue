<template>
  <div class="wrapper">
    <Sidebar />
    <div class="right-side">
      <span class="sp-only">▼</span>
      <h1 class="contents_h1">LINK</h1>
      <div class="contents">
        <p class="contents_p">
          リンクページ。
        </p>
        <h2 class="contents_h2">ABOUT LINK</h2>
        <p class="contents_p">
          管理人についてと同じ様式のリンク案内。<br />
          バナー作りませんでした。今回実は背景1点も画像使ってないんですよ……。<br />
          （CSSオンリー）
        </p>
        <dl class="list_dl">
          <dt>Site</dt>
          <dd>ああ言えば、こう言う。</dd>
          <dt>Master</dt>
          <dd>かずら しろ</dd>
          <dt>Url</dt>
          <dd>https://xxx.jp/</dd>
        </dl>
        <h2 class="contents_h2">NOVELS・ILLUST</h2>
        <ul class="contents_ul">
          <li><a href="#" target="_blank">サイト名</a></li>
          <li><a href="#" target="_blank">サイト名</a></li>
          <li><a href="#" target="_blank">サイト名</a></li>
        </ul>
        <h2 class="contents_h2">MUSIC</h2>
        <ul class="contents_ul">
          <li><a href="#" target="_blank">サイト名</a></li>
          <li><a href="#" target="_blank">サイト名</a></li>
          <li><a href="#" target="_blank">サイト名</a></li>
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
      title: 'LINK',
      meta: {
        title: 'LINK',
        description: '紅茶が美味しい国のリンクページです。',
        url: '/link',
        image: '/og_img.jpg',
      },
    }
  },
}
</script>
