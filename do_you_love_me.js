const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Hàm di chuyển nút No
function moveNoButton() {
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  requestAnimationFrame(() => {
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });
}

// Sự kiện cho máy tính
noBtn.addEventListener("mouseenter", moveNoButton);

// Sự kiện cho điện thoại
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Ngăn hiện tượng khựng do chạm
  moveNoButton();
});

// Nút Yes được bấm
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play?.(); // optional chaining để tránh lỗi nếu gifResult không có play
  }, 3000);
});
