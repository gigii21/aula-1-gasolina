function calcular(event){
    event.preventDefalt()

    let alcoolInput = document.getElementById(`Alcool`).value
    let gasolinaInput = document.getElementById(`Gasolina`).value

    let contentResult = document.getElementById(`content-result`)
    let textResult = document.getElementById(`text-result`)

    let gasolinaSpan = document.getElementById(`Gasolina-result`)
    let alcoolSpan = document.getElementById (`Acool-result`)

    let calculo = alcoolInput / gasolinaInput

    if(calculo < 0.7){
        textResult.innerHTML= 'Compensa usar Acool'
    }
    else{
        textResult.innerHTML= 'Compensa usar Gasolina'
    }
    gasolinaSpan.innerHTML = 'sGasolina R$' + gasolinaInput
    alcoolSpan.innerHTML = 'Alcool R$' + alcoolInput
    contentResult.classList.remove(`hide`)
}