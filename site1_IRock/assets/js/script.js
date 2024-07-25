function aviso(){
    alert('Olá, eu sou a rocha de estimação.');
}
function touchRock(){
    let userName = prompt("Qual o seu nome?", "Entre com seu nome aqui.");

    if (userName) {
        alert("Prazer em conhecer você, " + userName + ".");
        document.getElementById("rockImg").src = "assets/imgs/rock_happy.png";
    }
}
