 const validation = (userData, errors, setErrors) => {
	//validando username
const regUser = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/

	if (!userData.username) { setErrors({ ...errors, username: "complete este campo" });
	} else if (userData.username.length > 35) {
		setErrors({ ...errors, username: "no puede superar 35 caracteres" });
	} else if ( !regUser.test(userData.username) ) {
		setErrors({ ...errors, username: "email invalido" });
	} else { setErrors({ ...errors, username: "" });
		// setErros({...errors}) //probando si es lo mismo de abajo
		
	}
	//validando password
	if(!/^(?=.[A-Z])(?=.[a-z])(?=.*\d).+$/.test(userData.password)){
	    setErrors({...errors, password:'el password debe tener una logitud de 6 a 10 caracteres y al menos 1 numero'})
	} else {
	    // setErros({...errors}) //probando si es lo mismo de abajo
	    setErrors({...errors, password : ''})
	}
};
export default validation