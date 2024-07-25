let fim = []
let message = '';
let curScene = 0;
let lala = document.getElementById(`lala`)
let button = document.getElementById(`button`)

function changeScene(option) {

    if(curScene == 0) {
        curScene = 1
        message = "Sua jornada começa em uma bifurcação na estrada."
        button.innerHTML = "<input type=`button` id=`decision1` value=`1` onclick=`changeScene(1)`>"
        button.innerHTML += "<input type=`button` id=`decision2` value=`2` onclick=`changeScene(2)`>"
    }else if(curScene == 1) {
        if(option == 1) {
            curScene = 2
            message = "Voce pegou o caminho"
        }else {
            curScene = 3
            message = "Voce pegou a ponte"
        }
    }else if(curScene == 2) {
        if(option == 1) {
            curScene = 4
            message = "Passeie pela lateral"
        }else {
            curScene = 5
            message = "Acene para a Bruxa"
            lala.innerHTML = `GAME OVER`
        }
    }else if(curScene == 3) {
        if(option == 1) {
            curScene = 6
            message = "Passeie pela ponte"
        }else {
            curScene = 7
            message = "Comtemple o Rio"
        }
    }else if(curScene == 4) {
        if(option == 1) {
            curScene = 8
            message = "Continua"
        }else {
            curScene = 5
            message = "Acene a Bruxa"
            lala.innerHTML = `GAME OVER`
        }
    }else if(curScene == 5) {
        message = "Devorado pela Bruxa | FIM 01"
        fim[1] = true
    }else if(curScene == 6) {
        message = "Devorado pelo Ogro | FIM 02"
        fim[2] = true
    }else if(curScene == 7) {
        if(option == 1) {
            curScene = 6
            message = "Diga olá para o ogro"
            lala.innerHTML = `GAME OVER`
        }else {
            curScene = 9
            message = "Continua"
        }
    }else if((curScene == 8)||(curScene == 9)) {
        message = "Continua"
    }

    document.getElementById("sceneImg").src = `/src/assets/imgs/scene${curScene}.png`;
    alert(message)
}