class Cancion{
    constructor(nombre, duracion, artista, x, y, pos){
        this.nombre = nombre;
        this.duracion = duracion;
        this.artista = artista;
        this.x = x;
        this.y = y;
        this.pos = pos;
        this.seleccionada = true;
    }

    mostrar(){
        fill(255)
        textSize(30);
        text(this.nombre, this.x, this.y-5)
        textSize(20);
        text(this.artista, this.x, this.y +20)
        text(this.duracion, this.x + 530, this.y)


        if(this.seleccionada === true){
            fill(0,255,0);
            noStroke();
            circle(this.x + 500, this.y - 10, 20)
        }
    }

    getPos() {
        return this.pos;
    }

setP(se){
    this.seleccionada = se;
}

    getSeleccionada() {
        return this.seleccionada
    }
}