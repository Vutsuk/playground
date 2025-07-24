  
const video = document.getElementById("bgvideo")
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
        const a = document.getElementsByClassName("fontbigsize");
    for (let i = 0; i < a.length; i++) {
        a[i].style.fontSize = "23px";
    }

    const b = document.getElementsByClassName("fontsmallsize");
    for (let i = 0; i < b.length; i++) {
        b[i].style.fontSize = "12px";
    }

    const c = document.getElementsByClassName("fontmidsize");
    for (let i = 0; i < c.length; i++) {
        c[i].style.fontSize = "11px";
    }
    
    const d = document.getElementsByClassName("button");
    for (i = 0; i < d.length; i++) {
        d[i].style.width = "60px";
        d[i].style.height = "4px";
        d[i].style.border = "2px white solid";
        d[i].style.fontSize = "10px";
        d[i].style.borderRadius = "11%";
    }
}
