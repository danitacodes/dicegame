let randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
let randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);

let firstDie = '/Images/die'+ randomNumber1 + '.png';
let secondDie = '/Images/die'+ randomNumber2 + '.png';

document.querySelector('.img1').setAttribute("src",firstDie);
document.querySelector('.img2').setAttribute("src",secondDie);

if (randomNumber1 === randomNumber2) {
    document.querySelector('.container h1').innerHTML='We have a tie';
} else if (randomNumber1 > randomNumber2){
    document.querySelector('.container h1').innerHTML='Player 1 Wins';
}else { (randomNumber1 < randomNumber2)
    document.querySelector('.container h1').innerHTML='Player 2 Wins';
}
