"use-strict"
var id = document.getElementById("container");
var nodo = document;
recorrer(nodo);

function recorrer(nodo){ 
    var nodos = nodo.childNodes; 
    var cont = nodos.length;
    for (var i = 0; i < cont; i++){
        if(!nodos[i]){ 
            continue; 
        } 
        if(nodos[i].childNodes.length > -1){ 
            
            id.innerHTML += nodos[i].nodeName + "<br>";
            recorrer(nodos[i]); 
        } 
    }
}  


