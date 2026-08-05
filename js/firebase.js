import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBHVp0CEn_wzFbnuiVopzF98OshcKDBlks",
    authDomain: "rizky-wedding.firebaseapp.com",
    projectId: "rizky-wedding",
    storageBucket: "rizky-wedding.firebasestorage.app",
    messagingSenderId: "158026459321",
    appId: "1:158026459321:web:abcada7fd50e66ec6f1368"
};


const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);