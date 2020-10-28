//JavaScript here

var c = document.querySelector('canvas')
var ctx = c.getContext('2d')

var Yoshi = new Image ();
//Yoshi.src = '..images/Yoshipng'


function main(){
    timer = requestAnimationFrame(main)

    ctx.clearRect(0,0,800,600)

    drawBox()
}
   





    
/*


//example of lines
ctx.moveTo(0,0);
ctx.lineTo(800,600);
ctx.stroke();

ctx.moveTo(800,0);
ctx.lineTo(0,600);
ctx.stroke();


ctx.fillStyle = 'purple';
ctx.fillRect(c.width/4,c.height/4 ,c.width/2,c.height/2);

//Draw Circle
ctx.strokeStyle = 'red';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(c.width/2, c.height/2, 50, 0, 2*Math.PI, false);
ctx.fill();
ctx.stroke();



//Draw some text
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.font = "50px Arial";
ctx.fillText("Week 4 Lab",c.width/2 - 125, 50);

//draw an imcage to canvas
ctx.drawImage(Yoshi,10, 100)
*/


function drawBox(){
    
}
main()