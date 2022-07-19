<template>
    <!-- resume-container -->
    <section class="resume-container" id="resume-container" >
      <div class="container">
        <span class="heading">{{data.main.quotes1.sectiontitle}}</span>
        <p>{{data.main.quotes1.description}}</p>
        <div class="download-btn">
          <a href="#" class="main-btn" download
            ><i class="fas fa-download"></i> DOWNLOAD CV</a
          >
        </div>
        <div class="download-btn">
          <a class="hire-btn" href="#contact-container">HIRE ME</a>
        </div>
      </div>
    </section>
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

<style lang="scss" scoped>
</style>