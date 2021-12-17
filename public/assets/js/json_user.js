var boton = document.getElementById('btn_js');

boton.onclick = function() {
    var aux = true;

    var correo = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(correo);
    
    fetch('assets/json/user.json')

    .then(respuesta => respuesta.json()) // format info
    .then(users => {

        users.forEach(user => {
            if (`${user.email}` == correo && `${user.pass}` == password) {
                console.log('todo correcto');
                alert("Inicio de sesión correcto.");
                aux = false;
            }
        });

        if (aux) {
            console.log('vuelva a introducir todo');
            alert("El correo y/o contraseña son incorrectos.");
        }
        


    }) // watch info
}

