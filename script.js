//add an event listener to the window
//pass a callback function to the event listener
//create randomcolor function

body = document.querySelector("body");
btn = document.querySelector("p");

body.addEventListener("click", function (event) {
  currentColor = getRandomColor();
  body.style.backgroundColor = currentColor;
  btn.textContent = "Current Random Color:" + currentColor;
});

const getRandomColor = function () {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += list[Math.floor(Math.random() * list.length)];
  }
  return color;
};
