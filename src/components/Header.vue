<template>
  <!-- Header -->
 
  <nav class="header-container">
  <div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
     <a href="#profile-container"> <span>K</span>ARTHI</a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <h1>hello world</h1>
  </div>
  
  <div class="nav-links">
    <a href="#profile-container">HOME</a>
    <a href="#about-container">ABOUT</a>
    <a href="#resume-container">RESUME</a>
    <a href="#technical-container">SKILLS</a>
    <a href="#service-container">PROJECT</a>
    <a href="#contact-container">CONTACT</a>
  </div>
</div>
<div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
  </nav>
   
</template>
<script>
import data from "../static/api/data.json";
export default {
  created() {
    window.addEventListener("scroll", this.progressScroll);
  },
  data() {
    return {
      data: data,
      workSpaceShowStatus: false,
    };
  },
  methods: {
    progressScroll() {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    },
    
  },
};
</script>
<style lang="scss" scoped></style>
