const form = document.querySelector("#form")
const nameInput = document.querySelector("name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextearea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verica se o e-mail esta preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;
    }

    if(passwordInput.value === ""){
        alert("Por favor, insira uma senha!");
        return;
    }

    // Se todos campos estiverem  corretamente preenchidos, envie o form
    form.submit();
});

// Função que valida e-mail 
function isEmailValid(email){
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

//Função que valida a senha