function cleanEarnings(){
	var beforeClean=[66,69,68];
	var afterClean=[87,89,92];
	var afterCleanEarnings=[86,88,89];

	var cleanOption = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
	       x: 40,
	       y:40,
	       x2: 42,
	       y2: 20,
	       borderWidth: 1
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
	    legend: {
	        data:['清洗前','清洗后','收益比'],
	        textStyle: {    //图例文字的样式
              color: 'white',
              fontSize:11
          }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['**业园1#','**技一期','**技二期'],
	            boundaryGap : true,
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
                      fontSize: 11,
                  }
              },
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            name : '系统效率',
							min:30,
							max:100,
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
	                    fontSize: 11,
	                },
	                formatter: '{value}%'
	            }
	        },
	        {
	            type : 'value',
	            name : '收益率',
							min:30,
							max:100,
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
	                    fontSize: 11,
	                },
	                formatter: '{value}%'
	            }
	        }
	    ],
	    color:['rgba(1,255,255,0.5)','rgba(0,255,1,0.5)','rgba(254,153,0,1)'],
	    series : [

	        {
	            name:'清洗前',
	            type:'bar',
	            barWidth:15,
	            data:beforeClean
	        },
	        {
	            name:'清洗后',
	            type:'bar',
	            barWidth:15,
	            data:afterClean
	        },
	        {
	            name:'收益比',
	            type:'line',
	            yAxisIndex: 1,
	            data:afterCleanEarnings
	        }
	    ]
	};

	var myChartce = echarts.init(document.getElementById('first_right1_con'));

	  myChartce.setOption(cleanOption);

	  window.addEventListener("resize",function(){
	  	myChartce.resize();
	   });

		 var mwClean=true;

		 setInterval(function(){
			 	if(mwClean){
					cleanOption.xAxis[0].data=['**村扶贫','**厂房1#','**厂房2#'];
					cleanOption.series[0].data = [68,71,72];
					cleanOption.series[1].data = [91,93,94];
					cleanOption.series[2].data = [87,89,87];

	        myChartce.setOption(cleanOption);
					mwClean=!mwClean;
				}else{
					cleanOption.xAxis[0].data=['**业园1#','**技一期','**技二期'];

					cleanOption.series[0].data = [66,69,68];
					cleanOption.series[1].data = [87,89,92];
					cleanOption.series[2].data = [86,88,89];
	        myChartce.setOption(cleanOption);
					mwClean=!mwClean;
				}
	   },8500)

}
