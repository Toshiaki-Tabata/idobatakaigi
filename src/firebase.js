import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFCY9CFihu-qJwToYJJM3DypFURobk3is",
    authDomain: "idobatakaigi-with-hamu.firebaseapp.com",
    projectId: "idobatakaigi-with-hamu",
    storageBucket: "idobatakaigi-with-hamu.appspot.com",
    messagingSenderId: "181502157953",
    appId: "1:181502157953:web:552e9adf39979e63d85980"
};

firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messageRef.push({ name, text });
};
