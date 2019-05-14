/**
 * ************************* Defining variables ***********************************
 */
var brushProps = {
    color: "black",
    size: 6,
    borderRadius: 0,
    colors: ["black", "red", "green", "blue", "pink", "cyan", "yellow", "orange", "purple", "brown", "white"],
    shapes: ["circle", "square", "lemon"]
}

/**
 * ************************* Create html using js Section ***********************************
 */
var canvas = document.createElement("div");
canvas.classList.add("canvas");
document.body.appendChild(canvas);

var myPalet = document.createElement("div");
myPalet.classList.add("palet");
myPalet.id = "palet";
document.body.appendChild(myPalet);

var rubber = document.createElement("img");
rubber.setAttribute("src", "https://cdn.icon-icons.com/icons2/906/PNG/512/eraser_icon-icons.com_70168.png");
myPalet.appendChild(rubber);
rubber.className = "rubber";
rubber.id = "rubber";

var clearScreen = document.createElement("img");
clearScreen.setAttribute("src", "https://image.flaticon.com/icons/svg/1276/1276379.svg");
myPalet.appendChild(clearScreen);
clearScreen.className = "clearScreen";
clearScreen.id = "clearScreen";

var minus = document.createElement("img");
minus.setAttribute("src", "https://cdn.icon-icons.com/icons2/1129/PNG/512/decreasezoommagnifiersymbolofinterfacewithminussigninside_80001.png");
myPalet.appendChild(minus);
minus.className = "minus";
minus.id = "minus";

var plus = document.createElement("img");
plus.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/magnify-plus-512.png");
myPalet.appendChild(plus);
plus.className = "plus";
plus.id = "plus";

var pen = document.createElement("img");
pen.setAttribute("src", "https://static.thenounproject.com/png/70551-200.png");
myPalet.appendChild(pen);
pen.className = "pen";
pen.id = "pen";


/**
 * ************************* Definig function Section***********************************
 */

// Change the color of the buttons
changeColor = function (e) {
    if (e.target.id == "red") {
        brushProps.color = "red";
    }
    else if (e.target.id == "green") {
        brushProps.color = "rgba(23, 212, 16, 0.904)";
    }
    else if (e.target.id == "pink") {
        brushProps.color = "rgb(245, 71, 158)";
    }
    else if (e.target.id == "yellow") {
        brushProps.color = "yellow";
    }
    else if (e.target.id == "black") {
        brushProps.color = "black";
    }
    else if (e.target.id == "cyan") {
        brushProps.color = "cyan";
    }
    else if (e.target.id == "orange") {
        brushProps.color = "orange";
    }
    else if (e.target.id == "blue") {
        brushProps.color = "rgba(0, 60, 255, 0.911)";
    }
    else if (e.target.id == "purple") {
        brushProps.color = "rgb(116, 9, 116)";
    }
    else if (e.target.id == "brown") {
        brushProps.color = "rgba(153, 42, 42, 0.678)";
    }
}

for (var i = 0; i < brushProps.colors.length; i++) {
    var newButton = document.createElement("span");
    newButton.className = brushProps.colors[i];
    newButton.id = brushProps.colors[i];
    myPalet.appendChild(newButton);
    newButton.addEventListener("click", changeColor);
}


// Change the format of the buttons
sizePlus = function (e) {
    if (e.target.id == "plus") {
        if (brushProps.size > 100) {
            brushProps.size = brushProps.size;
        }
        else {
            brushProps.size = brushProps.size + 4;
        }
    }
}
sizeMinus = function (e) {
    if (e.target.id == "minus") {
        if (brushProps.size < 4) {
            brushProps.size = brushProps.size;
        }
        else {
            brushProps.size = brushProps.size - 4;
        }
    }
}
// change the shape of the pen
changeShape = function (e) {
    if (e.target.id == "circle") {
        brushProps.borderRadius = "30px";
    }
    else if (e.target.id == "square") {
        brushProps.borderRadius = "0px";
    }
    else if (e.target.id == "lemon") {
        brushProps.borderRadius = "5px 250px";
    }
}
for (var i = 0; i < brushProps.shapes.length; i++) {
    var newShape = document.createElement("div");
    newShape.className = brushProps.shapes[i];
    newShape.id = brushProps.shapes[i];
    myPalet.appendChild(newShape);
    newShape.addEventListener("click", changeShape);
}

clearButton = function(e){
    if(e.target.id === "clearScreen"){
        location.reload();
    }
}

rubberEraser = function(e){
    if(e.target.id === "rubber"){
        brushProps.color = "white";
    }
}
// Add a new div with color to the canvas
draw = function () {
    document.getElementsByClassName("canvas")[0].addEventListener("mousemove", event => {
        if (event.buttons == 1) {
            var x = event.clientX;
            var y = event.clientY;
            var point = document.createElement("div");
            point.className = "point";
            point.style.left = x + "px";
            point.style.top = y + "px";
            point.style.position = "absolute";
            point.style.backgroundColor = brushProps.color;
            point.style.borderRadius = brushProps.borderRadius;
            point.style.width = brushProps.size + "px";
            point.style.height = brushProps.size + "px";
            canvas.appendChild(point);
        }
    });
}


/**
 * ************************* Add event listeners ***********************************
 */

draw();
plus.addEventListener("click", sizePlus);
minus.addEventListener("click", sizeMinus);
clearScreen.addEventListener("click",clearButton);
rubber.addEventListener("click", rubberEraser)
