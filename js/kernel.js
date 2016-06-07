(function() {
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

    window.kernel = {
        calculate: calculate
    }
})()
