import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1LaAAErFpjJuNyZt_8qnduH8PO_hgq9M",
    authDomain: "duriga-loan-calculator.firebaseapp.com",
    projectId: "duriga-loan-calculator",
    storageBucket: "duriga-loan-calculator.appspot.com",
    messagingSenderId: "233666806639",
    appId: "1:233666806639:web:18f551c1491c66c7b29e9a",
    measurementId: "G-JET1DGYF3V"
};

// for admin functions such as auth
const admin = firebase.initializeApp(config);
// for database interactions
const db = admin.firestore();

// for incrementing field values
const increment = (value) => {
    return firebase.firestore.FieldValue.increment(value);
}

// for adding to an array -- adds an object
const addToArray = (object) => {
    return firebase.firestore.FieldValue.arrayUnion(object);
}

// for adding to an array -- adds an object
const removeFromArray = (object) => {
    return firebase.firestore.FieldValue.arrayRemove(object);
}

export { db, admin, increment, addToArray , removeFromArray};



