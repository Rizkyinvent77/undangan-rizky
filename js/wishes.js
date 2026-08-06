import { db } from "./firebase.js";

import {
    ref,
    push,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


const form = document.getElementById("wishForm");

const wishList = document.getElementById("wishList");

const wishTitle = document.getElementById("wishTitle");

const submitButton = document.getElementById("submitWish");

const toast = document.getElementById("toast");

const wishesRef = ref(db, "wishes");


form.addEventListener("submit", async (e)=>{

    e.preventDefault();


    const name = document.getElementById("name").value.trim();

    const message = document.getElementById("message").value.trim();


    if(!name || !message) return;


    try{


        submitButton.disabled = true;
submitButton.textContent = "Mengirim...";
        
        const newWish = push(wishesRef);


        await set(newWish, {

            name:name,

            message:message,

            createdAt: Date.now()

        });


        form.reset();
        
        submitButton.disabled = false;
submitButton.textContent = "Kirim Ucapan";


        showToast("💚 Terima kasih atas doa dan ucapannya");
        

    }catch(error){
    
    submitButton.disabled = false;
submitButton.textContent = "Kirim Ucapan";


        console.error(error);


        showToast("❌ Gagal mengirim ucapan");


    }


});

function timeAgo(timestamp){

    const seconds = Math.floor((Date.now() - timestamp)/1000);

    if(seconds < 60) return "Baru saja";

    const minutes = Math.floor(seconds/60);

    if(minutes < 60)
        return `${minutes} menit yang lalu`;

    const hours = Math.floor(minutes/60);

    if(hours < 24)
        return `${hours} jam yang lalu`;

    const days = Math.floor(hours/24);

    return `${days} hari yang lalu`;

}

function getAvatarColor(name){

    const colors = [
        "#6B8F71",
        "#6C8AE4",
        "#C47AC0",
        "#F0A04B",
        "#4DB6AC",
        "#E57373",
        "#9575CD",
        "#64B5F6"
    ];

    let total = 0;

    for(let i = 0; i < name.length; i++){
        total += name.charCodeAt(i);
    }

    return colors[total % colors.length];
}

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

onValue(wishesRef, (snapshot) => {

    wishList.innerHTML = "";

    if (!snapshot.exists()) {

    wishList.innerHTML = `
        <div class="empty-wish">
            💚<br><br>
            Jadilah orang pertama yang
            mengirim ucapan.
        </div>
    `;

    wishTitle.textContent = "Ucapan & Doa (0)";

    return;
}

    const data = snapshot.val();

    const wishes = Object.values(data).reverse();
    
    wishTitle.textContent = `Ucapan & Doa (${wishes.length})`;

    wishes.forEach((wish) => {

        const time = timeAgo(wish.createdAt);
        
        wishList.innerHTML += `

        <div class="wish-card">

    <div class="wish-header">

        <div
            class="avatar"
            style="background:${getAvatarColor(wish.name)};">

            ${wish.name.charAt(0).toUpperCase()}

        </div>

        <div class="wish-info">

            <h3>${wish.name}</h3>

            <span>${time}</span>

        </div>

    </div>

    <div class="wish-bubble">

        ${wish.message}

    </div>

</div>

        `;

    });

});