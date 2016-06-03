(function() {
    var WIDTH = 600;
    var HEIGHT = 400;

    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    } else {
        alert('此浏览器版本过低，不支持canvas');
    }

    //a: 电导率(*10^7), f:频率(*10^6)
    //返回：632个对应的毫米数
    //  衰减倍数: 深度
    //  1      : 0
    //  0.999  : xxxx
    //  ......
    //  0.328  : 趋肤深度   
    function calculate(a, f) {
        var result = [];
        for (var i = 1000; i >= 1; i--) {
            var x = i / 1000;
            var t = -Math.log(x) * (1 / (2000 * Math.PI * Math.sqrt(a * f)));
            result.push(t * 1000);
        }
        return result;
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
        draw: draw,
        calculate:calculate
    }
})()
