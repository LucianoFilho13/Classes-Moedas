//Teste e Classes
var player;
var keyboardProps;

let coinImg1, coinImgPl;

var score;
// let coinClass1, coinClass2;

var randomPositionX, randomPositionY
var menuConst;
var positionX, positionY;

function preload(){ // função que carregar todas as imagens e animações
  coinImgPl = loadImage('coin.png')
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,600); //Tela

  coinClass = new Coin();
  coinClass = new Coin();
  coinClass = new Coin();
  // coinClass = new Coin();
  // coinClass = new Coin();

  menuConst = false;

  player = createSprite(300,300,70,70)
  keyboardProps = true;
  
  score = 0;
  randomNumber = Math.round(random(0,5))

  //coinImg = createSprite(2000,200,20,20)
  //coinImg.addImage(coinImgPl)
  
}

function draw(){
  //text() tem que estar dentro da função draw()
  background("#1C1C1C");
  positionX = player.x;
  positionY = player.y;

  this.coinClass.touchCollide();

  allFunction(); //Todas as Funções
  

  // console.log(score)
  drawSprites(); 
}

class Coin {
  constructor(value, coin, x, y){
    this.randomPosition();
    this.randomValue();

    this.x = this.randomPositionX;
    this.y = this.randomPositionY;

    //Propriedas básicas da moeda como (Valor, Sprites, Imagem, e escala de Imagem)
    this.value = this.coinValue; //Primeramente adiciona a função da classe e depois pega o 'this.value'
    this.coin = createSprite(this.x,this.y,50,50)
    this.coin.addImage(coinImgPl)
    this.coin.scale = 0.03

    // this.coin.shapeColor = '#B8860B'
    // this.touchCollide();

  }
  randomPosition(randomPositionX, randomPositionY){
    this.randomPositionX = Math.round(random(0,600 -50))
    this.randomPositionY = Math.round(random(0,600 -50))

    // console.log(this.randomPositionX, this.randomPositionY)
  }
  touchCollide(){
    if (this.coin.x < this.positionX && this.coin.y < this.positionY){
      console.log('Colidindo')
    }
  }
  randomValue(){
    this.coinValue = Math.round(random(20,30))
  }
  display(){
    this.value;
    this.coin;
    
  }
}

function allFunction(){
  function keyboard(){
    if (keyboardProps === true){
    if (keyDown('A')){
      player.x -= 8
    }
    if (keyDown('D')){
      player.x += 8
    }
    if (keyDown('W')){
      player.y -= 8
    }
    if (keyDown('S')){
      player.y += 8
    }
    } else {
      
    }

  } //Fim da função
  function menuFunction(){
    if (menuConst === false){
      if (keyDown('Esc')){
        menuConst = true;
      }
    } else {
      text('Pontos: ' + score, 20,20) // text(); tem que estar dentro da função draw()
      if (keyDown('Esc')){
        menuConst = false;
      }
    }
  } //Fim da função


  //Chamar Funções
  keyboard();
  menuFunction();
}


