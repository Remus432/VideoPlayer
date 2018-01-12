const video = document.querySelector("video");

// Play video on keypress
document.body.addEventListener("keydown", e => {
    if(e.keyCode === 49) {
        video.setAttribute("src", "video/bugatti.mp4");
        video.play();
    }
    if(e.keyCode === 50) {
        video.setAttribute("src", "video/heroes.mp4");
        video.play();
    }
    if(e.keyCode === 51) {
        video.setAttribute("src", "video/coolio.mp4");
        video.play();
    }
    if(e.keyCode === 52) {
        video.setAttribute("src", "video/eminem.mp4");
        video.play();
    }
    if(e.keyCode === 53) {
        video.setAttribute("src", "video/zombie.mp4");
        video.play();
    }    
    
    // Pause video
    if(e.keyCode === 32) {
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    // Make full screen
    if(e.keyCode === 70) {
        if(!video.webkitDisplayingFullscreen) {
            video.webkitEnterFullScreen();
        } else {
            video.webkitExitFullScreen();
        }    
    }

    // Fast Forward
    if(e.keyCode === 39) {
        video.currentTime += 30;
    }
    // Rewind 
    if(e.keyCode === 37) {
        video.currentTime -= 10;
    }

    // Mute
    if(e.keyCode === 77) {
        if(!video.muted) {
            video.muted = true
        } else {
            video.muted = false;
        }
    }
});


// Change volume on keypress
document.querySelector("html").addEventListener("keydown", e => {
    console.log("working");
    if(e.keyCode === 40) {
        video.volume -= 0.1;
    }
    if(e.keyCode === 38) {
        video.volume += 0.1;
    }
}, false);