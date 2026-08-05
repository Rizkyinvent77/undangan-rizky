import { db } from "./firebase.js";

import {
    ref,
    push,
    set,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


const form = document.getElementById("wishForm");


const wishesRef = ref(db, "wishes");


form.addEventListener("submit", async (e)=>{

    e.preventDefault();


    const name = document.getElementById("name").value.trim();

    const message = document.getElementById("message").value.trim();


    if(!name || !message) return;


    try{


        const newWish = push(wishesRef);


        await set(newWish, {

            name:name,

            message:message,

            createdAt:serverTimestamp()

        });


        form.reset();


        alert("Terima kasih atas doa dan ucapannya 💚");


    }catch(error){


        console.error(error);


        alert("Gagal mengirim ucapan.");


    }


});