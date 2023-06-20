import "./App.css";
import Cards from "../Cards/Cards";
import { Detail } from "../Detail/Detail";
import About from "../About/About";
import { Nav } from "../Nav/Nav";
import Form from "../Form/Form";
import Favorites from "../Favorites/Favorites";
// import ErrorPage from "../ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeAccess } from "../../redux/actions";
import { useAccess } from "../hooks/useAccess";
// import { onSearch,onClose } from "../utils";


function App() {
	useAccess();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const username = "";
	const password = "";

	const login = (userData) => {
		if (userData.username === username && userData.password === password) {
			dispatch(changeAccess(true));
			navigate("/home");
		} else {
			alert("credenciales incorrectas");
		}
	};

	const [characters, setCharacters] = useState([]);

	const access = useSelector((state)=>state.access)
	useEffect(()=>{
		setCharacters([])
	},[access])

	const onSearch = (id) => {
		if (characters.find((char) => char.id === id)) {
			return alert("Personaje repetido");
		}
		fetch(`https://api-rickandmorty.up.railway.app/rickandmorty/onSearch/${id}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name)
					if (characters.find((char) => char.id == data.id)) {
						return alert("Personaje repetido");
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				else {
					alert("No hay personajes con ese ID");
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	const { pathname } = useLocation();

	return (
		<>
			<div className="App" style={{ padding: "25px" }}>
				{pathname !== "/" && <Nav onSearch={onSearch} />}
				<br />
				<Routes>
					<Route path="/" element={<Form login={login} />} />
					{/* <Route  path="*" element={<ErrorPage />} /> */}
					<Route path="/detail/:detailId" element={<Detail />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/home"
						element={
							<Cards
								className="compCards"
								characters={characters}
								onSearch={onSearch}
								onClose={onClose}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
