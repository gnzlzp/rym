import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Cards.module.css"

export default function Cards(props) {
	const { characters, onClose , onSearch} = props;
	return (
		<>
        <SearchBar onSearch={onSearch} />
		<div className={style.divCards}>
			{characters.map((chart, index) => (
				<Card
					key={index}
					id={chart.id}
					name={chart.name}
					species={chart.species}
					gender={chart.gender}
					image={chart.image}
					onClose={onClose}
				/>
			))}
		</div>
		</>
	);
}

// import React, { Component } from "react";
// import Card from "../Card/Card";

// class Cards extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		const { characters } = this.props;
// 		return (
// 			<div>
// 				{characters.map((personaje) => {
// 					return (
// 						<>
// 							<Card
// 								name={personaje.name}
// 								specie={personaje.specie}
// 								gender={personaje.gender}
// 								image={personaje.image}
//                         onClose={() => window.alert('Emulamos que se cierra la card')}
// 							/>
// 						</>
// 					);
// 				})}
// 			</div>
// 		);
// 	}
// }

// export default Cards;
