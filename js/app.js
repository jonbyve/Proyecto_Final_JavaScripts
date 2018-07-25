//-------------------------VARIABLES Y..---------------------------------
//-------------------------EFECTO A LOS BOTONES---------------------------------//
//NUMERO 1
var uno = document.getElementById("1");
uno.addEventListener("mousedown", function() {
  uno.setAttribute("style", "transform:scale(0.95,0.95)")
})
uno.addEventListener("mouseup", function() {
  uno.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 2
var dos = document.getElementById("2");
dos.addEventListener("mousedown", function() {
  dos.setAttribute("style", "transform:scale(0.95,0.95)")
})
dos.addEventListener("mouseup", function() {
  dos.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 3
var tres = document.getElementById("3");
tres.addEventListener("mousedown", function() {
  tres.setAttribute("style", "transform:scale(0.95,0.95)")
})
tres.addEventListener("mouseup", function() {
  tres.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 4
var cuatro = document.getElementById("4");
cuatro.addEventListener("mousedown", function() {
  cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
})
cuatro.addEventListener("mouseup", function() {
  cuatro.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 5
var cinto = document.getElementById("5");
cinto.addEventListener("mousedown", function() {
  cinto.setAttribute("style", "transform:scale(0.95,0.95)")
})
cinto.addEventListener("mouseup", function() {
  cinto.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 6
var seis = document.getElementById("6");
seis.addEventListener("mousedown", function() {
  seis.setAttribute("style", "transform:scale(0.95,0.95)")
})
seis.addEventListener("mouseup", function() {
  seis.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 7
var siete = document.getElementById("7");
siete.addEventListener("mousedown", function() {
  siete.setAttribute("style", "transform:scale(0.95,0.95)")
})
siete.addEventListener("mouseup", function() {
  siete.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO ocho
var ocho = document.getElementById("8");
ocho.addEventListener("mousedown", function() {
  ocho.setAttribute("style", "transform:scale(0.95,0.95)")
})
ocho.addEventListener("mouseup", function() {
  ocho.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 9
var nueve = document.getElementById("9");
nueve.addEventListener("mousedown", function() {
  nueve.setAttribute("style", "transform:scale(0.95,0.95)")
})
nueve.addEventListener("mouseup", function() {
  nueve.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO 0
var cero = document.getElementById("0");
cero.addEventListener("mousedown", function() {
  cero.setAttribute("style", "transform:scale(0.95,0.95)")
})
cero.addEventListener("mouseup", function() {
  cero.setAttribute("style", "transform:scale(1,1)")
})


//EFECTO A LOS BOTONES
//NUMERO on
var onn = document.getElementById("on");
onn.addEventListener("mousedown", function() {
  onn.setAttribute("style", "transform:scale(0.95,0.95)")
})
onn.addEventListener("mouseup", function() {
  onn.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO sign
var sign = document.getElementById("sign");
sign.addEventListener("mousedown", function() {
  sign.setAttribute("style", "transform:scale(0.95,0.95)")
})
sign.addEventListener("mouseup", function() {
  sign.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO raiz
var raiz = document.getElementById("raiz");
raiz.addEventListener("mousedown", function() {
  raiz.setAttribute("style", "transform:scale(0.95,0.95)")
})
raiz.addEventListener("mouseup", function() {
  raiz.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO dividido
var dividido = document.getElementById("dividido");
dividido.addEventListener("mousedown", function() {
  dividido.setAttribute("style", "transform:scale(0.95,0.95)")
})
dividido.addEventListener("mouseup", function() {
  dividido.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO punto
var punto = document.getElementById("punto");
punto.addEventListener("mousedown", function() {
  punto.setAttribute("style", "transform:scale(0.95,0.95)")
})
punto.addEventListener("mouseup", function() {
  punto.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO igual
var igual = document.getElementById("igual");
igual.addEventListener("mousedown", function() {
  igual.setAttribute("style", "transform:scale(0.95,0.95)")
})
igual.addEventListener("mouseup", function() {
  igual.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO por
var por = document.getElementById("por");
por.addEventListener("mousedown", function() {
  por.setAttribute("style", "transform:scale(0.95,0.95)")
})
por.addEventListener("mouseup", function() {
  por.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO menos
var menos = document.getElementById("menos");
menos.addEventListener("mousedown", function() {
  menos.setAttribute("style", "transform:scale(0.95,0.95)")
})
menos.addEventListener("mouseup", function() {
  menos.setAttribute("style", "transform:scale(1,1)")
})

//EFECTO A LOS BOTONES
//NUMERO mas
var mas = document.getElementById("mas");
mas.addEventListener("mousedown", function() {
  mas.setAttribute("style", "transform:scale(0.95,0.95)")
})
mas.addEventListener("mouseup", function() {
  mas.setAttribute("style", "transform:scale(1,1)")
})

//***************************************************************************************//

//---------------------------CARGO PAGINA---------------------------------------//
window.onload = function() { //Acciones tras cargar la página
  pantalla = document.getElementById("display"); //elemento pantalla de salida
}
x = "0"; //número en pantalla
tam = ""; //tamaño numeros de la pantalla display
xi = 1; //iniciar número en pantalla: 1=si; 0=no;
coma = 0; //estado coma decimal 0=no, 1=si;
ni = 0; //número oculto o en espera.
op = "no"; //operación en curso; "no" =  sin operación. re = Repetir operacion
re = "" //operacion se repite <> "".

//***************************************************************************//

//-----------------------EVENTOS CLICK---------------------------------------------------//

uno.onclick = function(e) {
  numero('1');
}

dos.onclick = function(e) {
  numero('2');
}
tres.onclick = function(e) {
  numero('3');
}
cuatro.onclick = function(e) {
  numero('4');
}
cinto.onclick = function(e) {
  numero('5');
}
seis.onclick = function(e) {
  numero('6');
}
siete.onclick = function(e) {
  numero('7');
}
ocho.onclick = function(e) {
  numero('8');
}
nueve.onclick = function(e) {
  numero('9');
}
cero.onclick = function(e) {
  numero('0');
}
on.onclick = function(e) {
  borradoTotal();
}
sign.onclick = function(e) {
  opuest();
}
raiz.onclick = function(e) {
  raizc();
}
dividido.onclick = function(e) {
  operar('/');
}
punto.onclick = function(e) {
  numero('.');;
}
igual.onclick = function(e) {
  igualar();
}
por.onclick = function(e) {
  operar('*');
}
menos.onclick = function(e) {
  operar('-');
}
mas.onclick = function(e) {
  operar('+');
}
//******************************************************************************//

//------------LLEVO EL VALOR A LA PANTALLA Y LO ALMACENO---------------------//
//-----------------VALIDO LA COMA (,)--------------------------------------//
function numero(xx) { //recoge el número pulsado en el argumento.

  if (x.length <= 7) {
    console.log("valor de x: " + x);

    if (x == "0" || xi == 1 || x == "") { // inicializar un número,
      pantalla.innerHTML = xx; //mostrar en pantalla
      x = xx; //guardar número
      if (xx == ".") { //si escribimos una coma al principio del número
        pantalla.innerHTML = "0."; //escribimos 0.
        x = xx; //guardar número
        coma = 1; //cambiar estado de la coma
      }
      console.log("valor de x 1er: " + x);
    } else { //continuar escribiendo un número
      if (xx == "." && coma == 0) { //si escribimos una coma decimal p�r primera vez
        pantalla.innerHTML += xx;
        x += xx;
        coma = 1; //cambiar el estado de la coma
        console.log("valor de x 2do..n: " + x);
      }
      //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
      else if (xx == "." && coma == 1) {}
      //Resto de casos: escribir un número del 0 al 9:
      else {
        pantalla.innerHTML += xx;
        x += xx
        console.log("valor de x 2do..n: " + x);
      }
    }
    xi = 0 //el número está iniciado y podemos ampliarlo.
  }
  console.log("valor Sale: " + x);
}
//***********************************************************************************//

//---------------------------OPERACIONES---------------------------------------------//

function operar(s) {
  ni = x //ponemos el 1� número en "numero en espera" para poder escribir el segundo.
  op = s; //guardamos tipo de operación.
  xi = 1; //inicializar pantalla.
  x = '0'; //inicializar pantalla.
  re = ""
  pantalla.innerHTML = "";
}

function igualar() {
  if (op == "no") { //no hay ninguna operación pendiente.
    pantalla.innerHTML = x; //mostramos el mismo número
    alert('No puede realizar calculos sin los valores y la operación a realizar')
  } else if (re != "") {
    sol = eval(re) //convertimos la cadena a código y resolvemos
    x = '' + sol; //guardamos la solución
    re = x + op + ni;
    xi = 1; //se puede reiniciar la pantalla.

    if (x.length > 8) { //valido tamaño de x sea mayor de 8 caracteres
      pantalla.innerHTML = x.substr(0, 8) //mostramos la solución hasta 8 dígitos
    } else {
      pantalla.innerHTML = x //mostramos la solución
    }
  } else { //con operación pendiente resolvemos
    sl = ni + op + x; // escribimos la operación en una cadena
    sol = eval(sl) //convertimos la cadena a código y resolvemos
    ni = x //ponemos el 2 número en ingresado para repetir la operacion si es necesario.
    x = '' + sol; //guardamos la solución
    re = x + op + ni;
    xi = 1; //se puede reiniciar la pantalla.
    if (x.length > 8) { //valido tamaño de x sea mayor de 8 caracteres
      pantalla.innerHTML = x.substr(0, 8) //mostramos la solución hasta 8 dígitos
    } else {
      pantalla.innerHTML = x //mostramos la solución
    }
  }
}

function raizc() {
  x = Math.sqrt(x) //resolver raíz cuadrada.
  pantalla.innerHTML = x; //mostrar en pantalla resultado
  op = "no"; //quitar operaciones pendientes.
  xi = 1; //se puede reiniciar la pantalla
}

function opuest() {
  nx = Number(x); //convertir en número
  nx = -nx; //cambiar de signo
  x = String(nx); //volver a convertir a cadena
  pantalla.innerHTML = x; //mostrar en pantalla.
}

function borradoTotal() {
  pantalla.innerHTML = 0; //poner pantalla a 0
  x = "0"; //reiniciar número en pantalla
  coma = 0; //reiniciar estado coma decimal
  ni = 0 //indicador de número oculto a 0;
  op = "no" //borrar operación en curso.
  re = ""
}
