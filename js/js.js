var option = document.body.getElementsByClassName("container")[1].getElementsByTagName("div");
option[0].addEventListener("click", function () {
    var text = option[0].getElementsByTagName("a")[0].innerHTML;
    document.getElementById("title").innerHTML = text;
    var datos = document.getElementById("datos");
    var place_holder = ["an1", "an2"];
    for (var i = 0; i < datos.childElementCount; i++) {
        datos.getElementsByTagName("input")[i].setAttribute("placeholder", place_holder[i]);
    }
});
// option[1].addEventListener("click",() => {alert("funciono")});
// option[2].addEventListener("click",() => {alert("funciono")});
// option[3].addEventListener("click",() => {alert("funciono")});
// option[4].addEventListener("click",() => {alert("funciono")});
