import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 16,
  curvePoints: 20,
  curveLerp: 1,
  radius1: 1,
  radius2: 5,
  velocityTreshold: 10,
  sleepRadiusY: 100,
  sleepRadiusX: 100,
  sleepTimeCoefX: 0.00025,
  sleepTimeCoefY: 0.001,
});

// ********************prefooter***********************
var elem = document.querySelector(".ani");
var chotu = document.querySelector(".chotu");

elem.addEventListener("mouseenter", function () {
  gsap.to(chotu, {
    duration: 0.4,
    scale: 1,
    opacity: 1,
    ease: "power2.out",
  });
});

elem.addEventListener("mouseleave", function () {
  gsap.to(chotu, {
    duration: 0.4,
    scale: 0,
    opacity: 0,
    ease: "power2.inOut",
  });
});

elem.addEventListener("mousemove", function (event) {
  var rect = elem.getBoundingClientRect();

  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  gsap.to(chotu, {
    duration: 0.05,
    x: x,
    y: y,
    ease: "power2.out",
  });
});

const inputField = document.getElementById("query-input");
const placeholder = document.getElementById("query-placeholder");

inputField.addEventListener("focus", () => {
  placeholder.style.top = "-1.5vw";
  placeholder.style.fontSize = "0.9vw";
  placeholder.style.color = "#ffffff";
});

inputField.addEventListener("blur", () => {
  if (inputField.value === "") {
    placeholder.style.top = "0.55vw";
    placeholder.style.fontSize = "1vw";
    placeholder.style.color = "rgba(255, 255, 255, 0.5)";
  }
});
