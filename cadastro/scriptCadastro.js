const form = document.getElementById("registerForm");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const termos = document.getElementById("terms");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(usuario.value === "" || senha.value === "" || email.value === ""){
        mensagem.textContent = "Preencha todos os campos!";
    } else if (!termos.checked) {
        mensagem.textContent = "Você precisa concordar com os termos";
    } else {
        console.log("Salvando")
        const dados = {
            usuario: usuario.value,
            email: email.value,
            senha: senha.value
        };

        localStorage.setItem("cadastro", JSON.stringify(dados));
 
        window.location.href = "../index.html";
    }

});