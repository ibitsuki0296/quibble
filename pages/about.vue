<template>
  <div class="wrapper">
    <Sidebar />
    <div class="right-side">
      <h1 class="contents_h1">ABOUT</h1>
      <div class="contents">
        <p class="contents_p">
          紅茶が美味しい国について。<br />
          何か思いの丈を語ると良いかもしれない。
        </p>
        <h2 class="contents_h2">ABOUT MASTER</h2>
        <p class="contents_p">
          管理人について。更新履歴とは別に定義リスト（dl）作りましたのでご活用ください。<br />
          当然ながら中身は適宜書き換えてください。名前以外そのまま使われない想定です。
        </p>
        <dl class="list_dl">
          <dt>Name</dt>
          <dd>かずら しろ</dd>
          <dt>Likes</dt>
          <dd>紫、音楽</dd>
          <dt>Features</dt>
          <dd>セルフレームの眼鏡を愛用中。<br />休日はゲームをしている。</dd>
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
      title: 'ABOUT',
      meta: {
        title: 'ABOUT',
        description: '紅茶が美味しい国について。',
        url: '/about',
        image: '/og_img.jpg',
      },
    }
  },
}
</script>
