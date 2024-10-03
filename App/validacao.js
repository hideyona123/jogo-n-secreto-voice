function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML = `<div>Valor Inválido: Tipo Texto</div>
        `;
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor fora do intervalo de ${menorValor} - ${maiorValor}</div>
        `;
        return
    }

    if(numero === numeroSecreto){
        
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <h3>O número secreto era </h3>
        <span class="box">${numeroSecreto}</span>
        
        <button id="jogar-novamente" class="btn btn-jogar">Jogar Novamente</button>
        ` 
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click',e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})