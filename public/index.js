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


