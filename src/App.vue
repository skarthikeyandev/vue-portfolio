<template>
  <div id="app">    
    <Header />
    <Home />
    <About />
    <Resume />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Resume from "./components/Resume.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Resume,
    Skills,
    Contact,
    Footer,
  },
  data() {
    return {
      nightMode: false,
    };
  },
  methods: {   
    watch: {
      nightMode: function() {
        localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      }
    },
    created() {
      this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
    },
  },
};
</script>

<style>
@import "./css/style.css";

</style>
