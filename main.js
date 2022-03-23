let tituloReferencia = document.querySelector('#titulo')
let descricaoReferencia = document.querySelector('#descricao')
let imagemReferencia = document.querySelector('#imagem')
let botaoSalvarReferencia = document.querySelector('#botaoSalvar')

botaoSalvarReferencia.addEventListener('click', function (event) {

    event.preventDefault()

    let card = {
        imagem: imagemReferencia.value,
        titulo: tituloReferencia.value,
        descricao: descricaoReferencia.value
    }



    let mainContentReference = document.querySelector('#mainContent')

    //for(let card of cards){
    let cards = [
        mainContentReference.innerHTML += `
        <div class="item">
        <img src="${card.imagem}">
        <h2> ${card.titulo} </h2>
        <p> ${card.descricao} </p>
        </div>
        `
    ]
    // }


    cards.push(card)

    console.log(card)
})