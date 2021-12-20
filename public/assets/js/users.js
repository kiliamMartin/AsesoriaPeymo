
var username=document.getElementById('username');
var surname= document.getElementById('surname');
var phone= document.getElementById('phone');
var password=document.getElementById('password');
var password2=document.getElementById('password2');
var email= document.getElementById('email');
var company_name=document.getElementById('company_name');
var address=document.getElementById("address");


/// role_id=6
function companyRegister(){
    const API_URL = 'http://localhost:3000/users'

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            console.log(this.response)
            location.href ="http://localhost:3000/index.html";
        }
    }
    var DATA = JSON.stringify({
        "user":{
            "name":`${username.value}`,
            "surname":`${surname.value}`,
            "address":`${address.value}`,
            "nameCompany":`${company_name.value}`,
            "phone":`${phone.value}`,
            "email":`${email.value}`,
            "password":`${password.value}`,
            "password_confirmation":`${password2.value}`,
            "role_id":5
            
        }
    })
    xhr.send(DATA)  
 
 

}
/// role_id=5
function privateRegister(){

    const API_URL = 'http://localhost:3000/users'

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            console.log(this.response)
            location.href ="http://localhost:3000/index.html";
        }
    }
    var DATA = JSON.stringify({
        "user":{
            "name":`${username.value}`,
            "surname":`${surname.value}`,
            "phone":`${phone.value}`,
            "email":`${email.value}`,
            "password":`${password.value}`,
            "password_confirmation":`${password2.value}`,
            "role_id":5
            
        }
    })
    xhr.send(DATA)  
 
 
}
var email_login=document.getElementById("email-login");
var password_login=document.getElementById("password-login")

function login(){

    const API_URL = 'http://localhost:3000/login'

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            if (this.response === "true"){
                alert("Sesión iniciada");
                location.href ="http://localhost:3000/index.html";
                
            }else{
                alert("Error al intentar iniciar sesión")
                location.href ="http://localhost:3000/login.html";
            }
            
        }
    }
    
  
  xhr.send(`email=${email_login.value}&password=${password_login.value}`)
 
}

function logout(){

    const API_URL = 'http://localhost:3000/users'

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API_URL}`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            console.log(this.response)
            alert("deslogueado correctamente")
            location.href ="http://localhost:3000/index.html";
        }
    }
    
  
  xhr.send(`name=${username.value}&surname=${surname.value}&phone=${phone.value}&email=${email.value}&password=${password.value}&password_confirmation=${password2.value}&role_id=5`)
 
}