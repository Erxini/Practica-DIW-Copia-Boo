// Obtener el formulario
const form = document.getElementById('contactForm');

const handleSubmit = (event) => {
  event.preventDefault(); 

  // Obtener los input
  const nombre = document.getElementById('nombre');
  const apellidos = document.getElementById('apellidos');
  const dni = document.getElementById('dni');
  const correo = document.getElementById('correo');
  const politica = document.getElementById('politica'); 

  const nombreError = document.getElementById('nombreError');
  const apellidosError = document.getElementById('apellidosError');
  const dniError = document.getElementById('dniError');
  const correoError = document.getElementById('correoError');
  const politicaError = document.getElementById('politicaError'); 

  nombreError.textContent = '';
  apellidosError.textContent = '';
  dniError.textContent = '';
  correoError.textContent = '';
  politicaError.textContent = '';

  let isValid = true; 
  // Validación del nombre
  if (!/^[A-Z][a-zA-Z]{1,19}$/.test(nombre.value)) {
    nombreError.textContent = 'El nombre debe comenzar con mayúscula y no debe superar los 20 caracteres.';
    isValid = false;
  } else {
    nombre.setCustomValidity('');
  }
  // Validación de los apellidos
  if (!/^[A-Z][a-zA-Z]+( [A-Z][a-zA-Z]+)*$/.test(apellidos.value)) {
    apellidosError.textContent = 'Los apellidos deben comenzar con mayúscula y no deben superar los 20 caracteres.';
    isValid = false;
  } else {
    apellidos.setCustomValidity('');
  }
  // Validación del DNI
  if (!/^[0-9]{8}[A-Za-z]$/.test(dni.value)) {
    dniError.textContent = 'El DNI debe tener el formato correcto: 8 dígitos seguidos de una letra.';
    isValid = false;
  } else {
    dni.setCustomValidity('');
  }
  // Validación del correo
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value)) {
    correoError.textContent = 'El correo debe ser válido (incluyendo @ y .).';
    isValid = false;
  } else {
    correo.setCustomValidity('');
  }
  // Validación de política de privacidad
  if (!politica.checked) {
    politicaError.textContent = 'Debes aceptar la política de privacidad para continuar.';
    isValid = false;
  }
  // Si todos los campos son válidos, se muestra el mensaje de éxito
  if (isValid) {
    alert("Hemos registrado su solicitud con éxito.");
    form.submit(); // Enviamos el formulario si es válido
  } else {
    // Si hay errores, se muestra el primer error
    form.reportValidity();
  }
};
form.addEventListener('submit', handleSubmit);
// Validar campos
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    const errorElement = document.getElementById(e.target.id+' Error');
    e.target.setCustomValidity(''); 
    errorElement.textContent = ''; 
  });
});
