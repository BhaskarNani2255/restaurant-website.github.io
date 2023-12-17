document.querySelector(".hamburger-icon").onclick = function () {
    document.querySelector(".hamburger").style.display="none";
    document.querySelector(".hamburger-close").style.display="block";
    document.querySelector(".nav-bar-s").style.display="block";
    console.log("hambburger click");
}

document.querySelector(".hamburger-close-icon").onclick = function () {
    document.querySelector(".hamburger").style.display="block";
    document.querySelector(".hamburger-close").style.display="none";
    document.querySelector(".nav-bar-s").style.display="none";
    console.log("hambburger close click");
}



