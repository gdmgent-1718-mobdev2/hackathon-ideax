import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeOWjcH7UO7oiPeR_RLWJNVz-vPY8yTHo",
    authDomain: "ideax-4a007.firebaseapp.com",
    databaseURL: "https://ideax-4a007.firebaseio.com",
    projectId: "ideax-4a007",
    storageBucket: "ideax-4a007.appspot.com",
    messagingSenderId: "610268894822"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
