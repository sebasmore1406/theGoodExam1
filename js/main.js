const boton = {
    registrarAlumnos: document.querySelector('#registrar-alumnos'),
    mostrarAlumnos: document.querySelector('#mostrar-alumnos')
};

const tablaAlumnos = document.querySelector('#alumnos');
const noAlumnos = document.querySelector('#no-alumnos');

let alumnos = [];

function registrarAlumnos(e) {
    let porRegistrar = ['', '', ''];
    porRegistrar[0] = prompt('Ingresa el nombre del alumno.');
    porRegistrar[1] = prompt('Ingresa el grupo del alumno.');
    porRegistrar[2] = prompt('Ingresa la matrícula del alumno.');
    if (porRegistrar[0].trim() === '' || porRegistrar[1].trim() === '' || porRegistrar[2].trim() === '') {
        alert('Registro no concluido, no se llenaron todos los datos.');
    } else {
        alumnos.push(porRegistrar);
        alert('Datos registrados con éxito.');
    };
    e.preventDefault();
};

function mostrarAlumnos(e) {
    if (noAlumnos.style.display === 'block') {
        noAlumnos.style.display = 'none'
    } else {
        if (alumnos.length !== 0) {
            if (tablaAlumnos.style.display === 'block') {
                tablaAlumnos.style.display = 'none'
            } else {
                let header;
                header = `
                <tr>
                    <th>Nombre</th>
                    <th>Grupo</th>
                    <th>Matrícula</th>
                </tr>
                `;
                tablaAlumnos.innerHTML = header;
                for (let index = 0; index < alumnos.length; index++) {
                    let template;
                    template = `
                    <tr>
                        <td>${alumnos[index][0]}</td>
                        <td>${alumnos[index][1]}</td>
                        <td>${alumnos[index][2]}</td>
                    </tr>
                    `;
                    tablaAlumnos.innerHTML += template;
                };
                tablaAlumnos.style.display = 'block'
            };
        } else {
            noAlumnos.style.display = 'block'
        };
    };
    e.preventDefault();
};

boton.registrarAlumnos.addEventListener('click', registrarAlumnos);

boton.mostrarAlumnos.addEventListener('click', mostrarAlumnos);

window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'r') { registrarAlumnos(e) };
    if (e.ctrlKey && e.key === 'm') { mostrarAlumnos(e) };
});