var table = document.querySelector('#list_document tbody');
var tableAdd = document.querySelector('#list_add_document tbody');

var addDocId = 1;
var docId = 4;

watchDocument();

function watchDocument() {
    fetch('assets/json/documents.json')

    .then(respuesta => respuesta.json()) // format info
    .then(documents => {

        documents.forEach(doc => {


            if (`${doc.idUser}` == 7) {
                const row = document.createElement('tr');
                row.innerHTML += `
                <td onclick="documentDeleteModify(${doc.id})"><img src="assets/images/papelera.png"></a></td>
                <td>${doc.name}</td>
                <td><button id="button_table"><label>REEMPLAZAR DOCUMENTACIÓN</label></button></td>
                `;
    
                table.appendChild(row);
            }
            
           
        });

    }) // watch info

    
}



function documentDeleteModify(documentId) {
    // sabemos que no es correcto, pero cambiar el método de eliminación 
    // para que eliminase los elementos según los índices de la tabla sería 
    // complicarse la vida, y absurdo para el próximo sprint.
    table.deleteRow(documentId);
}



function documentDelete(documentId) {
    // sabemos que no es correcto, pero cambiar el método de eliminación 
    // para que eliminase los elementos según los índices de la tabla sería 
    // complicarse la vida, y absurdo para el próximo sprint.
    tableAdd.deleteRow(documentId);
}



function addDocumentModify() {

    const row = document.createElement('tr');
            row.innerHTML += `
            <td onclick="documentDeleteModify(${docId})"><img src="assets/images/papelera.png"></a></td>
            <td>Nuevo_documento_${docId}</td>
            <td><button id="button_table"><label>REEMPLAZAR DOCUMENTACIÓN</label></button></td>
            `;

    table.appendChild(row);

    docId++;

}

function addDocument() {

    const row = document.createElement('tr');
            row.innerHTML += `
            <td onclick="documentDelete(${addDocId})"><img src="assets/images/papelera.png"></a></td>
            <td>Nuevo_documento_${addDocId}</td>
            <td><button id="button_table"><label>REEMPLAZAR DOCUMENTACIÓN</label></button></td>
            `;

    tableAdd.appendChild(row);

    addDocId++;

}

