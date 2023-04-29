
// Cargamos los datos de los paises y las provincias
let responsePaises = await fetch("./files/jsons/paises.json");
let paises = await responsePaises.json();

let responseProvincias = await fetch("./files/jsons/provincias.json");
let provincias = await responseProvincias.json();


window.onload = function () {

    //Cargamos los inputs
    var countryList = document.getElementById("contry");

    paises.forEach(element => {
        option = creaNodo(element.id, option, element.nombre);
        insertaNodo(countryList,option)
        
    });

    git config --global user.email "email@youremail.com"

}

/*

document.getElementById("contry").value = "ESPAÑA";
debugger

date = new Date();

d = date.getDate();
m = date.getMonth() + 1; // take care of the month's number here ⚠️
y = date.getFullYear();


document.getElementById("date").value = new Date(y, m, d);

*/


/**Posicion en la que se va a insertar el elemento creado, devuelve el nodo creado */
function creaNodo(idElemento, tipo, texto = "") {

    let hijo = document.createElement(tipo);

    if (idElemento != "") {
        hijo.setAttribute("id", idElemento);
    }

    if (texto != "") {
        hijo.appendChild(document.createTextNode(texto));
    }

    return hijo;
}


function insertaNodo(padre,hijo,posicion=-1){

    if (typeof padre === "string" ){
        padre = document.getElementById(padre);
    }else{
        padre = padre;
    }

    if (typeof hijo === "string" ){
        hijo = document.getElementById(hijo);
    }else{
        hijo = hijo;
    }

    if(posicion === -1){
        posicion =  padre.childNodes.length;
    }else{
        posicion = posicion--;
    }

    padre.insertBefore(hijo, padre.childNodes[posicion]);

}

