import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Form.module.css';
import validation from './validation';
import axios from 'axios';


function Form() {

    const [ userData, setUserData ] = useState({
        email:"",
        password:""
      });

    const [ errors, setErrors ] = useState({});

    const navigate = useNavigate();
    

    const handlerChange = (event) => {
        const property = event.target.name;
        const valor = event.target.value;
        setErrors(validation({...userData, [property]: valor}));
        setUserData({...userData, [property]: valor});
    };

    const handlerSubmit = (event) => {
        event.preventDefault();             //  Evita que recargue la página ....
        if (!errors.email && !errors.password){   
          
          axios.post('http://localhost:3001/login', userData)
            .then((response) =>{
              setUserData({...userData,  email:"", password:"" });
              setErrors({});
              navigate('/home');
              console.log("login correcto");
            })
            .catch((error) => {
              alert("login incorrecto");
            })
          
        }else{
          alert("Debe completar todos los campos");
        }
    };


  return (
    <div className={style.conteiner}>
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

export default Form;