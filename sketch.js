var moving,fixed;
 function setup() { 
   createCanvas(800,400);
    moving = createSprite(400,100,20,20); 
    moving.shapeColor= "red"; 
    fixed = createSprite(400, 200, 50, 50);
    fixed.shapeColor= "red";
  } 
  function draw() { 
    background("white"); 
    moving.y = World.mouseY; 
    moving.x = World.mouseX; 
    console.log(fixed.x - moving.x); 
    if(fixed.x - moving.x <= fixed.width/2+moving.width/2 && moving.x - fixed.x <= fixed.width/2+moving.width/2
       && fixed.y - moving.y <= fixed.height/2+moving.height/2 && moving.y - fixed.y <= fixed.height/2+moving.height/2){ 
      moving.shapeColor= "green"; 
      fixed.shapeColor= "green"; 
    } 
    else{ 
      moving.shapeColor= "red"; 
      fixed.shapeColor= "red"; 
    } 
    drawSprites(); 
  }