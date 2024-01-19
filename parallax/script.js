// window.addEventListener("scroll", function (event) {
//   var top = window.scrollY;

//   var layers = document.getElementsByClassName("parallax");
//   var layer, speed, yPos;
//   for (var i = 0; i < layers.length; i++) {
//     layer = layers[i];
//     speed = layer.getAttribute("data-speed");
//     var yPos = -((top * speed) / 100);
//     layer.setAttribute("style", "transform: translate3d(0px, " + yPos + "px, 0px)");
//   }
// });

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  const layers = document.querySelectorAll(".parallax");

  layers.forEach(function (layer, index) {
    const speed = 0.175 * (index + 1); // Menyesuaikan kecepatan lapisan
    const yPos = -(offset * speed);
    layer.style.transform = `translateY(${yPos}px)`;
  });
});

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  const clouds = document.querySelectorAll(".cloudRight");

  clouds.forEach(function (layer, index) {
    const speedX = 0.1 * (index + 1); // Menyesuaikan kecepatan lapisan
    const xPos = offset * speedX;
    layer.style.transform = `translateX(${xPos}px)`;
  });
});

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  const clouds = document.querySelectorAll(".cloudLeft");

  clouds.forEach(function (layer, index) {
    const speedX = 0.1 * (index + 1); // Menyesuaikan kecepatan lapisan
    const xPos = -(offset * speedX);
    layer.style.transform = `translateX(${xPos}px)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading delay (you can replace this with your actual loading logic)
  setTimeout(function () {
    hideLoadingScreen();
  }, 2000); // Adjust the time as needed
});

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");

  loadingScreen.style.display = "none";
}
