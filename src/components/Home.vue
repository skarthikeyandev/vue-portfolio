<template>
    <!-- profile container -->
    <section class="profile-container" id="profile-container">
      <a @click="backTop" class="backto-top"
        ><i class="fas fa-chevron-up"></i></a>
      <nav class="social">
        <ul>
          <li v-for="social in data.main.social" v-bind:key="social">
            <a :href="social.url">{{social.name}} <i :class="social.className"></i></a>
          </li>
        </ul>
      </nav>
      <div class="profile-contents">
        <img src="../images/cartoon.png" alt="me" />
        <span>Hello, I'm</span>
        <h1>{{ data.main.name }}</h1>
        <p>{{ data.main.occupation }}</p>
        <a class="main-btn" :href="github"
          > View my work <i class="fab fa-github"></i
        ></a>
      </div>
    </section>
</template>

<script>
import data from '../static/api/data.json';

export default {
  
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  
  data() {
    return {
      data:data,
    };
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    handleScroll() {
      let mybutton = document.querySelector(".backto-top");
      if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
