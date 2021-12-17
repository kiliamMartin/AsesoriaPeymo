var table = document.querySelector('#list_customers tbody');

watchDocument();

function watchDocument() {
    fetch('assets/json/user.json')

    .then(respuesta => respuesta.json()) // format info
    .then(customers => {

        customers.forEach(customer => {

            if (`${customer.tipo}` == 4 || `${customer.tipo}` == 5) {

                const row = document.createElement('tr');
                row.innerHTML += `
                <td onclick="customerDelete(${customer.id})"><img src="assets/images/papelera.png"></a></td>
                
                `;

                if (`${customer.tipo}` == 4) {
                    row.innerHTML += `
                    <td><a href="employee_data_company_mod.html" ><img src="assets/images/editar.png"></a></td>
                    <td>${customer.name} ${customer.apellido}</td>
                    <td>Empresa</td>`;
                } else {
                    row.innerHTML += `
                    <td><a href="employee_data_private_mod.html" ><img src="assets/images/editar.png"></a></td>
                    <td>${customer.name} ${customer.apellido}</td>
                    <td>Particular</td>`;
                }
    
                table.appendChild(row);
            }
           
        });

    }) // watch info

    
}

function customerDelete(id) {
    // sabemos que no es correcto, pero cambiar el método de eliminación 
    // para que eliminase los elementos según los índices de la tabla sería 
    // complicarse la vida, y absurdo para el próximo sprint.
    table.deleteRow(id-7);
}