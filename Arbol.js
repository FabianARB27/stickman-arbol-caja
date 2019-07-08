 class Arbol{
	constructor(c, al, an, x, y, rr, h){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
	}

	Dibujar(contextoDeDibujo){

        //Crear una pluma con el color
        contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

        var xa = 0;
        var ya = 0;
        var xi = 0;
        var yi = 0;
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;
        var isPrimerPunto = true;
        for (var alfa = 0; alfa <= 2*Math.PI; alfa=alfa+0.01) {
            xi = xc + ((this.RadioCopa+this.RadioRueda)*Math.sin(alfa))-(this.RadioRueda*Math.sin(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            yi = yc + ((this.RadioCopa+this.RadioRueda)*Math.cos(alfa))-(this.RadioRueda*Math.cos(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            if(!isPrimerPunto){
                //Trazar línea
                contextoDeDibujo.beginPath();
                contextoDeDibujo.moveTo(xa, ya);
                contextoDeDibujo.lineTo(xi, yi);
                contextoDeDibujo.stroke();

            }
            isPrimerPunto=false;
            xa = xi;
            ya = yi;
          //Dibujar el tronco
        var radio = this.Ancho/2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,this.Y+3*radio);
        contextoDeDibujo.stroke();




contextoDeDibujo.beginPath();
contextoDeDibujo.font="20pt Arial"
contextoDeDibujo.linewidth=2;
contextoDeDibujo.strokeStyle="green";
contextoDeDibujo.strokeText("Arboles",60,480);

        }
    }

}
        

        
	