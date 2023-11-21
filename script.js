let gameDiv = document.querySelector('#game');
let rainbowBtn = document.querySelector('.rainbow');
let eraserBtn = document.querySelector('.eraser');
let clearBtn = document.querySelector('.clear');
let nSlider = document.querySelector('.slider');
let rainbow = 0;
let eraser = 0;

createDivSquare(nSlider.value);

nSlider.addEventListener('change', () => {
    gameDiv.innerHTML = "";
    createDivSquare(nSlider.value);
    
})

gameDiv.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.id == "pixel-div") {
        if (rainbow == 1){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            target.style.backgroundColor = "#" + randomColor;
        } else if (eraser == 1) {
            target.style.backgroundColor = "white";
        } else {
            target.style.backgroundColor = "black";
        }
    }
});

rainbowBtn.addEventListener("click", (event) => {
    rainbow = 1;
    eraser = 0;
});
eraserBtn.addEventListener("click", (event) => {
    eraser = 1;
    rainbow = 0;
});

function createDivSquare(n) {
    for (let i = 0; i < n; i++ ) {
        rowDiv = document.createElement('div');
        rowDiv.setAttribute("id", `row-${i+1}`);
        rowNumber = i+1;
        for (let j = 0; j < n; j++) {
            newDiv = document.createElement('div');
            newDiv.setAttribute("id", `pixel-div`);
            rowDiv.appendChild(newDiv);
        }
        rowDiv.setAttribute("class", "row");
        gameDiv.appendChild(rowDiv);
    }
}

clearBtn.addEventListener("click", resetDivSquare);

function resetDivSquare() {
    let pixels = document.querySelectorAll("#pixel-div");
    pixels.forEach(item => item.style.backgroundColor = "white");
}

