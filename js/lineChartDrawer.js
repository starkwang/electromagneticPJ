(function() {
    var myChart = echarts.init(document.getElementById('linechart'));
    // 指定图表的配置项和数据
    function draw(trueRadius, data) {
        console.log(data);
        var d = [];
        for (var i = 0; i < 1000; i++) {
            var deepth = data[i];
            var lose = (1000 - i) / 1000;
            d.push([deepth, lose]);
        }
        var xMax = data[999] > trueRadius ? trueRadius.toString() : 'auto';
        var option = {
            title: {
                text: '电磁波在良导体中的衰减',
                show: true
            },
            xAxis: {
                name: '深度（mm）',
                nameLocation: 'middle',
                nameGap: 20,
                type: 'value',
                max: xMax
            },
            yAxis: {
                name: '衰减倍数',
                type: 'value',
            },
            clipOverflow: false,
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                data: d,
                markLine: {
                    data: [
                        [{
                            symbol: 'arrow',
                            label: {
                                normal: {
                                    formatter: '趋肤深度：' + data[632].toFixed(5) + 'mm'
                                }
                            },
                            name: '趋肤深度：' + data[632].toFixed(5) + 'mm',
                            coord: d[632]
                        }, {
                            symbol: 'circle',
                            x: '50%',
                            y: '50%'
                        }]
                    ],
                    animation: false
                }
            }]
        };
        console.log(d[632]);
        myChart.setOption(option);
    }
    // 使用刚指定的配置项和数据显示图表。

    window.lineChartDrawer = {
        draw: draw
    }
})()
