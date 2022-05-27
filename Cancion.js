class Cancion{
    constructor(nombre, duracion, artista, x, y, pos){
        this.nombre = nombre;
        this.duracion = duracion;
        this.artista = artista;
        this.x = x;
        this.y = y;
        this.pos = pos;
    }
mostrar(i){
        const apagadoY = 60 * i;
        if (this.isMouseOver(i)){
            
        }
    }
}
/*
function preload(){
    canciones = loadSound('charlotte-day-wilson-changes.mp3');
    canciones.setVolume(0.5);
boton = createButton("play.png");*/}