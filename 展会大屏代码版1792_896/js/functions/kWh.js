//显示日发电量、月发电量、年发电量、总发电量
    var width = $("#kwh_day").parent().width();
    var digit = Math.floor((width - 6) / 18);
    var day = $("#kwh_day").slideNumber(digit);
    var month = $("#kwh_month").slideNumber(digit);
    var year = $("#kwh_year").slideNumber(digit);
    var total = $("#kwh_total").slideNumber(digit);
    var showReduce=null;

    show_kWh();
    clearTimeout(showReduce)
    showReduce=setInterval(function(){
      show_kWh();
    },10000);

  function show_kWh() {
    

    var sumkWh =36561,sumMonthkWh=213175,sumYearkWh=553256,sumTotalkWh=1969709,netDays=2009;

    var myDateTody=new Date();
    var myDateStart=new Date(myDateTody.getFullYear(),myDateTody.getMonth(),myDateTody.getDate(),5).getTime()/1000;//今天六点开始的秒数
    var myDateStop=new Date(myDateTody.getFullYear(),myDateTody.getMonth(),myDateTody.getDate(),18).getTime()/1000;//今天六点开始的秒数

    var myDateNow = new Date().getTime()/1000;//1523998800是2018年4月18日早6点的时间戳
    var myDateN_year=new Date().getFullYear();
    var myDateN_month=new Date().getMonth();
    var myDateN_day=new Date().getDate();



    if(myDateNow>myDateStart && myDateNow<myDateStop){
      var difDay=Math.floor((myDateNow-1523998800)/86400);//今天至2018年4月18日早6点的天数
      var difDay_tody=Math.ceil((myDateNow-new Date(myDateN_year,myDateN_month,myDateN_day,6).getTime()/1000));
      var difKWh=difDay*13*3600/15*3;//按照一天发电13个小时，早6点到晚7点，一分钟发电12KWh
      difKWh=difKWh+Math.ceil((myDateNow-myDateStart)/15*3.5);
      sumkWh =difDay_tody/15*3.5;
      sumMonthkWh = (myDateN_day-1)*13*3600/15*3.5+sumkWh ;
      sumYearkWh += difKWh;//仅仅是2018年内的发电量是准确的，此bug待修改
      sumTotalkWh += difKWh;
      netDays =netDays+difDay-1;
    }

    day.setNumber(sumkWh);
    month.setNumber(sumMonthkWh);
    year.setNumber(sumYearkWh);
    total.setNumber(sumTotalkWh);
    $(".data-coal span").text(Math.round(sumkWh * 0.4 ));
    $(".data-co2 span").text(Math.round(sumkWh * 0.997));
    $(".data-tree span").text(Math.round(sumkWh * 0.997 / 1.833395));
    $(".data-total-coal span").text(Math.round(sumTotalkWh * 0.4 ));
    $(".data-total-co2 span").text(Math.round(sumTotalkWh * 0.997));
    $(".data-total-tree span").text(Math.round(sumTotalkWh * 0.997 / 1.833395));
    $(".data-net-days span").text(netDays);
  }

