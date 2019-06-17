let counter = 0;
const button = document.getElementById('button');
const nameSp = document.getElementById('spPlay');
const name = document.getElementById('name');
const dice = document.getElementById('dice');
const winOrLose = document.getElementsByClassName('winOrLose');


button.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 6) +1;
    let winOrNo = document.getElementById('winOrNo');
    let currentScore = document.getElementById('currentScore')
    counter = counter + roll;
    console.log(roll)
    if (roll == 1) {
        theDice.src = "dice1.png"
    } else if (roll == 2) {
        theDice.src = "./dice2.png"
    } else if (roll == 3) {
            theDice.src = "./dice3.png"
    } else if (roll == 4) {
        theDice.src = "./dice4.png"
    } else if (roll == 5) {
        theDice.src = "./dice5.png"
    } else if (roll == 6) {
        theDice.src = "./dice6.png"
}

    if (counter >= 20) {
        winOrNo.innerHTML = "You Win!"
    } else if 
        (roll === 1) {
        winOrNo.innerHTML = "You Lose!"
        }
        
        if (counter >= 0) {
            currentScore.innerHTML = counter;
        }
});



//problem below.
nameSp.addEventListener('click', () => {
    let playerName = document.getElementById('spInput').textContent;
    name.innerHTML = playerName.value;
});