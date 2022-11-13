<template>

    <Header/>
    <FeedCard/>
    
</template>
    
    <script> /*Javascript */
    import { toHandlers } from 'vue';
    import Header from '../components/feed-page/Header-Sidebar.vue';
    import FeedCard from '../components/feed-page/FeedCard.vue';
    
    export default {
    name: "FeedView",
    components: {
      Header,
      FeedCard
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