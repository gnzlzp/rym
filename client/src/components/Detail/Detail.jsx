import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import style from "./Detail.module.css";

export const Detail = () => {
	const { detailId } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		// const URL_BASE = "https://be-a-rym.up.railway.app/api";
		// const KEY = "7a644210607c.971278a39c02b9832700";
		// fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
		fetch(`https://api-rickandmorty.up.railway.app/rickandmorty/detail/${detailId}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch((err) => {
				window.alert("No hay personajes con ese ID");
			});
		return setCharacter({});
	}, [detailId]);

	return (
		<div className={style.divDetail}>
			{character.name ? (
				<>
					<div>
						<img
							className={style.imgDetail}
							src={character.image}
							alt={character.name}
						/>
					</div>
					<div className={style.text}>
						<p>
							<span>
								<b>Nombre: </b>
							</span>
							{character.name}
						</p>
						<p>
							<span>
								<b>Estado: </b>
							</span>{" "}
							{character.status}
						</p>
						<p>
							<span>
								<b>Raza: </b>
							</span>{" "}
							{character.species}
						</p>
						<p>
							<span>
								<b>Genero: </b>
							</span>{" "}
							{character.gender}
						</p>
						<p>
							<span>
								<b>Origen: </b>
							</span>{" "}
							{character.origin?.name}
						</p>
						<Link to="/home">
							{" "}
							<button className={style.btnBack}>Regresa</button>{" "}
						</Link>
					</div>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};
