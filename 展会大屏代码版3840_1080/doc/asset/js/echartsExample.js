var myChart;
var domCode = document.getElementById('sidebar-code');
var domGraphic = document.getElementById('graphic');
var domMain = document.getElementById('main1');
var domMessage = document.getElementById('wrong-message');
var iconResize = document.getElementById('icon-resize');
var needRefresh = false;

var enVersion = location.hash.indexOf('-en') != -1;
var hash = location.hash.replace('-en','');
hash = hash.replace('#','') || (needMap() ? 'default' : 'macarons');
hash += enVersion ? '-en' : '';
var d = [];
// $.ajax({
//     url: '/PSPAPI/Time_Warning',
//     type: "get",
//     async:false,
//     success: function(r) {
//         for (var i = 0; i < r.length; i++) {
//             d.push(r[i]);
//         }
//         console.log(r)
//     },
//     error: function(error, status) {
//
//     }
// });
var d=[{"PSName":"乌海海南区","PriorityName":"特别严重","Latitude":39.6575,"Longitude":106.803611},{"PSName":"乌兰察布鑫盛一期","PriorityName":"特别严重","Latitude":41.313151,"Longitude":113.850892},{"PSName":"泰安肥城一期","PriorityName":"严重","Latitude":36.190277,"Longitude":116.778332},{"PSName":"湖北仙桃","PriorityName":"严重","Latitude":30.232636,"Longitude":113.518781},{"PSName":"德州武城县一期","PriorityName":"较重","Latitude":37.218054,"Longitude":116.102777},{"PSName":"德州武城县一期","PriorityName":"较重","Latitude":37.218054,"Longitude":116.102777},{"PSName":"德州武城县一期","PriorityName":"较重","Latitude":37.218054,"Longitude":116.102777},{"PSName":"德州武城县一期","PriorityName":"一般","Latitude":37.218054,"Longitude":116.102777},{"PSName":"辽宁台安","PriorityName":"一般","Latitude":41.309076,"Longitude":122.534987},{"PSName":"辽宁台安","PriorityName":"一般","Latitude":41.309076,"Longitude":122.534987},{"PSName":"天津西青","PriorityName":"一般","Latitude":39.04861,"Longitude":117.12111},{"PSName":"湖北仙桃","PriorityName":"一般","Latitude":30.232636,"Longitude":113.518781},{"PSName":"天津西青","PriorityName":"一般","Latitude":39.04861,"Longitude":117.12111}];
var psLocation=psLocationProgress(d);
var psVal=psValProgress(d);
//{'上海电站1期': [121.4648,31.2891]}
//{name:'上海电站1期',value:99}
function psLocationProgress(d){
    var obj={};
    $.each(d,function(index,item){
        obj[item.PSName]=[item.Longitude,item.Latitude];
    })
    return obj;
}

function psValProgress(d){
    var obj={},arr=[],_item=0;
    $.each(d,function(index,item){
        obj[item.PSName]=item.PriorityName;
    })
    $.each(obj,function(index,item){
        switch(item){
            case "特别严重":_item=99;break;
            case "严重":_item=66;break;
            case "较重":_item=33;break;
            case "一般":_item=0;break;
            default:_item=0;break;
        }
        arr.push({
            "name":index,
            "value":_item
        })
    })
    return arr;
}


var curTheme='default';
function requireCallback (ec, defaultTheme) {
    curTheme = themeSelector ? defaultTheme : {};
    echarts = ec;
    refresh();
    window.onresize = myChart.resize;
}

var themeSelector = 'default';


function autoResize() {
    if ($(iconResize).hasClass('glyphicon-resize-full')) {
        focusCode();
        iconResize.className = 'glyphicon glyphicon-resize-small';
    }
    else {
        focusGraphic();
        iconResize.className = 'glyphicon glyphicon-resize-full';
    }
}

function focusCode() {
    domCode.className = 'col-md-8 ani';
    domGraphic.className = 'col-md-4 ani';
}

function focusGraphic() {
    domCode.className = 'col-md-4 ani';
    domGraphic.className = 'col-md-8 ani';
    if (needRefresh) {
        myChart.showLoading();
        setTimeout(refresh, 1000);
    }
}



function refresh(isBtnRefresh){
    if (isBtnRefresh) {
        needRefresh = true;
        focusGraphic();
        return;
    }
    needRefresh = false;
    if (myChart && myChart.dispose) {
        myChart.dispose();
    }
    myChart = echarts.init(domMain, curTheme);
    window.onresize = myChart.resize;

    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        color: ['gold','aqua','lime'],
        title : {
            text: '',
            subtext:'',
            x:'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        dataRange: {
            show:false,
            min : 0,
            max : 100,
            calculable : true,
            color: ['#D72F25', '#F68B22','#FDEB2B','#0033FF'],
            textStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                name: '全国',
                type: 'map',
                hoverable: false,
                mapType: 'china',
                itemStyle:{
                    normal:{
                        borderColor:'rgba(100,149,237,1)',
                        borderWidth:0.5,
                        areaStyle:{
                            color: '#006600'
                        }
                    }
                },
                data:[],
                markLine : {
                    smooth:true,
                    symbol: ['none', 'circle'],
                    symbolSize : 1,
                    itemStyle : {
                        normal: {
                            color:'#fff',
                            borderWidth:1,
                            borderColor:'rgba(30,144,255,0.5)'
                        }
                    },
                    data : []
                },
                geoCoord: psLocation
            },
            {
                name: '北京 Top10',
                type: 'map',
                mapType: 'china',
                data:[],
                markLine : {
                    smooth:true,
                    effect : {
                        show: true,
                        scaleSize: 1,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle : {
                        normal: {
                            borderWidth:1,
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data : []
                },
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 5+ v/100
                    },
                    effect : {
                        show: true,
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:true}
                        },
                        emphasis: {
                            label:{position:'bottom'}
                        }
                    },
                    //data的value数值分别可以为99,66,33,0,代表特别严重、严重、较重、一般
                    data : psVal
                }
            },
          ]
    };

    myChart.setOption(option, true)
    // domMessage.innerHTML = '';
}

function needMap() {
    var href = location.href;
    return href.indexOf('map') != -1
           || href.indexOf('mix3') != -1
           || href.indexOf('mix5') != -1
           || href.indexOf('dataRange') != -1;
}

var echarts;
var developMode = false;

if (developMode) {
    window.esl = null;
    window.define = null;
    window.require = null;
    (function () {
        var script = document.createElement('script');
        script.async = true;

        var pathname = location.pathname;

        var pathSegs = pathname.slice(pathname.indexOf('doc')).split('/');
        var pathLevelArr = new Array(pathSegs.length - 1);
        script.src = pathLevelArr.join('../') + 'asset/js/esl/esl.js';
        if (script.readyState) {
            script.onreadystatechange = fireLoad;
        }
        else {
            script.onload = fireLoad;
        }
        (document.getElementsByTagName('head')[0] || document.body).appendChild(script);

        function fireLoad() {
            script.onload = script.onreadystatechange = null;
            setTimeout(loadedListener,100);
        }
        function loadedListener() {
            // for develop
            require.config({
                packages: [
                    {
                        name: 'echarts',
                        location: '../../src',
                        main: 'echarts'
                    },
                    {
                        name: 'zrender',
                        // location: 'http://ecomfe.github.io/zrender/src',
                        location: '../../../zrender/src',
                        main: 'zrender'
                    }
                ]
            });
            launchExample();
        }
    })();
}
else {
    // for echarts online home page
    require.config({
        paths: {
            echarts: './www/js'
        }
    });
    launchExample();
}

var isExampleLaunched;
function launchExample() {
    if (isExampleLaunched) {
        return;
    }

    // 按需加载
    isExampleLaunched = 1;
    require(
        [
            'echarts',
            needMap() ? 'echarts/chart/map' : 'echarts'
        ],
        requireCallback
    );
}
