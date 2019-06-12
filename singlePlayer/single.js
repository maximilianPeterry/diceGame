let counter = 0;
const button = document.getElementById('button');
const nameSp = document.getElementById('spPlay');
const name = document.getElementById('name');
const dice = document.getElementById('dice');

button.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 6) +1;
    let winOrNo = document.getElementById('winOrNo')
    counter = counter + roll;
    console.log(roll)

    if (counter >= 20) {
        winOrNo.innerHTML = "You Win!"
    } else if 
        (roll === 1) {
        winOrNo.innerHTML = "You Lose!"
        }
        

});

// //WORKINGPROGRESS
// const diceImage = () => {
    
//     if (roll == 1) {
//         dice.innerHTML = "<img src=\"
//     } else if (roll == 2) {
//         dice.src = "../img/dice2.png"
//     } else if (roll == 3) {
//         dice.src = "../img/dice3.png"
//     } else if (roll == 4) {
//         dice.src = "../img/dice4.png"
//     } else if (roll == 5) {
//         dice.src = "../img/dice5.png"
//     } else if (roll == 6) {
//         dice.src = "../img/dice6.png"
//     }
// }


//problem below.
nameSp.addEventListener('click', () => {
    let playerName = document.getElementById('spInput').textContent;
    name.innerHTML = playerName.value;
});