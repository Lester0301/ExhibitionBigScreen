function mwKWh(){
	var mwKWhOption = {
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['MW发电量'],
          orient: 'horizontal',
          x:'center',
          y:'-1',
          textStyle: {    //图例文字的样式
              color: 'white',
              fontSize:11
          }
      },
      grid: {
       x: 40,
       y:50,
       x2: 32,
       y2: 20,
       borderWidth: 1
     },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
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
              data : ['北线','中线','西线','南线','东线']
          }
      ],
      yAxis : [
          {
              type : 'value',

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
              }
          }
      ],
      color:['rgba(1,255,255,0.5)'],
      series : [
          {
            name:'MW发电量',
            type:'bar',
            barWidth:15,
            data:[4855,4926,4098,5785,4383],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
          }
      ]
  };

  var myChartmw = echarts.init(document.getElementById('first_left2_con'));

  myChartmw.setOption(mwKWhOption);

  window.addEventListener("resize",function(){
  	myChartmw.resize();
   });
	 var mwF=true;

	 setInterval(function(){
		 	if(mwF){
				mwKWhOption.series[0].data = [3755,3926,2998,2685,3283];
        myChartmw.setOption(mwKWhOption);
				mwF=!mwF;
			}else{
				mwKWhOption.series[0].data = [4855,4926,4098,5785,4383];
        myChartmw.setOption(mwKWhOption);
				mwF=!mwF;
			}
   },8100)


}
