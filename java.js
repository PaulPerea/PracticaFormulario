
// Acctionde habilitar y desabilitar boton
function habilitar() {
    im1 = document.getElementById("nombre").value;
    im2 = document.getElementById("correo").value;
    im3 = document.getElementById("numero").value;
    val = 0;

    if (im1 == "") {
        val++;
    }if (im2 == "") {
        val++;
    }if(im3 == ""){
        val++;
    }
    console.log(val);
    if (val == 0) {
        document.getElementById("boton").disabled=false;
    } else {
        document.getElementById("boton").disabled=true;
    }
}
document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("numero").addEventListener("keyup", habilitar);
document.getElementById("boton").addEventListener("click",() =>{
});

// parametros para los inputs
// texto
function texto(e) {
    key=e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNOPQRSTUWXYZÁÉÍÓÚabcdefghijklmnopqrstuwxyz";

    especiales = [8,13];
    teclas_especiales = false;
    
    for(var i in especiales){
        if (key == especiales[i]){
            teclas_especiales = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !teclas_especiales) {
        alert("Ingresar solo letras");
        return false;
    }
}

// correo

const nombre = document.getElementById("nombre")
const email = document.getElementById("correo")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let adve="";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexEmail.test(email.value)) {
        alert("Direccion Universal")
    }
})

// numero random

function generate(){
    let num = Math.round(Math.random()*1000000);
    document.getElementById("numero").value=num;
}
generate();






