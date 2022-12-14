import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC6djYKfwoc04PLDpGmqNhI42c8Vzlov0w",
    authDomain: "database-aacbb.firebaseapp.com",
    databaseURL: "https://database-aacbb-default-rtdb.firebaseio.com",
    projectId: "database-aacbb",
    storageBucket: "database-aacbb.appspot.com",
    messagingSenderId: "364141524109",
    appId: "1:364141524109:web:b925005b460045e3cc5ec4",
    measurementId: "G-SVDBZCFL5W",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const value = document.querySelector("#value");

const dataReference = ref(db, "black-box/" + "/history" + "/data");
onValue(dataReference, (snapshot) => {
    const data = snapshot.val();
    value.innerHTML = data;
});
