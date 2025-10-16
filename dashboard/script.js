const welcome = document.getElementById("welcome") 

const usuario = localStorage.getItem("usuarioLogado")

if(usuario){
    welcome.textContent = `Bem vindo, ${usuario}!`
}