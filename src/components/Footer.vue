<template>
  <!-- footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <a href="#"><img src="../images/karthi logo.jpg" alt="logo" /></a>
      </div>
      <div class="footer-content">
        <p>{{ data.main.quotes }}</p>
      </div>
      <nav class="media-icons">
        <ul>
          <li v-for="social in data.main.social" v-bind:key="social">
            <a :href="social.url"><i :class="social.className"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import data from '../static/api/data.json';

export default {
  data() {
    return {
      data:data,
    };
  },
};
</script>

<style lang="scss" scoped></style>
