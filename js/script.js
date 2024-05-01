const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextearea = document.querySelector("#message");

let notifications = document.querySelector('.notifications');
let success = document.getElementById('success');
let error = document.getElementById('error');
let warning = document.getElementById('warning');
let info = document.getElementById('info');


function creatToast(type,icon,title,text){
    let newToast = document.createElement('div');
    newToast.innerHTML = `
    <div class="toast success">
            <i class="fa-solid fa-circle-check"></i>
            <div class="content">
                <div class="title">Success</div>
                <span> This is a success toast.</span>
            </div>
            <i class="fa-solid fa-xmark"></i>
        </div>`;
        notifications.appendChild(newToast);
        debugger;
}

success.onclick = function(){
    debugger;
    let type = 'success';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Submite clicado';
    let text = 'This is a success toast';
    creatToast(type,icon,title,text);
}

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     if(nameInput.value === ""){
//         alert("Por favor, preencha o seu nome");
//         return;
//     }
    
//     // Verica se o e-mail esta preenchido e se é válido
//     if(emailInput.value === "" || !isEmailValid(emailInput.value)){
//         alert("Por favor, preencha o seu email");
//         return;
//     }
    
//     if(passwordInput.value === ""){
//         alert("Por favor, insira uma senha!");
//         return;
//     }
//     if(messageTextearea.value === ""){
//         alert("Por favor, insira um Texto!");
//         return;
//     }
    
//     // Se todos campos estiverem  corretamente preenchidos, envie o form
//     form.submit();
// });

// // Função que valida e-mail 
// function isEmailValid(email){
//     //cria uma regex para validar email
//     const emailRegex = new RegExp(
//         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
//         );
        
//         if(emailRegex.test(email)) {
//             return true;
//         }
//         return false;
//     }
    
    //Função que valida a senha