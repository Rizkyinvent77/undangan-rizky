import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("wishForm");
const wishesRef = collection(db, "wishes");

form.addEventListener("submit", async (e) => {

    e.preventDefault();
    console.log("Submit dimulai");

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) return;

    try { 

        console.log("Sebelum addDoc");
        
        await addDoc(wishesRef, {
            name: name,
            message: message,
            createdAt: serverTimestamp()
        });
        
        console.log("Sesudah addDoc");

        form.reset();

        alert("Terima kasih atas doa dan ucapannya 💚");

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});