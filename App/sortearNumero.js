const menorValor = 1;
const maiorValor = 1000;
// document.querySelector('.btn-continuar').addEventListener('click',()=>{
    
//     console.log(elementoMaiorValor,elementoMenorValor);
//     document.body.innerHTML += `
//     <h1>Acerte o número Secreto</h1>
//     <h3>O número secreto está entre ${menorValor} e ${maiorValor}</h3>

//     <div id="chute" class="mensagem">

//     </div>
//     `
// })
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor+1);
}

console.log('Número Secreto: ',numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

