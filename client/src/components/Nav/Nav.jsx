import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from './Nav.module.css'
import { useDispatch } from "react-redux";
import { changeAccess } from "../../redux/actions";
import { useAccess } from "../hooks/useAccess";

export const Nav = () => {
	useAccess()
	const dispatch = useDispatch()
	const logout = () => {
		dispatch(changeAccess(false));
	};
	return (
		<div className={style.divNav}>
			<NavLink className={style.link} to="/home">Home</NavLink>
			<br />
			<NavLink className={style.link} to="/about">About</NavLink>
			<br />
			<NavLink className={style.link} to="/favorites">Favorites</NavLink>
			<br />
			<NavLink className={style.link} onClick={logout} to="/">Logout</NavLink>
		</div>
	);
};
