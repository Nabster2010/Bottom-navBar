//using event delegation

const indicator = document.querySelector(".indicator");
const menu = document.querySelector("#menu");

menu.addEventListener("click", function (e) {
  const elementArray = [...menu.children];
  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].classList.remove("active");
    if (elementArray[i] === e.target.closest("li")) {
      e.target.closest("li").classList.add("active");
      indicator.style.transform = `translate(${70 * i}px) `;
    }
  }
});
