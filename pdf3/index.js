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