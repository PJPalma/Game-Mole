/* Things to do

Create the target to apear
When hit with curser make it disapear and apear a new target
Randomize the local of the target
Target timer gets faster everytime you hit(maybe 5s in the beggining and slowly gething smaller like 0.1 each time)
Limit time of 60s
Pass the points to the scoreboard in the end
Start button
maybe a pause?

*/


/*var img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1200px-Target_Corporation_logo_%28vector%29.svg.png";

var div = document.getElementById("box");
div.appendChild(img);
*/
const music = new Audio('music.mp3');
music.play()


const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
      var audio = new Audio('pointsound.wav');
      audio.play()
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('Good Try, heres your scoreboard ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

