const form = document.querySelector('.form')
const dados = {}

function pegarForm(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
}

form.addEventListener('change', pegarForm)
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
})