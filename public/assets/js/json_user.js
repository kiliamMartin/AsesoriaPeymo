/*
var boton = document.getElementById('btn_js');

boton.onclick = function() {

    var aux = true;

    var correo = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(correo);


    var ryan = User.find(1)
    ser.exists?(1) :

        console.log(ryan);
    

    

/*
    $.ajax({
        type: "POST", 
        url: "",
        data: {
            userMail: { email: correo},
            userPass: {password_digest: password}
        },
        success: function(msg) {
            console.log("conseguido");
            console.log(msg);
            console.log(msg.responseText);
        }, 
        error: function(msg) {
            console.log("sorry");
            
        }
    });*/






    /*var aux = true;

    var correo = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(correo);

    const API_URL = 'http://localhost:3000'

    const xhr = new XMLHttpRequest();
    
    function onRequestHandler(){
        if(this.readyState === 4 && this.status === 200){

            fetch(`${API_URL}/users.json`)
            .then(respuesta => respuesta.json()) // format info
            .then(users => {

                console.log('holaculo');

            users.forEach(user => {
                if (`${user.email}` == correo && `${user.password_digest}` == password) {
                    console.log('todo correcto');
                    aux = false;
                }
                console.log(`${user.email}`);
                console.log(`${user.password_digest}`);

            });

            if (aux) {
                console.log('vuelva a introducir todo');
                alert("El correo y/o contraseña son incorrectos.");
            }

            })
        }
    }
    
    xhr.addEventListener("load", onRequestHandler);
    xhr.open('GET', `${API_URL}/users.json`);
    xhr.send();
    */
}

*/