function mouseMover(){
    document.addEventListener('mousemove', function(event){
        const mouseInfo = document.getElementById('mouseInfo');
        //Coordenadas
        const x = event.pageX;
        const y = event.pageY;
    
        mouseInfo.textContent = `Página [${x},${y}]`;
    });    
}
mouseMover();

function teclear(){
    document.addEventListener('keydown', function(event){
        const keyboardInfo = document.getElementById('keyboardInfo');
        const tecla = event.key
    
        keyboardInfo.textContent = `Carácter [ ${tecla} ]`;
    });
    
}
teclear();

//Calculadora
function calculadora() {
    // Variables para gestionar la pila de valores
    let pilaValores = [];
    let operadorActual = '';
    let pantalla = document.getElementById('pantalla');

    const operaciones = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (b !== 0) ? a / b : 'Error'
    };

    // Función para agregar un número a la pantalla
    function agregarNumero(numero) {
        if (pantalla.value === '0' || operadorActual !== '') {
            pantalla.value = numero;
            operadorActual = '';
        } else {
            pantalla.value += numero;
        }
    }

    // Función para agregar un operador a la pila
    function agregarOperador(operador) {
        // Agregar el número actual a la pila de valores
        if (pantalla.value !== '') {
            pilaValores.push(parseFloat(pantalla.value));
        }
        // Si ya hay un operador en la pila, calculamos el resultado parcial antes de agregar el nuevo operador
        if (pilaValores.length > 1) {
            calcularResultadoParcial();
        }
        operadorActual = operador;
        pilaValores.push(operador);
    }

    // Función para reiniciar la calculadora
    function reiniciar() {
        pantalla.value = '0';
        pilaValores = [];
        operadorActual = '';
    }

    // Función para calcular el resultado parcial
    function calcularResultadoParcial() {
        // Verificar que la pila tenga al menos 3 elementos (número, operador, número)
        if (pilaValores.length >= 3) {
            const b = pilaValores.pop();  // Número
            const operador = pilaValores.pop();  // Operador
            const a = pilaValores.pop();  // Número

            // Calcular el resultado
            const resultado = operaciones[operador](a, b);
            pilaValores.push(resultado);
            pantalla.value = resultado;
        }
    }

    function calcular() {
        // Agregar el último número a la pila
        if (pantalla.value !== '' && operadorActual !== '') {
            pilaValores.push(parseFloat(pantalla.value));
        }

        // Evaluar la pila de valores
        calcularResultadoParcial();

        // Mostrar el resultado final en la pantalla
        pantalla.value = pilaValores[0];

        // Reiniciar la pila de valores, manteniendo el resultado en la pantalla
        pilaValores = [pilaValores[0]];
    }

    // Exponer funciones para manejar eventos
    return {
        agregarNumero,
        agregarOperador,
        reiniciar,
        calcular
    };
}

const miCalculadora = calculadora();

document.getElementById('btn0').addEventListener('click', () => miCalculadora.agregarNumero(0));
document.getElementById('btn1').addEventListener('click', () => miCalculadora.agregarNumero(1));
document.getElementById('btn2').addEventListener('click', () => miCalculadora.agregarNumero(2));
document.getElementById('btn3').addEventListener('click', () => miCalculadora.agregarNumero(3));
document.getElementById('btn4').addEventListener('click', () => miCalculadora.agregarNumero(4));
document.getElementById('btn5').addEventListener('click', () => miCalculadora.agregarNumero(5));
document.getElementById('btn6').addEventListener('click', () => miCalculadora.agregarNumero(6));
document.getElementById('btn7').addEventListener('click', () => miCalculadora.agregarNumero(7));
document.getElementById('btn8').addEventListener('click', () => miCalculadora.agregarNumero(8));
document.getElementById('btn9').addEventListener('click', () => miCalculadora.agregarNumero(9));

// Asignar eventos a los botones de operadores
document.getElementById('btnSuma').addEventListener('click', () => miCalculadora.agregarOperador('+'));
document.getElementById('btnResta').addEventListener('click', () => miCalculadora.agregarOperador('-'));
document.getElementById('btnMultiplica').addEventListener('click', () => miCalculadora.agregarOperador('*'));
document.getElementById('btnDivide').addEventListener('click', () => miCalculadora.agregarOperador('/'));

// Asignar eventos a los botones de calcular y reset
document.getElementById('btnCalcular').addEventListener('click', () => miCalculadora.calcular());
document.getElementById('btnReset').addEventListener('click', () => miCalculadora.reiniciar());