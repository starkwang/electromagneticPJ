//初始化默认配置
render(5, 6.17, 0.5)

//绑定事件
$(".control").change(function() {
    var f = $("#frequency").val();
    var electricConductivity = $('#electricConductivity').val(); //电导率
    var trueRadius = $("#trueRadius").val();

    render(f, electricConductivity, trueRadius);
});

function render(f, electricConductivity, trueRadius) {
    var data = kernel.calculate(electricConductivity, f);

    $("#frequency-value-text").html("当前频率：{{f}}x10^7Hz".replace(/{{f}}/, f));
    $("#trueRadius-value-text").html("当前半径：{{r}}mm".replace(/{{r}}/, trueRadius));

    crossSectionDrawer.draw(100, trueRadius, data);
    lineChartDrawer.draw(trueRadius, data);
}

$(document).ready(function() {
    $('select').material_select();
});
