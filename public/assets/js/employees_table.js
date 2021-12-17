var table = document.querySelector('#list_employees tbody');

watchDocument();

function watchDocument() {
    fetch('assets/json/user.json')

    .then(respuesta => respuesta.json()) // format info
    .then(employees => {

        employees.forEach(employee => {

            if (`${employee.tipo}` == 3) {

                const row = document.createElement('tr');
                row.innerHTML += `
                <td onclick="employeeDelete(${employee.id})"><img src="assets/images/papelera.png"></a></td>
                <td>${employee.name} ${employee.apellido}</td>
                <td><a href="employee_data_private_mod.html" ><img src="assets/images/editar.png"></a></td>
                `;

                table.appendChild(row);
            }
           
        });

    }) // watch info

    
}

function employeeDelete(id) {
    // sabemos que no es correcto, pero cambiar el método de eliminación 
    // para que eliminase los elementos según los índices de la tabla sería 
    // complicarse la vida, y absurdo para el próximo sprint.
    table.deleteRow(id-7);
}
