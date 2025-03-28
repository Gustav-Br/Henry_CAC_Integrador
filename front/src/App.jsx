import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from "axios";
import PATHROUTES from "./components/helpers/PathRoutes.helpers";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";


function App() {

  const [characters, setCharacters] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const { pathname } = useLocation();

  function onSearch(id) {
    axios(`http://localhost:3001/character/${id}`).then(({ data }) => {

      if (data.name) {
        setCharacters((oldChars) => {
          if (oldChars.some(char => char.id === data.id)) {
            alert("¡Este personaje ya fue agregado!");
            return oldChars;
          }
          return [...oldChars, data];
        });
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
    setCharacters(characters.filter((char) => {
      return char.id !== Number(id)
    }))
  }

  function addFavs(id) {
    axios.get(`http://localhost:3001/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          axios.post("http://localhost:3001/favorite", data)
            .then(({ data }) => {
              setFavorites(data.allFavor);
              console.log("Favoritos actualizados.");
            });
        }
      })
      .catch(error => {
        alert("¡No hay personajes con este ID!");
      });
  }

  function getFavorites() {
    axios.get("http://localhost:3001/favorite")
      .then(({ data }) => {
        setFavorites(data.allFavor);
      })
      .catch((error) => {
        console.error("Error al obtener favoritos:", error);
      });
  }

  // Borra Favorito de la base de datos 
  function onDelFavs(id) {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(({ data }) => {
        setFavorites(data.allFavor);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });


  }

  // Cargar Favorites al iniciar la App
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <div className="contenedorApp">
        {(pathname !== '/') && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path={PATHROUTES.LOGIN} element={<Form />} />
          <Route path={PATHROUTES.HOME} element={<Cards
            characters={characters}
            onClose={onClose}
            addFavs={addFavs} />} />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Detail />} />
          <Route path={PATHROUTES.FAVORITES} element={<Favorites
            favorites={favorites}
            onDelFavs={onDelFavs} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
