var trex, trex_running, edges;
var chao_img;
var chao
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 chao_img = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
 
  chao = createSprite(300,190);
  chao.addImage(chao_img);
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;

  if (chao.x < 0 ){
    chao.x = chao.width/2;
  }
   chao.velocityX = -6;
 //impedir que o trex caia
  trex.collide(chao)
  drawSprites();
}
