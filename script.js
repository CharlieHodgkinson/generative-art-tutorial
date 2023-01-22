// clearing the stage
function removeAll() {
  document.getElementById("stage").innerHTML = "";
}

// calling my state svg
let svg = document.getElementById("stage");

function drawCircles() {
  // how many circles to draw 
  // I started with 8 but now I think 15 is the magic number
  for (i = 0; i < 15; i++) {

    // because circle isnt a html element I need to specify the SVG namespace 
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // maximum 14, minimum 2 and in increments of 2 
    circle.setAttribute("r", Math.floor(Math.random() * 7) * 2 + 2) ;

    // minimum 20 maximum 80, incremements of 20 
    // (so either 20 , 40, 60, 80 )
    circle.setAttribute("cx", Math.floor(Math.random() * 4) * 20 + 20);
    circle.setAttribute("cy", Math.floor(Math.random() * 4) * 20 + 20);

    // add these elements to my stage
    svg.appendChild(circle);
  }
}
drawCircles();

document.addEventListener("click", function () {
  removeAll();
  drawCircles();
});