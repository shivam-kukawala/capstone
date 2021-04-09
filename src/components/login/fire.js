import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA9-_6fsjM9J8OosukMucNXLX-vGWXNqVo",
    authDomain: "login-41f60.firebaseapp.com",
    projectId: "login-41f60",
    storageBucket: "login-41f60.appspot.com",
    messagingSenderId: "389509388129",
    appId: "1:389509388129:web:2511f4169b5d00151a9720"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;