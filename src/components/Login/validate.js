export default function validate(user) {
    let errors = {};
    if (!user.email) {
        errors.email = 'Se requiere un correo electrónico';
    }else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.username = 'El email es inválido';
    }

    if (!user.password) {
    errors.password = 'Se requiere una contraseña';
    } else if (user.password.length<6) {
    errors.password = 'La contraseña es muy corta';
    }
    return errors;
}