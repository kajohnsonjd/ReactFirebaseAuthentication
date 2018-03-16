import firebase from 'firebase'

// A very good overview of Firebase authentication and instructions for setting up a Firebase authentication project to obtain the Firebase parameters required in config are available at https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-application-setup. 

const config = {
  apiKey: REPLACE_WITH_YOUR_FIREBASE_API_KEY,
    authDomain: REPLACE_WITH_YOUR_FIREBASE_AUTH_DOMAIN,
    databaseURL: REPLACE_WITH_YOUR_FIREBASE_DATABASE_URL,
    projectId: REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID,
    storageBucket: REPLACE_WITH_YOUR_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REPLACE_WITH_YOUR_FIREBASE_API_KEY,
}


firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const devTeam = [];
export const betaTesters = [];