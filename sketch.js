let canciones;
let imagenes;
let backgrounds = [];
let screensCounter = 0;
let buton = new Boton(590, 655, "pasar", 0, 0, 100);
let cancionesChimbitasBoton = new Boton(450, 290, "imagen de playlist", 0, 0, 250);
let nuevaPlaylistBoton = new Boton(850, 290, "crear playlist", 0, 0, 250);
let mixLabrinthBoton = new Boton(300, 300, "charlotte", 0, 0, 300);
let mixCharlotteBoton = new Boton(600, 100, "labrinthh", 0, 0, 500);
function preload(){
  canciones = loadSound('charlotte-day-wilson-changes.mp3');
  canciones.setVolume(0.5);
  boton = createButton("play.png");
  /*  canciones[1] = loadSound("charlotte-day-wilson-keep-moving.mp3");
  canciones[2] = loadSound("charlotte-day-wilson-work-euphoria-ost.mp3");
  canciones[3] = loadSound("lovesick-utopia.mp3");
  canciones[4] = loadSound("labrinth-demanding-excellence-official-audio-euphoria-original-score-from-the-hbo-series.mps");
  canciones[5] = loadSound("labrinth-formula-official-audio-euphoria-original-score-from-the-hbo-series.mp3");
  canciones[6] = loadSound("labrinth-nate-growing-up-official-audio-euphoria-original-score-from-the-hbo-series.mp3");
  canciones[7] = loadSound("labrinth-zendaya-all-for-us-traducida-al-espanol.mp3");*/
  
}

function preload() {
  backgrounds[0] = loadImage("./imagenes/interfaz.jpg");
  backgrounds[1] = loadImage("./imagenes/playlistChooser.jpg");
  backgrounds[2] = loadImage("./imagenes/escogerMix.jpg");
  backgrounds[3] = loadImage("./imagenes/interfaz4.jpg");
  backgrounds[4] = loadImage("./imagenes/interfaz5.jpg");
}

function setup() {
 createCanvas(1280, 800);
 //imagen = loadImage('pagina-principal-final.jpg');
 ///imagen1 = loadImage('reproducirp.png');
}

function draw() {
  image(backgrounds[screensCounter],0,0);
  //image(imagen1, 500, height/1.2);
  buton.draw(); 
  cancionesChimbitasBoton.draw(); 
  nuevaPlaylistBoton.draw(); 
} 
  

function mousePressed(){

//screenCounter++;
if (backgrounds == 0){

  if (dist(buton.getX(),buton.getY(),mouseX, mouseY)< buton.radius) {
    console.log("hola")
    backgrounds = 2;
  }
}

if (backgrounds == 1){

if (dist(cancionesChimbitasBoton.getX(),cancionesChimbitasBoton.getY(),mouseX, mouseY)< cancionesChimbitasBoton.radius) {
  screensCounter++;
}
}

if (backgrounds == 2){

if (dist(nuevaPlaylistBoton.getX(),nuevaPlaylistBoton.getY(),mouseX, mouseY)< nuevaPlaylistBoton.radius) {
  screensCounter++;
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
