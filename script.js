const states = document.querySelectorAll(".state");
const input = document.querySelector(".search");

input.addEventListener("keyup", function (event) {
  const inputResult = event.target.value.toLowerCase();

  states.forEach((item) => {
    item
      .querySelector("p")
      .textContent.toLocaleLowerCase()
      .includes(inputResult)
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
});
