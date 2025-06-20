let currentA = 0;
let currentB = 0;

function startPuzzle() {
  currentA = Math.floor(Math.random() * 12 + 1);
  currentB = Math.floor(Math.random() * 12 + 1);
  document.getElementById('question').textContent = `What is ${currentA} × ${currentB}?`;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
  playMusic();
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const result = document.getElementById('result');
  if (userAnswer === currentA * currentB) {
    result.textContent = '🎉 Correct! Well done.';
    result.style.color = 'lightgreen';
  } else {
    result.textContent = '❌ Incorrect. Try again!';
    result.style.color = 'red';
  }
}

function playMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.volume = 0.5;
    music.play();
  }
}