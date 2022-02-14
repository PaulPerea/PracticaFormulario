

// console.log("Codigo Sincrono");
// console.log("Inicio");

// function dos() {
//     console.log("Dos");
// }

// function uno() {
//     console.log("Uno");
//     dos();
//     console.log("Tres");
// }

// uno();
// console.log("Fin");


// console.log("Codigo Asincrono");
//     console.log("Inicio");

//     function dos() {
//         setTimeout(() => {
//             console.log("Dos");
//         }, 1000);
//     }

//     function uno() {
//         setTimeout(() => {
//             console.log("Uno");
//         }, 0);
//         dos();
//         console.log("Tres");
//     }

//     uno();
//     console.log("Fin");




    
    




    var a = 0;
    var d = 0;
    var e = 0;

    function num1() {
        a++;
        
        do {
            b=0;
            for (let i = 1; i <= 3; i++) {
                    setTimeout(() => {
                    console.log("hilo " + a + " imprimiendo " + i);
                }, 8000);
            }
            b++;
        } while (b==3);
    }
    function num2() {
        d++;
        
        do {
            b=0;
            for (let i = 1; i <= 3; i++) {
                    setTimeout(() => {
                    console.log("hilo " + d + " imprimiendo " + i);
                }, 7000);
            }
            b++;
        } while (b==3);
    }
    function num3() {
        e++;
        do {
            b=0;
            for (let i = 1; i <= 3; i++) {
                    setTimeout(() => {
                    console.log("hilo " + e + " imprimiendo " + i);
                }, 10000);
            }
            b++;
        } while (b==3);
    }
    document.getElementById("boton1").addEventListener("click",() =>{
        console.log("Soy boton 1");
        num1();
    });
    document.getElementById("boton2").addEventListener("click",() =>{
        console.log("Soy boton 2");
        num2();
    });
    document.getElementById("boton3").addEventListener("click",() =>{
        console.log("Soy boton 3");
        num3();
    });













    // var blinkText = document.querySelector('#blink');
    // var i=0;
    
    // blinkText.style.opacity = 1;

    // var timer= setInterval(function() {
    //     blinkText.style.opacity = blinkText.style.opacity == 1 ? 0 : 1;
        
    //     console.log("enviar correo numero: " + i + "numero de opacity: " +blinkText.style.opacity);

    //     if (i==2) {
    //         clearInterval(timer);
    //     }
    //     i++
    // }, 3000);
    // Es
