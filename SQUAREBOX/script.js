const squareArry = document .getElementsByClassName("Squares");
const colors = ["pink","yellow","red","skyblue","blue","orange"];
const defaultColour = "rgb(128, 128 ,128)";

for(const Square of squareArry){
    Square.addEventListener("mouscenter",() => {
        const randomNum = parseInt(math.random() * colors.length);

        Square.style.background = colors[randomNum];
        Square.style.transition = "background-color 0s ease";
        Square.style.boxshadow = "0px 0px 10px"+ colors[randomNum];

    });

    Square.addEventListener("mouseleave", () =>{
        Square.style.background = defaultcolor;
        Square.style.transition = "background-color 2s ease";
        Square.style.boxshadow = "0px 0px 0px"

    });
}