let visor = document.querySelector('.visor');
let btnNumericos = document.querySelectorAll('.numerico');
let btnOperacoes = document.querySelectorAll('.operador');
// let btnCe = document.querySelectorAll('#CE');


const operacoes = (expressao) => {
    return eval(expressao);

}

const limparCalculadora = () => {
    visor.innerText = "";
}


const atualizaVisor = (event) => {
    let valorTecla = event.target.textContent;


    if (valorTecla == "CE") {
        limparCalculadora();
        return
    } else if (valorTecla == "=") {
        let resultado = operacoes(visor.innerText);
        console.log(resultado);
        
        visor.innerText = resultado;

        return;
    }
    visor.insertAdjacentText('beforeend', valorTecla);
}

btnNumericos.forEach(btnNumerico => {
    btnNumerico.addEventListener('click', atualizaVisor);
});

btnOperacoes.forEach(btnOperacao => {
    btnOperacao.addEventListener('click', atualizaVisor);
});