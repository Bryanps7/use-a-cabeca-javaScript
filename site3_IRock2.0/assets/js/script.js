let userName;

function greetUser() {
    userName = readCookie('irock_username');
    if (userName){
        alert('Olá '+userName+', senti sua falta')
    } else {
        alert('Olá, eu sou a rocha de estimação.');
    }
}

function solidao() {
    alert('Estou me sentindo tão sozinho...');
    document.getElementById('rockImg').src = 'assets/imgs/rock.png';
}

function touchRock() {
    if (userName) {
        alert("Eu Gosto de atenção, "+ userName +". Obrigado,");
        document.getElementById("rockImg").src = "assets/imgs/rock_happy.png";
    }else {
        userName = prompt("Qual o seu nome?", "Entre com seu nome aqui.");
    
        if (userName) {
            alert("Prazer em conhecer você, " + userName + ".");
            writeCookie("irock_username", userName, 5 * 365);
            document.getElementById("rockImg").src = "assets/imgs/rock_happy.png";
        }
    }
    
    setTimeout("solidao();", 60*5*1000);
}

function resizeRock() {
    document.getElementById('rockImg').style.height = (document.body.clientHeight - 100) * 0.9;
}