const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// 👉 Hàm để di chuyển nút "Khum" ngẫu nhiên
function moveNoButton() {
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = containerWidth - btnWidth;
  const maxY = containerHeight - btnHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// ✅ Cho máy tính (hover) và điện thoại (chạm)
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// 👉 Xử lý khi bấm nút "Dạ có"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
