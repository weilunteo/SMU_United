
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
//import * as firebase from "firebase";
//import "firebase/database";
//import { config } from "webpack";


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCRupTz-7gGj0j_th9vfpEwPR7cb5U-Q0o",
    authDomain: "smuexchangeschoolsdb.firebaseapp.com",
    databaseURL: "https://smuexchangeschoolsdb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smuexchangeschoolsdb",
    storageBucket: "smuexchangeschoolsdb.appspot.com",
    messagingSenderId: "444723552496",
    appId: "1:444723552496:web:b34cc45c31d545a609a235"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // import { getDatabase, ref, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

  // const db = getDatabase();

 
//-----Getting data-----//

// function FindData() {
//     const dbref = ref(db);

//     get(child(dbref, 'new zealand'))
//         .then((snapshot) => {
//             if (snapshot.exists()) {
//                 console.log(snapshot.val());
//             }
//             else {
//                 alert("No data found");
//             }
//         })
//         .catch(() => {
//             alert(error);
//         })
// }

// FindData();
