const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Las contraseñas no coinciden");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('keyup', validatePassword);

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    validatePassword();
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (form.checkValidity()) {
  
    alert("¡La inscripción ha sido correcta!");
 
    form.submit();
  }
});
