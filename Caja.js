class Caja{
	constructor(e,c, al, an, x, y, rc, rr, h){
		
		this.Edad = e;
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        
        this.RadioCopa = rc;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
	}

	Dibujar(contextoDelDibujo)

	 {
	 	contextoDelDibujo.strokeStyle = this.Color;
	 	contextoDelDibujo.strokeStyle = "silver";


	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=70,this.Y=120);
	 	contextoDelDibujo.lineTo(this.X=70,this.y=170);
	 	contextoDelDibujo.stroke();

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=80,this.Y=120);
	 	contextoDelDibujo.lineTo(this.X=80,this.y=170);
	 	contextoDelDibujo.stroke();

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=80,this.Y=170);
	 	contextoDelDibujo.lineTo(this.X=70,this.y=170);
	 	contextoDelDibujo.stroke();

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=80,this.Y=120);
	 	contextoDelDibujo.lineTo(this.X=70,this.y=120);
	 	contextoDelDibujo.stroke();

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=90,this.Y=115);
	 	contextoDelDibujo.lineTo(this.X=80,this.y=121);
	 	contextoDelDibujo.stroke();

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=90,this.Y=163);
	 	contextoDelDibujo.lineTo(this.X=80,this.y=170);
	 	contextoDelDibujo.stroke();

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=90,this.Y=114);
	 	contextoDelDibujo.lineTo(this.X=80,this.y=120);
	 	contextoDelDibujo.stroke()

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=80,this.Y=116);
	 	contextoDelDibujo.lineTo(this.X=80,this.y=114);
	 	contextoDelDibujo.stroke()

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.moveTo(this.X=90,this.Y=163);
	 	contextoDelDibujo.lineTo(this.X=80,this.y=164);
	 	contextoDelDibujo.stroke()

	 	contextoDelDibujo.beginPath();
	 	contextoDelDibujo.font = "12pt Arial"
	 	contextoDelDibujo.linewidth= 2;
	 	contextoDelDibujo.strokeStyle= "silver";
	 
	 	
	 }
}




