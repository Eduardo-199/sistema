window.onload = function(){
    /* var imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRkS3ObvBSCT-dFidu6KhW8vo9L7IXocSlQ&usqp=CAU"; //-->Editar la ruta */
    var boton = document.getElementById('boton');
    var imagenmostrar = document.getElementById('imagenes');


    boton.addEventListener('click', function(){
        var img=document.createElement('img');
        img.setAttribute("src",imagenmostrar);
        img.setAttribute("width","190");
        img.setAttribute("height","190");
        document.getElementById("content").appendChild(img);
    });
}