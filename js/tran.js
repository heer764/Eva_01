function cambioimg (){
    var imagenes = ["img/Denkion isotipo copia.png", "img/fondo_receiver.jpg", "img/fondo_tocadiscos.jpg"]
    var i = 0;
    var imagen = document.getElementById("imagenf");

    setTimeout(function(){ 
    imagen.style.opacity = 0;

    setTimeout(function(){
        imagen.src = imagenes[i];
        imagen.style.opacity=1;
        i = (i+1) % imagenes.length;
        cambioimg();         
        }, 1000);
    },3000);
}

window.onload = function(){
    cambioimg();
};