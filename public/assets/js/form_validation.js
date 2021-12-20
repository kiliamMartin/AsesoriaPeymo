const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{2,60}$/, 
	surname: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, 
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	phone: /^\(?(\d{3})\)?(\d{3})(\d{3})$/ ,
	address: /^.{1,}$/
}


const campos = {
	name:false,
	surname:false,
	password: false,
	email:false,
	company_name: false,
	address:false,
	phone: false
}

const types = {
	name: "name",
	surname:"surname",
	password:"password",
	email:"email",
	phone:"phone",
	company_name:"company_name",
	address:"address"
	
}

const validarFormulario = (e) => {
	//identificamos el campo
	switch (e.target.name) {
		case "username":
			validarCampo(expresiones.name, e.target, types.name,"name");
		
		break;
		case "company_name":
			validarCampo(expresiones.name, e.target, types.company_name,"company_name");
		break;
		case "address":
			validarCampo(expresiones.address, e.target, types.address,"address");
		break;
		case "surname":
			
			validarCampo(expresiones.surname, e.target, types.surname, "surname");
			
		break;
		case "password":
			validarCampo(expresiones.password, e.target, types.password, campos.password);
			
		break;
		case "password2":
			
			validarPassword2();
		break;
		case "email":
			validarCampo(expresiones.email, e.target, types.email , "email");
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, types.phone , "phone");
		break;
	}
}

const validarCampo = (expresion, input, type, campo) => {
	console.log(`group__${type}`)
	console.log(input.value)
	

	if(expresion.test(input.value.trim())){

		if (campo == "email") {
			equalEmail(input, type);

		} else {
			document.querySelector(`#group__${type} .formulario__input-error`).classList.remove('formulario__input-error-activo');
			document.querySelector(`#group__${type} input`).classList.remove('error');
			document.getElementById(`group__${type}`).classList.add('form-control.success');
			campos[campo] = true;
		}

	} else {
		document.querySelector(`#group__${type} input`).classList.add('error');
		document.getElementById(`group__${type}`).classList.add('form-control.error');
		document.getElementById(`group__${type}`).classList.remove('form-control.success');
		document.querySelector(`#group__${type} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

function equalEmail(input, type) {

	campos[email] = true;
	

		fetch('assets/json/user.json')
		.then(respuesta => respuesta.json()) // format info
		.then(users => {

			users.forEach(user => {

				if (`${user.email}` == input.value) {
					document.querySelector(`#group__${type} input`).classList.add('error');
					document.getElementById(`group__${type}`).classList.add('form-control.error');
					document.getElementById(`group__${type}`).classList.remove('form-control.success');
					document.querySelector(`#group__${type} .formulario__input-error-repeat`).classList.add('formulario__input-error-activo');
					campos[email] = false;
				}
			
			});
			

			if (campos[email] == true) {
				document.querySelector(`#group__${type} .formulario__input-error-repeat`).classList.remove('formulario__input-error-activo');
				document.querySelector(`#group__${type} .formulario__input-error`).classList.remove('formulario__input-error-activo');
				document.querySelector(`#group__${type} input`).classList.remove('error');
				document.getElementById(`group__${type}`).classList.add('form-control.success');
				campos[email] = true;
			}
			

		}) // watch info
	
	
}


const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.querySelector(`#group__password2 input`).classList.add('error');
		document.getElementById(`group__password2`).classList.add('form-control.error');
		document.getElementById(`group__password2`).classList.remove('form-control.success');
		document.querySelector(`#group__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.querySelector(`#group__password2 input`).classList.remove('error');
		document.getElementById(`group__password2`).classList.remove('form-control.error');
		document.getElementById(`group__password2`).classList.add('form-control.success');
		document.querySelector(`#group__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

form.addEventListener('submit', e => {
	e.preventDefault(); 

	const privacity = document.getElementById('privacity');
	const treatment = document.getElementById('receive-information');
	
	


	if(checkForm(campos.name, campos.surname, campos.company_name, campos.address, campos.password, campos[email], campos.phone, privacity, treatment)){
		
		function ajax() {
			const http = new XMLHttpRequest();
			const url = 'http://localhost:3000/rates.html';

			httpd.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					ddocument.getElementById("btn_js").innerHTML = this.responseText;
				}
			}

			http.open("GET", url);
			http.send();
		}
		
		ajax();

		alert("Registro correcto")
		form.reset();
	}
	

	
});



function checkForm(name,surname,company_name, address,password,email,phone,privacity,treatment){
	console.log(name)
	var result=true;
	if(form.classList.contains('form-company')){
		if(!company_name){
			document.querySelector(`#group__company_name .formulario__input-error`).classList.add('formulario__input-error-activo');
			document.querySelector(`#group__company_name input`).classList.add('error');
			result=false;
		}
		if(!address){
			document.querySelector(`#group__address .formulario__input-error`).classList.add('formulario__input-error-activo');
			document.querySelector(`#group__address input`).classList.add('error');
			result=false;
		}
	}
	if(!name) {
		document.querySelector(`#group__name .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.querySelector(`#group__name input`).classList.add('error');
		result=false;
	}
	if(!surname) {
		document.querySelector(`#group__surname .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.querySelector(`#group__surname input`).classList.add('error');
		result=false;
	}
	if(!password) {
		document.querySelector(`#group__password .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.querySelector(`#group__password input`).classList.add('error');
		document.querySelector(`#group__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.querySelector(`#group__password2 input`).classList.add('error');
		result=false
	}
	
	if(!email){
		document.querySelector(`#group__email .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.querySelector(`#group__email input`).classList.add('error');
		result=false
	}
	if(!phone){
		document.querySelector(`#group__phone .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.querySelector(`#group__phone input`).classList.add('error');
		result=false
	}
	if(!privacity.checked){
		document.querySelector(`.checkbox-container .cbox-privacity`).classList.add('formulario__input-error-activo');
	
		result=false
	}else{
		document.querySelector(`.checkbox-container .cbox-privacity`).classList.remove('formulario__input-error-activo');
	}
	if(!treatment.checked){
		document.querySelector('.checkbox-container .cbox-treatment').classList.add('formulario__input-error-activo');
	
		result=false
	}else{
		document.querySelector('.checkbox-container .cbox-treatment').classList.remove('formulario__input-error-activo');
	}
	return result;
}
//por cada imput se ejecute un codigo
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //cuando se suelta la tecla se ejecutara la función
	input.addEventListener('blur', validarFormulario); //cuando le de un click fuera del input ejecute la función
});

