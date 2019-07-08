class Persona{

  constructor(n, e, c, al, an, x, y){
    this.Nombre = n;
    this.Edad = e;
    this.Color = c;
    this.Altura = al;
    this.Ancho = an;
    this.X = x;
    this.Y = y;
  }

  Hablar(mensaje){
    alert(mensaje);
  }


  Dibujar(contextoDeDibujo){


    //Crear una pluma con el color
    contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

    //Dibujar la cabeza
    var radio = this.Ancho/2;
    contextoDeDibujo.beginPath();
        contextoDeDibujo.arc(this.X+radio, 
                   this.Y+radio,
                     radio,
                     0,
                     2*3.1416,
                     true);
        contextoDeDibujo.stroke();

        //Dibujar el tronco
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,this.Y+3*radio);
        contextoDeDibujo.stroke();
        //Dibujarbrazos
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X,this.Y + this.Altura / 2);
        contextoDeDibujo.lineTo(this.X + this.Ancho, this.Y + this.Altura / 2);
        contextoDeDibujo.stroke();
        //Dibujar pierna izquierda
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X + this.Ancho / 2,this.Y + (3 * this.Altura) / 4)
        contextoDeDibujo.lineTo(this.X,this.Y + this.Altura);
        contextoDeDibujo.stroke();
        //Dibujar pierna derecha
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X + this.Ancho / 2,this.Y + (3 * this.Altura) / 4)
        contextoDeDibujo.lineTo(this.X + this.Ancho,this.Y + this.Altura);
        contextoDeDibujo.stroke();
        //Escribir Nombre de la Persona
        contextoDeDibujo.beginPath();
contextoDeDibujo.font="20pt Arial"
contextoDeDibujo.linewidth=2;
contextoDeDibujo.strokeStyle="green";
contextoDeDibujo.strokeText(this.Nombre,this.X, this.Y+this.Altura);

/*
contextoDeDibujo.beginPath();
contextoDeDibujo.font="20pt Arial"
contextoDeDibujo.linewidth=2;
contextoDeDibujo.strokeStyle="green";
contextoDeDibujo.strokeText("Gaby",40,90);

contextoDeDibujo.beginPath();
contextoDeDibujo.font="20pt Arial"
contextoDeDibujo.linewidth=2;
contextoDeDibujo.strokeStyle="green";
contextoDeDibujo.strokeText("Manuel",250,90);
*/
    }


}