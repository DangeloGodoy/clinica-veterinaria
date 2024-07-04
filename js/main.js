let cantidad = 1;
const pacientes = [];

function registrarPaciente() {
    let cantidad = parseInt(prompt("Cuantos pacientes se desean agregar?"));

    let n = 1;
    while (n <= cantidad) {
        let nombre = prompt("Ingrese el nombre del " + n + "º paciente:");
        let especie = prompt("Ingrese la especie del " + n + "º paciente:");
        let edad = parseInt(prompt("Ingrese la edad del " + n + "º paciente:"));

        const paciente = { id: n, nombre: nombre, especie: especie, edad: edad }
        pacientes.push(paciente)
        alert("Paciente " + n + " fue agregado correctamente")
        n++
    }
}

function sumaTarifa() {
    let variable1 = parseInt(prompt("Ingrese primer valor"));
    let variable2 = parseInt(prompt("Ingrese segundo valor"));
    tarifa = variable1 + variable2
    alert("La tarifa es de $" + tarifa)
    console.log("La tarifa es de $" + tarifa)
}

sumaTarifa()

let opcion = parseInt(prompt("MENU\n Seleccione la función que necesite realizar \n1. Agregar Paciente \n2. Suma de Tarifa \n3. Salir"))

while (opcion !== 3) {
    switch (opcion) {
        case 1:
            registrarPaciente()
            console.log(pacientes)
            break;
        case 2:
            sumaTarifa()
            break;
        default:
            alert("Opción incorrecta")
    }
    opcion = parseInt(prompt("Seleccione la función que necesite realizar \n1. Agregar Paciente \n2. Suma de Tarifa \n3. Salir"))
}

alert("Finalizando programa. Presionar Enter para cerrar")