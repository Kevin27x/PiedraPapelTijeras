var jugadas = parseInt(prompt("Indica cuántas veces deseas jugar: ", "0"));

var jugEmp = 0;
var jugGan = 0;
var jugPer = 0;

for (i = 0; i < jugadas; i++){
    //Elección usuario
    var usuario = prompt("Elige piedra, papel o tijeras: ");
    if (usuario == "piedra"){
        usuario = 0;
    }
    else if (usuario == "papel") {
        usuario = 1;
    } 
    else if (usuario == "tijeras") { 
        usuario = 2;        
    }
    else {
        alert("Su opción no es válida, elija entre: 'piedra', 'papel' o 'tijeras'")
    }    
    
    //Elección máquina (0, 1, 2) = (piedra, papel, tijeras)
    var maquina = Math.floor(Math.random()*3);

    if (usuario == 0 || usuario == 1 || usuario == 2){
        
        //Casos de empate
        if (maquina == usuario){
            //empate piedra
            jugEmp +=1
            if (usuario == 0){
                alert("Elegiste piedra y la maquina eligió piedra: Haz empatado")
            }
            //empate papel
            else if (usuario == 1){
                alert("Elegiste papel y la maquina eligió papel: Haz empatado")
            }
            //empate tijeras
            else if (usuario == 2){
                alert("Elegiste tijeras y la maquina eligió tijeras: Haz empatado")
            }

             
        }
        //Casos diferentes
        else if (maquina == 0 && usuario == 1){
            alert("Elegiste papel y la maquina eligió piedra: Felicidades haz ganado")
            jugGan +=1
        }
        else if (maquina == 0 && usuario == 2){
            alert("Elegiste tijeras y la maquina eligió piedra: Haz perdido")
            jugPer +=1
        }

        else if (maquina == 1 && usuario == 0){
            alert("Elegiste piedra y la maquina eligió papel: Haz perdido")
            jugPer +=1
        }

        else if (maquina == 1 && usuario == 2){
            alert("Elegiste tijeras y la maquina eligió papel: Felicidades haz ganado")
            jugGan +=1
        }

        else if (maquina == 2 && usuario == 1 ){
            alert("Elegiste papel y la maquina eligió tijeras: Haz perdido")
            jugPer +=1
        }

        else if  (maquina == 2 && usuario == 0 ){
            alert("Elegiste piedra y la maquina eligió tijeras: Felicidades haz ganado")
            jugGan +=1
        }
    }
    
    

    
}
document.write("Haz jugado: " + jugadas + " partidas" + "<br>")
document.write(" Haz ganado: " + jugGan +  " partidas" + "<br>");
document.write(" Haz perdido: " + jugPer + " partidas" + "<br>");
document.write(" Haz empatado: " + jugEmp + " partidas" + "<br>");