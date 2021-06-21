function ir(){
	var c=1234;
	var u="Bryan";

	if (document.form.password.value == c &&
		document.form.user.value == u) {

		alert ( "Bienvenido a nuestra plataforma para academias");
	    window.location="Inicio.html";
	}
	else {
		alert ("Usuario o contraseña incorrecta, vuelva a ingresar");
		form.reset();
	}	
}