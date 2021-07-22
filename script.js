var statuscarro = `Desligado`
var aceleracao = 0
var rotacaodovolante = 0

function ligardesligar(){
    if(statuscarro == `Desligado`){
        statuscarro = `Ligado`
    }
    else{
        statuscarro = `Desligado`
        }
    
}
function acelerar(incremento){
    aceleracao = aceleracao + Number(incremento)
    return aceleracao
}
function frear(decremento){
    aceleracao = aceleracao - Number(decremento)
    return `${decremento}km/h`
}
function girodovolante(volante){
    rotacaodovolante = rotacaodovolante + volante
    if(rotacaodovolante > 0){
        return rotacaodovolante
    }else{
        return rotacaodovolante
    }
}

function botaoligadesliga(){
    ligardesligar()
    var ligar = document.getElementById(`liga`)
    ligar.innerHTML = `Status do Carro: ` + statuscarro
}
function andar(carro){
    andando =  carro.style.marginLeft += `20px`
    return andando
}

function acelerou(){
    if(statuscarro == `Desligado`){
        alert(`Ligue o carro para poder acelerar!`)
    }else{ 
    let carro = document.getElementById(`carro`)
    let km = document.getElementById(`acelerar`)
    let res = document.getElementById(`acelera`)
    if(aceleracao < 210 && km.value > 0 && km.value <= 20){
        
         res.innerHTML = `Acelerando ${km.value} Km/h</br>`
         res.innerHTML += `Velocidade: ${acelerar(km.value)} Km/h`
    }else if(km.value <= 0){
        alert(`Não é permitido acelerar ${km.value}km/h`)
    }
    else if(aceleracao >= 210){
        aceleracao = 210
        res.innerHTML = aceleracao+`km/h [LIMITE]`
        alert(`Carro atingiu o limite maximo de velocidade!`)
    }else {
        alert(`Acelere devagar, você pode acelerar até de 20 em 20km/h`)
    }
 }
}

    

function freio(){
    let km = document.getElementById(`acelerar`)
    let res = document.getElementById(`acelera`)
    if(statuscarro == `Desligado`){
        alert(`Ligue o carro para poder frear!`)
    }else{ 
    if(aceleracao == 0){
        alert(`Acelere o carro para usar o freio`)

    }else if(km.value < 0){
        alert(`Não é permitido freiar ${km.value}km/h`)
    }else if(km.value > 10){
        alert(`Freio diminui até 10km/h de cada vez`)
    }
    else{
        res.innerHTML = `Freando ${frear(km.value)}</br>`
        res.innerHTML += `Velocidade: ${aceleracao}Km/h`
    }
  }
}

function direita(carro){
    if(statuscarro == `Ligado`&& aceleracao >= 1){
    let carro = document.getElementById("carro")
    carro.style.marginLeft = `${girodovolante(10)}px`
    }
    else if (statuscarro == `Desligado`) {
        alert("Ligue o carro para virar o volante do carro")
    }else{
        alert(`Acelere o carro para mover o veículo`)
    }
}
function esquerda(carro){
    if(statuscarro == `Ligado` && aceleracao >= 1){
    let carro = document.getElementById("carro")
    carro.style.marginLeft = `${girodovolante(-10)}px`
    
    }else if (statuscarro == `Desligado`) {
        alert("Ligue o carro para virar o volante do carro")
    }else{
        alert(`Acelere o carro para mover o veículo`)
    }
}

