let usuarios = [];
let saldoInicial = 0; // Saldo inicial predeterminado

//estoy creando la funcion para registrar un usuarios

function registrarUsuario() {
    const nombre = prompt("Ingresa tu nombre:");
    if (nombre) {
        const usuario = {
            nombre: nombre,
            saldo: 0 // Saldo inicial del usuario
        };
        usuarios.push(usuario); // Agrega el objeto usuario al array
        alert(`Bienvenido/a ${nombre}! Tu saldo inicial es $0.`);
    } else {
        alert("No ingresaste un nombre válido.");
    }
}
function listarUsuarios() {
    if (usuarios.length > 0) {
        let lista = "Usuarios registrados:\n";
        usuarios.forEach(u => {
            lista += `Nombre: ${u.nombre}, Saldo: $${u.saldo}\n`;
        });
        alert(lista);
    } else {
        alert("No hay usuarios registrados.");
    }
}

function realizarOperacion() {
    const nombre = prompt("Ingresa tu nombre para realizar una operación:");
    const usuario = usuarios.find(u => u.nombre === nombre); // Busca al usuario por su nombre

    if (usuario) {
        const operacion = prompt("¿Qué operación deseas realizar? (depositar / retirar)");

        if (operacion === "depositar") {
            let cantidad = parseFloat(prompt("¿Cuánto deseas depositar?"));
            if (!isNaN(cantidad) && cantidad > 0) {
                usuario.saldo += cantidad;
                alert(`Depósito exitoso. Tu nuevo saldo es: $${usuario.saldo}`);
            } else {
                alert("Cantidad inválida.");
            }
        } else if (operacion === "retirar") {
            let cantidad = parseFloat(prompt("¿Cuánto deseas retirar?"));
            if (!isNaN(cantidad) && cantidad > 0 && cantidad <= usuario.saldo) {
                usuario.saldo -= cantidad;
                alert(`Retiro exitoso. Tu nuevo saldo es: $${usuario.saldo}`);
            } else {
                alert("Cantidad inválida o saldo insuficiente.");
            }
        } else {
            alert("Operación no reconocida.");
        }
    } else {
        alert("Usuario no encontrado.");
    }
}

function consultarSaldo() {
    const nombre = prompt("Ingresa tu nombre para consultar tu saldo:");
    const usuario = usuarios.find(u => u.nombre === nombre); // Busca al usuario por su nombre

    if (usuario) {
        alert(`Tu saldo actual es: $${usuario.saldo}`);
    } else {
        alert("Usuario no encontrado.");
    }
}