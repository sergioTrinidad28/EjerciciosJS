console.log(ejercicio1());
console.log("-----------------------------");
console.log(ejercicio2());
console.log("-----------------------------");
console.log(ejercicio3());
console.log("-----------------------------");
console.log(ejercicio4());
console.log("-----------------------------");
console.log(ejercicio5());
console.log("-----------------------------");
console.log(ejercicio6());
console.log("-----------------------------");
function ejercicio1() {
    console.log("Ejercicio 1");
    let clientes = ["Arturo Sanchez", "Armando Martinez", "Jose Manuel"];
    let empleados = ["Sergio Trinidad", "Alfredo Olivas", "Humberto Solis"];
    let mensaje = `Nuestra base de datos se muestran primero nuestros empleados
    quienes son [${empleados}] y sus clientes que son [${clientes}] `;
    let baseDatos = clientes.concat(empleados); //CONCAT Une 2 arreglos
    let union = baseDatos.join("|"); // Cambia el método que los une
    let addCliente = clientes.push("Fernando Vil"); //Añade elemento al final del arreglo
    clientes.splice(1, 1); // Elimina con splice
    empleados.splice(1, 1, "N Trinidad"); //Actualizar con splice
    console.log(
        `${mensaje}` + ` y nuestra base de datos queda asi [${baseDatos}]`
    );
    console.log("----------------------------------------");
    console.log(`${mensaje} ` + `y nuestra base de datos queda asi ${union}`);
    console.log(
        `Base de datos de clientes actualizado, se ha añadido a ${clientes[4]}, ahora tenemos ${clientes}`
    );
    console.log(
        `Base de datos de clientes actualizado, se ha eliminado a ${clientes[4] || "Usuario"
        }, ahora tenemos [${clientes}]`
    );
    console.log(
        `Base de datos de empleados actualizado, ahora tenemos [${empleados}]`
    );
    return;
}
function ejercicio2() {
    console.log("Ejercicio 2");
    let numbers = [5, 32, 43, 4];

    let filtro = numbers.filter(function (n) {
        return n % 2 !== 0;
    });

    console.log(
        `Nuestro arreglo esta conformado asi [${numbers}] y ocupando el filtro nos regresa [${filtro}] esto se debe a que la función que ocupamos nos filtrara a todos los elementos que no son divisibles entre 2`
    );
}
function ejercicio3() {
    console.log("Ejercicio 3");
    let people = [
        {
            id: 1,
            name: "John",
            age: 28,
        },
        {
            id: 2,
            name: "Jane",
            age: 31,
        },
        {
            id: 3,
            name: "Peter",
            age: 55,
        },
    ];
    personasJoven = people.filter(function (persona) {
        return persona.age < 35;
    });

    console.log(personasJoven);
}
function ejercicio4() {
    console.log("Ejercicio 4");
    let people = [
        { name: "bob", id: 1 },
        { name: "john", id: 2 },
        { name: "Alex", id: 3 },
        { name: "john", id: 3 },
    ];
    let contadorNombres = people.reduce(function (contador, persona) {
        contador[persona.name] = (contador[persona.name] || 0) + 1;
        return contador;
    }, {});
    console.log(contadorNombres);
}
function ejercicio5() {
    console.log("Ejercicio 5");
    var myArray = [1, 2, 3, 4];
    //ocupamos maxi y min para saber el máximo y el mínimo
    var maxNumber = Math.max(...myArray);
    var minNumber = Math.min(...myArray);

    console.log(`Arreglo: [${myArray}]`);
    console.log("Número máximo:", maxNumber);
    console.log("Número mínimo:", minNumber);
}
function ejercicio6() {
    console.log("Ejercicio 6");
    var object = {
        key1: 10,
        key2: 3,
        key3: 40,
        key4: 20,
    };
    // Obtenemos las claves del objeto y las ordenamos según sus valores.
    var sortedKeys = Object.keys(object).sort(function (a, b) {
        // Compara los valores de las claves en el objeto.
        return object[a] - object[b];
    });

    console.log(sortedKeys);
}