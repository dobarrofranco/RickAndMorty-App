export const validaciones = (userData) => {
    let errors = {};
    let regex = /\d/;

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)) {
        errors.email = 'Debe ser un email válido'
    }
    
    if (userData.email.length === 0) {
        errors.email = 'El email está vacio'
    }
    
    if (userData.email.length > 35) {
        errors.email = 'Su email no puede superar los 35 caracteres'
    }

    if (userData.password.length < 6) {
        errors.password = 'La contraseña tiene que tener entre 6 y 10 caracteres'
    }

    if (userData.password.length > 10) {
        errors.password = 'La contraseña tiene que tener entre 6 y 10 caracteres'
    } 
    
    if (!regex.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener al menos un número'
    }    

    return errors;
}
  

