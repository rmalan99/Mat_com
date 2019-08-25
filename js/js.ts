// let btn=document.getElementById("accion").getElementsByTagName("a")[0];
    // btn.getElementsByTagName("i")[0].textContent="send";
    // btn.setAttribute("data-tooltip","limpiar panel"); 
//.getElementsByTagName("i")[0].textContent="send" 
var option=document.body.getElementsByClassName("container")[1].getElementsByTagName("div");
var option_nav_mobile=document.getElementById("nav-mobile").getElementsByTagName("li");
var btn=document.getElementById("accion").getElementsByTagName("a")[0];
var datos=document.getElementById("datos");
var arana=document.getElementById("arana");

option[0].addEventListener("click",() => {campo_inicial(0,"an1","an2","ani")});
option[1].addEventListener("click",() => {campo_inicial(1,"g_a1","g_a2","g_an")});
option[2].addEventListener("click",() => {campo_inicial(2,"capital","periodo","taza de interes")});
option[3].addEventListener("click",() => {campo_inicial(3,"capital","periodo","taza de interes")});
option_nav_mobile[0].addEventListener("click",() => {campo_inicial(0,"an1","an2","ani")});
option_nav_mobile[1].addEventListener("click",() => {campo_inicial(1,"g_a1","g_a2","g_an")});
option_nav_mobile[2].addEventListener("click",() => {campo_inicial(2,"capital","periodo","taza de interes")});
option_nav_mobile[3].addEventListener("click",() => {campo_inicial(3,"capital","periodo","taza de interes")});
btn.addEventListener("click",()=> {accion()});


function campo_inicial(child:number,...valores: string[]){
    arana.classList.add("hide")
    datos.classList.remove("hide");
    btn.classList.remove("hide");
    let text=option[child].firstElementChild.textContent;
    document.getElementById("title").textContent=text;
    for(var i=0;i<datos.childElementCount;i++){                          
        datos.getElementsByTagName("input")[i].setAttribute("placeholder",valores[i]);
    }
}
function accion(){
    let a:string=btn.getElementsByTagName("i")[0].textContent;
    if (a == "menu"){
        let titulo:string= document.getElementById("title").textContent;
        if (titulo == "Progreccion arimetica"){
            cambio();
            pro_ari();
        }
        if (titulo == "progreccion Geometrica"){
            cambio();
            pro_geo();
        }
        if (titulo == "interes simple"){
            cambio();
            int_simp();
        }
        if (titulo == "interes compuesto"){
            cambio();
            int_comp();
        }
    }
    if (a == "delete"){
        document.getElementById("title").textContent="";
        datos.classList.add("hide");
       document.getElementById("result").innerHTML="";
       cambio();
    }
}
function cambio(){
    let a:string=btn.getElementsByTagName("i")[0].textContent;
    if (a=="menu"){
        let a:string=btn.getElementsByTagName("i")[0].textContent="delete";
        btn.setAttribute("data-tooltip","borrar datos");
    }else{
        let a:string=btn.getElementsByTagName("i")[0].textContent="menu";
        btn.setAttribute("data-tooltip","calcular valores");
        btn.classList.add("hide");
        arana.setAttribute("src","./icon/arana+texto.png");
        arana.classList.remove("hide");
    }

}
function escritor(titulo:string,resultados:number){
    if (isNaN(resultados) == true){
        // anti_error();
    }
    else{
        let new_oject=document.createElement("p");
        new_oject.innerHTML=`<h4 style='red'>${titulo}</h4><p>${resultados}</p>`
        let ojete=document.getElementById("result");
        ojete.appendChild(new_oject);
    }
    
}

function pro_ari(){
    //[an1=0]/[an2=1]/[ani=2]
    let coleccion:Array<number>=[],diferencia:number,calculo:number,total:number;
    for (var _i=0;_i<datos.childElementCount;_i++){
        coleccion[_i]= parseInt(datos.getElementsByTagName("input")[_i].value);
    }
    diferencia=(coleccion[1]-coleccion[0]);
    escritor("diferencia",diferencia);
    calculo=((coleccion[2]-1)*diferencia);
    escritor("valor en la posicion",coleccion[2]);
    total=calculo + diferencia;  
    escritor("es",total);
    
}
function pro_geo(){
    let coleccion:Array<number>=[];
    for (var _i=0;_i<datos.childElementCount;_i++){
        coleccion[_i]= parseInt(datos.getElementsByTagName("input")[_i].value);
    }
    let r:number= coleccion[1]/coleccion[0];
    let total:number=(coleccion[0]*(r ** (coleccion[2]-1)));
    escritor("la razon es ",r);
    escritor("valor en la posicion",coleccion[2]);
    escritor("es",total);
}

function int_simp(){
    //interes simple= capital * taza_interes * periodo)
    let coleccion:Array<number>=[];
    for (var _i=0;_i<datos.childElementCount;_i++){
        coleccion[_i]= parseFloat(datos.getElementsByTagName("input")[_i].value);
    }
    let total:number;
    coleccion[2]=coleccion[2]/100;
    total= (coleccion[0] * coleccion[2] * coleccion[1]);
    escritor("El interes simple es de",total);
    escritor("obteniendo un total de ",total + coleccion[0]);
}

function int_comp(){
    //interes compuesto= (capital *(1 + (taza de interes/100)) ** periodo)
    let coleccion:Array<number>=[];
    for (var _i=0;_i<datos.childElementCount;_i++){
        coleccion[_i]= parseFloat(datos.getElementsByTagName("input")[_i].value);
    }
    let total:number;
    coleccion[2]=coleccion[2]/100;
    total= (coleccion[0] * (1 + (coleccion[2]/100) ** coleccion[1]));
    escritor("El interes compuesto es de",total);
    escritor("Obteniendo un total de ",total + coleccion[0]);
}
