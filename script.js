let inputAdultos = document.getElementById('adultos');
let inputCrianca = document.getElementById('crianca');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular(){
 

    let adultos = inputAdultos.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;
    
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianca);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * crianca);


    resultado.innerHTML = `<p>${qdtTotalCarne/1000} kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas de Bebida</p>`


}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
