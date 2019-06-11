let counter = 0;

const button = document.getElementById('button');

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
    


})
