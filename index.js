const start = 0.5;
let time = start * 60;
let decision = true;


const cd = document.getElementById('count');
const pause = document.querySelector(".p a");


pause.addEventListener("click",stopping);

setInterval(update, 1000);


function stopping() {
    if (decision === true) {
        decision = false;
        pause.innerHTML = "Resume";
    } else {
        decision = true;
        pause.innerHTML = "Pause";
    }
}

function update() {
    if (time === -1) {
        alert("Fries are ready!!");
        time = -.5;
        window.location.href = "index.html";
    } else if (time >= 0 && decision === true) {
    const minutes = Math.floor( time / 60);
    let sec = time % 60;
    sec = sec < 10 ? '0' + sec : sec;
    cd.innerHTML = `${minutes}:${sec}`;
    time--;
    }
}
