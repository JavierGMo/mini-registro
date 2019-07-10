//variable para validar datos del formulario
let btnConDatos = document.getElementById('enviar-datos');


//variables para mostrar el contenido
let inicio = document.getElementById('cli-inicio');
let reglamento = document.getElementById('cli-reglamento');
let ayuda = document.getElementById('cli-ayuda');
let recuperarCon = document.getElementById('cli-recuperar');

//evento para validar los datos del formulario
btnConDatos.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('flag');
    let boleta = document.getElementById('boleta').value;
    let contrasena = document.getElementById('contrasena').value;
    let rescaptcha = document.getElementById('captcha-reslt').value;
    if ((boleta == null || boleta.trim() == '') || (contrasena == null || contrasena.trim() == '')) {
        //document.getElementById('formulario-inicio-sesion').innerHTML += "<div class='red'>Usuario o contraseña incorrectos</div>";
        alert('Usuario o contraseña incorrectos');
    }
    //caso especial para el captcha
    if (rescaptcha == null || rescaptcha.trim() == '') {
        alert('Usuario o contraseña incorrectos');
        //document.getElementById('formulario-inicio-sesion').innerHTML += "<div class='red'>Captcha mal</div>";
    }

});

//evento para ocultar los elementos del contenido

inicio.addEventListener('click', ocultarDivs);
reglamento.addEventListener('click', ocultarDivs);
ayuda.addEventListener('click', ocultarDivs);
recuperarCon.addEventListener('click', ocultarDivs);

function ocultarDivs() {
    let claseComun = document.querySelectorAll('.comun');
    for (let i = 0; i < claseComun.length; i++) {
        document.querySelectorAll('.comun')[i].style.display = 'none';
    }
    document.getElementById(this.getAttribute("href").split("#")[1]).style.display = 'block';
    //checar las demas formas con className y classList

}