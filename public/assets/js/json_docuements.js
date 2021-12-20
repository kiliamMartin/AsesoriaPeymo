
watchDocument();
const id_user = 1;

function watchDocument() {

    let url = 'http://localhost:3000/documents.json';

    

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function() {

        if (this.status == 200 && this.readyState == 4) {

            let dates = JSON.parse(this.responseText);
            console.log(dates);

            for (let item of dates) {
                if (`${item.client_id}` == id_user) {

                    let row = document.querySelector('#documentos_pdf');
                    row.innerHTML += `
                    <tr>
                    <td onclick="documentDelete(${item.id})"><img src="assets/images/papelera.png"></a></td>
                    <td>${item.name_doc}</td>
                    <td><button id="button_table"><label>REEMPLAZAR DOCUMENTACIÓN</label></button></td>
                    </tr>
                    `;
                }
            }

        }

    }    
}



function documentDelete(documentId) {
    let url = `http://localhost:3000/documents/${documentId}.json`;

    const api = new XMLHttpRequest();
    api.open('DELETE', url, true);
    api.send();
    

    api.onreadystatechange = function() {
        location.reload();
    }   
}

function addDocument(){
    const input = document.getElementById('subir_documentacion');
    if(input.files && input.files[0]) {
        console.log("File Seleccionado : ", input.files[0]);

        $.ajax({
            type: "POST",
            url: `http://localhost:3000/documents`,
            data: {
                document: {client_id: `${id_user}`, name_doc: `${input.files[0].name}`}
            },
            success(data) {
                alert(data.id);
                
                return false;
            },
            error(data) {
                return false
            }
        });

        let url = `http://localhost:3000/documents/`;

        const api = new XMLHttpRequest();
        api.open('GET', url, true);
        api.send();
        
    
        api.onreadystatechange = function() {
            location.reload();
        }

    }
        
    
    
}
