const welcome = document.getElementById("welcome") 

const usuario = localStorage.getItem("usuario")

if(usuario){
    welcome.textContent = `Bem vindo, ${usuario}!`
}