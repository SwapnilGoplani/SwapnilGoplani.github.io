document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplayDocument = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let isGameOver = false;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
  }

  let timerId = setInterval(startGame, 20);

  function jump() {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
  }

  function control(e) {
    if (e.keycode === 32) {
      jump();
    }
  }

  document.addEventListener('keyup', jump);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement('div');
    if (!isGameOver) obstacle.classList.add('obstacle');
    gameDisplayDocument.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + 'px';

      if (obstacleLeft === -60) {
        clearInterval(newTimerId);
        gameDisplay.removeChild(obstacle);
      }

      if (
        obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
        birdBottom < obstacleBottom + 153 || birdBottom === 0) {
        gameOver();
        clearInterval(newTimerId);
      }
    }

    let newTimerId = setInterval(moveObstacle, 20);
    if (isGameOver) setTimeout(geenrateObstacle, 3000);
  }

  generateObstacle();

  function gameOver() {
    clearInterval(newTimerId);
    isGameOver = true;
    document.removeEventListener('keyup', control);
  }

});