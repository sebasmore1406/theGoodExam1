const boton = {
    registrarAlumnos : document.querySelector('#registrar-alumnos'),
    mostrarAlumnos : document.querySelector('#mostrar-alumnos')
};

const tablaAlumnos = document.querySelector('#alumnos');
const noAlumnos = document.querySelector('#no-alumnos')

let alumnos = [];

let porRegistrar = ['','','']

boton.registrarAlumnos.addEventListener('click', e => {
    porRegistrar[0] = prompt('Ingresa el nombre del alumno.');
    porRegistrar[1] = prompt('Ingresa el grupo del alumno.');
    porRegistrar[2] = prompt('Ingresa la matrícula del alumno.');
    if (porRegistrar[0] === '' || porRegistrar[1] === '' || porRegistrar[2] === '') {
        alert('Registro no concluido, no se llenaron todos los datos.')
    } else {
        if (alumnos.length === 0) {
            noAlumnos.style.display = 'none'
        };
        alumnos += porRegistrar;
        let template = `
        <tr>
            <td>${porRegistrar[0]}</td>
            <td>${porRegistrar[1]}</td>
            <td>${porRegistrar[2]}</td>
        </tr>
        `;
        tablaAlumnos.innerHTML += template;
        alert('Datos registrados con éxito.');
    };
    e.preventDefault();
})

window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'r') {
        porRegistrar[0] = prompt('Ingresa el nombre del alumno.');
        porRegistrar[1] = prompt('Ingresa el grupo del alumno.');
        porRegistrar[2] = prompt('Ingresa la matrícula del alumno.');
        if (porRegistrar[0] === '' || porRegistrar[1] === '' || porRegistrar[2] === '') {
            alert('Registro no concluido, no se llenaron todos los datos.')
        } else {
            if (alumnos.length === 0) {
                noAlumnos.style.display = 'none'
            };
            alumnos += porRegistrar;
            let template = `
            <tr>
                <td>${porRegistrar[0]}</td>
                <td>${porRegistrar[1]}</td>
                <td>${porRegistrar[2]}</td>
            </tr>
            `;
            tablaAlumnos.innerHTML += template;
            alert('Datos registrados con éxito.');
        };
    };
    e.preventDefault();
})

boton.mostrarAlumnos.addEventListener('click', e => {
    if (alumnos.length === 0) {
        if (noAlumnos.style.display === 'block') {
            noAlumnos.style.display = 'none'
        } else {
            noAlumnos.style.display = 'block'
        };
    } else {      
        if (tablaAlumnos.style.display === 'block') {
            tablaAlumnos.style.display = 'none'
        } else {
            tablaAlumnos.style.display = 'block'
        };
    }
    e.preventDefault();
})

window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'm') {     
        if (Object.keys(alumnos).length === 0) {
            if (noAlumnos.style.display === 'block') {
                noAlumnos.style.display = 'none'
            } else {
                noAlumnos.style.display = 'block'
            };
        } else {      
            if (tablaAlumnos.style.display === 'block') {
                tablaAlumnos.style.display = 'none'
            } else {
                tablaAlumnos.style.display = 'block'
            };
        };
    };
    e.preventDefault();
})