let canciones;
let imagenes;
let backgrounds = [];
let screensCounter = 0;
let labrinthCanciones = [];
let charlotteCanciones = [];
  
  let slider;
  
  let cancionIndex = 0;

  let labrinthCancionesArreglo = [];
  labrinthCancionesArreglo[0] = new Cancion("All for us", "3:13", "Labrinth & Zendaya", 139, 330, 0);
  labrinthCancionesArreglo[1] = new Cancion("Formula", "1:32", "Labrinth", 139, 435, 1);
  labrinthCancionesArreglo[2] = new Cancion("Nate gorwing up", "2:33", "Labrinth", 139, 540, 2);
  labrinthCancionesArreglo[3] = new Cancion("Demanding excellence", "3:30", "Labrinth", 139, 645, 3);

  let charlotteCancionesArreglo = [];
  charlotteCancionesArreglo[0] = new Cancion("Work", "4:17", "Charlotte Day Wilson", 139, 330, 0);
  charlotteCancionesArreglo[1] = new Cancion("Changes", "3:36", "Charlotte Day Wilson", 139, 435, 1);
  charlotteCancionesArreglo[2] = new Cancion("Keep moving", "4:44", "Charlotte Day Wilson", 139, 540, 2);
  charlotteCancionesArreglo[3] = new Cancion("Lovesick utopia", "2:55", "Charlotte Day Wilson", 139, 645, 3);


function preload() {
  backgrounds[0] = loadImage("./imagenes/interfaz.jpg");
  backgrounds[1] = loadImage("./imagenes/playlistChooser.jpg");
  backgrounds[2] = loadImage("./imagenes/escogerMix.jpg");
  backgrounds[3] = loadImage("./imagenes/interfaz4.jpg");
  backgrounds[4] = loadImage("./imagenes/interfaz5.jpg");

  labrinthCanciones[0] = loadSound("./canciones/labrinth-zendaya-all-for-us.mp3");
  labrinthCanciones[1] = loadSound("./canciones/labrinth-formula.mp3");
  labrinthCanciones[2] = loadSound("./canciones/labrinth-nate-growing-up.mp3");
  labrinthCanciones[3] = loadSound("./canciones/labrinth-demanding-excellence.mp3");

  charlotteCanciones[0] = loadSound("./canciones/charlotte-day-wilson-work.mp3");
  charlotteCanciones[1] = loadSound("./canciones/charlotte-day-wilson-changes.mp3");
  charlotteCanciones[2] = loadSound("./canciones/charlotte-day-wilson-keep-moving.mp3");
  charlotteCanciones[3] = loadSound("./canciones/lovesick-utopia.mp3");
}
//slider de volumen
function setup() {
 createCanvas(1280, 800);
 slider = createSlider(0, 1, 0.5, 0.01);
 slider.position(1000, 665);
 slider.style('width', '150px');
 slider.style('display', 'none');

}

function draw() {
  image(backgrounds[screensCounter],0,0);
 
  //BORRARR
  text("x: " + mouseX + "y: "+ mouseY, mouseX, mouseY);

if(screensCounter === 0 || screensCounter === 1 || screensCounter === 2){
  slider.style('display', 'none');
}
  if (screensCounter == 3){

    labrinthCanciones[cancionIndex].setVolume(slider.value())

    slider.style('display', 'block');

    charlotteCanciones[cancionIndex].stop();

   for(let i = 0; i < labrinthCancionesArreglo.length; i++){
      labrinthCancionesArreglo[i].mostrar();


      if(labrinthCancionesArreglo[i].getPos() === cancionIndex){
        labrinthCancionesArreglo[i].setP(true)
      } else {
        labrinthCancionesArreglo[i].setP(false)
      }
   }
    
  }

  if (screensCounter == 4){
  
charlotteCanciones[cancionIndex].setVolume(slider.value())

    slider.style('display', 'block');

    labrinthCanciones[cancionIndex].stop();

    for(let i = 0; i < charlotteCancionesArreglo.length; i++){
      charlotteCancionesArreglo[i].mostrar();
 
 
       if(charlotteCancionesArreglo[i].getPos() === cancionIndex){
        charlotteCancionesArreglo[i].setP(true)
       } else {
        charlotteCancionesArreglo[i].setP(false)
       }
    }
     
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
  //imagen labrinth
  if (dist(390,433,mouseX, mouseY)<= 113) {
    screensCounter = 3;
  }

  //imagen charlotte
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


//Botones reproductor, play, pause, anterior, siguiente
if (screensCounter === 3 || screensCounter === 4){
  if (dist(1040,560,mouseX, mouseY)<= 10) {
    play();
    console.log("play")
  }

  if (dist(1163,557,mouseX, mouseY)<= 10) {
    console.log("siguiente cancion")
    stopp();
    if(cancionIndex === 3) {
      cancionIndex = 0
    } else {
      cancionIndex++;
    }
    play();
    
  }

  if (dist(962,557,mouseX, mouseY)<= 10) {
    stopp();
    console.log("anterior cancion")
    if(cancionIndex === 0) {
      cancionIndex = 3
    } else {
      cancionIndex--;
    }
    play();
  }

  if (dist(1085,554,mouseX, mouseY)<= 10) {
    console.log("pausa")
    pausa();
  }
}
}

function play(){

  if(screensCounter === 4){
    charlotteCanciones[cancionIndex].play();
    }

  if(screensCounter === 3){
  labrinthCanciones[cancionIndex].play();
  }
}

function stopp(){
  if(screensCounter === 4){
    charlotteCanciones[cancionIndex].stop();
    }

  if(screensCounter === 3){
  labrinthCanciones[cancionIndex].stop();
  }
}

function pausa(){
  if(screensCounter === 3){
  labrinthCanciones[cancionIndex].pause();
  }
  if(screensCounter === 4){
    charlotteCanciones[cancionIndex].pause();
    }
}