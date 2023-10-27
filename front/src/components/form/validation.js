const validation = (data) => {
    let errors = {};
    const regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!data.email){
        errors.email="el email no debe estar vacio";
    }else if (data.email.length > 35){
        errors.email="el email no debe tener mas de 35 caracteres";
    }else if (regExEmail.test(data.email)){
        errors.email="";           // Validado .....
    }else{    
        errors.email="debe ingresar un email Valido";
    };

    const regExPass = /^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/;
    if (regExPass.test(data.password)){
        errors.password="";
    }else if (!/\d+/.test(data.password)){
        errors.password="debe contener al menos un numero";
    }else if (!/[a-zA-Z]/.test(data.password)){
        errors.password="debe contener al menos una letra";
    }else if (data.password.length < 6 ){
        errors.password="debe contener al menos 6 caracteres";
    }else if (data.password.length > 10 ){
        errors.password="no puede contener mas de 10 caracteres";
    };
    
    return(errors);
};

export default validation;