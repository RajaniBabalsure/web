let imgs = document.getElementsByClassName("img");
let active = document.getElementsByClassName("active")[0];
console.log(active);

for( const img of imgs){
    console.log(img);
    img.addEventListener("click",()=>{
        active.classList.remove("active");
        img.classList .add("active")
        active=img
    });
}
