<template>
    <HeaderSidebar/>
    <div id="test">

        <!-- CREATE POSTS -->
        <div class="container d-flex flex-wrap justify-content-center align-items-center px-5">
        <div class="create row">
                <div class="col-lg-12">
                <div class="tab-content null" id="pills-tabContent-2">
                    <div class="tab-pane fade show active" id="profile-feed" role="tabpanel" aria-labelledby="pills-feed-tab">
        
                            <div class="create-card card w-100 h-150" id="post-modal-data">
                                <!-- Create Post Section-->
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title">Create Post</h4>
                                    </div>
                                    
                                </div>
                                <!-- to add post component here-->

                                <div class="card-body">

                                    <div class="d-flex align-items-center">
                                        <div class="user-img">
                                            <img class="rounded-circle" :src="current_user.avatar">
                                        </div>
                                        <form class="ml-3 w-100">
                                            <input type="text" placeholder="Write something here..." class="rounded form-control" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="border: none;">
                                        </form>
                                    </div>

                                <!-- POST MODAL -->
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content bg-light">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Creating Post...</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="form mx-3">
                                            <div class="mb-4">
                                                <label for="title" class="input-label fw-semibold mb-1 ml-3">Title</label>
                                                <input v-model="title" type="text" name="text" id="text" class="form-control" style="background-color: #c8dfff99;">
                                            </div>

                                            <div class="mb-4">
                                                <label for="content" class="input-label fw-semibold mb-1">What's on your mind?</label>
                                                <textarea v-model="content" type="text" name="content" id="content" class="form-control" style="height:200px; background-color: #c8dfff99"></textarea>
                                            </div>
                                        </div>
                                           
                                        </div>
                                        <div class="modal-footer">
                                            <div class="input-control w-100 mx-3">
                                                <input  v-on:click="addPost(), perform_DOM()" data-bs-dismiss="modal" type="submit" name="submit" class="input-submit btn btn-primary w-100 d-block align-items-center justify-content-center fw-bold" value="Post">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                          
                                </div>  <!--End of card body-->
                            </div>

                        </div>
                    </div>
                </div>

            </div>


<!-- 
        <post
        v-for='(value, idx) in postList' 
            v-bind:key='idx' 
            v-bind:title='title' 
            v-bind:content='content'
            v-bind:idx='idx'
            v-on:click='addPost'
        ></post> -->

        <!-- POSTS -->
        <div class="post row"> 
                <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                        <div class="me-2">
                            <img class="rounded-circle img-fluid" :src="creator.avatar" alt="">
                        </div>
                        <div class="w-100">

                            <div>
                                <h6 class="mb-0 d-inline-block user">{{creator.user}}</h6>
                                <p class="mb-0 text-primary ">{{creator.time}}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- Post Title & Content -->
                <div class="mt-3 mb-0">
                    <p class="fw-bold fs-5">For Paris/France students</p>
                    <p>
                        Would anyone be interested in going on a day trip from Paris to Mont St Michel and the Caen WW2 Memorial Museum on 11 September, Sunday? Hoping to rent a car. Timing can be flexible. Leave your comments below if interested!! </p>
                </div>

                <!--Like & Comments-->

                <div class="postition-absolute d-flex align-items-center">
                    <div class="ms-1">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <button v-on:click="incrementLikes()" type="button" class="btn btn-outline-light"><img src="../assets/img/thumbs-up.png" class="img-fluid" alt="">
                                </button><b>{{likes}} Likes</b>
                            </li>
                            <li class="list-inline-item">
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <img src="../assets/img/comments.png" class="img-fluid" style="width: 24px; height:24px;">
                                </button><b>{{comments.length}} Comments</b>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="collapse" id="collapseExample">
                    <div class="card card-body-collapse">
                        <comments 
                            :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
                            :comments="comments"
                            :current_user="current_user"
                            :time="current_user.time"
                            @submit-comment="submitComment"
                        ></comments>
                    </div>
                </div>

      </div>
  
    </div>
    </div>

  </template>
  
  <script>
import { increment, collection, query, where, getDocs, doc, getDoc, setDoc, getFirestore } from '@firebase/firestore';
import Comments from '../components/community-page/Comments.vue'
import HeaderSidebar from '../components/feed-page/HeaderSidebar.vue';
import db from "../firebase/firebaseInit";
import firebase from 'firebase/compat/app';
import { getEventListeners } from 'events';

  export default {
    name: 'app',
    components: {
      Comments,
      HeaderSidebar,
    },
    data() {
      return {
        title: "",
        content: "",
        retrieve_content: "",
        likes: 0,
        click: true,
        postList:[],
        creator: {
          avatar:'https://ui-avatars.com/api/?name=Jessica+Fiore&background=random',
          user: 'jessicafiore',
          time: '6 hrs ago'
        },
        current_user: {
          avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
          user: 'johndoe',
          time: '1 sec ago'
        },
        comments: [
          {
            id: 1,
            user: 'alexkoh',
            avatar: 'https://ui-avatars.com/api/?name=Alex+Koht&background=random',
            text: "Am hoping to visit these attractions next Sunday too",
            time: '3 hrs ago'
          },
          {
            id: 2,                            
            user: 'jermainesim',
            avatar: 'https://ui-avatars.com/api/?name=Jermaine+Sim&background=random',
            text: "Let's goooooo!!",
            time: '1 hr ago'
          },
          {
            id: 3,                            
            user: 'nathanfoo',
            avatar: 'https://ui-avatars.com/api/?name=Nathan+Foo&background=random',
            text: "I'm interested :)",
            time: '20 mins ago'
          },
        ]
      }
    },
    setup() {
        const db = getFirestore();
        return { db };
    },
    mounted() {
        this.getAllPosts();
        this.getPost();
        this.addPost();
    },
    methods: {
      async getAllPosts() {
        const q = query(collection(this.db, "community"))

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
        })
      },
      async getPost() {
        console.log("TEST")
        const docRef = doc(this.db, "community", "post3")
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            // YOUR RESPONSE!
            this.retrieve_content = docSnap.data()
            console.log(docSnap.data())
        } else {
            console.log("No such document!")
        }
      },
      async addPost() {
        await setDoc(doc(this.db, "community", "post3"), {
            comments: [],
            creator: { 
                avatar:'https://ui-avatars.com/api/?name=John+Doe&background=random',
                text: '',
                time: '1 sec ago',
                user: 'johndoe'
            },
            currentUser: { 
                avatar:'https://ui-avatars.com/api/?name=John+Doe&background=random',
                text: '',
                time: '1 sec ago',
                user: 'johndoe'
             },
             
        })
      },
    perform_DOM(){
        console.log("START DOM")
        
        // let div = document.createElement("div")
        // div.classList.add("post")
        // div.classList.add("row")
        // div.setAttribute("id", "ye")
        // div.innerHTML = 'testtest'

        // let test = document.getElementById("ye").innerText()
        // console.log(test)


        // let temp = document.getElementById("yes").innerText
        // let content_string = this.content
        // console.log(content_string)
        // let title_string = this.title
        // var div = document.createElement("div")   
        // div.classList.add('post')
        // div.classList.add('row')
        // div.setAttribute("id", "ye")
        // var textNode = '';
        // document.createTextNode(textNode)
        // div.value = textNode;
        // div.value = "yessss"


        // document.getElementById("ye").innerHTML = `
        // <div class="mt-3 mb-0">
        //     <p class="fw-bold fs-5">${title_string}</p>
        //     <p>
        //         ${content_string}
        //     </p>
        // </div>`

        console.log("END DOM")
      },
      submitComment: function(reply) {
        this.comments.push({
          id: this.comments.length + 1,
          user: this.current_user.user,
          avatar: this.current_user.avatar,
          text: reply,
          time: this.current_user.time
        });
      },

      incrementLikes() {
        // console.log(this.click)
            if(this.click){
                this.likes++
                this.click = false;
            }else{
                this.likes--
                this.click = true;
            }
        },


    }

    }

  </script>
  
  <style>
  #test {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  a {
    text-decoration: none;
  }
  
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ececec;
    margin: 1em 0;
    padding: 0;
  }
  
  .comments-outside {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    max-width: 600px;
  }
  
  .comments-header {
    background-color: #C8C8C8;
    padding: 10px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: #333;
    min-height: 80px;
    font-size: 20px;
  }
  
  .comments-header .comments-stats span {
    margin-left: 10px;
  }
  
  .post-owner {
    display: flex;
    align-items: center;
  }
  
  .post-owner .avatar > img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  
  .post-owner .username {
    margin-left: 5px;
  }
  
  .post-owner .username > a {
    color: #333;
  }

  </style>
