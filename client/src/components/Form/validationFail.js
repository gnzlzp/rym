//USERNAME
// el nombre de usuario tiene que ser un email (explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.

//const validation = (userData, errors, serErrors){
	//if()
//}



export const validateUser = (inputUser, errors, setErrors) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const longitudMaxima = 35;

	// Verificar que el nombre de usuario sea un correo electrónico válido
	if (!emailRegex.test(inputUser)) {
		setErrors({...errors, username : "El nombre de usuario debe ser un correo electrónico válido"}) 
	}

	// Verificar que el nombre de usuario no esté vacío
	if (inputUser.trim() === "") {
		setErrors({...errors, username : "El nombre de usuario no puede estar vacío"}) 
	}

	// Verificar que el nombre de usuario no tenga más de 35 caracteres
	if (inputUser.length > longitudMaxima) {
		setErrors({...errors, username : "El nombre de usuario no puede tener más de 35 caracteres"}) 
	}

	// Si todas las validaciones pasan, devolver true para indicar que el nombre de usuario es válido
	return 'Ok';
}

//PASSWORD
//la contraseña tiene que tener al menos un número.
//la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
export const validatePass = (inputPass, errors, setErrors) => {
    if(!/(?=.*\d)^[a-zA-Z\d]{6,10}$/.test(inputPass)){
        setErrors({...errors, password : 'El password debe tener al menos un número y una longitud entre 6 y 10 caracteres'}) 
    } else {
        return 'Ok'
    }
}



//   return (
//       <form>
//         <input className={error && 'danger'}
//           name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
//         {!error ? null : <span>{error}</span>}
//         <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
//         <input type="submit" />
//       </form>
//     );
