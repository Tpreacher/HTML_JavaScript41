window.onload = function(){
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");

    function draw(){
 
        ctx.save();
        ctx.beginPath
        ctx.fillStyle="#ffff00";
        ctx.beginPath();
        ctx.arc(385,440,66,0,2*Math.PI);
        ctx.fill();
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="yellow";
        ctx.fillRect(85, 301, 100, 101);
        ctx.strokeStyle='black';
        ctx.lineWidth = 5;
        ctx.strokeRect(85, 301, 100,101);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      
        ctx.save();
        ctx.moveTo(85, 683);
        ctx.lineTo(280, 550);
        ctx.strokeStyle="rgb(255,0,0)";
        ctx.lineWidth=5;
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(635, 497);
        ctx.lineTo(605, 553);
        ctx.lineTo(537, 565);
        ctx.lineTo(585, 617);
        ctx.lineTo(577, 682);
        ctx.lineTo(635, 653);
        ctx.lineTo(697, 682);
        ctx.lineTo(687, 615);
        ctx.lineTo(735, 567);
        ctx.lineTo(665, 553);
        ctx.lineTo(635, 497);
        ctx.fillStyle="#ffff00";
        ctx.fill();
        ctx.strokeStyle="rgb(32,32,32)";
        ctx.lineWidth=5;
        ctx.stroke();
        ctx.closePath();
        ctx.restore() ;
    
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(558, 308);
        ctx.lineTo(670, 285);
        ctx.lineTo(725, 380);
        ctx.lineTo(650, 465);
        ctx.lineTo(548, 420);
        ctx.lineTo(558, 308);
        ctx.closePath();
        ctx.fillStyle="#ff00ff";
        ctx.fill();
        ctx.lineWidth=5;
        ctx.strokeStyle="#00ffff";
        ctx.stroke();
        ctx.restore(); 

        noLoop();
    }
    draw();
}