<template>
            <div id="reviews">
            <!-- INDIV REVIEW -->
            <div v-for="i of temp_review" class="card review">
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col my-1">
                                <h5 class="card-title">{{i.title}}</h5>
                                
                                <h6 class="fa fa-star"></h6>
                                <h6 class="fa fa-star"></h6>
                                <h6 class="fa fa-star"></h6>
                                <h6 class="fa fa-star"></h6>
                                <h6 class="fa-regular fa-star"></h6>
                                <span>{{i.review}}</span>
                            </div>
                            <div class="col text-end">
                                <h6 class="card-subtitle text-muted my-2">20 Aug 2020</h6>
                                <h6 class="card-subtitle text-muted">Jessica</h6>
                            </div>   
                        </div>
                        <div class="my-2">
                            {{i.content}}
                        </div>
                    </div>
                </div>
            </div>
            <!-- INDIV REVIEW -->

        </div>

        <!-- REVIEW BUTTON -->
        <button class="write-review-button">
            Write a Review!
        </button>
        <!-- REVIEW BUTTON -->

        <!-- REVIEW POP UP -->
        <div class="review-popup">
            <div class="close-btn">&times;</div>
            <div><h3 id="uni-review-name">University Name</h3></div>
            <input type="text" size="30px" placeholder="Rating (change to slider or stars?)"><br/>
            <input type="text" size="30px" placeholder="Title"><br/>
            <input type="text" size="30px" style="height: 80px;" placeholder="Your Review..."/><br/>
            <button id="submit-review-btn">
                Submit
            </button>
        </div>
        <!-- REVIEW POP UP -->

        <!-- REVIEWS SECTION -->


    
</template>

<script>

    import { toHandlers } from 'vue';
    
    export default {
      name: "ReviewSection",
      components: {
    
    },
    data() {
        return {
            temp_review: [
                {
                    title: "Title",
                    review: "5",
                    date: "20 Aug 2020",
                    name: "Jessica Fiore",
                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptas cumque veritatis sed, fuga id vitae assumenda aliquam, harum nam blanditiis repudiandae possimus eum reprehenderit pariatur quasi delectus atque sunt."
                },
                {
                    title: "Title 2",
                    review: "4",
                    date: "insert date",
                    name: "name",
                    content: "content 2"
                }
            ]
        }
    },
      methods:{
        
    }
  
  
    }
    
    </script>

<style>

:root {
    --primary: #6DAFFE;
    --light: #EEEEEE;
    --dark: #6DAFFE;
    --shadow: lightgrey;
}


.review {
  width: 85%;
  margin: 15px auto;
}

.review-popup {
  position: absolute;
  top: -150%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  padding: 20px 30px;
  background: var(--dark);
  border-radius: 10px;
  text-align: center;

  opacity: 0;
  transform: translate(-50%, -50%) scale(1.25);

  transition: top 0ms ease-in-out 200ms, 
              opacity 200ms ease-in-out 0ms, 
              transform 20ms ease-in-out 0ms;
}

.review-popup.active {
  top: 50%;
  opacity: 100%;
  z-index: 5;
  transform: translate (-50%, -50%) scale(1);
  position: fixed;

  transition: top 0ms ease-in-out 0ms, 
              opacity 200ms ease-in-out 200ms, 
              transform 20ms ease-in-out 200ms;
}

.review-popup ::placeholder{
  text-align: left;  
  vertical-align: top;
  padding-left: 10px;
  padding-right: 10px;
}

.review-popup .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 17px;
  height: 17px;
  color: var(--dark);
  background: var(--light);
  text-align: center;
  line-height: 15px;
  border-radius: 15px;
  cursor: pointer;
}

#submit-review-btn{
  margin: 10px;
  width: 80%;
  border-radius: 6px;
  height: 40px;
  border: none;
  background-color: var(--light);
  color: var(--dark);
}

.review-popup input {
  margin-top: 10px;
  border-radius: 10px;
  height: 40px;
}

.review-popup input a{
  display: block;
  text-align: right;
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
}

#uni-review-name {
  color: var(--light)
}

.write-review-button {
  width: 200px;
  border-radius: 10px;
  height: 40px;
  background-color: var(--dark);
  color: var(--light);
  width: 85%;
  margin-left: 7.5%;
  margin-right: 7.5%;
  
  appearance: none;
  border: none;
  outline: none;
}

</style>