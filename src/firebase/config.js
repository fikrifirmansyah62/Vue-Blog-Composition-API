// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD1cOyEyb-88sk2RNa3kIkP7zOgoTDoI_A",
//   authDomain: "vueblog-8fdc7.firebaseapp.com",
//   projectId: "vueblog-8fdc7",
//   storageBucket: "vueblog-8fdc7.appspot.com",
//   messagingSenderId: "839440384756",
//   appId: "1:839440384756:web:3d339764fd9f1a15be14a1",
// };

// firebase.initializeApp(firebaseConfig);

// const projectFirestore = firebase.firestore();

// export { projectFirestore };

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1cOyEyb-88sk2RNa3kIkP7zOgoTDoI_A",
  authDomain: "vueblog-8fdc7.firebaseapp.com",
  projectId: "vueblog-8fdc7",
  storageBucket: "vueblog-8fdc7.appspot.com",
  messagingSenderId: "839440384756",
  appId: "1:839440384756:web:3d339764fd9f1a15be14a1",
};

const app = initializeApp(firebaseConfig);
