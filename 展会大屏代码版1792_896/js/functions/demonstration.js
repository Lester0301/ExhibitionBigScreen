


  function demonstration(t1,t2,datacategories,datalossradio,dataFitValue,dataMicroKWDayPower,dataComDeviceHealth,dataDeviceHealth) {

      demonstrationOption1 = {
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
           x: 30,
           y:25,
           x2: 28,
           y2: 20,
           borderWidth: 1
         },
          color: ['rgba(0,153,0,0.7)','rgba(204,0,1,0.7)'],
          legend: {
              data:['损失比值', '结果比值'],
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
                  magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          yAxis : {
              type : 'value',
              min:0,
              max:1.2,
              axisLine: {
                  lineStyle: {
                      color: 'rgba(255,255,255,0.8)',
                      fontSize:11
                  }
              },
              splitLine: {
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      color: ['rgba(1,102,255,0.3)'],
                      width: 1,
                      type: 'solid'
                  }
              },
          },
          xAxis :{
              type : 'category',
              data : [],
              axisLine: {
                  lineStyle: {
                      color: 'rgba(255,255,255,0.8)',
                      fontSize:11
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
                      color: 'rgba(255,255,255,0)',
                      fontSize: 1,
                  }
              }
          },
          series : [
              {
                  name:'结果比值',
                  type:'bar',
                  barWidth:15,
                  stack: '总量',
                  itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                  data:dataFitValue
              },
              {
                  name:'损失比值',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
                  data:datalossradio
              }

          ]
      };

      demonstrationOption2 = {
            title: {
                text: '',
                subtext: ''
            },
            grid: {
                x: 30,
                y:25,
                x2: 28,
                y2: 30,
                borderWidth: 1

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    return "<p style='text-align:center;'>" + params[1].name + "</p><p>发电量：" + params[1].value + "MWh</p>"
                }
            },
            legend: {
                data: ['微逆发电量', '设备健康度'],
                textStyle: {    //图例文字的样式
                    color: 'white'
                }
            },
            xAxis: {
                data: datacategories,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(1,102,255,0.3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    rotate: 30,
                    formatter: function (value) {
                        //获取到刻度值
                        var labelVal = value;
                        //实际返回的刻度值
                        var reallyVal = labelVal;
                        //判断刻度值的长度
                        if(labelVal.length > 5)
                        {
                           //截取刻度值
                           reallyVal = labelVal.substr(0,5)+"..";
                        }
                       return reallyVal;
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 10,
                    }
                }
            },
            yAxis: [{
                splitLine: {
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['rgba(1,102,255,0.3)'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(1,102,255,0.3)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value) {
                       return value/1000+'K';
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 10,
                    }
                }
            },{
                splitLine: {
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['rgba(1,102,255,0)'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(1,102,255,0.3)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value) {
                       return value;
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 10,
                    }
                }
            }],

            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: [7000,7000,7000,7000,7000,7000,7000,7000],
                    animation: false
                },
                {
                    type: 'bar',
                    name:"微逆发电量",
                    barMaxWidth:15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: 'rgba(200,200,245,0.7)' },
                                    { offset: 0.5, color: 'rgba(24,141,240,0.7)' },
                                    { offset: 1, color: 'rgba(24,141,240,0.7)' }
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#2378f7' },
                                    { offset: 0.7, color: '#2378f7' },
                                    { offset: 1, color: '#83bff6' }
                                ]
                            )
                        }
                    },
                    data: dataMicroKWDayPower
                }
                ,
                {
                   name:'设备健康度',
                   type: 'line',
                   yAxisIndex: 1,
                   data: dataDeviceHealth
                }
            ]
        };

      var demonstration1 = echarts.init(document.getElementById(t1));
      demonstration1.setOption(demonstrationOption1);

      var demonstration2 = echarts.init(document.getElementById(t2));
      demonstration2.setOption(demonstrationOption2);

      window.addEventListener("resize",function(){
        demonstration1.resize();
        demonstration2.resize();
      });

      var demonS=true;

 		 setInterval(function(){
 			 	if(demonS){
          demonstrationOption1.xAxis.data=["04-30", "05-01", "05-02", "05-03", "05-04", "05-05","05-06","05-07"];
 					demonstrationOption2.xAxis.data=["04-30", "05-01", "05-02", "05-03", "05-04", "05-05","05-06","05-07"];
 					demonstrationOption1.series[0].data = [0.963447, 0.962597, 0.962597,0.961625,0.963382, 0.96472, 0.96472, 0.96472 ];
          demonstrationOption1.series[1].data =[0.036553, 0.037403, 0.037403,0.038375,0.036618, 0.03528, 0.03528, 0.03528];
          demonstrationOption2.series[1].data = [5400.6895,6677.444742,5765.395317,3568.769725,4540.280231,4401.081083,5338.921528,5857.635867];
          demonstrationOption2.series[0].data =[98.47,98.47,98.38,97.72,97.72,97.99,96.54,98.48];


 	        demonstration1.setOption(demonstrationOption1);
          demonstration2.setOption(demonstrationOption2);

 					demonS=!demonS;
 				}else{
          demonstrationOption1.xAxis.data=["04-22", "04-23", "04-24", "04-25", "04-26", "04-27","04-28","04-29"];
          demonstrationOption2.xAxis.data=["04-22", "04-23", "04-24", "04-25", "04-26", "04-27","04-28","04-29"];
 					demonstrationOption1.series[0].data = [0.963382, 0.96472, 0.96472, 0.96472,0.963447, 0.962597, 0.962597,0.961625 ];
          demonstrationOption1.series[1].data =[0.036618, 0.03528, 0.03528, 0.03528,0.036553, 0.037403, 0.037403,0.038375];
          demonstrationOption2.series[1].data = [4540.280231,4401.081083,5338.921528,5857.635867,5400.6895,6677.444742,5765.395317,3568.769725];
          demonstrationOption2.series[0].data =[97.72,97.99,96.54,98.48,98.47,98.47,98.38,97.72];


 	        demonstration1.setOption(demonstrationOption1);
          demonstration2.setOption(demonstrationOption2);

 					demonS=!demonS;
 				}
 	   },14000)


  }
