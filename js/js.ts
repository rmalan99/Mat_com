//declare var M:any;

var option=document.body.getElementsByClassName("container")[1].getElementsByTagName("div");
//var elem=document.querySelector(".tooltipped");
//var instance=M.Tooltip.init(elem,{});
let btn=document.getElementById("accion").getElementsByTagName("a")[0];//.getElementsByTagName("i")[0].innerHTML="send" 

function fan(child:number,...valores: string[]){
    let text:string=option[child].getElementsByTagName("a")[0].innerHTML;
    document.getElementById("title").innerHTML=text;
    let datos=document.getElementById("datos");
    // let btn=document.getElementById("accion").getElementsByTagName("a")[0];
    // btn.getElementsByTagName("i")[0].innerHTML="send";
    // btn.setAttribute("data-tooltip","limpiar panel"); 
    for(var i=0;i<datos.childElementCount;i++){                          
        datos.getElementsByTagName("input")[i].setAttribute("placeholder",valores[i]);
    }
}
option[0].addEventListener("click",() => {fan(0,"an1","an2","ani")});
option[1].addEventListener("click",() => {fan(1,"g_a1","g_a2","g_an")});
option[2].addEventListener("click",() => {fan(2,"va","n","n")});
option[3].addEventListener("click",() => {fan(3,"va","n","i")});
option[4].addEventListener("click",() => {fan(4,"a","b","c")});



