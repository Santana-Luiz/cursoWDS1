function validaLogin(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dataEmail = document.getElementById('email').getAttribute("data-email");
    let dataPassword = document.getElementById('password').getAttribute("data-password");
    
    if(email == dataEmail && password == dataPassword){
        return true;
    } else {
        alert("Email e ou senha incorreto!!!")
        return false; 
    }
}

function confirmaSenha(){
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('confirmar-password').value;

    if(password1 == password2){
        return true;
    } else {
        alert("Senha e confirmar senha estão incorretos!!!")
        return false; 
    }
}

function teste(){
    let password = '123456'
    document.getElementById("password").setAttribute("data-password", password);
    console.log(document.getElementById("password").getAttribute("data-password"))
}