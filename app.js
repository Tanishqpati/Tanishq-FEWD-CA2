score = 0;
cross = true;




let audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
  audio.play();
}, 1000);
document.onkeydown = function (e) {
  console.log("key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    batman = document.querySelector(".batman");
    batman.classList.add("animatebatman");
    setTimeout(() => {
      batman.classList.remove("animatebatman");
    }, 700);
  }
  if (e.keyCode == 39) {
    batman = document.querySelector(".batman");
    batmanX = parseInt(
      window.getComputedStyle(batman, null).getPropertyValue("left")
    );
    console.log(batmanX);
    batman.style.left = batmanX + 112 + "px";
  }
  if (e.keyCode == 37) {
    batman = document.querySelector(".batman");
    batmanX = parseInt(
      window.getComputedStyle(batman, null).getPropertyValue("left")
    );
    console.log(batmanX);
    batman.style.left = batmanX - 112 + "px";
  }
};
setInterval(() => {
  batman = document.querySelector(".batman");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");
  dx = parseInt(window.getComputedStyle(batman, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(batman, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY);
  if (offsetX < 73 && offsetY < 50) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove("obstacleanimation");
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 2000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      console.log(aniDur);
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
      // console.log(parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration')))
      console.log(newDur);
    }, 500);
  }
}, 10);
function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}
