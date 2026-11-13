// 1. 找到页面上的元素
const countDisplay = document.querySelector("#sample-count");
const buttons = document.querySelectorAll(".fabric-card button");

// 2. 记录样卡数量
let count = 0;

// 3. 给每个按钮加上点击事件
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
    button.textContent = "已加入";
    button.disabled = true;
  });
});

// 筛选功能
const filterButtons = document.querySelectorAll(".filter button");
const cards = document.querySelectorAll(".fabric-card");

filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener("click", function () {
    const material = filterButton.dataset.material;

    // 显示或隐藏卡片
    cards.forEach(function (card) {
      if (material === "all" || card.dataset.material === material) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    // 更新按钮的选中状态
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    filterButton.classList.add("active");
  });
});