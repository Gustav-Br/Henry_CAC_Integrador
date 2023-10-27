import "./App.css";
import React, {useState} from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from "axios";
import PATHROUTES from "./components/helpers/PathRoutes.helpers";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";


function App() {

  const [characters, setCharacters] = useState([]);

  const {pathname} = useLocation();

  function onSearch(id) { 
    axios(`http://localhost:3001/character/${id}`).then(({ data }) => { 
      
       if (data.name) { 
          setCharacters((oldChars) => [...oldChars, data]); 
       } else { 
          console.log("Error  de Id ");
          alert("¡No hay personajes con este ID!"); 
       } 
    })
    .catch(error => {
      alert("¡No hay personajes con este ID!");
    });
 } 

 function onClose(id) {
   setCharacters(characters.filter( (char) => {
      return char.id !== Number(id) }))
 }

  return (
    <>
      <div className="contenedorApp">
          {(pathname !== '/') && <Nav onSearch={onSearch}/>}
          <Routes>
            <Route path={PATHROUTES.LOGIN} element= {<Form />} />
            <Route path={PATHROUTES.HOME} element= {<Cards characters={characters} onClose={onClose}/>} />
            <Route path={PATHROUTES.ABOUT} element={<About />} />
            <Route path={PATHROUTES.DETAIL} element={<Detail />} />
          </Routes>
        
      </div>
    </>
  );
}

export default App;
