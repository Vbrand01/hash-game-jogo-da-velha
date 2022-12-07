const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X"

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function init(){
    selected = [];

    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

    currentPlayer.classList.add('result')

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

init();


function newMove(e){
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;


    setTimeout(() => {
        check();
    }, [100]);

    player = player === "X" ? "O" : "X";
    
    currentPlayer.innerHTML = `JOGADOR DA VEZ: "${player}"`;

}


function sweetGanhou(){

    Swal.fire({
        title: 'PARABÉNS',
        text: `o jogador ${playerLastMove}`,
        imageUrl: 'trofeu2.png',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
}


function check(){
    let playerLastMove = player === "X" ? "O" : "X";

    const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

    for (pos of positions) {
        if(pos.every((item) => items.includes(item))){

            Swal.fire({
                title: 'PARABÉNS',
                text: `o jogador ${playerLastMove} venceu!`,
                imageUrl: 'img/trofeu2.png',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
              })

            init();
            return;
        }
    }

    if(selected.filter((item) => item).length === 9){
        
        Swal.fire({
            title: 'DEU VELHA!',
            text: `infelizmente ficou no empate :(`,
            imageUrl: 'img/velha.png',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })

        init();
        return;
    }
}


function mudarCor(playerLastMove){
    playerLastMove.style.backgroundColor = "red";
}




































/* https://github.com/Vbrand01 */