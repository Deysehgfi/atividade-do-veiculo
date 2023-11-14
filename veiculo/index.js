function verificarMulta(){
    const velocidade = document.querySelector("#velocidade").value
    const resultado = document.getElementById("resultado")

    if(velocidade <=60){
        resultado.innerHTML = "ñ multado"
        resultado.className = "verde"
    }
    else{
        resultado.innerHTML = "vc foi multado"
        resultado.className = "vermelho"
    }
}