// Función de validación
function validateForm() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    // Obtener los elementos de error
    const nombreError = document.getElementById("nombreError");
    const apellidosError = document.getElementById("apellidosError");
    const emailError = document.getElementById("emailError");
    const telefonoError = document.getElementById("telefonoError");

    // Resetear mensajes de error
    nombreError.textContent = "";
    apellidosError.textContent = "";
    emailError.textContent = "";
    telefonoError.textContent = "";

    let isValid = true;

    // Validación de Nombre
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,40}$/;
    if (!nombre) {
        nombreError.textContent = "El campo Nombre es obligatorio.";
        isValid = false;
    } else if (!nombreRegex.test(nombre)) {
        nombreError.textContent = "El nombre solo puede contener letras y espacios (3-40 caracteres).";
        isValid = false;
    }

    // Validación de Apellidos
    const apellidosRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{4,60}$/;
    if (!apellidos) {
        apellidosError.textContent = "El campo Apellidos es obligatorio.";
        isValid = false;
    } else if (!apellidosRegex.test(apellidos)) {
        apellidosError.textContent = "Los apellidos solo pueden contener letras y espacios (4-60 caracteres).";
        isValid = false;
    }

    // Validación de Correo Electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        emailError.textContent = "El campo Correo electrónico es obligatorio.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Ingresa un correo electrónico válido (xxxxxx@xxxxx.xxx).";
        isValid = false;
    }

    // Validación de Teléfono
    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefono) {
        telefonoError.textContent = "El campo Teléfono es obligatorio.";
        isValid = false;
    } else if (!telefonoRegex.test(telefono)) {
        telefonoError.textContent = "El teléfono debe tener exactamente 9 dígitos.";
        isValid = false;
    }

    // Si todo es válido
    if (isValid) {
        alert("Formulario enviado correctamente.");
    }

    return isValid;  // Evitar el envío si no es válido
}
document.getElementById("submit").addEventListener("click", validateForm)
document.getElementById("reset").addEventListener("click", validateForm)
