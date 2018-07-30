function LinesComplete(){

  var labelFromatter = {
      normal : {
          label : {
              formatter : function (params){
                  return 100 - params.value + '%'
              },
              textStyle: {
                  baseline : 'top'
              }
          }
      },
  }
  var labelBottom = {
      normal : {
          color: '#ccc',
          label : {
              show : true,
              position : 'center'
          },
          labelLine : {
              show : false
          }
      },
      emphasis: {
          color: 'rgba(0,0,0,0)'
      }
  };
  var radius = [40, 55];
  var linComOption = {
      legend: {
          x : 'center',
          y : 'center',
          data:[
              '北线','西线','中线','南线','东线'
          ],
          textStyle: {    //图例文字的样式
              color: 'white',
              fontSize:11
          }
      },
      title : {
          text: '',
          subtext: '',
          x: 'center'
      },
      series : [
        {
            type : 'pie',
            center : ['20%', '25%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:44, itemStyle : labelBottom},
                {
                  name:'北线',
                  value:56,
                  itemStyle : {
                      normal : {
                          color:'rgba(255,0,0,0.7)',
                          label : {
                              show : true,
                              position : 'center',
                              formatter : '{b}',

                              textStyle: {
                                  baseline : 'bottom'
                              }
                          },
                          labelLine : {
                              show : false
                          }
                      }
                  }
                }
            ]
        },
        {
            type : 'pie',
            center : ['50%', '25%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:39, itemStyle : labelBottom},
                {
                  name:'西线',
                  value:61,
                  itemStyle : {
                      normal : {
                          color:'rgba(255,255,0,0.7)',
                          label : {
                              show : true,
                              position : 'center',
                              formatter : '{b}',

                              textStyle: {
                                  baseline : 'bottom'
                              }
                          },
                          labelLine : {
                              show : false
                          }
                      }
                  }
                }
            ]
        },
        {
            type : 'pie',
            center : ['80%', '25%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:42, itemStyle : labelBottom},
                {
                  name:'中线',
                  value:58,
                  itemStyle : {
                      normal : {
                          color:'rgba(0,0,255,0.7)',
                          label : {
                              show : true,
                              position : 'center',
                              formatter : '{b}',

                              textStyle: {
                                  baseline : 'bottom'
                              }
                          },
                          labelLine : {
                              show : false
                          }
                      }
                  }
              }
            ]
        },
        {
            type : 'pie',
            center : ['33.3%', '75%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:48, itemStyle : labelBottom},
                {
                  name:'南线',
                  value:52,
                  itemStyle : {
                      normal : {
                          color:'rgba(0,153,255,0.8)',
                          label : {
                              show : true,
                              position : 'center',
                              formatter : '{b}',

                              textStyle: {
                                  baseline : 'bottom'
                              }
                          },
                          labelLine : {
                              show : false
                          }
                      }
                  }
                }
            ]
        },
        {
            type : 'pie',
            center : ['66.6%', '75%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:49, itemStyle : labelBottom},
                {
                  name:'东线',
                  value:51,
                  itemStyle : {
                      normal : {
                          color:'rgba(204,0,255,0.7 )',
                          label : {
                              show : true,
                              position : 'center',
                              formatter : '{b}',

                              textStyle: {
                                  baseline : 'bottom'
                              }
                          },
                          labelLine : {
                              show : false
                          }
                      }
                  }
                }
            ]
        }
      ]
  };

  var myChartLC = echarts.init(document.getElementById('first_right3_con'));

  myChartLC.setOption(linComOption);

  window.addEventListener("resize",function(){
    myChartLC.resize();
   });
}
