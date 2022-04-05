let canciones;
let imagenes;
let backgrounds = [];
let screensCounter = 0;
let labrinthCanciones = [];
let charlotteCanciones = [];

// sample smple sample


  /*  canciones[1] = loadSound("charlotte-day-wilson-keep-moving.mp3");
  canciones[2] = loadSound("charlotte-day-wilson-work-euphoria-ost.mp3");
  canciones[3] = loadSound("lovesick-utopia.mp3");
  canciones[4] = loadSound("labrinth-demanding-excellence-official-audio-euphoria-original-score-from-the-hbo-series.mps");
  canciones[5] = loadSound("labrinth-formula-official-audio-euphoria-original-score-from-the-hbo-series.mp3");
  canciones[6] = loadSound("labrinth-nate-growing-up-official-audio-euphoria-original-score-from-the-hbo-series.mp3");
  canciones[7] = loadSound("labrinth-zendaya-all-for-us-traducida-al-espanol.mp3");*/
  let volumeSlider;

  let cancionIndex = 0;

  let labrinthCancionesObject = [];
  labrinthCancionesObject[0] = new Cancion("All for us", "3:13", "Labrinth & Zendaya");
  labrinthCancionesObject[1] = new Cancion("Formula", "1:32", "Labrinth");
  labrinthCancionesObject[2] = new Cancion("Nate growing up", "2:33", "Labrinth");
  labrinthCancionesObject[3] = new Cancion("Demanding excellence", "3:30", "Labrinth");

  let charlotteCancionesObject = [];
  charlotteCancionesObject[0] = new Cancion("Work", "4:17", "Charlotte Day Wilson");
  charlotteCancionesObject[1] = new Cancion("Changes", "3:38", "Charlotte Day Wilson");
  charlotteCancionesObject[2] = new Cancion("Keep moving", "4:44", "Charlotte Day Wilson");
  charlotteCancionesObject[3] = new Cancion("Lovesick utopia", "2:55", "Charlotte Day Wilson");


function preload() {
  backgrounds[0] = loadImage("./imagenes/interfaz.jpg");
  backgrounds[1] = loadImage("./imagenes/playlistChooser.jpg");
  backgrounds[2] = loadImage("./imagenes/escogerMix.jpg");
  backgrounds[3] = loadImage("./imagenes/interfaz4.jpg");
  backgrounds[4] = loadImage("./imagenes/interfaz5.jpg");
}

function setup() {
 createCanvas(1280, 800);
}

function draw() {
  image(backgrounds[screensCounter],0,0);
 
  //BORRARR
  text("x: " + mouseX + "y: "+ mouseY, mouseX, mouseY);


  if (screensCounter == 0){

  } 

  if (screensCounter == 1){
  }

  if (screensCounter == 2){

  }

  if (screensCounter == 3){
   // volumeSlider.style('display', 'none');
    
  }
} 
  

function mousePressed(){

//screenCounter++;
if (screensCounter == 0){

  if (dist(640, 680,mouseX, mouseY) <= 100) {
    console.log("Diosito ya llevame :C")
    screensCounter = 1;
  }
}

if (screensCounter == 1){

if (dist(640,380,mouseX, mouseY)<= 140) {
  screensCounter++;
}
}

if (screensCounter == 2){
  if (dist(135,130,mouseX, mouseY)<= 55) {
    screensCounter = 1;
  }
  //man
  if (dist(390,433,mouseX, mouseY)<= 113) {
    screensCounter = 3;
  }

  //chica
  if (dist(907,438,mouseX, mouseY)<= 120) {
    screensCounter = 4;
  }
}

if (screensCounter == 3){
  if (dist(135,130,mouseX, mouseY)<= 55) {
    screensCounter = 2;
  }
}

if (screensCounter == 4){
  if (dist(135,130,mouseX, mouseY)<= 55) {
    screensCounter = 2;
  }
}





/*

  if (canciones.isPlaying()){
    canciones.stop();
    image('play.png');
  }else {
    canciones.play();
    image('pausa.png');
  }

  */
}



/*function Play() {
canciones[indice].play();

function Stop(){
  canciones[indice].stop();
}*/
