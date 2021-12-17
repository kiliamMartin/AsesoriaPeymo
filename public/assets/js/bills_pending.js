var table = document.querySelector('#list_bills tbody');

watchDocument();

function watchDocument() {

    fetch('assets/json/documents.json')

    .then(respuesta => respuesta.json()) // format info
    .then(bills => {

        bills.forEach(bill => {


            const row = document.createElement('tr');

            if (`${bill.bill}` == "") {
                row.innerHTML += `<td>
                    <div class="checkbox-container">
                        <input type="checkbox" id="modify" name="modify" value="modify">
                    </div>
                </td>
                
                <td>
                    <div class="checkbox-container">
                        <input type="checkbox" id="pending" name="pending" value="pending">
                    </div>
                </td>
                
                <td>${bill.nameUser}</td>
                <td>${bill.name}</td>
                
                <td><button id="button_table"><label>AÑADIR FACTURA</label></button></td>`;
                table.appendChild(row);
            }             

        })

        bills.forEach(bill => {


            const row = document.createElement('tr');

            if (`${bill.bill}` != "") {
                row.innerHTML += `<td>
                    <div class="checkbox-container">
                        <input type="checkbox" id="modify" name="modify" value="modify" checked>
                    </div>
                </td>
                <td>
                    <div class="checkbox-container">
                        <input type="checkbox" id="pending" name="pending" value="pending" checked>
                    </div>
                </td>
                
                <td>${bill.nameUser}</td>
                <td>${bill.name}</td>
                
                <td><a href="#">${bill.bill}</a>           <button id="button_table"><label>MODIFICAR FACTURA</label></button></td>`;
                table.appendChild(row);
            }            

        })
    }); // watch info

}

function addBill() {

    const row = document.createElement('tr');
            row.innerHTML += `
            <td onclick="documentDelete(${addDocId})"><img src="assets/images/papelera.png"></a></td>
            <td>Nuevo_documento_${addDocId}</td>
            <td><button id="button_table"><label>REEMPLAZAR DOCUMENTACIÓN</label></button></td>
            `;

    tableAdd.appendChild(row);

    addDocId++;

}