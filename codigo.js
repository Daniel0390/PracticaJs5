
let rotacion = 0 ;


document.getElementById("circulo1").onclick = giro;
  actualizar();


function giro(){
    rotacion+=20;
    if(rotacion>=360){
       rotacion=0;
    }
    document.getElementById("flecha1").style.transform = `rotate(${rotacion}deg)`;
    
    actualizar();

}

function actualizar (){
    document.getElementById("result").innerHTML=`${rotacion} º`;
}