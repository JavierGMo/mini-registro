let datosPersonales = document.getElementById('datos-personales-alumno');
let datosAcademicos = document.getElementById('datos-academicos-alumno');
let inscripcionActual = document.getElementById('inscripcion-actual-alumnos');
let reinscripcionAlumno = document.getElementById('reinscripciones-alumnos');
let etsAlumno = document.getElementById('ets-alumno');
let saberespreviosadquiridos = document.getElementById('alumno-spa');
let tutoresAlumno = document.getElementById('tutores-de-alumnos');
let profesoresAlumno = document.getElementById('profesor-de-alumno');

datosPersonales.addEventListener('mouseleave', mostrarMenus);
datosPersonales.addEventListener('mouseenter', quitarMenus);

function mostrarMenus() {
    console.log('hola');
    /*
    let claseComun = document.querySelectorAll('.comun');
    for (let i = 0; i < claseComun.length; i++) {
        document.querySelectorAll('.comun')[i].style.display = 'none';
    }*/
    document.querySelector(`#${this.getAttribute("id")}`).style.background = 'blue';
    console.log(document.querySelectorAll(`#${this.getAttribute("id")} div`));
    console.log(document.querySelectorAll(`${this.getAttribute('id')}`));
    console.log(document.getElementsByTagName(`${this.getAttribute('class')}`));
    document.querySelector(`#${this.getAttribute("id")} div`).style.display = 'none';
    /**hacer un metodo para ocultar despues de quitar el mouse del div */
    //console.log(this.getAttribute('id'));
    //console.log(this.getElementsByTagName('ul'));
    //document.getElementById(this.getAttribute("href").split("#")[1]).style.display = 'block';
    //checar las demas formas con className y classList

}

function quitarMenus() {
    console.log('fueras');
    document.querySelector(`#${this.getAttribute("id")} div`).style.display = 'block';
}