$(function(){
  var myChart = echarts.init(document.getElementById('main'));

  let xData = [],
      yData = [];

  for(let i=0; i<=1; i+=0.1){
    xData.push(i);
    yData.push(h(i));
  }
  
  function h(p) {
    return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
  }
  
  
  // 指定图表的配置项和数据
  var option = {
    title: {
      test: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
      data:['H(x)']
    },
    xAxis: { //p
      data: xData
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'line',
      smooth: true,
      data: yData
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
