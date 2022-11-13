<template>
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"/>


	
  <div class="container-sm">
    <div class="row">
      <div class="col review-text">Reviews</div>
      <div class="col sort-button-div"><button id="sort-button" v-on:click="sort_function()">Sort by Newest</button></div>
    </div>
    <div class="container-fluid indiv-review-box" v-for="i in temp_review" style="margin-top: 0; padding: 0">
    <div class="content-container">
        <div class="row row-style">
          <div class="col">
            <h2 class="title">{{i.title}}</h2>
          </div>
          <div class="col col-style-right">
            <h6 class="card-subtitle mb-2">Rating: {{i.rate}}/5</h6>
          </div>
        </div>

        <div class="row row-style">
          <p class="card-text">{{i.content}}</p>
        </div>
        
        <div class="row row-style">
          <h6 class="card-subtitle mb-2">{{i.name}}</h6>
        </div>

      </div>
    </div>
    <button class="write-review-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" v-on:click="review_popup()">Write A Review!</button>


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
        <div class="form modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="subtitle">Say Something For</div>
      <div class="title">University of London</div>
      
      <div class="input-container ic1">
        <input id="title" class="input" type="text" placeholder="Title" />
        <label for="title" class="placeholder">Title</label>
      </div>
      <div class="input-container ic2">
        <input id="rating" class="input" type="text" placeholder="Rating" />
        <label for="rating" class="placeholder">Rating</label>
      </div>
      <div class="input-container ic2">
        <input id="review" class="input" type="text" placeholder="Write something here..." />
        <label for="review" class="placeholder">Your Review</label>
      </div>
      <button type="text" class="submit" data-bs-dismiss="modal" v-on:click="submit_review()">submit</button>
    </div>
  </div>
</div>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="review-popup modal-dialog">
      <div class="modal-content">
    <div class="form">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="align-items: right"></button>
      <div class="subtitle">Say something for</div>
      <div class="title">University of London</div>
      
      <div class="input-container ic1">
        <input id="title" class="input" type="text" placeholder="Title" />
        <label for="title" class="placeholder">Title</label>
      </div>
      <div class="input-container ic2">
        <input id="rating" class="input" type="text" placeholder="Rating" />
        <label for="rating" class="placeholder">Rating</label>
      </div>
      <div class="input-container ic2">
        <input id="review" class="input" type="text" placeholder="Write Something Here..." />
        <label for="review" class="placeholder">Your Review</label>
      </div>
      <button type="text" class="submit" v-on:click="submit_review()">submit</button>
    </div>
  </div>
  </div>
  </div>

  </div>

    
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
                    title: "Good Community",
                    rate: "5",
                    date: "20 Aug 2020",
                    name: "Jessica Fiore",
                    content: "If men were rational in their conduct, that is to say, if they acted in the way most likely to bring about the ends that they deliberately desire, intelligence would be enough to make the world almost a paradise. In the main, what is in the long run advantageous to one man is also advantageous to another. But men are actuated by passions which distort their view; feeling an impulse to injure others, they persuade themselves that it is to their interest to do so. They will not, therefore, act in the way which is in fact to their own interest unless they are actuated by generous impulses which make them indifferent to their own interest. "
                },                
                {
                    title: "Title 2",
                    rate: "4",
                    date: "insert date",
                    name: "name",
                    content: "content 2"
                }
            ]
        }
    },
      methods:{
        review_popup(){
          document.querySelector(".review-popup").classList.add("active");
        },

        close_popup(){
          document.querySelector(".review-popup").classList.remove("active");
        },
        submit_review(){
          document.querySelector(".review-popup").classList.remove("active");
        },
        sort_function(){
          let temp = document.getElementById("sort-button").innerText
          console.log(temp)
          if(temp == "Sort By Newest"){
            document.getElementById("sort-button").innerText = "Sort By Oldest"
          }
          else {
            document.getElementById("sort-button").innerText = "Sort By Newest"
          }
        }
        }
        
    }
  
  

    
</script>

<style>
*{
  color: #031b4e
}

.sort-button-div{
  text-align: right;
  margin-top: auto;
  margin-bottom: 0;
  vertical-align: middle;
  padding-bottom: 0;
  padding-top: 12px;
  ;}

#sort-button{
  background-color: #0069fc;
  color: white;
  width: 130px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  padding-top: auto;
  padding-bottom: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 20px;
  
}
.container-sm{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 40px;
  padding-bottom: 24px;
  padding-top: 24px;
}
.form {
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 400px;
  ;
}

.title {
  color: #031b4e;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 10px;
}

.subtitle {
  color: #031b4e;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;

}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #c8dfff99;

  border-radius: 12px;
  border: none;
  box-sizing: border-box;
  color: #031b4e;
  font-size: 18px;
  height: 100%;
  padding: 4px 20px 0;
  outline: 0;
  width: 100%;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: transparent;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}


.submit {
  background-color: #0069fc;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  outline: 0;
  text-align: center;
  width: 100%;
  font-weight: bold;
}

.submit:active {
  background-color: #06b;
}


#uni-review-name {
  color: white;
  font-weight: bold;
}
.review-popup {
  position: absolute;
  top: -150%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  border-radius: 10px;
  text-align: center;
  
  border-radius: 10px;
  text-align: center;

  opacity: 0;
  transform: translate(-50%, -50%) scale(1.25);

  transition: top 0ms ease-in-out 50ms, 
              opacity 50ms ease-in-out 0ms, 
              transform 5ms ease-in-out 0ms;
}

#submit-review-btn{
  margin: 10px;
  width: 90%;
  border-radius: 6px;
  height: 40px;
  border: none;
  background-color: white;
  color: #6Daffe;
  font-weight: bold;
  font-size: 20px;
}

.review-popup ::placeholder{
  text-align: left;  
  vertical-align: top;
  padding-left: 10px;
  padding-right: 10px;
}
/* 
.review-popup input {
  margin-top: 10px;
  border-radius: 10px;
  height: 40px;
  border: none;
} */

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

.write-review-button{
background-color: #0069fc;
color: white;
width: 100%;
height: 55px;
font-size: 24px;
font-weight: bold;
border-radius: 10px;
padding-top: auto;
padding-bottom: auto;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}

.review-popup > .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 17px;
  height: 17px;
  color: #6Daffe;
  background: white;
  text-align: center;
  line-height: 15px;
  border-radius: 15px;
  cursor: pointer;
}

.indiv-review-box{
  height: 300px;
  margin-bottom: 25px;
  padding: 50px;
  border: none;
  border-radius: 10px;
  background-color: #c8dfff99;
  color:  #E2D1F9;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}
.row-style{
  padding: 20px 20px 10px 20px;
}
.col-style-right {
  text-align: right;
  margin-left: 15px;
  vertical-align: middle;
  padding-top: 10px;
}
.review-container{
  width: 83.5%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.review-text {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #031b4e;
}

.title{
  font-weight: bold;
}

.content-container {
  padding: 30px;
}

.modal-content {
  border-radius: 15px !important;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}



</style>