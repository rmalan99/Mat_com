let option=document.body.getElementsByClassName("container")[1].getElementsByTagName("div");
option[0].addEventListener("click",() => {let text:string=option[0].getElementsByTagName("a")[0].innerHTML;
document.getElementById("title").innerHTML=text;
let datos=document.getElementById("datos")
let place_holder:Array<string>=["an1","an2"];
for(var i=0;i<datos.childElementCount;i++){
    datos.getElementsByTagName("input")[i].setAttribute("placeholder",place_holder[i]);
}
});
// option[1].addEventListener("click",() => {alert("funciono")});
// option[2].addEventListener("click",() => {alert("funciono")});
// option[3].addEventListener("click",() => {alert("funciono")});
// option[4].addEventListener("click",() => {alert("funciono")});