function defaultAnalyze() {
    // $("#left2_con").html("");
    var dataName=[
      "开关柜",
      "直流电缆",
      "交流电缆",
      "组件",
      "箱变",
      "集中式逆变器",
      "其他"
    ];
    var dataTotol=[
      {
        "value": "52402",
        "name": "其他"
      },
      {
        "value": "96893",
        "name": "集中式逆变器"
      },
      {
        "value": "109920",
        "name": "箱变"
      },
      {
        "value": "125759",
        "name": "组件"
      },
      {
        "value": "272628",
        "name": "交流电缆"
      },
      {
        "value": "323595",
        "name": "直流电缆"
      },
      {
        "value": "584511",
        "name": "开关柜"
      }
    ];

    var option_right2 = {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b} : {c}度&emsp;({d}%)"
         },
         grid: {
          x: 0,
          y:0,
          x2: 30,
          y2: 0,
          borderWidth: 1
        },
         legend: {
             show:false,
             orient: 'horizontal',
             x: 'center',
             y:'bottom',
             data: dataName,
             textStyle: {
                 color: 'white',
                 fontSize: 8
             }
         },
         color: ['rgba(153,0,1,0.8)','rgba(154,102,0,0.8)','rgba(0,102,0,0.8)','rgba(204,0,255,0.8)','rgba(0,153,0,0.8)','rgba(255,255,0,0.8)','rgba(50,204,254,0.8)'],
         calculable: false,
         series: [
             {
                 name: '故障损失各项占比',
                 type: 'pie',
                 radius: '70%',
                 center: ['48%', '54%'],
                 data: dataTotol
             }
         ]
     }


     var right2Ele = echarts.init(document.getElementById("left2_con"));
     right2Ele.setOption(option_right2);

     window.addEventListener("resize",function(){
       right2Ele.resize();
      });

      var mwDef=true;

      setInterval(function(){
         if(mwDef){
           option_right2.legend.data=[
             "开关柜",
             "交流电缆",
             "直流电缆",
             "箱变",
             "组件",
             "集中式逆变器",
             "其他"
           ];
           option_right2.series[0].data = [
             {
               "value": "152402",
               "name": "其他"
             },
             {
               "value": "96893",
               "name": "集中式逆变器"
             },
             {
               "value": "125759",
               "name": "组件"
             },
             {
               "value": "109920",
               "name": "箱变"
             },
             {
               "value": "423595",
               "name": "直流电缆"
             },
             {
               "value": "232628",
               "name": "交流电缆"
             },
             {
               "value": "584511",
               "name": "开关柜"
             }
           ];

           right2Ele.setOption(option_right2);
           mwDef=!mwDef;

         }else{
           option_right2.legend.data=dataName;
           option_right2.series[0].data = dataTotol;

           right2Ele.setOption(option_right2);
           mwDef=!mwDef;
         }
      },13500)

}
