var player, player2, player3 , player4 ,player5,player6,player7;
var form1,ad1I,ad2I;
var database,lobby1, backgroundImg,bg;

function preload() {
  ad1I = loadImage("Main/images/LOL.jpg");
  ad2I = loadImage("Main/images/hi.png");    
  
}
function setup() {
 form1 = new Form();
  
 var database = firebase.database();  
}

function draw() {
  firstForm();
 // backgroundImg = loadImage(bg); 
  //background(backgroundImg);  
//  ad1.visible= false;
 // ad2.visible= false;
 
}
function firstForm() {
  form1.backGround();
  form1.form();  
}