import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import validation from './validation';
import axios from 'axios';
import PATHROUTES from '../helpers/PathRoutes.helpers';


function Login() {

	const [userData, setUserData] = useState({
		email: "",
		password: ""
	});
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

			axios.post('http://localhost:3001/login', userData)
				.then((response) => {
					const { token, email, user } = response.data;
					console.log(token, email, user);
					localStorage.setItem("token", token);
					localStorage.setItem("email", email);
					localStorage.setItem("user", user);
					setUserData({ ...userData, email: "", password: "" });
					setErrors({});
					navigate(PATHROUTES.HOME);
				})
				.catch((error) => {
					alert("login incorrecto");
				})

		} else {
			alert("Debe completar todos los campos");
		}
	};


	return (
		<div className={style.conteiner}>
			<h3 className={style.title}>Iniciar Sesión</h3>
			<div className={style.link} >
				<p>¿No tienes cuenta? <Link to="/register">Registrate</Link></p>
			</div>
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
		</div>
	)
}

export default Login;