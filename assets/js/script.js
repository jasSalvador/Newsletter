//Si se aceptan los términos, pero no se ingresa un correo, o viceversa, enviar alerta
let checkbox = document.getElementById('checkCondiciones'); //checkbox
let btnSuscribete = document.getElementById('btnSuscribete') //btn submit

btnSuscribete.addEventListener('click', function(){
    let correo = document.getElementById('inputCorreo').value; 

    //verificar
    if (!checkbox.checked || correo === ''){
        alert("Parece que nos faltó algo...");

    }else {
        alert("!Felicitaciones¡ pronto escucharás de nosotros")
    }
});
