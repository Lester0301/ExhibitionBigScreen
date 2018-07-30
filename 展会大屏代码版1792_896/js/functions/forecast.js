function forecast(){
  var optionForecast = {
      title : {
          text: '',
          subtext: ''
      },
      tooltip : {
          trigger: 'axis'
      },
      color:['rgba(24,141,24,0.7)','rgba(0,153,255,0.7)'],
      grid: {
       x: 30,
       y:30,
       x2: 10,
       y2: 20,
       borderWidth: 1
     },
      legend: {
          data:['实际发电', '预计发电'],
          orient: 'horizontal',
          x:'center',
          y:'top',
          textStyle: {    //图例文字的样式
              color: 'white',
              fontSize:11
          }
      },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      yAxis : [
          {
              type : 'value',
              name:'MWh',
              nameLocation:'end',
              boundaryGap : [0, 0.01],
              axisLine: {
                  lineStyle: {
                      color: 'rgba(255,255,255,0.8)',
                      fontSize:8
                  }
              },
              splitLine: {
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      color: ['rgba(1,102,255,0.3)'],
                      width: 1,
                      type: 'solid'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff',
                      fontSize: 10,
                  }
              }
          }
      ],
      xAxis : [
          {
              type : 'category',
              axisLine: {
                  lineStyle: {
                      color: 'rgba(255,255,255,0.8)',
                      fontSize:8
                  }
              },
              splitLine: {
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      color: ['rgba(1,102,255,0.3)'],
                      width: 1,
                      type: 'solid'
                  }
              },
              axisLabel: {

                  textStyle: {
                      color: '#fff',
                      fontSize: 10,
                  }
              },
              data : ['4.26','4.27','4.28']
          }
      ],
      series : [
          {
              name:'实际发电',
              type:'bar',
              barWidth:15,
              data:[119.8, 108.2, 128.1]
          },
          {
              name:'预计发电',
              type:'bar',
              barWidth:15,
              data:[117.8, 101.2, 130.1]
          }
      ]
  };

  var myChartF = echarts.init(document.getElementById('right1_con'));

  myChartF.setOption(optionForecast);

  window.addEventListener("resize",function(){
    myChartF.resize();
   });

   var fc=true;

	 setInterval(function(){
		 	if(fc){
        optionForecast.xAxis[0].data = ['4.29','4.30','5.01'];
				optionForecast.series[0].data = [139.8, 128.2, 138.1];
        optionForecast.series[1].data = [147.8, 131.2, 140.1];
        myChartF.setOption(optionForecast);
				fc=!fc;
			}else{
        optionForecast.xAxis[0].data = ['4.26','4.27','4.28'];
				optionForecast.series[0].data = [119.8, 108.2, 128.1];
        optionForecast.series[1].data = [117.8, 101.2, 130.1];

        myChartF.setOption(optionForecast);
				fc=!fc;
			}
   },8500)

}
