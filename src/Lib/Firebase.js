import firebase from "firebase"

const config = {
    apiKey: "AIzaSyB_dprish191mOgu26gm-zj0Ed9Jiyp_O4",
    authDomain: "dailybugle-fa63a.firebaseapp.com",
    databaseURL: "https://dailybugle-fa63a-default-rtdb.firebaseio.com",
    projectId: "dailybugle-fa63a",
    storageBucket: "dailybugle-fa63a.appspot.com",
    messagingSenderId: "101793039981",
    appId: "1:101793039981:web:bf35e5c74b40e5c4a0a164"
    // apiKey: process.env.REACT_APP_APIKEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASEURL,
    // projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_APPID,
}

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase