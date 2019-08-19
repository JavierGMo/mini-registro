let datosPersonales = document.getElementById('datos-personales-alumno');
let datosAcademicos = document.getElementById('datos-academicos-alumno');
let inscripcionActual = document.getElementById('inscripcion-actual-alumnos');
let reinscripcionAlumno = document.getElementById('reinscripciones-alumnos');
let etsAlumno = document.getElementById('ets-alumno');
let saberespreviosadquiridos = document.getElementById('alumno-spa');
let tutoresAlumno = document.getElementById('tutores-de-alumnos');
let profesoresAlumno = document.getElementById('profesor-de-alumno');

datosPersonales.addEventListener('mouseenter', mostrarMenus);
datosPersonales.addEventListener('mouseleave', quitarMenus);

datosAcademicos.addEventListener('mouseenter', mostrarMenus);
datosAcademicos.addEventListener('mouseleave', quitarMenus);

inscripcionActual.addEventListener('mouseenter', mostrarMenus);
inscripcionActual.addEventListener('mouseleave', quitarMenus);

reinscripcionAlumno.addEventListener('mouseenter', mostrarMenus);
reinscripcionAlumno.addEventListener('mouseleave', quitarMenus);

etsAlumno.addEventListener('mouseenter', mostrarMenus);
etsAlumno.addEventListener('mouseleave', quitarMenus);

saberespreviosadquiridos.addEventListener('mouseenter', mostrarMenus);
saberespreviosadquiridos.addEventListener('mouseleave', quitarMenus);

tutoresAlumno.addEventListener('mouseenter', mostrarMenus);
tutoresAlumno.addEventListener('mouseleave', quitarMenus);

profesoresAlumno.addEventListener('mouseenter', mostrarMenus);
profesoresAlumno.addEventListener('mouseleave', quitarMenus);


function quitarMenus() {
    console.log('hola');
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

function mostrarMenus() {
    console.log('fueras');
    document.querySelector(`#${this.getAttribute("id")} div`).style.display = 'block';
}