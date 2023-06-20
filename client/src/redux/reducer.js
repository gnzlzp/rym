import { ADD_FAVORITE, FILTER, ORDER, REMOVE_FAVORITE, ACCESS } from "./actions";

const initialState = {
	myFavorites: [],
	allCharacters: [],
	access : false
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case ACCESS:
			return {
				...state,
				access:action.payload
			}

		case ADD_FAVORITE:
			if (state.allCharacters.some((character) => character.id === action.payload.id)) {
				return state;
			}
			return {
				...state,
				myFavorites: [...state.allCharacters, action.payload],
				allCharacters: [...state.allCharacters, action.payload],
			};

		case REMOVE_FAVORITE:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(char) => char.id !== action.payload
				),allCharacters: state.allCharacters.filter(
					(char) => char.id !== action.payload
				),
			};
		case FILTER:
			if (action.payload === "All") {
				return {
					...state,
					myFavorites: [...state.allCharacters],
				};
			}
			return {
				...state,
				myFavorites: state.allCharacters.filter(
					(char) => char.gender === action.payload
				),
			};
		case ORDER:
			if (action.payload === "Ascendente") {
				return {
					...state,
					myFavorites: [...state.myFavorites.sort((a, b) => a.id - b.id)],
				};
			}
			if (action.payload === "Descendente") {
				return {
					...state,
					myFavorites: [...state.myFavorites.sort((a, b) => b.id - a.id)],
				};
			}
		default:
			return { ...state };
	}
};

export default rootReducer;
