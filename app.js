let myYeard = document.querySelector(".box");
let showInput = document.querySelector('.show');
let restartBtn = document.querySelector(".start");

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        myYeard.appendChild(div);
    }
};


formBox = () => {
    myYeard.innerHTML = "";
    myYeard.style.setProperty(
        "grid-template-columns",
        `repeat(${showInput.value}, 2fr)`
    );
    myYeard.style.setProperty(
        "grid-template-rows",
        `repeat(${showInput.value}, 2fr)`
    )
    for (let i = 0; i < showInput.value*showInput.value; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        myYeard.appendChild(div);

    }
    console.log(showInput.value);
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function (event) {
    event.target.classList.replace("square", "color");

});
restartBtn.addEventListener("click", function () {
    myYeard.innerHTML = "";
    showInput.value = "";
    myYeard.style.setProperty("grid-template-columns" );
    myYeard.style.setProperty("grid-template-row")
    createGrid();
} )

showInput.addEventListener("change", formBox)

createGrid ();