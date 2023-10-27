import style from "./SearchBar.module.css"
import React, { useState } from "react";


const SearchBar = ({onSearch}) => {
  
  const [id, setId] = useState("");

  const handleChange = (event) => {
      const newValue = event.target.value;
      setId(newValue);
                         //     event.preventDefault();   evita el disparo de renderizado si  la funcion onSearch() se llama directamente 
      
  };

  return (
    <div className={style.conteiner}>
      <div className={style.searchButton}>
        <input className={style.input} onChange={handleChange} value={id} type='search' placeholder="Id" />
        <button className={style.button} onClick={() => onSearch(id)} >Agregar</button>
      </div>
    </div>
  );
};

export default SearchBar;

//              onClick={() => onSearch(id)}       llamar a onSearch() con una arrow  evita el disparo recurrente de la funcion 