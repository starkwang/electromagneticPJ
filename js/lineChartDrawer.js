(function() {
    var myChart = echarts.init(document.getElementById('linechart'));
    // 指定图表的配置项和数据
    function draw(data) {
        console.log(data);
        var d = [];
        for (var i = 0; i < 1000; i++) {
            var deepth = data[i];
            var lose = (1000 - i) / 1000;
            d.push([deepth, lose]);
        }
        var option = {
            title: {
                text: '动态数据 + 时间坐标轴'
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: d
            }]
        };
        myChart.setOption(option);
    }
    // 使用刚指定的配置项和数据显示图表。

    window.lineChartDrawer = {
        draw: draw
    }
})()
