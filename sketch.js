var player;
var Play = 1;
var End = 2;
var loadScreen = 0;
var LevelTwo = 3;
var LevelThree = 4;
var gameState = loadScreen;
var EnemyGroup;
var BulletGroup;
var EnemyBullet;
var Replay;
var FirstLevelButton;
var SecondLevelButton;
var ThirdLevelButton;
var MediumEnemyGroup;
var BitFastEnemyBullet;
var PlayerBulletbitfast;
var HardEnemyGroup;
var FastEnemyBullet;
var PlayerBulletfast;



function setup() {
  createCanvas(600, 440);
  player = createSprite(300,400,50,20);
  player.tint = 'blue'
  
  EnemyGroup = createGroup();
  BulletGroup = createGroup();
  EnemyBullet = createGroup();
  
  MediumEnemyGroup = createGroup();
  BitFastEnemyBullet = createGroup();
  PlayerBulletbitfast = createGroup();

  HardEnemyGroup = createGroup();
  FastEnemyBullet = createGroup();
  PlayerBulletfast = createGroup();


  Replay = createButton("Play Again!");
  Replay.position(width/2,height/2+50);
  Replay.hide();
  Replay.mousePressed(reset);

  FirstLevelButton = createButton("Easy");
  FirstLevelButton.position(width/2,height/3+50);
  FirstLevelButton.hide();
  FirstLevelButton.mousePressed(Level1);

  SecondLevelButton = createButton("Medium");
  SecondLevelButton.position(width/2,height/3+100);
  SecondLevelButton.hide();
  SecondLevelButton.mousePressed(Level2);

  ThirdLevelButton = createButton("Hard");
  ThirdLevelButton.position(width/2,height/3+150);
  ThirdLevelButton.hide();
  ThirdLevelButton.mousePressed(Level3);
}

function draw() {
  background(0);
  player.x = mouseX;


  if(gameState === loadScreen){
    fill(255);
    textSize(20)
    text("Welcome to My game! Click below to start playing",width/2-200,height/3);
    text("Press spacebar to shoot and mouse to move",width/2-200,height/3+20);
    FirstLevelButton.show();
    SecondLevelButton.show();
    ThirdLevelButton.show();
  }

  //------------------------------------------LEVEL 1 CODE ---------------------------------------------------

  if(gameState === Play){
    FirstLevelButton.hide();
    SecondLevelButton.hide();
    ThirdLevelButton.hide();
  if(keyDown('SPACE')){
  shootBullets();
  }
  if(EnemyBullet.isTouching(player)){
  gameState = End;    
  }
    if(BulletGroup.isTouching(EnemyGroup)){
    EnemyGroup.destroyEach();
    }
    if(gameState === End){
    player.visible = false;
    EnemyGroup.destroyEach();
    BulletGroup.destroyEach();
    EnemyBullet.destroyEach();
      Replay.show();     
    }
  spawnEnemies();
  }
  //------------------------------------------LEVEL 2 CODE ---------------------------------------------------

  if(gameState === LevelTwo){
    FirstLevelButton.hide();
    SecondLevelButton.hide();
    ThirdLevelButton.hide();
  if(keyDown('SPACE')){

  shootABitFastBullets();

  }

  if(BitFastEnemyBullet.isTouching(player)){
  gameState = End;    
  }

    if(PlayerBulletbitfast.isTouching(MediumEnemyGroup)){
      MediumEnemyGroup.destroyEach();
    }

    if(gameState === End){
    player.visible = false;
    MediumEnemyGroup.destroyEach();
    PlayerBulletbitfast.destroyEach();
    BitFastEnemyBullet.destroyEach();
      Replay.show();     
    }

  spawnMediumEnemies();
  }

    //------------------------------------------LEVEL 3 CODE ---------------------------------------------------

    if(gameState === LevelThree){
      FirstLevelButton.hide();
      SecondLevelButton.hide();
      ThirdLevelButton.hide();
    if(keyDown('SPACE')){
  
    shootFastBullets();
  
    }
  
    if(FastEnemyBullet.isTouching(player)){
    gameState = End;    
    }
  
      if(PlayerBulletfast.isTouching(HardEnemyGroup)){
        HardEnemyGroup.destroyEach();
      }
  
      if(gameState === End){
      player.visible = false;
      HardEnemyGroup.destroyEach();
      PlayerBulletfast.destroyEach();
      FastEnemyBullet.destroyEach();
        Replay.show();     
      }
  
    spawnHardEnemies();
    }
  drawSprites();
}
  //------------------------------------------LEVEL 1 CODE ---------------------------------------------------

function shootBullets(){
  if(frameCount % 20 === 0 ){
var Bullet = createSprite(player.x,400,5,20);
    Bullet.tint = 'red';
  Bullet.velocityY = -3;  
  
    
    BulletGroup.add(Bullet)
  }
}

function spawnEnemies(){
if(frameCount % 60 === 0){
  var rand = random(10,400);
  var rand2 = random(5,50);
var Enemy = createSprite(rand,rand2,50,20);
  var Bullet = createSprite(Enemy.x,Enemy.y,5,20)
  Bullet.tint = 'orange';
  Bullet.velocityY = 3;
  var Move = random(-3,3)
  Enemy.velocityX = Move;
  Enemy.tint = 'green'
  
  EnemyGroup.add(Enemy);
  EnemyBullet.add(Bullet);
  
}
}



  //------------------------------------------LEVEL 2 CODE ---------------------------------------------------

  function shootABitFastBullets(){
    if(frameCount % 15 === 0 ){
  var Bullet = createSprite(player.x,400,5,20);
      Bullet.tint = 'red';
    Bullet.velocityY = -3;  
    
      
    PlayerBulletbitfast.add(Bullet)
    }
  }
  
  function spawnMediumEnemies(){
  if(frameCount % 50 === 0){
    var rand = random(10,400);
    var rand2 = random(5,50);
  var Enemy = createSprite(rand,rand2,50,20);
    var Bullet = createSprite(Enemy.x,Enemy.y,5,20)
    Bullet.tint = 'orange';
    Bullet.velocityY = 3;
    var Move = random(-3,3)
    Enemy.velocityX = Move;
    Enemy.tint = 'green'
    
    MediumEnemyGroup.add(Enemy);
    BitFastEnemyBullet.add(Bullet);
    
  }
  }

    //------------------------------------------LEVEL 3 CODE ---------------------------------------------------

    function shootFastBullets(){
      if(frameCount % 5 === 0 ){
    var Bullet = createSprite(player.x,400,5,20);
        Bullet.tint = 'red';
      Bullet.velocityY = -3;  
      
        
      PlayerBulletfast.add(Bullet)
      }
    }
    
    function spawnHardEnemies(){
    if(frameCount % 15 === 0){
      var rand = random(10,400);
      var rand2 = random(5,50);
    var Enemy = createSprite(rand,rand2,50,20);
      var Bullet = createSprite(Enemy.x,Enemy.y,5,20)
      Bullet.tint = 'orange';
      Bullet.velocityY = 3;
      var Move = random(-3,3)
      Enemy.velocityX = Move;
      Enemy.tint = 'green'
      
      HardEnemyGroup.add(Enemy);
      FastEnemyBullet.add(Bullet);      
    }
    }

    //-------------------------------------------------Navigator and reset---------------------------------

    function reset(){
      gameState = loadScreen;
        Replay.hide();
        player.visible = true;
      }

      function Level1(){
        gameState = Play;
      }

      function Level2(){
        gameState = LevelTwo;
      }
      function Level3(){
        gameState = LevelThree;
      }
