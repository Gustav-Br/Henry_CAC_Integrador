import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import validation from './validation';
import axios from 'axios';


function Register() {

    const [userData, setUserData] = useState({ email: "", password: "" });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handlerChange = (event) => {
        const property = event.target.name;
        const valor = event.target.value;
        setErrors(validation({ ...userData, [property]: valor }));
        setUserData({ ...userData, [property]: valor });
    };

    const handlerSubmit = (event) => {
        event.preventDefault();             //  Evita que recargue la página ....
        if (!errors.email && !errors.password) {

            axios.post('http://localhost:3001/register', userData)
                .then((response) => {

                    console.log(response.data, "Registro exitoso");
                    setUserData({ ...userData, email: "", password: "" });
                    setErrors({});
                    navigate('/login');
                })
                .catch((error) => {
                    alert("el mail ya existe");
                })

        } else {
            alert("Debe completar todos los campos");
        }
    };


    return (
        <div className={style.conteiner}>
            <h3 className={style.title}>Registrarse</h3>
            <form onSubmit={handlerSubmit} className={style.form}>
                <div className={style.campos}>
                    <label htmlFor="email">email: </label>
                    <input type="text" name="email" value={userData.email} onChange={(handlerChange)} ></input>
                </div>
                {(errors.email) && (<div style={{ color: 'red' }}>{errors.email}</div>)}
                <div className={style.campos}>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" value={userData.password} onChange={(handlerChange)} ></input>
                </div>
                {(errors.password) && (<div style={{ color: 'red' }}>{errors.password}</div>)}
                <button type="submit" className={style.button} >Submit</button>
            </form>
            <div className={style.link}>
                <p>Ya tienes cuenta? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;