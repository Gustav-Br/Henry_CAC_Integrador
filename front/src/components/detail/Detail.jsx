import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./Detail.module.css";


function Detail() {

  const {id} = useParams(); 
  const [character, setCharacter] = useState({});

  useEffect(() => { 
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => { 
       if (data.name) { 
          setCharacter(data); 
          console.log(data);
       } else { 
          window.alert('No hay personajes con ese ID'); 
       } 
    }); 

    return setCharacter({}); 
 }, [id]); 

    

  return (
      <div className={style.conteiner}>
         
            {character && (
               <div className={style.wrapConteiner}>
                  <div className={style.wrapTitulos}>
                  <h2 className={style.name}>{character.name}</h2>
                     <div className={style.property}>
                     <h3>Status: {character.status}</h3>
                     <h3>Especie: {character.species}</h3>
                     <h3>Genero: {character.gender}</h3>
                     { character.origin && (
                     <h3>Origen: {character.origin.name}</h3> )}
                     </div>
                  </div>
                  <img className={style.imagen} src={character.image} 
                       alt={`Imagen ${character.name}`} />
               </div>
            )}
           
      </div>
  );
};

export default Detail