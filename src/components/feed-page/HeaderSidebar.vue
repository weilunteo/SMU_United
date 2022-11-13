<template>
  <nav id="top-nav"> <!-- TOP NAVIGATION BAR -->
      <div class="top-container"> <!-- TOP CONTAINER -->
          
    
          <div class="top-header"> <!-- SEARCH BAR -->
            <div class="top-header-links"><router-link to="/feed">HOME</router-link></div>
            <div class="top-header-links"><router-link to="/recommendation">RECOMMENDATION</router-link></div>
            <div class="top-header-links"><router-link to="/community-test">YOUR COMMUNITY</router-link></div>
          </div> <!-- END OF SEARCH BAR -->
          <div> <!-- HI, NAME -->
            <div class="dropdown">
                <img id = "avatar" src='https://ui-avatars.com/api/?name=John+Doe&background=random'>
              <ul class="dropdown-menu">
                <li><router-link to="/" >Sign Out</router-link></li>
              </ul>
            </div>
          </div> <!-- END OF HI, NAME -->
      </div> <!-- END OF TOP CONTAINER -->
    </nav><!-- END OF TOP NAVIGATION BAR -->

    <!-- <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->


  
     
</template> 
    
  
    <script>

    import { toHandlers } from 'vue';
    
    export default {
      name: "HeaderSidebar",
      components: {
    
    },
    data() {
        return {

            country_name:["indonesia", "croatia", "jakarta"],
            records: [
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Customer Relationship Management",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Digital Marketing In Tourism",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Digital Trends and Analytics in Marketing",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Digital and Social Media Marketing",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Social Network Analysis",
                    ApplicableCourseArea : "Corp Comm Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Entrepreneurship",
                    ApplicableCourseArea : "Entrepreneurship Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "E-Marketing",
                    ApplicableCourseArea : "Technology & Entrepreneurship"
                },
                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Indonesian Language and Culture",
                    ApplicableCourseArea : "Asian Studies"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Religion and Politics in South Asia",
                    ApplicableCourseArea : "Asian Studies"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Area Studies: AFROMEAS",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "International Politics",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Introduction to International Relations",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Politics of Global Environmental Change",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Politics to International Cooperation: Development As The Focus",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Political Economy of Tourism in International Relations",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Politics of Global Environmental Change",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "The Politics of Tourism in International Cooperation",
                    ApplicableCourseArea : "Globalisation"
                },

                ]
            
        }
    },
      methods:{
        hamburgerClick(){
          const hamburgerSelector = document.querySelector('.hamburger');
          const mobile_menu = document.querySelector('.mobile-nav');

          hamburgerSelector.classList.toggle('is-active');
          mobile_menu.classList.toggle('is-active')
        },
        
        signout(){
          const signout = document.querySelector('#signout');
          signout.classList.toggle('is-active')
        }
  
  
      }
    }
    
    </script>
    
    <style>

    :root {
      --primary: #0069fc;
      --light: #EEEEEE;
      --dark: #0069fc;
      --shadow: lightgrey;
    }

    #popup-signout .is-active {
      background-color: white;
    }


    .top-container{
      max-width: 1280px;
      margin: 0 auto;
      position: relative;

      display: flex; 
      align-items: center;
      justify-content: space-between;
      vertical-align: middle;
    }

    @media only screen and (max-width: 768px) {
      .top-header-links a{
        font-size: 10px;
      }
}


    #top-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      background-color: #0069fc;
      padding: 16px 32px;
      border-bottom: 3px solid var(--primary);
      margin-bottom: 20px;
      height: 100px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

   

    .hi-text{
      color: #FFF;
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 2px;
      position: absolute;
      right: 0px;
      top: 0px;
      margin-bottom: 0px;
      display: flex;
      justify-content: center;
      margin-top: 12px;
    }

    .top-header {
      display: flex;
    }

    .top-header-links {
      margin-right: 20px;
      margin-top: 20px;
      margin-left: 0px;
    }

    .top-header-links a {
      text-decoration: none;
      font-size: 18px;

      color: var(--light);
      font-weight: bold;
    }

    .top-header-links a:hover, .top-header-links a:active{
      color: black;
    }

    #avatar {
      border-radius: 50% ;
    }

    
    
    </style>
