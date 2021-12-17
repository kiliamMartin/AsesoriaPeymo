var table = document.querySelector('#list_document tbody');

watchDocument();

function watchDocument() {
    fetch('assets/json/documents.json')

    .then(respuesta => respuesta.json()) // format info
    .then(documents => {

        documents.forEach(doc => {
            const row = document.createElement('tr');
            if (`${doc.idUser}` == 7) {
                if (`${doc.bill}` == "") {
                    row.innerHTML += `
                    <td><button type="button" id="button_table" onclick="window.location='modify_document.html'"><label>MODIFICAR DOCUMENTACIÓN</label></button></td>
                    <td>${doc.name}</td>
                    <td>Factura pendiente</td>
                    `;
    
                } else {
                    row.innerHTML += `
                    <td><button type="button" id="button_table" onclick="alertDocument()"><label>MODIFICAR DOCUMENTACIÓN</label></button></td>
                    <td>${doc.name}</td>
                    <td><a href="#">${doc.bill}</a></td>
                    `;
                }
    
                table.appendChild(row);
            }
            
           
        });

    }) // watch info

    
}


function alertDocument() {
    alert("Este documento ya no puede ser modificado. La factura está en proceso o finalizada.");
}
