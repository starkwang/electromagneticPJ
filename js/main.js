$("#frequency").change(function(){
    var f = $(this).val();
    var data = crossSectionDrawer.calculate(6.17, f);
    crossSectionDrawer.draw(100, 0.05, data);
    lineChartDrawer.draw(data)
})

