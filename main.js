function crearPersona(){
	//Persona 1
	var objPersona = new Persona("Fabian",17,"green",120,60,200,200);
            var myCanvas = document.getElementById("myCanvas");
                var context = myCanvas.getContext("2d");
              objPersona.Dibujar(context);

  var objPersona = new Persona("Gaby",19,"green",160,80,50,50);
            var myCanvas = document.getElementById("myCanvas");
                var context = myCanvas.getContext("2d");
              objPersona.Dibujar(context);

           var objPersona = new Persona("Manuel",20,"green",100,50,300,80);
            var myCanvas = document.getElementById("myCanvas");
                var context = myCanvas.getContext("2d");
              objPersona.Dibujar(context);
}

function OrdenarStickmanPorNombre(){
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   //Declaración, Creación e Inicialización de un arreglo
   var arregloPersonas = new Array(
		new Persona("Gaby",19,"black",160,80,130,250),
		new Persona("Fabian",17,"black",120,60,10,250),
		new Persona("Manuel",20,"black",100,50,250,250));
	for (var i = arregloPersonas.length - 1; i >= 0; i--) {
		arregloPersonas[i].Dibujar(context);
	}
}
function OrdenarStickman(){
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   //Declaración, Creación e Inicialización de un arreglo
   var arregloPersonas1 = new Array(
		new Persona("Fabian",17,"black",120,60,10,10),
		new Persona("Manuel",20,"black",100,50,250,300),
		new Persona("Gaby",19,"black",160,80,130,100));
	for (var i = arregloPersonas1.length - 1; i >= 0; i--) {
		arregloPersonas1[i].Dibujar(context);
	}
}
function crearArbol(){
  //Arbol1
   var objArbol = new Arbol("green",10, 50, 10, 10, 3, 2,10);
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   objArbol.Dibujar(context);
   //Arbol2
   var objArbol = new Arbol("green", 10, 150, 10, 200, 8, 2,21);
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   objArbol.Dibujar(context);
   //Arbol3
   var objArbol = new Arbol("green",10, 100, 300, 50, 6, 2,200);
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   objArbol.Dibujar(context);
}
function OrdenarArbolEdad(){


       var myCanvas = document.getElementById("myCanvas");
      var context = myCanvas.getContext("2d");
  

    var arregloPersonas = new Array(
     new Arbol("green",10, 50, 10, 60, 3, 2,10),
      new Arbol("green", 10, 150, 300, 60, 8, 2,50),
       new Arbol("green",200, 100, 100, 60, 6, 2,100)
    
    );
  for (var i = arregloPersonas.length - 1; i >= 0; i--) {
    arregloPersonas[i].Dibujar(context);
  }
}
function OrdenarArbolAltura(){
 var myCanvas = document.getElementById("myCanvas");
  var context = myCanvas.getContext("2d");
  //Declaración, Creación e Inicialización de un arreglo
  var arregloPersonas = new Array(
      new Arbol("gree",10, 50, 10, 200, 3, 2,10),
      new Arbol("green",200, 100, 100, 130, 8, 2,100),
      new Arbol("green", 10, 150, 250, 50, 6, 2,50));
  for (var i = arregloPersonas.length - 1; i >= 0; i--) {
    arregloPersonas[i].Dibujar(context);
  }
}


  function Reset(){
  	var myCanvas = document.getElementById("myCanvas");
  	if (myCanvas && myCanvas.getContext("2d"))
  	var context = myCanvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0,0,500,500);
  context.clearRect(0,500,200,40);

  }

