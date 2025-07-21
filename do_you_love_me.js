const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
function moveNoButton() {
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Gọi cả click & touchstart để hoạt động trên mọi thiết bị
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
