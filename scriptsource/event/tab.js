const tabButtons = document.querySelectorAll(".list > li");
const tabContents = document.querySelectorAll(".container > .tab-content");

tabButtons.forEach((tabButton, idx) => {
  tabButton.addEventListener("click", () => {
    tabButtons.forEach((tbtn) => tbtn.classList.remove("orange"));
    tabButton.classList.add("orange");

    tabContents.forEach((content) => content.classList.remove("show"));
    tabContents[idx].classList.add("show");
  });
});
