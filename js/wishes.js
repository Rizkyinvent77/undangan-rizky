import { db } from "./firebase.js";

import {

    collection,

    addDoc,

    serverTimestamp,

    query,

    orderBy,

    onSnapshot

} 

from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("wishForm");

const wishList = document.getElementById("wishList");

const wishesRef = collection(db, "wishes");

/* ==========================
      SEND WISH
========================== */

form.addEventListener("submit", async (e) => {

console.log("FORM DIKIRIM");
alert("FORM DIKIRIM");

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const message = document.getElementById("message").value.trim();

    if(!name || !message) return;

    try{

        await addDoc(wishesRef,{

            name,

            message,

            createdAt: serverTimestamp()

        });

        form.reset();

        alert("Terima kasih atas doa dan ucapannya 💚");

    }catch(error){

    console.error(error);

    alert(error.message);

}

});