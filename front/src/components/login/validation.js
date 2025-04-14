const validation = (data) => {
    let errors = {};
    const regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!data.email) {
        errors.email = "el email no debe estar vacio";
    } else if (data.email.length > 35) {
        errors.email = "el email no debe tener mas de 35 caracteres";
    } else if (regExEmail.test(data.email)) {
        errors.email = "";           // Validado .....
    } else {
        errors.email = "debe ingresar un email Valido";
    };

    // El password no lo validamos en login, pues debe ser el password registrado

    return (errors);
};

export default validation;