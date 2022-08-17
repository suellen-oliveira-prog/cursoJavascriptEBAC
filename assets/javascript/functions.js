function obterMedia(){

    var a = parseInt(document.getElementById("valor-a").value);
    var b = parseInt(document.getElementById("valor-b").value);
    var c = parseInt(document.getElementById("valor-c").value);

    var media = (a + b + c) / 3;

    document.getElementById("resultado").innerHTML  = media;
}