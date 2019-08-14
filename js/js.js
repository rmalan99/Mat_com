// let btn=document.getElementById("accion").getElementsByTagName("a")[0];
// btn.getElementsByTagName("i")[0].textContent="send";
// btn.setAttribute("data-tooltip","limpiar panel"); 
//.getElementsByTagName("i")[0].textContent="send" 
var option = document.body.getElementsByClassName("container")[1].getElementsByTagName("div");
var btn = document.getElementById("accion").getElementsByTagName("a")[0];
var datos = document.getElementById("datos");
option[0].addEventListener("click", function () { fan(0, "an1", "an2", "ani"); });
option[1].addEventListener("click", function () { fan(1, "g_a1", "g_a2", "g_an"); });
option[2].addEventListener("click", function () { fan(2, "va", "n", "n"); });
option[3].addEventListener("click", function () { fan(3, "va", "n", "i"); });
option[4].addEventListener("click", function () { fan(4, "a", "b", "c"); });
btn.addEventListener("click", function () { accion(); });
function fan(child) {
    var valores = [];
    for (var _a = 1; _a < arguments.length; _a++) {
        valores[_a - 1] = arguments[_a];
    }
    var text = option[child].firstElementChild.textContent;
    alert(text);
    document.getElementById("title").textContent = text;
    for (var i = 0; i < datos.childElementCount; i++) {
        datos.getElementsByTagName("input")[i].setAttribute("placeholder", valores[i]);
    }
}
function accion() {
    var a = btn.getElementsByTagName("i")[0].textContent;
    if (a == "menu") {
        var titulo = document.getElementById("title").textContent;
        if (titulo == "Progreccion arimetica") {
            cambio();
            pro_ari();
        }
    }
    if (a == "delete") {
        document.getElementById("result").innerHTML = "";
        cambio();
    }
}
function cambio() {
    alert("perro");
    var a = btn.getElementsByTagName("i")[0].textContent;
    if (a == "menu") {
        var a_1 = btn.getElementsByTagName("i")[0].textContent = "delete";
        btn.setAttribute("data-tooltip", "borrar datos");
    }
    else {
        var a_2 = btn.getElementsByTagName("i")[0].textContent = "menu";
        btn.setAttribute("data-tooltip", "calcular valores");
    }
}
// if (a == "delete"){
// }else{
//     if (a == "menu"){
//    let y= document.getElementById("title").textContent;
//    alert(y);
//    if (y == "Progreccion arimetica"){
//         pro_ari();
//    }}
// }
function escritor(titulo, resultados) {
    var new_oject = document.createElement("p");
    new_oject.innerHTML = "<h4 style='red'>" + titulo + "</h4><p>" + resultados + "</p>";
    var ojete = document.getElementById("result");
    ojete.appendChild(new_oject);
}
function pro_ari() {
    //[an1=0]/[an2=1]/[ani=2]
    var coleccion = [], diferencia, calculo, total;
    for (var _i = 0; _i < datos.childElementCount; _i++) {
        coleccion[_i] = parseInt(datos.getElementsByTagName("input")[_i].value);
    }
    diferencia = (coleccion[1] - coleccion[0]);
    escritor("diferencia", diferencia);
    calculo = ((coleccion[2] - 1) * diferencia);
    escritor("valor en la posicion", coleccion[2]);
    total = calculo + diferencia;
    escritor("es", total);
}
