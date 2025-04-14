import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import validation from './validation';
import axios from 'axios';
import PATHROUTES from '../helpers/PathRoutes.helpers';


function Register() {

    const [userData, setUserData] = useState({ email: "", password: "", user: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handlerChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const newError = validation(property, value);
        setErrors(prevErrors => ({ ...prevErrors, ...newError }));     // función de actualización
        setUserData({ ...userData, [property]: value });
        console.log(errors, "errors");

    };

    const handlerSubmit = (event) => {
        event.preventDefault();             //  Evita que recargue la página ....
        if (!errors.email && !errors.password && !errors.user) {

            axios.post('http://localhost:3001/register', userData)
                .then((response) => {
                    console.log(response.data, "Registro exitoso");
                    setUserData({ ...userData, email: "", password: "", user: "" });
                    setErrors({});
                    navigate(PATHROUTES.LOGIN);
                })
                .catch((error) => {
                    console.log(error.response.data);
                    alert(error.response?.data || "error al registrarse");
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
                    <label htmlFor="user">user: </label>
                    <input type="text" name="user" value={userData.user} onChange={(handlerChange)} ></input>
                </div>
                {(errors.user) && (<div style={{ color: 'red' }}>{errors.user}</div>)}
                <div className={style.campos}>
                    <label htmlFor="email">email: </label>
                    <input type="text" name="email" value={userData.email} onChange={(handlerChange)} ></input>
                </div>
                {(errors.email) && (<div style={{ color: 'red' }}>{errors.email}</div>)}
                <div className={style.campos}>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" value={userData.password} onChange={(handlerChange)} ></input>
                </div>
                {(errors.password) && (<ul style={{ color: 'red', listStyle: 'none' }}>
                    {errors.password.map((error, index) => (<li key={index}>{error}</li>))}</ul>)}
                <button type="submit" className={style.button} >Submit</button>
            </form>
            <div className={style.link}>
                <p>Ya tienes cuenta? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;