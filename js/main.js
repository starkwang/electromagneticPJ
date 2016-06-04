var data = crossSectionDrawer.calculate(6.17, 5);
crossSectionDrawer.draw(100, 0.5, data);
lineChartDrawer.draw(0.5, data);

$(".control").change(function() {
    var f = $("#frequency").val();
    var electricConductivity = $('#electricConductivity').val() || 6.17; //电导率
    var trueRadius = $("#trueRadius").val();
    var data = crossSectionDrawer.calculate(electricConductivity, f);
    crossSectionDrawer.draw(100, trueRadius, data);
    lineChartDrawer.draw(trueRadius, data)
});

$(document).ready(function() {
    $('select').material_select();
});
