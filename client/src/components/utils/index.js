
// const {characters, setCharacters} = require ('../Home/App')


// export const onSearch = (id) => {
//     if (characters.find((char) => char.id === id)) {
//         return alert("Personaje repetido");
//     }
//     fetch(`http://localhost:3002/rickandmorty/onSearch/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.name)
//                 if (characters.find((char) => char.id == data.id)) {
//                     return alert("Personaje repetido");
//                 } else {
//                     setCharacters((oldChars) => [...oldChars, data]);
//                 }
//             else {
//                 alert("No hay personajes con ese ID");
//             }
//         });
// };

// export const onClose = (id) => {
//     setCharacters(characters.filter((char) => char.id !== id));
// };
