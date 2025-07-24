   
if (window.innerWidth <= 600) {
    video.src = "assests/video/bg2.mp4"
    document.getElementById("bgvideo").style.objectFit = "contain";
    document.getElementById("bgvideo").style.minHeight = "100vh";
    document.getElementById("bgvideo").style.height = "auto";
    document.getElementById("bgvideo").style.transform = "translate(-50%,-50%)";
    document.getElementById("bgvideo").style.width = "100vw";
    document.getElementById("bgvideo").style.left = "50%";
    document.getElementById("bgvideo").style.top = "50%";
    document.getElementById("bgvideo").style.opacity = "0.8";
    document.getElementById("logo").style.width = "9vw";
    const e = document.getElementsByClassName("frame");

    for (i = 0; i < e.length; i++){
        e[i].style.width = "30%";
        e[i].style.height = "30%";
    }
}
