const pontos = document.querySelector('#placar');
const player1 = document.querySelector('#p1');
const player2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
//const select = document.querySelector('#score');
const scoreB = document.querySelector('#scoreboard');
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const downArrow = document.querySelector('.select-selected');
const downList = document.querySelector('.select-list');
const textSelect = document.querySelector('.select');
const corpo = document.querySelector('body');


let winValue = 7;

let p1 = 0;
let p2 = 0;

textSelect.innerText = `${winValue}`

downArrow.addEventListener("click", (e) =>{
    e.stopPropagation();
    downList.classList.toggle("show");
})

downList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        winValue = parseInt(e.target.textContent);
        textSelect.innerText = `${winValue}`;
        resetScoreboard();
    }
})

corpo.addEventListener("click", (e) => {
    if(e.target.className !== "select-selected" && downList.classList[1] === 'show'){
        downList.classList.toggle("show");
    }
})

player1.addEventListener("click", () => { 
    p1 ++;
    incrementaPlacar();
});

player2.addEventListener("click", () => { 
    p2 ++;
    incrementaPlacar();
});

const resetScoreboard = () => {
    p1 = 0;
    p2 = 0;
    score1.innerText = `${p1}`;
    score2.innerText = `${p2}`;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('winner', 'loser');
    player1.classList.remove('disable');
    player2.classList.remove('disable');
}

reset.addEventListener("click", resetScoreboard)

// select.addEventListener("change", () => {
//     winValue = parseInt(select.value);
//     resetScoreboard();
// })

const incrementaPlacar = () => {
    score1.innerText = `${p1}`;
    score2.innerText = `${p2}`;
    if(winValue === p1){
        score1.classList.toggle('winner');
        score2.classList.toggle('loser');
        player1.classList.toggle('disable')
        player2.classList.toggle('disable')
    }else if(winValue === p2){
        score1.classList.toggle('loser');
        score2.classList.toggle('winner');
        player1.classList.toggle('disable')
        player2.classList.toggle('disable')
    }
}

