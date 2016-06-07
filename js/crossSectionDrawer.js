(function() {
    var WIDTH = 600;
    var HEIGHT = 400;

    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    } else {
        alert('此浏览器版本过低，不支持canvas');
    }

    function draw(radius, trueRadius, data) {
        ctx.beginPath();
        var gradient = createGradient(data, trueRadius, radius);
        ctx.fillStyle = gradient;
        ctx.arc(WIDTH / 2, HEIGHT / 2, radius, 0, 6.3);
        ctx.fill();
        ctx.beginPath();
        var deepth = data[data.length - 368];
        var tmp = ((trueRadius - deepth) / trueRadius) * radius;
        if (tmp < radius && tmp > 0) {
            ctx.arc(WIDTH / 2, HEIGHT / 2, tmp, 0, 6.3);
            ctx.strokeStyle = "#000000";
            ctx.stroke();
        }
    }

    function createGradient(data, trueRadius, radius) {
        var gradient = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, radius, WIDTH / 2, HEIGHT / 2, 0);
        data.forEach(function(x, i) {
            if (x <= trueRadius) {
                var ratio = 1 - (trueRadius - x) / trueRadius;
                var red = 255 - 255 * (i / 1000);
                var green = 255 * (i / 1000);
                gradient.addColorStop(ratio, "rgb(" + parseInt(red) + "," + parseInt(green) + ",0)");
            }
        })
        return gradient;
    }

    window.crossSectionDrawer = {
        draw: draw
    }
})()
