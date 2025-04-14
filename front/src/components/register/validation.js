const validation = (property, value) => {
    console.log(property, value, "property, value");

    let errors = {};

    switch (property) {

        case 'user':
            if (!value) {
                errors.user = "el usuario no debe estar vacio";
            } else if (value.length < 3) {
                errors.user = "el usuario debe tener al menos 3 caracteres";
            } else if (value.length > 20) {
                errors.user = "el usuario no puede tener mas de 20 caracteres";
            } else {
                errors.user = "";           // Validado .....
            };
            break;

        case 'email':
            const regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!value) {
                errors.email = "el email no puede estar vacio";
            } else if (value.length > 30) {
                errors.email = "el email no debe tener mas de 30 caracteres";
            } else if (regExEmail.test(value)) {
                errors.email = "";           // Validado .....
            } else {
                errors.email = "debe ingresar un email Valido";
            };
            break;

        case 'password':
            const setErrors = [];
            const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%&!?@]).{6,20}$/;
            if (regExPass.test(value)) {
                errors.password = "";
            }
            if (!/[a-z]/.test(value)) {
                setErrors.push("debe contener al menos una letra minuscula");
            }
            if (!/[A-Z]/.test(value)) {
                setErrors.push("debe contener al menos una letra mayuscula");
            }
            if (!/\d+/.test(value)) {
                setErrors.push("debe contener al menos un numero");
            }
            if (!/[#$%&!?@]/.test(value)) {
                setErrors.push("debe contener al menos un simbolo");
            }
            if (value.length < 6 || value.length > 20) {
                setErrors.push("debe contener entre 6 y 20 caracteres");
            }
            console.log(setErrors, "setErrors");

            if (setErrors.length > 0) { errors.password = setErrors } //  si hay errores, los guarda en el objeto errors
            break;

        default:
            break;
    };

    return (errors);
};

export default validation;