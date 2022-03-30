let inputCepRef = document.querySelector('#inputCep')
let botaoSubmitRef = document.querySelector('button')

botaoSubmitRef.addEventListener('click', event =>{
    event.preventDefault()
    console.log(inputCepRef.value)
    fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`.then(response =>{
        console.log(response)
        inputCepRef.value = logradouro
    }))
})