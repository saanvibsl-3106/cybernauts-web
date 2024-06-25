import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";


neonCursor({
    
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints:20,
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
  console.log("entry");
  gsap.to(chotu, {
    scale: 1,
    opacity: 1,
  });
});
elem.addEventListener("mouseleave", function () {
  console.log("exit");
  gsap.to(chotu, {
    scale: 0,
    opacity: 0,
  });
});
elem.addEventListener("mousemove", function (dets) {
  gsap.to(chotu, {
    x: dets.x - 95,
    y: dets.y - 95,
  });
});

