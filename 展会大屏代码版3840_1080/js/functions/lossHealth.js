function LossHealth(){
  var categories=[
    "06-18",
    "06-19",
    "06-20",
    "06-21"
  ];
  var dataLosslargePower=[
    3779.88,
    4451.62,
    4313.61,
    2700.97
  ];
  var dataRealPower=[
    114201.19,
    131379.09,
    124892.56,
    77208.83
  ];
  var datagkbDayKWQ=[
    4.73,
    6.44,
    7.27,
    7.16
  ];
  var datanbqDayKWQ=[
    3.8,
    6.13,
    7.02,
    6.68
  ];
  var dataComNormal=[
    96.69,
    96.61,
    96.55,
    96.5
  ];
  var dataFDNormal=[
    96.69,
    96.61,
    96.55,
    96.5
  ];
  var dataSDNormal=[
    100,
    100,
    100,
    100
  ];


  $('#left6_con').highcharts({
        chart: {
            backgroundColor: 'red',
            marginTop:90,
            marginBottom:44,

        },
        credits: {
            enabled: false // 禁用版权信息
        },
        title: {
            // text: '损耗健康度',
            text:'',
            style: {
                color: 'white'
            }
        },
        legend: {
            color: 'white',
            itemStyle: {
                color: 'white',
            },
            layout: 'horizontal',
            floating: true,
            align: 'left',
            x: 30,
            verticalAlign: 'top',
            y: 0
        },
        xAxis: {
            categories: categories,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: [
            {
                min: 0,
                tickAmount: 11,
                labels: {
                    format: '{value}',
                    style: {
                        color: 'white'
                    }
                },
                title: {
                    text: ''
                }, opposite: true
            }, {
                min: 0,
                max: 100,
                tickAmount: 11,
                labels: {
                    format: '{value} %',
                    style: {
                        color: 'white'
                    }
                },
                title: {
                    text: ''
                }
            }, {
                min: 0,
                tickAmount: 11,
                labels: {
                    format: '{value}',
                    style: {
                        color: 'white'
                    }
                },
                title: {
                    text: '日千瓦发电量',
                    style: {
                        color: 'white'
                    }
                }, opposite: false
            }
        ],
        plotOptions: {
            column: {
                pointPadding: 0.1,
                borderWidth: 0
            }
        },
        series: [
          {
              type: 'spline',
              name: '损耗健康度',
              data: dataComNormal,
              yAxis: 1,
              tooltip: {
                  formatter: function () {
                      return this.x +
                          '<br/>' +
                          this.series.name +
                          ':' +
                          this.y +
                          '%';
                  }
              },
              marker: {
                  lineWidth: 2,
                  lineColor: Highcharts.getOptions().colors[3],
                  fillColor: 'white'
              }
          },
          {
              type: 'spline',
              name: '发电侧损耗健康度',
              data: dataFDNormal,
              yAxis: 1,
              tooltip: {
                  formatter: function () {
                      return this.x +
                          '<br/>' +
                          this.series.name +
                          ':' +
                          this.y +
                          '%';
                  }
              },
              marker: {
                  lineWidth: 2,
                  lineColor: Highcharts.getOptions().colors[3],
                  fillColor: 'white'
              }
          }
            , {
                type: 'spline',
                name: '输电测损耗健康度',
                data: dataSDNormal,
                yAxis: 1,
                tooltip: {
                    formatter: function () {
                        return this.x +
                            '<br/>' +
                            this.series.name +
                            ':' +
                            this.y +
                            '%';
                    }
                },
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            },
          {
              type: 'column',
              name: '损失发电量',
              color: '#990001',
              data: dataLosslargePower
          }, {
              type: 'column',
              name: '实际发电量',
              color: '#55BF3B',
              data: dataRealPower
          }, {
              type: 'column',
              name: '关口表日千瓦发电',
              color: '#F8AC59',
              yAxis: 2,
              data: datagkbDayKWQ
          }, {
              type: 'column',
              name: '逆变器日千瓦发电',
              yAxis: 2,
              color: '#0166FF',
              data: datanbqDayKWQ

          },
        ]
    });

}
