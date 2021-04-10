var fixRect1,movingRect
function setup() {
  createCanvas(800,400);
  fixRect1=createSprite(200,200,50,70)
  fixRect1.shapeColor="green"
  fixRect1.debug=true 
   
  movingRect=createSprite(400,300,70,90)
  movingRect.shapeColor="green"
  movingRect.debug=true  
}

function draw() {
  background("blue")
  movingRect.x=mouseX 
  movingRect.y=mouseY
  
  
isTouching(movingRect,fixRect1);




  drawSprites()

}








