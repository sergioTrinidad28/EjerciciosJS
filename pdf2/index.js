console.log("Ejercicio 1");
console.log("--------------------");
console.log(personArr);
var personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }
];
function hacerTabla(){
    const tabla = document.getElementById("tabla");

    const encabezado = document.createElement('thead');
    encabezado.innerHTML = `
    <tr>
        <th>ID Person</th>
        <th>Name Person</th>
        <th>City</th>
        <th>Phone Number</th>
    </tr>
    `;
    tabla.appendChild(encabezado); //agrega encabezado a tabla

    const cuerpoTabla = document.createElement("tbody");

    personArr.forEach(function(person){
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${person.personId}</td>
        <td>${person.name}</td>
        <td>${person.city}</td>
        <td>${person.phoneNo}</td>
        `;
        cuerpoTabla.appendChild(fila)// agrega cuerpo
    });
    
    tabla.appendChild(cuerpoTabla); //Agrega cuerpo a la tabla
}

hacerTabla();

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const elementId = item.id;
            const isoId = item.getAttribute('data-id');
            const dialCode = item.getAttribute('data-dial-code');

            alert(`Elemento Seleccionado:\nID elemento: ${elementId}\nISO ID: ${isoId}\nDial Code: ${dialCode}`);
        });
    });
});
