let hour = document.getElementById("Hour");
let minutes = document.getElementById("Minutes");
let seconds = document.getElementById("Seconds");


function clock(){
    let data = new Date();
    hour.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
}

clock();

setInterval(clock,1000);//function and time 1000ms


