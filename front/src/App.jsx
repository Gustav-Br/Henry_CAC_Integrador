import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import axios from "axios";
import PATHROUTES from "./components/helpers/PathRoutes.helpers";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
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

	function NotFound() {
		return (
			<div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8d7da', color: '#721c24' }}>
				<h1>404 - Página no encontrada</h1>
				<p>Lo sentimos, esta ruta no existe.</p>
			</div>
		);
	}

	// Cargar Favorites al iniciar la App
	useEffect(() => {
		getFavorites();
	}, []);

	return (
		<>
			<div className="contenedorApp">
				{(pathname !== '/') && (pathname !== PATHROUTES.LOGIN) &&
					(pathname !== PATHROUTES.REGISTER) && <Nav onSearch={onSearch} />}
				<Routes>
					<Route path='/' element={<Navigate to={PATHROUTES.LOGIN} />} />
					<Route path={PATHROUTES.REGISTER} element={<Register />} />
					<Route path={PATHROUTES.LOGIN} element={<Login />} />
					<Route path={PATHROUTES.HOME} element={<Cards
						characters={characters}
						favorites={favorites}
						onClose={onClose}
						addFavs={addFavs}
						onDelFavs={onDelFavs} />} />
					<Route path={PATHROUTES.ABOUT} element={<About />} />
					<Route path={PATHROUTES.DETAIL} element={<Detail />} />
					<Route path={PATHROUTES.FAVORITES} element={<Favorites
						favorites={favorites}
						onDelFavs={onDelFavs} />} />
					<Route path={PATHROUTES.NOTFOUND} element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}
export default App;
