let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function clock(){
    let data = new Date();
    hour.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerText = date.getSeconds();
}

clock();

setInterval( clock,1000);  //function and time 1000ms