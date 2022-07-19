<template>
    <!-- About container -->
    <section class="about-container" id="about-container">
      <div class="container">
        <span class="heading" data-aos="zoom-in-up" >{{data.main.abouttitle}}</span>
        <div class="u-container-layout" >
          <div class="image-box" 
          
    >
            <img
              src="../images/DSC_5731.jpg"
              alt="about-image"
              class="u-image"
            />
            <h1>{{ data.main.aboutname }}</h1>
          </div>
          <div class="content-section">
            <h2>{{ data.main.aboutrole }}</h2>
            <p>
             {{data.main.description}}
            </p>
          </div>
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

<style lang="scss" scoped></style>
