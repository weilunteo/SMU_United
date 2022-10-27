<template>

  <NavigationBar/>
  <HeroSection/>
  <FeatureSection/>
  <Footer/>
  
  </template>
  
  <script> /*Javascript */
  import NavigationBar from '../components/landing-page/NavigationBar.vue'
  import HeroSection from '../components/landing-page/HeroSection.vue'
  import FeatureSection from '../components/landing-page/FeatureSection.vue';
  import Footer from '../components/landing-page/Footer.vue';
  
  export default {
  name: "HomeView",
  components: {
    NavigationBar,
    HeroSection,
    FeatureSection,
    Footer
  },
  data (){
    return{
        
    }
  },
  methods:{
  
  }
  
  }
  </script>
  
  
  <style> /* CSS*/
  </style>