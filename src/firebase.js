import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDXibMpmkgLE-9bXeN6GwUmy2K5z67MMAY",
    authDomain: "loginreact-26afb.firebaseapp.com",
    projectId: "loginreact-26afb",
    storageBucket: "loginreact-26afb.appspot.com",
    messagingSenderId: "304902532902",
    appId: "1:304902532902:web:3cba5b8a54f39529b1dbe7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}

  