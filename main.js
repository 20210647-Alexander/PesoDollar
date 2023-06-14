var cantidad;

function Cantidad() {
    cantidad = Number.parseFloat(document.getElementById("Can").value);
    console.log(cantidad); 
}

function Convertir() {
    var dol = 7.23; 
    var re ;   
    re = cantidad / dol ;
    document.getElementById("resultado").innerHTML += "$ "+ re;
}

function Eliminar() {
    var Lista = document.getElementById("resultado");
    Lista.removeChild(Lista.children[0]);
    
}


