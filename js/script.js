/* ==========================
      COUNTDOWN
========================== */

const countdown = () => {

    const targetDate = new Date("2026-08-28T08:00:00").getTime();

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Jika elemen countdown belum ada, hentikan fungsi
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return;
    }

    const updateCountdown = () => {

        const now = new Date().getTime();

        const distance = targetDate - now;

        if (distance <= 0) {

            daysEl.textContent = "000";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";

            clearInterval(interval);

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(3, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");

    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

};

countdown();

/* ==========================

      COVER ANIMATION

========================== */

document.addEventListener("DOMContentLoaded", () => {

    const content = document.querySelector(".content");

    if (!content) return;

    content.style.opacity = "0";

    content.style.transform = "translateY(30px)";

    setTimeout(() => {

        content.style.transition = "0.9s ease";

        content.style.opacity = "1";

        content.style.transform = "translateY(0)";

    }, 200);

});

/* ==========================
      OPEN INVITATION
========================== */


document.addEventListener("DOMContentLoaded",()=>{


    const openButton = document.getElementById("openInvitation");

    const music = document.getElementById("bgMusic");
    
    const musicButton = document.getElementById("musicButton");


    if(openButton){


        openButton.addEventListener("click",()=>{


            console.log("Tombol berhasil ditekan");


            if(music){

    music.play();

}

if(musicButton){

    musicButton.classList.add("show");
    musicButton.classList.add("playing");

}
            
            const cover = document.querySelector(".cover");

if(cover){

    cover.classList.add("hide");

}

            const coupleSection = document.querySelector(".couple");


            if(coupleSection){

                coupleSection.scrollIntoView({

                    behavior:"smooth"

                });

            }


        });


    }
    
    /* ==========================
      MUSIC CONTROL
========================== */

if(musicButton && music){

    musicButton.addEventListener("click",()=>{

        if(music.paused){

            music.play();

musicButton.textContent="🎵";

musicButton.classList.add("playing");

        }else{

            music.pause();

musicButton.textContent="🔇";

musicButton.classList.remove("playing");

        }

    });

}


});

/* ==========================
      SCROLL REVEAL
========================== */


const revealElements = document.querySelectorAll(".reveal");


const revealOnScroll = () => {


    revealElements.forEach((element)=>{


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }


    });


};


window.addEventListener("scroll", revealOnScroll);


revealOnScroll();

/* ==========================
      LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");


galleryImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    });

});


lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

/* ==========================
      SCROLL PROGRESS
========================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});

window.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    console.log(params.toString());

    const guest = params.get("to");

    console.log(guest);

    const guestName = document.getElementById("guestName");

    console.log(guestName);

    if (guest && guestName) {
        guestName.textContent = guest;
    }

});