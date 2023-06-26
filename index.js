var randomNumber1= Math.floor(Math.random() *6)+1;
var randomNumber2= Math.floor(Math.random() *6)+1;
var randomDice1="images/dice"+randomNumber1+".png";

var randomDice2="images/dice"+randomNumber2+".png";

// const btn = document.getElementById('btn');
    // var name1=prompt("Enter player 1 name:");
    // document.getElementById('player1').innerHTML=name1;
    // var name2=prompt("Enter player 2 name:");
    // document.getElementById('player2').innerHTML=name2;

// Change button text on click
btn.addEventListener('click', function handleClick() {
//   btn.textContent = 'Button clicked';
    // location.reload();
    document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
    document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h2").innerHTML ="Player1 Wins! 🚩";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h2").innerHTML ="Player2 Wins! 🚩";
    }
      else {
        document.querySelector("h2").innerHTML = "Draw!";
    }
});

const bttn = document.getElementById('reload');

// Change button text on click
bttn.addEventListener('click', function handleClick() {
    location.reload();
})
/**
 *  If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */


