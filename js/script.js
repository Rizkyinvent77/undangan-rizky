document.addEventListener("DOMContentLoaded", () => {

    const content = document.querySelector(".content");

    content.style.opacity = "0";
    content.style.transform = "translateY(30px)";

    setTimeout(() => {
        content.style.transition = "1s";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 200);

});