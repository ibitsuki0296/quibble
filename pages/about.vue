<template>
  <div class="wrapper">
    <Sidebar :class="{'on': isActive}" />
    <div class="right-side">
      <span @click="toggle" class="sp-only toggle-button">▼</span>
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
        <h2 class="contents_h2">CAUTION!</h2>
        <p class="contents_p">
          このサイトにはこっそりとBL・成人向けのコンテンツがあります。<br />
          18歳未満の方・苦手な方はご注意ください。<br />
          問題ない方はサイトのどこかにあるスイッチをオンにしてご覧ください。
        </p>
        <div class="switch">
          <label class="switch_label">
            <input type="checkbox" class="switch_input" v-model="checked" true-value="kidding?" false-value="" />
            <span class="switch_content"></span>
            <span class="switch_circle"></span>
          </label>
          <label for="switch_input">
            <NuxtLink class="fulffy" to="/dark">{{ checked }}</NuxtLink>
          </label>
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
      title: 'ABOUT',
      meta: {
        title: 'ABOUT',
        description: '紅茶が美味しい国について。',
        url: '/about',
        image: '/og_img.jpg',
      },
      checked: '',
      isActive: false,
    }
  },
  methods: {
    toggle(){
      this.isActive = !this.isActive
    }
  },
}
</script>
