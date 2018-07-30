function health(){
  var healthOption = {
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['设备健康度','通讯健康度','损耗健康度','运营健康度','清洁健康度'],
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
              min:98,
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
                  }
              }
          }
      ],
      color:['red','yellow','blue','#0099FF','#CC00FF'],
      series : [
          {
              name:'设备健康度',
              type:'line',
              data:[98.5, 99.1, 98.9, 99.6, 99.1]
          },
          {
              name:'通讯健康度',
              type:'line',
              data:[98.4, 98.8, 98.4, 99.0, 98.7]
          },
          {
              name:'损耗健康度',
              type:'line',
              data:[99.1, 99.4, 98.6, 99.1, 98.9]
          },
          {
              name:'运营健康度',
              type:'line',
              data:[98.6, 99.2, 98.5, 99.8, 99.2]
          },
          {
              name:'清洁健康度',
              type:'line',
              data:[98.4, 99.4, 99.2, 99.5, 98.5]
          }
      ]
  };

  var myChartp = echarts.init(document.getElementById('first_right4_con'));

  myChartp.setOption(healthOption);

  window.addEventListener("resize",function(){
  	myChartp.resize();
   });

   var mwP=true;

	 setInterval(function(){
		 	if(mwP){
        healthOption.yAxis[0].max=99.5;
        healthOption.yAxis[0].min=97.5;

				healthOption.series[0].data = [98.1, 98.5, 98.5, 98.4, 98.7];
        healthOption.series[1].data = [98.1, 98.2, 98.2, 98.0, 98.2];
        healthOption.series[2].data = [98.0, 98.6, 98.3, 98.4, 98.8];
        healthOption.series[3].data = [98.4, 99.0, 98.9, 98.9, 98.7];
        healthOption.series[4].data = [98.8, 99.0, 98.7, 99.0, 99.1];

        myChartp.setOption(healthOption);
				mwP=!mwP;
			}else{
        healthOption.yAxis[0].max=100;
        healthOption.yAxis[0].min=98;
        healthOption.series[0].data = [98.5, 99.1, 98.9, 99.6, 99.1];
        healthOption.series[1].data = [98.4, 98.8, 98.4, 99.0, 98.7];
        healthOption.series[2].data = [99.1, 99.4, 98.6, 99.1, 98.9];
        healthOption.series[3].data = [98.6, 99.2, 98.5, 99.8, 99.2];
        healthOption.series[4].data = [98.4, 99.4, 99.2, 99.5, 98.5];
        myChartp.setOption(healthOption);
				mwP=!mwP;
			}
   },8500)


}
