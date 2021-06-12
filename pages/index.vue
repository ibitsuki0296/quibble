<template>
  <div class="top-wrapper">
    <div class="top left-side">
      <h1 class="site-title">ああ言えば、<br class="pc-only" />こう言う。</h1>
      <a class="button" href="/enter">Enter</a>
    </div><!-- left-side -->
    <div class="top right-side">
      <p class="lead">Words that go beyond other words.</p>
    </div><!-- right-side -->
  </div><!-- top-wrapper -->
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: null,
      title: 'ああ言えば、こう言う。',
      meta: [
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}` },
        { hid: 'og:image', property: 'og:image', content: `${process.env.baseUrl}/img/og-img.jpg` },
      ],
    }
  },
}
</script>
