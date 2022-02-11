

    var blinkText = document.querySelector('#blink');
    var i=0;
    
    blinkText.style.opacity = 1;

    var timer= setInterval(function() {
        blinkText.style.opacity = blinkText.style.opacity == 1 ? 0 : 1;
        
        console.log("enviar correo numero: " + i + "numero de opacity: " +blinkText.style.opacity);

        if (i==2) {
            clearInterval(timer);
        }
        i++
    }, 3000);
