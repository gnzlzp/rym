import React from "react";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

function Favorites() {
	const favorites = useSelector((state) => state.myFavorites);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		let orden = event.target.value;
		dispatch(orderCards(orden));
	};

	const handleFilter = (event) => {
		let gender = event.target.value;
		dispatch(filterCards(gender));
	};
	return (
		<>
			<select name="order" id="" onChange={handleOrder} className={style.selector}>
				<option value="Ascendente">Ascendente</option>
				<option value="Descendente">Descendente</option>
			</select>

			<select name="filter" id="" onChange={handleFilter} className={style.selector}>
				<option value="All">Todos</option>
				<option value="Male">Masculino</option>
				<option value="Female">Femenino</option>
				<option value="Genderless">Sin genero</option>
				<option value="unknown">Desconocido</option>
			</select>

			<div className={style.divCards}>
				{favorites.map((chart) => (
					<Card
						key={chart.id}
						id={chart.id}
						name={chart.name}
						species={chart.species}
						gender={chart.gender}
						image={chart.image}
					/>
				))}
			</div>
		</>
	);
}

export default Favorites;
