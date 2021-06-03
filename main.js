var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", myMousedown);
function myMouseDown(e){
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e){
    current_position_of_mousex=e.clientX - canvas.offsetLeft;
    current_position_of_mousey=e.clientY - canvas.offsetTop;
    if(mousEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of X and Y coordinates = ");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of X and Y coordinates = ");
        console.log("X = " + current_position_of_mousex + "Y = " + current_position_of_mousey);
        ctx.lineTo(current_position_of_mousex, current_position_of_mousey);
        ctx.stroke();
    }
    last_position_of_x= current_position_of_mousex;
    last_position_of_y = current_position_of_mousey;
       
}
canvas.addEventListener("mouseUP", myMouseup);
function myMouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", myMouseleave)
function myMouseleave(e){
    mouseEvent = "mouseleave";
}