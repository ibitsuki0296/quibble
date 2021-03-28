<template>
  <div class="sidebar">
    <div class="side-wrapper">
      <div class="site-title">
        <NuxtLink to="/">ああ言えば、<br />こう言う。</NuxtLink>
      </div>
      <nav>
        <ul class="global-nav">
          <li><NuxtLink to="/enter">TOP</NuxtLink></li>
          <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
          <li><NuxtLink to="/works">WORKS</NuxtLink></li>
          <li><NuxtLink to="/link">LINK</NuxtLink></li>
          <li><NuxtLink to="/mail">MAIL</NuxtLink></li>
        </ul>
      </nav>
      <ul class="sns-list">
        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
