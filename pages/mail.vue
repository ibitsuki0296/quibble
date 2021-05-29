<template>
  <div class="wrapper">
    <Sidebar />
    <div class="right-side">
      <h1 class="contents_h1">MAIL</h1>
      <div class="contents">
        <p class="contents_p">
          メールフォーム。
        </p>
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
      title: 'MAIL',
      meta: {
        title: 'MAIL',
        description: '紅茶が美味しい国への連絡方法。',
        url: '/mail',
        image: '/og_img.jpg',
      },
    }
  },
}
</script>
