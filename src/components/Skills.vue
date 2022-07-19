<template>
  <div>
    <!-- skill-container -->
    <section class="technical-container" id="technical-container" >
      <span class="heading">{{data.main.skilltitle}}</span>
      <div class="container">
        <div class="skill-section">
          <!-- skills -->
          <div class="skills">
            <div class="skills-bar">
              <div class="linebar" v-for="skills in data.resume.skills" v-bind:key="skills">
                <div class="info">
                  <span>{{skills.name}}</span>
                </div>
                <div class="progress-line">
                  <span :class="skills.level"></span>
                  </div>         
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- service container -->
    <section class="service-container" id="service-container">
      <div class="container">
        <span class="heading">{{data.main.timelinetitle}}</span>
        <div class="timeline">
          <div class="timebar left">
            <div class="content" v-for="work in data.resume.works" v-bind:key="work" >
              <span>{{work.year}}</span>
              <p>{{work.company}}</p>
              <p>{{work.title}}</p>
              <p>{{work.description}}</p>              
            </div>
          </div>
          <div class="timebar right">
            <div class="content" v-for="college in data.resume.clgeducation" v-bind:key="college">
              <span>{{college.year}}</span>
              <p>{{college.school}}</p>
              <p>{{college.degree}}</p>
              <p>{{college.graduated}}</p>
              <p>{{college.description}}</p>
            </div>
          </div>
          <div class="timebar left">
            <div class="content" v-for="school in data.resume.schooleducation" v-bind:key="school">
              <span>{{school.year}}</span>
              <p>{{school.school}}</p>
              <p>{{school.degree}}</p>
              <p>{{school.graduated}}</p>
              <p>{{school.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--skills-container  -->
    <section class="skills-container">
      <div class="container">
        <span class="heading">{{data.main.programmingtitle}}</span>
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src="../images/icons8-html-5-144.png" alt="html" />
            </div>
            <div class="slide">
              <img src="../images/icons8-css3-144.png" alt="css" />
            </div>
            <div class="slide">
              <img src="../images/icons8-sass-144.png" alt="scss" />
            </div>
            <div class="slide">
              <img src="../images/icons8-javascript-144.png" alt="js" />
            </div>
            <div class="slide">
              <img src="../images/icons8-angularjs-144.png" alt="angular" />
            </div>
            <div class="slide">
              <img src="../images/icons8-node-js-144.png" alt="node" />
            </div>
            <div class="slide">
              <img src="../images/icons8-bootstrap-144.png" alt="bootstrap" />
            </div>
            <div class="slide">
              <img src="../images/icons8-github-144.png" alt="github" />
            </div>
            <div class="slide">
              <img src="../images/icons8-node-js-144.png" alt="node" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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