let counter = 0;
const button = document.getElementById('button');
const nameSp = document.getElementById('spPlay');
const name = document.getElementById('name');


button.addEventListener('click', () => {
    let roll = Math.floor(Math.random() * 6) +1;
    let winOrNo = document.getElementById('winOrNo')
    counter = counter + roll;
    console.log(roll)

    if (counter >= 20) {
        winOrNo.innerHTML = "You Win!"
    } else if 
        (roll === 1)
        winOrNo.innerHTML = "You Lose!"
    

});

nameSp.addEventListener('click', () => {
    let playerName = document.getElementById('spInput').textContent;
    name.innerHTML = playerName.value;
});