/**
 * ************************* Defining variables ***********************************
 */
var brushProps = {
    color : "black",
    size : 6,
    borderRadius : 0
}

/**
 * ************************* Create html using js Section ***********************************
 */
var canvas = document.createElement("div");
canvas.classList.add("canvas");
document.body.appendChild(canvas);

var myPalet = document.createElement("div");
myPalet.classList.add("palet");
document.body.appendChild(myPalet);

var black = document.createElement("span");
black.className = "black";
black.id = "black";
myPalet.appendChild(black);

var red = document.createElement("span");
red.className = "red";
red.id = "red"
myPalet.appendChild(red);

var green = document.createElement("span");
green.className = "green";
green.id = "green";
myPalet.appendChild(green);

var pink = document.createElement("span");
pink.className = "pink";
pink.id = "pink";
myPalet.appendChild(pink);

var cyan = document.createElement("span");
cyan.className = "cyan";
cyan.id = "cyan";
myPalet.appendChild(cyan);

var yellow = document.createElement("span");
yellow.className = "yellow";
yellow.id = "yellow"
myPalet.appendChild(yellow);

var rubber = document.createElement("img");
rubber.setAttribute("src", "https://cdn.icon-icons.com/icons2/474/PNG/512/eraser_46865.png");
myPalet.appendChild(rubber);
rubber.className = "rubber";
rubber.id = "rubber";

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

var circle = document.createElement("div");
myPalet.appendChild(circle);
circle.className ="circle";
circle.id ="circle";

var square =document.createElement("div");
myPalet.appendChild(square);
square.className="square";
square.id="square";


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
    else if (e.target.id == "rubber") {
        brushProps.color = "white";
    }
    else if (e.target.id == "rubberBig"){
        brushProps.color ="white";
        //point.style.fontSize = 10 + "px";
    }
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
changeShape = function(e){
    if(e.target.id=="circle"){
        brushProps.borderRadius = "30"
    }
    if(e.target.id=="square"){
        brushProps.borderRadius = "0"
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
                point.style.borderRadius = brushProps.borderRadius + "px";
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
    black.addEventListener("click", changeColor);
    red.addEventListener("click", changeColor);
    green.addEventListener("click", changeColor);
    pink.addEventListener("click", changeColor);
    yellow.addEventListener("click", changeColor);
    cyan.addEventListener("click", changeColor);
    rubber.addEventListener("click", changeColor);
    plus.addEventListener("click", sizePlus);
    minus.addEventListener("click", sizeMinus);
    circle.addEventListener("click",changeShape);
    square.addEventListener("click",changeShape)