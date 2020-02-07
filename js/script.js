let visor = document.querySelector('.visor');
let btnNumericos = document.querySelectorAll('.numerico');


const atualizaVisor = (event) =>{
   let valortecla =  event.target.textContent;    
    visor.insertAdjacentText('beforeend', valortecla);

}

btnNumericos.forEach(btnNumerico => {
    btnNumerico.addEventListener('click', atualizaVisor);

});


