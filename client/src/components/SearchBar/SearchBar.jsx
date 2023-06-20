import { useState } from "react";
import style from "./SearchBar.module.css";
// const { onSearch } = require ('../utils/index')

function SearchBar({onSearch}) {
	const [id, setId] = useState("");

	const handleChange = (event) => setId(event.target.value);
	
	function randomCharacter() {
		onSearch(Math.floor(Math.random()*826))
	 }
	return (

		<div className={style.divSearch}>
			<button onClick={randomCharacter} className={style.btnAzar}>Elige al azar</button>
			<input className={style.input} type="text" onChange={handleChange} value={id} />
			<button className={style.btnSearch} onClick={() => {
					if (id) {
						onSearch(id);
						setId("");
					}
				}} > Agregar </button>
		</div>
	);
}


export default SearchBar