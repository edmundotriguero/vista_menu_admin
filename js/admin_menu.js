$(document).ready(function () {
    // $("button[id=guardar]").click(function () {

    //     extraer_lista();
    // });

    $("select[id=sel]").change(function(){
        

        var nombre = $('select[id=sel] option:selected').html();
        // console.log(nobmre);
        mostrar_imagen(nombre);
    });
});
// $("button[id=guardar]").click(function () {

//     extraer_lista();
// });

function mostrar_imagen(nombre_imagen){
    $("#imagen-4").attr("src","img/"+nombre_imagen+".jpg");
}

function extraer_lista() {

    $("#sel option").each(function(){
        console.log($(this).text());
     });
      
    // var valor = $("#sel option[value='3']").on();
    // (valor[0].text);
}




function arriba() {
    obj = document.getElementById('sel');
    indice = obj.selectedIndex;
    if (indice > 0) cambiar(obj, indice, indice - 1);
}
function abajo() {
    obj = document.getElementById('sel');
    indice = obj.selectedIndex;
    if (indice != -1 && indice < obj.length - 1)
        cambiar(obj, indice, indice + 1);
}
function cambiar(obj, num1, num2) {
    proVal = obj.options[num1].value;
    proTex = obj.options[num1].text;
    obj.options[num1].value = obj.options[num2].value;
    obj.options[num1].text = obj.options[num2].text;
    obj.options[num2].value = proVal;
    obj.options[num2].text = proTex;
    obj.selectedIndex = num2;
}

