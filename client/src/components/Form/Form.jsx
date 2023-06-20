import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import { useEffect } from "react";
const wall = require("../../image/wall-about.jpg");
const index = require("../../image/Total_Rickall.webp");
const rm = require("../../image/r-m.png");

const Form = ({ login }) => {

	useEffect(() => {
		document.body.style.backgroundImage = `url(${index})`;

		return () => {
			document.body.style.backgroundImage = `url(${wall})`;
		};
	}, []);

	const [userData, setUserData] = useState({ username: "", password: "" });

	const [errors, setErrors] = useState({ username: "", password: "" });

	const handleChange = (event) => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
		validation(
			{ ...userData, [event.target.name]: event.target.value },
			errors,
			setErrors
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	};

	// onpopstate evento

	return (
		<>
			<form onSubmit={handleSubmit} className={style.divForm}>
				<div>
					<label htmlFor="username">Usuario</label>
					<input
						autoComplete="off"
						type="text"
						name="username"
						placeholder="Ingresa tu nombre aqui"
						value={userData.username}
						onChange={handleChange}
					/>
					<span>{errors.username}</span>
					<br />
					<label htmlFor="password">Password</label>
					<input
						type="text"
						name="password"
						value={userData.password}
						onChange={handleChange}
					/>
					<p>{errors.password}</p>
					<br />
					<img src={rm} alt="" />
					<button type="submit" className={style.btnSubmit}>
						ENVIAR
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;

/*ESTO ES COMPONENTE DE CLASE*/
// import React, { Component } from "react";

// export default class Form extends Component {
// 	render() {
// 		return (
// 			<>
// 				<h1>Form</h1>
//         <label htmlFor="user">Tu nombre</label>
//         <input type="text" name="user" placeholder="Ingresa tu nombre"/>
// 			</>
// 		);
// 	}
// }
