var speed_limit = 2     // 2
var accelerate = true;  // true
var speed = 0;				  // 0 - initial speed
var starsize = 4;       // 4
var stars = 1600;			  // 1600
var fov = 80;				    // 100 - not actual fov in degrees
var extraW = 5000;      // 5000
var extraH = 2400;	    // 2400
var colorOfStars = "white";
var backgroundColor = 'rgb(9, 10, 41)';

var canv = document.getElementById('cv');
document.querySelector('body').onresize = resizeCanv;
canv.onclick = init;
const ctx = canv.getContext('2d');
const minZ = -fov + 2;

// Precalculating so there are less calculations between frames
var extraW_half = extraW / 2;
var extraH_half = extraH / 2;
const TWOPI = Math.PI * 2;
var xMin, xMax, yMin, yMax;
var initScaleX, initScaleY;
var vel;
var points;

function init() {
    resizeCanv();
    points = randomPoints();
    vel = speed;
}

function resizeCanv() {
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    xMax = canv.width / 2;
    xMin = -xMax;
    yMax = canv.height / 2;
    yMin = -yMax;
    initScaleX = canv.width + extraW;
    initScaleY = canv.height + extraH;
}

function randomPoints() {
    let arr = [];
    for (let i = 0; i < stars; i++) {
        arr.push({
            x: Math.random() * initScaleX - (xMax + extraW_half),
            y: Math.random() * initScaleY - (yMax + extraH_half),
            z: Math.random() * 1000 + 140,
            prevz: this.z,
            size: starsize
        });
    }
    return arr;
}

function project(items, alterScale = true) {
    if (alterScale) alterScale = -0.4;
    else alterScale = 0;
    let projected = [];
    items.forEach(item => {
        let scale = fov / (fov + item.z);
        let prevscale = fov / (fov + item.prevz);
        projected.push({
            x: item.x * scale,
            y: item.y * scale,
            z: item.z,
            prevx: item.x * prevscale,
            prevy: item.y * prevscale,
            size: item.size * scale + alterScale
        });
    });
    return projected;
}

function inView(item) {
    if (item.x + item.size > xMin
        && item.x < xMax
        && item.y + item.size > yMin
        && item.y < yMax
        && item.z < 500) {
        return true;
    }
    return false;
}

function drawLines(items) {
    items.forEach(item => {
        if (inView(item)) {
            ctx.lineWidth = item.size;
            ctx.beginPath();
            ctx.moveTo(item.x, item.y);
            ctx.lineTo(item.prevx, item.prevy);
            ctx.stroke();
            ctx.closePath();
        }
    });
}

function drawRects(items) {
    items.forEach(item => {
        if (inView(item))
            ctx.fillRect(item.x, item.y, item.size, item.size);
    });
}

function drawCircles(items) {
    items.forEach(item => {
        if (inView(item)) {
            ctx.beginPath();
            ctx.arc(item.x, item.y, Math.abs(item.size), 0, TWOPI);
            ctx.fill();
            ctx.closePath();
        }
    });
}

function drawText(items, text) {
    items.forEach(item => {
        if (inView(item)) {
            ctx.font = Math.round(item.size * 10) + "px sans-serif";
            ctx.fillText(text, item.x, item.y);
        }
    });
}

function animate() {
    ctx.save();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canv.width, canv.height);
    ctx.translate(xMax, yMax);
    ctx.fillStyle = colorOfStars;
    points.forEach(item => {
        if (item.z > minZ) {
            item.prevz = item.z;
            item.z -= vel;
        }
        else {
            item.z = item.prevz = Math.random() * 600 + 600;
            item.x = Math.random() * initScaleX - (xMax + extraW_half);
            item.y = Math.random() * initScaleY - (yMax + extraH_half);
        }
    });

    ctx.strokeStyle = 'rgb(255,255,255)';
    // drawText(project(points), "😮");
    // drawText(project(points), "⭐");

    // drawRects(project(points));
    drawCircles(project(points));
    // drawText(project(points), "♥️");

    ctx.restore();

    window.requestAnimationFrame(animate);

    if (accelerate) {

        if (extremeModeBtnClicked) {
            vel = 10;
        }
        else if (vel < speed_limit) {
            vel += 0.08;
        }
    }


}



init();
animate();


// 1) create an interval here


// // 2) create a function to pass into the interval
// var changeColor = function () {
//     colorOfStars = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`

// }

// changeColor()
//     // 3) make the function create a random color
// 4) assign the random color to the colorOfStars


// var launch = function () {
//     setInterval(animate, 1000 / 60)
//     if (vel > 10) {
//         maintainSpeed()
//     }
// }


// I know this is overcomplicated, especially
// for something that isn't even interactive. Forgive me.