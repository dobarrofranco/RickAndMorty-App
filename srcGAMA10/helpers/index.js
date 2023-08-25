export const validar = (input) => {
  let errors = {};
  if (input.password.length < 7) {
    errors.password = "La contrasena debe tener al menos 6 caracteres";
  }

  if (input.email.length < 10 || input.email.length > 50) {
    errors.email = "El correo es demasiado largo";
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.email = "Debe ser un email valido";
  }

  return errors; //{password:"La contrasena debe tener al menos 6 caracteres"}
};
