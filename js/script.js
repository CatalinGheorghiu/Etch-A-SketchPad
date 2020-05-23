const gridContainer = document.querySelector(".grid-container");
const input = document.querySelector("#table");

input.addEventListener("change", (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    switch (inputValue) {
        case "24":
            gridSize(24);
            draw();
            break;
        case "48":
            gridSize(48);
            draw();
            break;
        case "60":
            gridSize(60);
            draw();
            break;
        case "80":
            gridSize(80);
            draw();
            break;
    }
});

function gridSize(x) {
    gridContainer.style.gridTemplateColumns = `repeat(${x},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${x},1fr)`;
    const size = x * x;
    for (let i = 1; i <= size; i++) {
        let div = document.createElement("div");
        div.setAttribute("data-item", "x");
        gridContainer.append(div);
    }
}

const colorOption = document.querySelector("#colors");

colorOption.addEventListener("change", (e) => {
    let option = e.target.value;
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    switch (option) {
        case "earth":
            gridContainer.style.background =
                "linear-gradient(to right, #92fe9d, #00c9ff)";
            break;
        case "vital":
            gridContainer.style.background =
                "linear-gradient(to right, #d53369 , #daae51 )";
            break;
        case "shady":
            gridContainer.style.background =
                "linear-gradient(to right, #3F2B96 , #A8C0FF )";
            break;
        case "mello":
            gridContainer.style.background =
                "linear-gradient(to right, #f8ff00 , #3ad59f )";
            break;
        case "dusty":
            gridContainer.style.background =
                "linear-gradient(to right, #fcff9e , #c67700 )";
            break;
        case "random":
            gridContainer.style.background = `linear-gradient(to right, #${randomColor1} , #${randomColor2} )`;
            break;
    }
});

const draw = () => {
    let gridCell = document.querySelectorAll("div[data-item*='x']");
    gridCell.forEach((data) => {
        data.addEventListener("mouseover", function (e) {
            const table = e.target;
            table.style.background =
                "radial-gradient(ellipse at center, #192d38 0, #211f2f 100%)";
        });
    });
};
// Get the current year for the copyright
document.getElementById("year").textContent = new Date().getFullYear();
