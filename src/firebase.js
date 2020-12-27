import firebase from 'firebase';

const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_DATABASE_URL,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BACKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BACKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
};

if (REACT_APP_FIREBASE_DATABASE_URL !== null) {
    firebase.initializeApp([...firebaseConfig, REACT_APP_FIREBASE_DATABASE_URL]);
} else {
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
const database = firebase.database();
export const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text });
};
