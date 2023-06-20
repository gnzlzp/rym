import { RiDeleteBin2Line } from "react-icons/ri";
import style from "./Card.module.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

function Card({
	id,
	name,
	species,
	gender,
	image,
	onClose,
	addFavorite, // esto es la actions que se recibe en el mapDispatchToProps
	removeFavorite, // esto es la actions que se recibe en el mapDispatchToProps
	myFavorites,
}) {
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		if (isFav === true) {
			setIsFav(false);
			removeFavorite(id);
		}
		if (isFav === false) {
			setIsFav(true);
			addFavorite({ id, name, species, gender, image, onClose, addFavorite });
		}
	};

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);
	const { pathname } = useLocation();

	return (
		<div className={style.divCard}>
			{isFav ? (
				<button className={style.btnTrash} onClick={handleFavorite}>
					❤️
				</button>
			) : (
				<button className={style.btnTrash} onClick={handleFavorite}>
					🤍
				</button>
			)}

			{pathname !== "/favorites" && (
				<button
					className={style.btnTrash}
					onClick={() => {
						onClose(id);
					}}
				>
					{" "}
					<RiDeleteBin2Line />
				</button>
			)}
			<br />
			<Link to={`/detail/${id}`}>
				<img src={image} alt={name} />
			</Link>
			<p>
				<span>
					{" "}
					<b>Nombre: </b>{" "}
				</span>{" "}
				{name}
			</p>
			<p>
				<span>
					{" "}
					<b>Raza: </b>{" "}
				</span>{" "}
				{species}
			</p>
			<p>
				<span>
					{" "}
					<b>Genero: </b>{" "}
				</span>{" "}
				{gender}
			</p>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (character) => {
			dispatch(addFavorite(character));
		},
		removeFavorite: (id) => {
			dispatch(removeFavorite(id));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
