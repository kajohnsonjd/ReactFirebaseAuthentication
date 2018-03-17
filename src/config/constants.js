import firebase from 'firebase'

// A very good overview of Firebase authentication and instructions for setting up a Firebase authentication project to obtain the Firebase parameters required in config are available at https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-application-setup. 

const config = {
    apiKey: "AIzaSyCnmtcTN2o0mevJPtJbG5LGwwvQAgLWGUI",
    authDomain: "fir-reactauthpublicproject.firebaseapp.com",
    databaseURL: "https://fir-reactauthpublicproject.firebaseio.com",
    projectId: "fir-reactauthpublicproject",
    storageBucket: "fir-reactauthpublicproject.appspot.com",
    messagingSenderId: "427638904428"
}


firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const devTeam = ['kajohnsonjd@gmail.com'];
export const betaTesters = [];