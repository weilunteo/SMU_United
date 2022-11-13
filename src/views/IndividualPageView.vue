<template>

  <Header/>
  <IndividualSection/>
  <ReviewSection/>
  <ModuleSection/>
    
    
</template>
    
    <script> /*Javascript */
    import { toHandlers } from 'vue';
    import Header from '../components/feed-page/Header-Sidebar.vue';
    import IndividualSection from '../components/individual-page/IndividualSection.vue';
    import ReviewSection from '../components/individual-page/ReviewSection.vue';
    import ModuleSection from '../components/individual-page/ModuleSection.vue';
    
    export default {
    name: "IndividualPageView",
    components: {
      Header,
      IndividualSection,
      ReviewSection,
      ModuleSection
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