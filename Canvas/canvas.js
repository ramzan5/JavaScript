
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var content = canvas.getContext("2d");
// //RECTANGLE
// content.fillStyle= "orange";
// content.fillRect(100,100,100,100);
// content.fillRect(200,200,100,100);
// content.fillStyle = "blue";
// content.fillRect(300,100,100,100);
// content.fillRect(400,500,100,100);
// content.fillRect(500,700,100,100);
// console.log(canvas)
// line
// content.beginPath();
// content.moveTo(50,300);
// content.lineTo(100,400);
// content.lineTo(400,100);
// content.strokeStyle = "red";
// content.stroke();

// Arc
// content.beginPath();
// content.arc(300,300,30,Math.PI*2,false);
// content.strokeStyle = "green";
// content.stroke();
// for(var i =0; i<500; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     let _redDepth = Math.random();
//     let _greenDepth = Math.random();
//     let _blueDepth = Math.random();
//     content.strokeStyle = 'rgb('+Math.floor(_redDepth*255)+','+Math.floor(_greenDepth*255)+','+Math.floor(_blueDepth*255)+')';
//     content.beginPath();
// content.arc(x,y, 30, 0,Math.PI*2,false);

// content.stroke();
// }
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = Math.random() + 0.5;
// var dy = Math.random() + 0.5;
// var radius = 30;

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        content.beginPath();
        content.arc(this.x,this.y,this.radius, 0,Math.PI*2,false);
        content.strokeStyle = "blue";
        content.stroke();
        content.fill();
    }
    this.update = function(){
        if(this.x+this.radius>innerWidth||this.x-this.radius<0){
            this.dx = -this.dx;
        }
        if(this.y+this.radius>innerHeight||this.y-this.radius<0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;
      
        this.draw();
    }
    

}

var Array = [];
for(var i=0;i<100;i++){
    var radius = 30;
    var x = Math.random() * (innerWidth -radius*2)+radius;
    var y = Math.random() * (innerHeight-radius*2)+radius;
    var dx = Math.random() + 0.5;
    var dy = Math.random() + 0.5;
    
    Array.push(new Circle(x,y,dx,dy,radius));
}

var circle = new Circle(200,200,3,3,30);


function animate(){
    requestAnimationFrame(animate);
    content.clearRect(0,0,innerWidth,innerHeight);
    //circle.draw();
    for(var i=0;i<Array.length;i++){
        Array[i].update();
    }
    
}
animate();