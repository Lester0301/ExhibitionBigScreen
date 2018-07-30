$(function() {
    $(".first_center1").height($(".first_center1").width()/4152*3468);
    window.addEventListener("resize",function(){
      $(".first_center1").height($(".first_center1").width()/4152*3468);
     });
     if($('body').height()>896){
       $('.showcaseContainer').css("bottom",($('body').height()-896)/2+'px')
     }
    var eastData=[
      {
        "Id": 1,
        "Name": "赛轮光伏电站",
        "Lat": 36.057222,
        "Lng": 120.154167,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 10325.2,
        "TotalkWh": 17097494.9875,
        "MonthkWh": 17097505.587499995,
        "YearkWh": 713681.2000000011,
        "InstalledCapacity": 3.9729,
        "Province": "山东",
        "City": "青岛市",
        "County": "崂山区",
        "Days": 2008,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 3,
        "Name": "青特（城阳）",
        "Lat": 36.303333,
        "Lng": 120.455277,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 2072776.92382813,
        "TotalkWh": 9611052.5,
        "MonthkWh": 5467652.050292975,
        "YearkWh": 5467652.050292975,
        "InstalledCapacity": 8.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "城阳区",
        "Days": 1447,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 4,
        "Name": "新力通",
        "Lat": 36.72111,
        "Lng": 119.93111,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 2084.75,
        "TotalkWh": 1575796.375,
        "MonthkWh": 51771.5,
        "YearkWh": 5467652.050292975,
        "InstalledCapacity": 0.98,
        "Province": "山东",
        "City": "青岛市",
        "County": "平度市",
        "Days": 1173,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 6,
        "Name": "大溪地",
        "Lat": 36.064444,
        "Lng": 120.384999,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 2166.375,
        "TotalkWh": 2901814.25,
        "MonthkWh": 34220.625,
        "YearkWh": 265834.6875,
        "InstalledCapacity": 0.8,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 1355,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 7,
        "Name": "胶州海尔",
        "Lat": 36.324999,
        "Lng": 120.113888,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 24545.1999999997,
        "TotalkWh": 17293495.2,
        "MonthkWh": 12859480.6,
        "YearkWh": 1401268.1999999993,
        "InstalledCapacity": 5.2777,
        "Province": "山东",
        "City": "青岛市",
        "County": "胶州市",
        "Days": 1631,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 8,
        "Name": "昌盛工业园1#厂房",
        "Lat": 36.432777,
        "Lng": 120.352777,
        "Type": 1,
        "Status": 4,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 1796266.4,
        "InstalledCapacity": 0.763,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 1734,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 9,
        "Name": "昌盛工业园",
        "Lat": 36.449721,
        "Lng": 120.352777,
        "Type": 1,
        "Status": 4,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 3528876.19,
        "MonthkWh": 0,
        "YearkWh": 214901.96999999974,
        "InstalledCapacity": 0.366,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 1661,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 10,
        "Name": "城盛科技一期20MW",
        "Lat": 36.49111,
        "Lng": 120.366666,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7183246972183542,
        "kWh": 114800,
        "TotalkWh": 74427640,
        "MonthkWh": 1358560,
        "YearkWh": 6942320,
        "InstalledCapacity": 22.369,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 1054,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 14,
        "Name": "滨州北海农业一期20MW",
        "Lat": 38032,
        "Lng": 117549,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7619463372997878,
        "kWh": 105000,
        "TotalkWh": 16471560,
        "MonthkWh": 1179360,
        "YearkWh": 5654600,
        "InstalledCapacity": 20,
        "Province": "山东",
        "City": "滨州市",
        "County": "滨城区",
        "Days": 287,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 15,
        "Name": "寿光一期20MW",
        "Lat": 37.15,
        "Lng": 118.75,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8352300839377089,
        "kWh": 121100,
        "TotalkWh": 39298350,
        "MonthkWh": 1538600,
        "YearkWh": 7236250,
        "InstalledCapacity": 20.997,
        "Province": "山东",
        "City": "潍坊市",
        "County": "寿光市",
        "Days": 552,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 16,
        "Name": "崂山海尔",
        "Lat": 36.132777,
        "Lng": 120.424443,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 23135.6000000001,
        "TotalkWh": 19546004.74,
        "MonthkWh": 3401108.74,
        "YearkWh": 1264630.0599999987,
        "InstalledCapacity": 6.7016,
        "Province": "山东",
        "City": "青岛市",
        "County": "崂山区",
        "Days": 1584,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 17,
        "Name": "软控重工",
        "Lat": 36.287499,
        "Lng": 120.094721,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 3600.23999999999,
        "TotalkWh": 3603642.48,
        "MonthkWh": 43848.95999999998,
        "YearkWh": 169485.1200000001,
        "InstalledCapacity": 0.9996,
        "Province": "山东",
        "City": "青岛市",
        "County": "胶州市",
        "Days": 1735,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 19,
        "Name": "开发区海尔商用冷柜",
        "Lat": 36.542499,
        "Lng": 120.594444,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 4737.19999999995,
        "TotalkWh": 4731831.8,
        "MonthkWh": 4731831.800000001,
        "YearkWh": 216866,
        "InstalledCapacity": 1.235,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 723,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 20,
        "Name": "开发区海尔",
        "Lat": 36.510555,
        "Lng": 120.628888,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 55394.8200000001,
        "TotalkWh": 44233248.96,
        "MonthkWh": 28601541.060000006,
        "YearkWh": 3057745,
        "InstalledCapacity": 12.072,
        "Province": "山东",
        "City": "青岛市",
        "County": "黄岛区",
        "Days": 723,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 23,
        "Name": "平度海信",
        "Lat": 36.057222,
        "Lng": 120.154166,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 36477.1600000001,
        "TotalkWh": 31567332.9,
        "MonthkWh": 17297530.8,
        "YearkWh": 2041471.0599999987,
        "InstalledCapacity": 7.835,
        "Province": "山东",
        "City": "青岛市",
        "County": "平度市",
        "Days": 723,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 25,
        "Name": "开发区海信",
        "Lat": 35.965833,
        "Lng": 120.211111,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 7056,
        "TotalkWh": 6881342.64,
        "MonthkWh": 5461414,
        "YearkWh": 0,
        "InstalledCapacity": 3.985,
        "Province": "山东",
        "City": "青岛市",
        "County": "黄岛区",
        "Days": 723,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 26,
        "Name": "胶南海尔",
        "Lat": 36.057222,
        "Lng": 120.154166,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.8339495864938898,
        "kWh": 20740.2,
        "TotalkWh": 16281897.8,
        "MonthkWh": 82830.6000000001,
        "YearkWh": 1199677.2000000011,
        "InstalledCapacity": 4.5033,
        "Province": "山东",
        "City": "青岛市",
        "County": "胶南市",
        "Days": 723,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 29,
        "Name": "聊城莘县一期20MW",
        "Lat": 36.24611,
        "Lng": 115.672221,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8156476771675608,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 869400,
        "YearkWh": 5930400,
        "InstalledCapacity": 20.23119,
        "Province": "山东",
        "City": "聊城市",
        "County": "莘县",
        "Days": 957,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 30,
        "Name": "菏泽成武一期20MW",
        "Lat": 34.959722,
        "Lng": 115.896944,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8031175957810613,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 927360,
        "YearkWh": 3226160,
        "InstalledCapacity": 14.86,
        "Province": "山东",
        "City": "菏泽市",
        "County": "成武县",
        "Days": 747,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 31,
        "Name": "德州武城县一期20MW",
        "Lat": 37.218054,
        "Lng": 116.102777,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7781599831844435,
        "kWh": 117878.90625,
        "TotalkWh": 20267519.0429688,
        "MonthkWh": 1244658.248046901,
        "YearkWh": 7032198.974609399,
        "InstalledCapacity": 20,
        "Province": "山东",
        "City": "德州市",
        "County": "武城县",
        "Days": 554,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 32,
        "Name": "泰安肥城20MW",
        "Lat": 36.190277,
        "Lng": 116.778332,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8057843326174292,
        "kWh": 112562.255859401,
        "TotalkWh": 28536900.5126953,
        "MonthkWh": 1406999.9999999998,
        "YearkWh": 6823741.333007801,
        "InstalledCapacity": 20.016,
        "Province": "山东",
        "City": "泰安市",
        "County": "肥城市",
        "Days": 656,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 40,
        "Name": "福麦斯",
        "Lat": 36.2,
        "Lng": 119.163539,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 135.4111328125,
        "TotalkWh": 98736.0302734375,
        "MonthkWh": 98736.0302734375,
        "YearkWh": 0,
        "InstalledCapacity": 5.775,
        "Province": "山东",
        "City": "潍坊市",
        "County": null,
        "Days": 1419,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 42,
        "Name": "城盛科技二期20MW",
        "Lat": 36.481742,
        "Lng": 120.323909,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7746583615132099,
        "kWh": 112885.679185897,
        "TotalkWh": 69518542.7510136,
        "MonthkWh": 1274037.679185897,
        "YearkWh": 7730239.228587106,
        "InstalledCapacity": 20.14364,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 1007,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 61,
        "Name": "平度海信洗衣机",
        "Lat": 36.510555,
        "Lng": 120.628888,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 5343,
        "TotalkWh": 2660643,
        "MonthkWh": 64410,
        "YearkWh": 307674,
        "InstalledCapacity": 1,
        "Province": "山东",
        "City": "青岛市",
        "County": "崂山区",
        "Days": 805,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 63,
        "Name": "城盛发展一期60MW",
        "Lat": 36.510555,
        "Lng": 120.628888,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8416444302871182,
        "kWh": 383367.891869299,
        "TotalkWh": 180828360.820042,
        "MonthkWh": 4696085.891869299,
        "YearkWh": 23700358.940498203,
        "InstalledCapacity": 67.2661,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 839,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 66,
        "Name": "开发区供排水项目",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 8.25600000000031,
        "TotalkWh": 3534.146,
        "MonthkWh": 103.52400000000216,
        "YearkWh": 470.31799999999976,
        "InstalledCapacity": 0.01716,
        "Province": "山东",
        "City": "青岛市",
        "County": "黄岛区",
        "Days": 683,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 68,
        "Name": "城盛发展二期20MW",
        "Lat": 36.49111,
        "Lng": 120.366666,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8681720964392786,
        "kWh": 105000,
        "TotalkWh": 35708750,
        "MonthkWh": 1282750,
        "YearkWh": 6403250,
        "InstalledCapacity": 20,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 656,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 69,
        "Name": "通裕重工4MW",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.867992469873042,
        "kWh": 21840,
        "TotalkWh": 8158850,
        "MonthkWh": 265440,
        "YearkWh": 1248411,
        "InstalledCapacity": 4.15344,
        "Province": "山东",
        "City": "德州市",
        "County": "禹城市",
        "Days": 678,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 74,
        "Name": "沂水中盛光伏发电项目",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 1765737,
        "InstalledCapacity": 1.415,
        "Province": "山东",
        "City": "临沂市",
        "County": "沂水县",
        "Days": 831,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 76,
        "Name": "即墨扶贫项目-01-段泊岚镇-毛家岭四村",
        "Lat": 36,
        "Lng": 120,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 166522.8,
        "MonthkWh": 0,
        "YearkWh": 11228.399999999994,
        "InstalledCapacity": 0.123165,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 574,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 77,
        "Name": "即墨扶贫项目-02-移风店镇-道头村",
        "Lat": 36,
        "Lng": 120,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 180585,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.117455,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 574,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 78,
        "Name": "即墨扶贫项目-03-灵山镇-索戈庄村",
        "Lat": 36,
        "Lng": 120,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 164322.5,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.120165,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 574,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 81,
        "Name": "即墨扶贫项目-04-段泊岚镇-刘家庄三村",
        "Lat": 36,
        "Lng": 120,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 90572,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.112455,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 574,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 82,
        "Name": "即墨扶贫项目-05-北安街道办事处-三官庙村",
        "Lat": 36,
        "Lng": 120,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 130081,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.11781,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 574,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 83,
        "Name": "即墨扶贫项目-06-大信镇-张戈庄六里",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 174171,
        "MonthkWh": 0,
        "YearkWh": 643,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 463,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 84,
        "Name": "小埠后村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 174140.6,
        "MonthkWh": 2550.8000000000175,
        "YearkWh": 32552.080000000016,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 463,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 85,
        "Name": "东乔村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 104682.76,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 455,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 86,
        "Name": "华家周疃村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 147983.2,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 454,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 87,
        "Name": "郑家村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 688.600000000006,
        "TotalkWh": 207530,
        "MonthkWh": 8515.000000000027,
        "YearkWh": 43126.92000000001,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 454,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 90,
        "Name": "南翟家疃村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 81035.64,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 435,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 91,
        "Name": "韩家庄村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 613.040000000008,
        "TotalkWh": 174710,
        "MonthkWh": 7528.8399999999665,
        "YearkWh": 36513.79999999999,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 433,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 92,
        "Name": "前港洪水",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 134539.2,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 433,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 93,
        "Name": "杨哥庄村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 161809.8,
        "MonthkWh": 0,
        "YearkWh": 3555.5599999999977,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 426,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 94,
        "Name": "宫家大丈村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 129245.56,
        "MonthkWh": 0,
        "YearkWh": 11600.599999999991,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 421,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 95,
        "Name": "刘家旺疃村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 106342.08,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 421,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 96,
        "Name": "泉庄村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 99553.4,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 421,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 97,
        "Name": "泊子庄村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 130625.96,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 410,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 98,
        "Name": "拖车夼村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0.0399999999935972,
        "TotalkWh": 88156.2,
        "MonthkWh": 1.3599999999933057,
        "YearkWh": 10.559999999997672,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 404,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 99,
        "Name": "通裕重工二期8MW",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.8679064708331294,
        "kWh": 34659.9121093806,
        "TotalkWh": 6683239.74609375,
        "MonthkWh": 535531.1121093807,
        "YearkWh": 0,
        "InstalledCapacity": 8.235,
        "Province": "山东",
        "City": "德州市",
        "County": "禹城市",
        "Days": 398,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 100,
        "Name": "店东屯村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 117121.4,
        "MonthkWh": 0,
        "YearkWh": 830.5999999999913,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 371,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 101,
        "Name": "北八戈庄村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 539.160000000003,
        "TotalkWh": 185967.24,
        "MonthkWh": 6732.040000000035,
        "YearkWh": 34213.51999999999,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 371,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 102,
        "Name": "天幕城93.8kw分布式项目",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 52844.1,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.0938,
        "Province": "山东",
        "City": "青岛市",
        "County": "市北区",
        "Days": 368,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 103,
        "Name": "大埠村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 126660.84,
        "MonthkWh": 0,
        "YearkWh": 728.5999999999913,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 365,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 104,
        "Name": "新民村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 61845.76,
        "MonthkWh": 0,
        "YearkWh": 2126.560000000005,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 365,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 105,
        "Name": "槐树沟村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 147563.96,
        "MonthkWh": 5857.1600000000035,
        "YearkWh": 39569.23999999999,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 358,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 106,
        "Name": "郭家屋子",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 631.279999999999,
        "TotalkWh": 194536.52,
        "MonthkWh": 7819.5200000000195,
        "YearkWh": 40667.47999999998,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 356,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 107,
        "Name": " 南邱家白庙村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 83508.88,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 354,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 124,
        "Name": "即墨扶贫项目-07-丰城镇-刁家大丈村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 53395.68,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 281,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 125,
        "Name": "山东巨野一期30MW大棚项目",
        "Lat": 35.34789,
        "Lng": 116.19818,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7826539279802901,
        "kWh": 177241.333007801,
        "TotalkWh": 24512880.6152344,
        "MonthkWh": 2127301.333007801,
        "YearkWh": 10752840.615234401,
        "InstalledCapacity": 30,
        "Province": "山东",
        "City": "菏泽市",
        "County": "巨野县",
        "Days": 262,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 127,
        "Name": "山东巨野二期30MW大棚项目",
        "Lat": 35.269948,
        "Lng": 115.997912,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8181803235523427,
        "kWh": 171600,
        "TotalkWh": 21722800,
        "MonthkWh": 2052600,
        "YearkWh": 10472000,
        "InstalledCapacity": 29.5,
        "Province": "山东",
        "City": "菏泽市",
        "County": "巨野县",
        "Days": 242,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 133,
        "Name": "德州武城代官耀盛100MW",
        "Lat": null,
        "Lng": null,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8702744694927316,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 4547400,
        "YearkWh": 22240350,
        "InstalledCapacity": 70,
        "Province": "山东",
        "City": "德州市",
        "County": "武城县",
        "Days": 260,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 134,
        "Name": "兆龙门窗",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 143955.1,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.11,
        "Province": "山东",
        "City": "青岛市",
        "County": "即墨市",
        "Days": 259,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 135,
        "Name": "山东菏泽金正大乐叶6MW项目",
        "Lat": 35,
        "Lng": 115,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.8079030928770371,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 351840,
        "YearkWh": 1903080,
        "InstalledCapacity": 6.45,
        "Province": "山东",
        "City": "菏泽市",
        "County": "牡丹区",
        "Days": 463,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 136,
        "Name": "山东菏泽樱花乐叶4MW项目",
        "Lat": 35,
        "Lng": 115,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.7646631429103843,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 248570,
        "YearkWh": 1325460,
        "InstalledCapacity": 4.33,
        "Province": "山东",
        "City": "菏泽市",
        "County": "牡丹区",
        "Days": 292,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 137,
        "Name": "山东菏泽郓城乐叶10MW项目",
        "Lat": 35.576115,
        "Lng": 115.994036,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.8387584785774327,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 479920,
        "YearkWh": 2292106,
        "InstalledCapacity": 9.152,
        "Province": "山东",
        "City": "菏泽市",
        "County": "郓城县",
        "Days": 300,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 148,
        "Name": "胶南宝山镇中山前村",
        "Lat": null,
        "Lng": null,
        "Type": 5,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 2020.046,
        "MonthkWh": 0,
        "YearkWh": 2020.046,
        "InstalledCapacity": 0.12,
        "Province": "山东",
        "City": "青岛市",
        "County": "胶南市",
        "Days": 106,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 151,
        "Name": "山东日照新东港30MW项目",
        "Lat": 35.28,
        "Lng": 119.3,
        "Type": 5,
        "Status": 1,
        "Ratio": 0.8480160887037576,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 2079000,
        "YearkWh": 11107800,
        "InstalledCapacity": 29.62872,
        "Province": "山东",
        "City": "日照市",
        "County": "东港区",
        "Days": 105,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 154,
        "Name": "山东寿光国电投4.3MW项目",
        "Lat": 37.057,
        "Lng": 119.064,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 235260,
        "YearkWh": 910220,
        "InstalledCapacity": 4.2445,
        "Province": "山东",
        "City": "潍坊市",
        "County": "寿光市",
        "Days": 108,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 156,
        "Name": "山东临朐国电投3.88MW项目",
        "Lat": 36.5232,
        "Lng": 118.528,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 219780,
        "YearkWh": 548040,
        "InstalledCapacity": 3.8766,
        "Province": "山东",
        "City": "潍坊市",
        "County": "临朐县",
        "Days": 76,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 158,
        "Name": "开源热电滨河热力",
        "Lat": null,
        "Lng": null,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.1994,
        "Province": "山东",
        "City": "青岛市",
        "County": "平度市",
        "Days": 112,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 163,
        "Name": "山东沂南国电投3.25MW项目",
        "Lat": 35.524,
        "Lng": 118.432,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 169920,
        "YearkWh": 136800,
        "InstalledCapacity": 3.24324,
        "Province": "山东",
        "City": "临沂市",
        "County": "沂南县",
        "Days": 110,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 164,
        "Name": "山东莱州国电投3.5MW项目",
        "Lat": 37.11,
        "Lng": 119.76,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 167850,
        "YearkWh": 142000,
        "InstalledCapacity": 3.5275,
        "Province": "山东",
        "City": "烟台市",
        "County": "莱州市",
        "Days": 90,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 165,
        "Name": "山东郯城国电投7MW项目",
        "Lat": 34.885,
        "Lng": 118.404,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.1,
        "Province": "山东",
        "City": "临沂市",
        "County": "郯城县",
        "Days": 15,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      }
    ];
    var northData=[
      {
        "Id": 80,
        "Name": "大庆长元10MW",
        "Lat": 46,
        "Lng": 124,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.8215566044302425,
        "kWh": 32900,
        "TotalkWh": 16423960,
        "MonthkWh": 755440,
        "YearkWh": 4645760,
        "InstalledCapacity": 10.0386,
        "Province": "黑龙江",
        "City": "大庆市",
        "County": "红岗区",
        "Days": 472,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 130,
        "Name": "黑龙江大庆隆基80MW项目",
        "Lat": 45.52,
        "Lng": 124.43,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.8225112044290868,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 6507600,
        "YearkWh": 44576400,
        "InstalledCapacity": 91.11608,
        "Province": "黑龙江",
        "City": "大庆市",
        "County": "大同区",
        "Days": 293,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 33,
        "Name": "四平伊通一期20MW",
        "Lat": 43.369999,
        "Lng": 125.288888,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8535956821722349,
        "kWh": 82599.4873046018,
        "TotalkWh": 38298398.5900879,
        "MonthkWh": 1334256.4873046018,
        "YearkWh": 7147012.590087898,
        "InstalledCapacity": 20,
        "Province": "吉林",
        "City": "四平市",
        "County": "伊通满族自治县",
        "Days": 656,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 34,
        "Name": "辽源东丰20MW",
        "Lat": 42.683054,
        "Lng": 125.535277,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8341009452579282,
        "kWh": 65047.5,
        "TotalkWh": 20759854.5,
        "MonthkWh": 1451957.5,
        "YearkWh": 0,
        "InstalledCapacity": 22.0406,
        "Province": "吉林",
        "City": "辽源市",
        "County": "东丰县",
        "Days": 656,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 119,
        "Name": "吉林大安50MW",
        "Lat": 451658,
        "Lng": 1235325,
        "Type": 4,
        "Status": 1,
        "Ratio": 0.8116831229659948,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 3101376,
        "YearkWh": 20562876,
        "InstalledCapacity": 44.6,
        "Province": "吉林",
        "City": "白城市",
        "County": "大安市",
        "Days": 292,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 10
      },
      {
        "Id": 71,
        "Name": "大连医科大学路灯",
        "Lat": 38.811918,
        "Lng": 121.32187,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 284.600000000006,
        "TotalkWh": 152164.24,
        "MonthkWh": 3843.2799999999706,
        "YearkWh": 21311.359999999986,
        "InstalledCapacity": 0.08007,
        "Province": "辽宁",
        "City": "大连市",
        "County": "旅顺口区",
        "Days": 581,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 72,
        "Name": "辽宁台安10MW",
        "Lat": 41.309076,
        "Lng": 122.534987,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8623748302769061,
        "kWh": 57024.0966796987,
        "TotalkWh": 20582100,
        "MonthkWh": 710819.274902299,
        "YearkWh": 3850703.6132811997,
        "InstalledCapacity": 10.02456,
        "Province": "辽宁",
        "City": "鞍山市",
        "County": "台安县",
        "Days": 564,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 120,
        "Name": "辽宁阜蒙20MW",
        "Lat": 42,
        "Lng": 122,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8676861097380014,
        "kWh": 89100,
        "TotalkWh": 9981180,
        "MonthkWh": 1116000,
        "YearkWh": 7677120,
        "InstalledCapacity": 19.1,
        "Province": "辽宁",
        "City": "阜新市",
        "County": "阜新蒙古族自治县",
        "Days": 291,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 146,
        "Name": "辽宁锦州义县顺宇20MW项目",
        "Lat": 41.405,
        "Lng": 121.045,
        "Type": 2,
        "Status": 2,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0,
        "Province": "辽宁",
        "City": "锦州市",
        "County": "义县",
        "Days": 137,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 5
      },
      {
        "Id": 147,
        "Name": "辽宁鞍山海城顺宇20MW项目",
        "Lat": null,
        "Lng": null,
        "Type": 2,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 0.1,
        "Province": "辽宁",
        "City": null,
        "County": null,
        "Days": 137,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 149,
        "Name": "辽宁岫岩22MW",
        "Lat": 40.325266,
        "Lng": 123.28144,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8041648100552411,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 988812,
        "YearkWh": 5818560,
        "InstalledCapacity": 17.96,
        "Province": "辽宁",
        "City": "鞍山市",
        "County": "岫岩满族自治县",
        "Days": 109,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 28,
        "Name": "巴彦淖尔鑫盛30MW",
        "Lat": 40.336944,
        "Lng": 107.015,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8645511157286002,
        "kWh": 158128.90625,
        "TotalkWh": 64700468.75,
        "MonthkWh": 2707327.5,
        "YearkWh": 12007539.0625,
        "InstalledCapacity": 30.031585,
        "Province": "内蒙古",
        "City": "巴彦淖尔市",
        "County": "磴口县",
        "Days": 746,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 36,
        "Name": "乌海海南区30MW",
        "Lat": 39.6575,
        "Lng": 106.803611,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8479728777335831,
        "kWh": 166940,
        "TotalkWh": 61906300,
        "MonthkWh": 2629490,
        "YearkWh": 13426610,
        "InstalledCapacity": 30.043335,
        "Province": "内蒙古",
        "City": "乌海市",
        "County": "海南区",
        "Days": 658,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 62,
        "Name": "乌兰察布鑫盛一期20MW",
        "Lat": 41.313151,
        "Lng": 113.850892,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7612802479038565,
        "kWh": 117780,
        "TotalkWh": 68022180,
        "MonthkWh": 1592860,
        "YearkWh": 9294760,
        "InstalledCapacity": 20.028,
        "Province": "内蒙古",
        "City": "乌兰察布市",
        "County": "商都县",
        "Days": 807,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 64,
        "Name": "内蒙古鑫盛20MW",
        "Lat": 41.002028,
        "Lng": 111.986593,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8493993989308826,
        "kWh": 118870,
        "TotalkWh": 61924220,
        "MonthkWh": 1723220,
        "YearkWh": 8887870,
        "InstalledCapacity": 20.1723,
        "Province": "内蒙古",
        "City": "呼和浩特市",
        "County": "新城区",
        "Days": 750,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 122,
        "Name": "甘肃酒泉瓜州8MW",
        "Lat": 40,
        "Lng": 95,
        "Type": 3,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 2.54,
        "Province": "甘肃",
        "City": "酒泉市",
        "County": "瓜州县",
        "Days": 291,
        "HasAnnouncements": true,
        "Announcements": [
          {
            "Msg": "七月一日下午接地调电话，令全站停电，具体并网发电日期另行通知",
            "Time": "2017年07月01日"
          }
        ],
        "icon": 9
      }
    ];
    var centerData=[
      {
        "Id": 67,
        "Name": "石家庄藁城50MW",
        "Lat": null,
        "Lng": null,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8044499352026392,
        "kWh": 250789.794922009,
        "TotalkWh": 116221593.017578,
        "MonthkWh": 3401191.406249999,
        "YearkWh": 15492396.240234002,
        "InstalledCapacity": 50,
        "Province": "河北",
        "City": "石家庄市",
        "County": "藁城市",
        "Days": 665,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 70,
        "Name": "河北阳原30MW",
        "Lat": 40.13,
        "Lng": 114.34,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.791166654866662,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 2143986.4000000004,
        "YearkWh": 12593649.79999999,
        "InstalledCapacity": 30.02,
        "Province": "河北",
        "City": "张家口市",
        "County": "阳原县",
        "Days": 594,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 128,
        "Name": "河北蔚县首奥70MW项目",
        "Lat": 39,
        "Lng": 114,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.9835181581876418,
        "kWh": 678484,
        "TotalkWh": 0,
        "MonthkWh": 5622324,
        "YearkWh": 29240634,
        "InstalledCapacity": 63.20259,
        "Province": "河北",
        "City": "张家口市",
        "County": "蔚县",
        "Days": 319,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 129,
        "Name": "河北保定涞源首奥20MW项目",
        "Lat": 39,
        "Lng": 114,
        "Type": 5,
        "Status": 1,
        "Ratio": 0.6754780777704796,
        "kWh": 84560,
        "TotalkWh": 0,
        "MonthkWh": 1403080,
        "YearkWh": 0,
        "InstalledCapacity": 19.57295,
        "Province": "河北",
        "City": "保定市",
        "County": "涞源县",
        "Days": 291,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 139,
        "Name": "河北沧州污水厂建投2MW项目",
        "Lat": 38.3,
        "Lng": 116.83,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.7423220970646727,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 56707,
        "YearkWh": 275130,
        "InstalledCapacity": 1.21176,
        "Province": "河北",
        "City": "沧州市",
        "County": "新华区",
        "Days": 308,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 140,
        "Name": "河北沧州欧亚管业乐叶6MW项目",
        "Lat": 38.16,
        "Lng": 117.48,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.7150028329992262,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 265200,
        "YearkWh": 1168240,
        "InstalledCapacity": 5.55632,
        "Province": "河北",
        "City": "沧州市",
        "County": "黄骅市",
        "Days": 343,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 141,
        "Name": "河北衡水阜城澳泰制冷建投5MW项目",
        "Lat": 37.46,
        "Lng": 116.4,
        "Type": 1,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 263700,
        "YearkWh": 1188960,
        "InstalledCapacity": 4.97,
        "Province": "河北",
        "City": "衡水市",
        "County": "阜城县",
        "Days": 296,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 142,
        "Name": "河北石家庄亚洁能5.5MW项目",
        "Lat": 38.03,
        "Lng": 114.83,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.7232853814749949,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 258730.61000000002,
        "YearkWh": 0,
        "InstalledCapacity": 5.5536,
        "Province": "河北",
        "City": "石家庄市",
        "County": "藁城市",
        "Days": 385,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 152,
        "Name": "石家庄灵寿30MW",
        "Lat": null,
        "Lng": null,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.7657959375620602,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 96600,
        "YearkWh": 753060,
        "InstalledCapacity": 2.38,
        "Province": "河北",
        "City": "石家庄市",
        "County": "灵寿县",
        "Days": 108,
        "HasAnnouncements": true,
        "Announcements": [
          {
            "Msg": "因未取得电力发电业务许可证，省调要求全站光伏阵列停运。",
            "Time": "2018年04月09日"
          }
        ],
        "icon": 6
      },
      {
        "Id": 155,
        "Name": "河北邢台创世辉腾20MW项目",
        "Lat": null,
        "Lng": null,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.8114369434308703,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 1444800,
        "YearkWh": 7079680,
        "InstalledCapacity": 20.58804,
        "Province": "河北",
        "City": "邢台市",
        "County": "邢台县",
        "Days": 88,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 157,
        "Name": "河北定州中科中电12MW项目",
        "Lat": 38.5443588256,
        "Lng": 114.9152676829,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.852810716696675,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 820640,
        "YearkWh": 820640,
        "InstalledCapacity": 12.14366,
        "Province": "河北",
        "City": null,
        "County": null,
        "Days": 78,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 27,
        "Name": "天津西青一期20MW",
        "Lat": 39.04861,
        "Lng": 117.12111,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8591735792659543,
        "kWh": 0,
        "TotalkWh": 13728610.6109619,
        "MonthkWh": 1291430,
        "YearkWh": 0,
        "InstalledCapacity": 20,
        "Province": "天津",
        "City": "天津市",
        "County": "西青区",
        "Days": 657,
        "HasAnnouncements": true,
        "Announcements": [
          {
            "Msg": "接调度令：电站数据暂时不允许经互联网实时转出；恢复时间待定",
            "Time": "2017年08月07日"
          }
        ],
        "icon": 9
      },
      {
        "Id": 38,
        "Name": "亳州谯城40MW",
        "Lat": 33.844166,
        "Lng": 115.806111,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8565701609004119,
        "kWh": 220076.171875,
        "TotalkWh": 85957197.265625,
        "MonthkWh": 2727197.265625,
        "YearkWh": 12110000,
        "InstalledCapacity": 40,
        "Province": "安徽",
        "City": "亳州市",
        "County": "谯城区",
        "Days": 716,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 39,
        "Name": "合肥庐江20MW",
        "Lat": 31.264444,
        "Lng": 117.297777,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8508129928483327,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 1270080,
        "YearkWh": 5857880,
        "InstalledCapacity": 20,
        "Province": "安徽",
        "City": "合肥市",
        "County": null,
        "Days": 802,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 114,
        "Name": "安徽蚌埠固镇爱康40MW项目",
        "Lat": 33.389554,
        "Lng": 117.231948,
        "Type": 4,
        "Status": 1,
        "Ratio": 0.8753790568480037,
        "kWh": 230720,
        "TotalkWh": 0,
        "MonthkWh": 2941120,
        "YearkWh": 14229038,
        "InstalledCapacity": 40.9,
        "Province": "安徽",
        "City": "蚌埠市",
        "County": "固镇县",
        "Days": 339,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 10
      },
      {
        "Id": 117,
        "Name": "安徽蒙城40MW",
        "Lat": 33.305935,
        "Lng": 116.569449,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8290900817234982,
        "kWh": 213359.863281302,
        "TotalkWh": 34395761.2304688,
        "MonthkWh": 2703121.093750004,
        "YearkWh": 11151391.230468802,
        "InstalledCapacity": 40,
        "Province": "安徽",
        "City": "亳州市",
        "County": "蒙城县",
        "Days": 308,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 162,
        "Name": "安徽五马分布式11.37MW",
        "Lat": null,
        "Lng": null,
        "Type": 0,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 757800,
        "YearkWh": 0,
        "InstalledCapacity": 11.37,
        "Province": "安徽",
        "City": "亳州市",
        "County": "谯城区",
        "Days": 339,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 12,
        "Name": "榆林市府谷30MW项目",
        "Lat": null,
        "Lng": null,
        "Type": 3,
        "Status": 2,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 0,
        "YearkWh": 0,
        "InstalledCapacity": 20,
        "Province": "陕西",
        "City": "榆林市",
        "County": "府谷县",
        "Days": 594,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 8
      },
      {
        "Id": 35,
        "Name": "渭南澄城一期20MW",
        "Lat": 35.197777,
        "Lng": 109.939444,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8611144974539727,
        "kWh": 0,
        "TotalkWh": 21840630,
        "MonthkWh": 1494010,
        "YearkWh": 0,
        "InstalledCapacity": 20.01452,
        "Province": "陕西",
        "City": "渭南市",
        "County": "澄城县",
        "Days": 753,
        "HasAnnouncements": true,
        "Announcements": [
          {
            "Msg": "站内数据停传，需厂家调试完光伏区数据后，许继一起处理所有数据传输问题，时间待定。",
            "Time": "2017年09月21日"
          },
          {
            "Msg": "澄城电站气象站辐照仪所采集辐照量有偏差，造成站内发电效率异常，持续观察跟进中。待厂家进一步处理。",
            "Time": "2018年02月14日"
          }
        ],
        "icon": 9
      },
      {
        "Id": 43,
        "Name": "合阳桂花一期、二期",
        "Lat": 35.081388,
        "Lng": 110.047221,
        "Type": 2,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 260541600,
        "MonthkWh": 0,
        "YearkWh": 492800,
        "InstalledCapacity": 104.36505,
        "Province": "陕西",
        "City": "渭南市",
        "County": "合阳县",
        "Days": 934,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 65,
        "Name": "合阳桂花三期",
        "Lat": 35.081388,
        "Lng": 110.047221,
        "Type": 2,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 21001200,
        "MonthkWh": 0,
        "YearkWh": 105600,
        "InstalledCapacity": 21.58793,
        "Province": "陕西",
        "City": "渭南市",
        "County": "合阳县",
        "Days": 399,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 89,
        "Name": "陕西麟游一期20MW",
        "Lat": 34.75,
        "Lng": 107.86,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8470486148431411,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 1536640,
        "YearkWh": 7149240,
        "InstalledCapacity": 20.03042,
        "Province": "陕西",
        "City": "宝鸡市",
        "County": "麟游县",
        "Days": 452,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 45,
        "Name": "山西阳泉一期20MW",
        "Lat": 37.970902,
        "Lng": 113.623962,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8305968667730395,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 1496670,
        "YearkWh": 8185170,
        "InstalledCapacity": 19.63847,
        "Province": "山西",
        "City": "阳泉市",
        "County": "郊区",
        "Days": 202,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 144,
        "Name": "山西河津国昶20MW项目",
        "Lat": 35,
        "Lng": 110,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.8179545568078643,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 1323728,
        "YearkWh": 7033684,
        "InstalledCapacity": 20.026,
        "Province": "山西",
        "City": "运城市",
        "County": "河津市",
        "Days": 153,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 145,
        "Name": "山西太原国昶20MW项目",
        "Lat": 37.9743,
        "Lng": 112.5639,
        "Type": 1,
        "Status": 1,
        "Ratio": 0.5667382446137245,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 512680,
        "YearkWh": 2503480,
        "InstalledCapacity": 12,
        "Province": "山西",
        "City": "太原市",
        "County": "尖草坪区",
        "Days": 154,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      },
      {
        "Id": 44,
        "Name": "湖北仙桃一期20MW",
        "Lat": 30.232636,
        "Lng": 113.518781,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8121847067886174,
        "kWh": 102200,
        "TotalkWh": 32881800,
        "MonthkWh": 1315096,
        "YearkWh": 5630520,
        "InstalledCapacity": 20.06076,
        "Province": "湖北",
        "City": "仙桃市",
        "County": null,
        "Days": 717,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      }
    ];
    var westData=[
      {
        "Id": 22,
        "Name": "怒江兰坪一期20MW",
        "Lat": 25.826943,
        "Lng": 98.866388,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.7165547776401416,
        "kWh": 0,
        "TotalkWh": 17003000,
        "MonthkWh": 570164,
        "YearkWh": 0,
        "InstalledCapacity": 20.00616,
        "Province": "云南",
        "City": "怒江傈僳族自治州",
        "County": "兰坪白族普米族自治县",
        "Days": 656,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 121,
        "Name": "贵州贞丰30MW",
        "Lat": 25.38,
        "Lng": 105.65,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.795126646699811,
        "kWh": 163799.743652299,
        "TotalkWh": 20340600.1281738,
        "MonthkWh": 2240699.6154785003,
        "YearkWh": 9834300.384521497,
        "InstalledCapacity": 29.5,
        "Province": "贵州",
        "City": "黔西南布依族苗族自治州",
        "County": "贞丰县",
        "Days": 291,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 153,
        "Name": "贵州安龙电建30MW项目",
        "Lat": 25.1644,
        "Lng": 105.2512,
        "Type": 2,
        "Status": 1,
        "Ratio": 0.8153779432960196,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 1454040,
        "YearkWh": 7307268,
        "InstalledCapacity": 30,
        "Province": "贵州",
        "City": "黔西南布依族苗族自治州",
        "County": "安龙县",
        "Days": 89,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 4
      },
      {
        "Id": 37,
        "Name": "四川德昌一期20MW",
        "Lat": 27.413611,
        "Lng": 102.185833,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8192200731876159,
        "kWh": 92261.2304686978,
        "TotalkWh": 44052934.5703125,
        "MonthkWh": 1613192.3828125,
        "YearkWh": 8389807.6171875,
        "InstalledCapacity": 20.288,
        "Province": "四川",
        "City": "成都市",
        "County": "武侯区",
        "Days": 655,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      }
    ];
    var southData=[
      {
        "Id": 75,
        "Name": "福建政和70MW",
        "Lat": 27.434383,
        "Lng": 118.63313,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.831891952359024,
        "kWh": 303601.684570298,
        "TotalkWh": 67553000,
        "MonthkWh": 3347881.684570298,
        "YearkWh": 17458554.436230212,
        "InstalledCapacity": 60,
        "Province": "福建",
        "City": "南平市",
        "County": "政和县",
        "Days": 479,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 79,
        "Name": "福建邵武50MW",
        "Lat": 27.340327,
        "Lng": 117.492534,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.852668510292393,
        "kWh": 262199.157714903,
        "TotalkWh": 41319957.6416016,
        "MonthkWh": 2895236.269375007,
        "YearkWh": 15682317.894287102,
        "InstalledCapacity": 50,
        "Province": "福建",
        "City": "南平市",
        "County": "邵武市",
        "Days": 473,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 118,
        "Name": "福建清流15MW",
        "Lat": null,
        "Lng": null,
        "Type": 3,
        "Status": 1,
        "Ratio": 0.8315723075890207,
        "kWh": 0,
        "TotalkWh": 4707599.79248047,
        "MonthkWh": 785400,
        "YearkWh": 0,
        "InstalledCapacity": 14.58655,
        "Province": "福建",
        "City": "三明市",
        "County": "清流县",
        "Days": 294,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 7
      },
      {
        "Id": 131,
        "Name": "海南海口白沙县隆基20MW项目",
        "Lat": 19.408702,
        "Lng": 109.132001,
        "Type": 5,
        "Status": 1,
        "Ratio": 0.6723579850877065,
        "kWh": 23268,
        "TotalkWh": 0,
        "MonthkWh": 1427888,
        "YearkWh": 7886900,
        "InstalledCapacity": 21.37762,
        "Province": "海南",
        "City": "白沙黎族自治县",
        "County": null,
        "Days": 297,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 13
      },
      {
        "Id": 159,
        "Name": "海南儋州20MW",
        "Lat": null,
        "Lng": null,
        "Type": 0,
        "Status": 1,
        "Ratio": 0,
        "kWh": 0,
        "TotalkWh": 0,
        "MonthkWh": 60844,
        "YearkWh": 119532,
        "InstalledCapacity": 4.4,
        "Province": "海南",
        "City": "儋州市",
        "County": null,
        "Days": 84,
        "HasAnnouncements": false,
        "Announcements": [],
        "icon": 1
      }
    ];
    //轮播图方法变量
    var _carousel;
    var updateNow=false;
    setInterval(function(){
      //updateNow=true;
    },1800000)

    var sss=0;
    $.each(southData,function(k,item){
        sss+=item.InstalledCapacity;
    })


    createLineList('eastLineTable',eastData);

    function createLineList(ele,data){
        data.sort(function(item1,item2){
          return item2.InstalledCapacity-item1.InstalledCapacity;
        });
        var str='<table class="table table-bordered"><thead><tr><th class="text-center">电站</th><th class="text-center" style="padding-right:16px;"><img src="./images/太阳能.png" alt="" style="width:30px;padding-right:5px;margin-top:-10px;">装机</th><th class="text-center" style="padding-right:16px;"><img src="./images/发电量.png" alt="" style="width:30px;padding-right:5px;margin-top:-5px;">月发电</th></tr></thead><tbody>';

        $.each(data,function(key,item){
          if(item.MonthkWh){
            str+='<tr><td><div class="lineTableTitle">'+item.Name+'</div></td><td class="text-center">'+item.InstalledCapacity+'MW</td><td class="text-center">'+resetUnitKWh(item.MonthkWh)+'</td></tr>';
          }
        })

        str+='</tbody></table>';
        $("."+ele).html(str);

        $("."+ele).slimScroll({

        });
        $(".slimScrollDiv").height($(".centerRight1").height());
        $(".lineTable").height($(".centerRight1").height());
    }
    function resetUnitKWh(data){
      if(data<1000){
        return Math.ceil(data*10)/10+"KWh";
      }else if(data>=1000&&data<1000000){
        return Math.ceil(data/100)/10+"MWh";
      }else if(data>=1000000&&data<1000000000){
        return Math.ceil(data/100000)/10+"GWh";
      }

    }

    //page1动画效果
    page1Show();
    var creatNameHtml='';

    function page1Show(){
      setTimeout(function(){
        $(".map1").show();
        creatNameHtml=$(".creatName").html();
        $(".creatName").html(creatNameHtml+'<span class="nameN nameItem">北线</span>');
        $(".nameN").animate({fontSize:'36px'},300);
        $(".nameN").css({'color':'yellow'});
      },2000);
      setTimeout(function(){
        $(".map2").show();
        creatNameHtml=$(".creatName").html();
        $(".creatName").html(creatNameHtml+'+<span class="nameC nameItem">中线</span>');
        $(".nameN").animate({fontSize:'28px'},300);
        $(".nameN").css({'color':'white'});
        $(".nameC").animate({'fontSize':'36px'},300);
        $(".nameC").css({'color':'yellow'});

      },4000);
      setTimeout(function(){
        $(".map3").show();
        creatNameHtml=$(".creatName").html();
        $(".creatName").html(creatNameHtml+'+<span class="nameE nameItem">东线</span>');
        $(".nameC").animate({fontSize:'28px'},300);
        $(".nameC").css({'color':'white'});
        $(".nameE").animate({'fontSize':'36px'},300);
        $(".nameE").css({'color':'yellow'});
      },6000);
      setTimeout(function(){
        $(".map4").show();
        creatNameHtml=$(".creatName").html();
        $(".creatName").html(creatNameHtml+'+<span class="nameW nameItem">西线</span>');
        $(".nameE").animate({fontSize:'28px'},300);
        $(".nameE").css({'color':'white'});
        $(".nameW").animate({'fontSize':'36px'},300);
        $(".nameW").css({'color':'yellow'});
      },8000);
      setTimeout(function(){
        $(".map5").show();
        creatNameHtml=$(".creatName").html();
        $(".creatName").html(creatNameHtml+'+<span class="nameS nameItem">南线</span>');
        $(".nameW").animate({fontSize:'28px'},300);
        $(".nameW").css({'color':'white'});
        $(".nameS").animate({'fontSize':'36px'},300);
        $(".nameS").css({'color':'yellow'});
      },10000);
      setTimeout(function(){
        $(".firstPage").animate({
          opacity:'0'
        },2000);
        $(".secondPage").animate({
          opacity:'1'
        },2000);

        defaultAnalyze();
        convergenceBoxDiscreteRate();
        demonstration('demonstration1','demonstration2',datacategories,datalossradio,dataFitValue,dataMicroKWDayPower,dataComDeviceHealth,dataDeviceHealth);

        page2Show();
      },12800);
      setTimeout(function(){
        $(".creatName").html("");
        $(".map1").hide();
        $(".map2").hide();
        $(".map3").hide();
        $(".map4").hide();
        $(".map5").hide();
      },14000);
    }

    // page2各支线轮播

    //page2Show();
    var now1=true;

    function page2Show(){
      var cou=0;
      var playTime=5000;
      var showcase = $("#showcase")
      var subMapName=["eastMap","northMap","centerMap","westMap","southMap"];
      var subLineName=["eastLine","northLine","centerLine","westLine","southLine"];
      var sloganName=["eSlogan","nSlogan","cSlogan","wSlogan","sSlogan"];
      var subMapIntru=["map222","map555","map111","map333","map444"];
      $(".bottomCircleContainer").height($(".bottomCircleContainer").width());

      showcase.Cloud9Carousel( {
        autoPlay:true,
        autoPlayDelay:playTime,
        farScale:0.3,
        yOrigin: 60,
        xRadius: 730,
        yRadius: 100,
        smooth:true,
        itemClass: "card",
        buttonLeft: $(".nav.left"),
        buttonRight: $(".nav.right"),
        bringToFront: false,
        onRendered: rendered,
        onLoaded: function() {
          showcase.css( 'visibility', 'visible' )
          showcase.css( 'display', 'none' )
          showcase.fadeIn();
          var indexFront1=0,indexFront2=0;
          $("."+subMapName[indexFront1]).removeClass("zoomOutDown");
          $("."+subMapName[indexFront1]).addClass("zoomInUp");
        }
      })

      var changeRendered=true;

      function rendered( carousel ) {

        //var item =  carousel.nearestItem();
        var it_near = carousel.nearestIndex();
        //var len = carousel.items.length;
        if(changeRendered){
            _carousel=carousel;
            changeRendered=false;
            it_near = carousel.nearestIndex();
            $(".showSubMap img.submap").removeClass("zoomInUp");
            $(".showSubMap img.submap").addClass("zoomOutDown");
            $(".slogan div").hide();
            $(".line").hide();
            $(".map000").hide();

            setTimeout(function(){
              it_near = carousel.nearestIndex();
              // console.log(it_near);
              //console.log(it_near);

              // $(".slogan div").removeClass("bounceOutDown");
              $("."+sloganName[it_near]+' div').show();
              $("."+subMapName[it_near]).removeClass("zoomOutDown");
              $("."+subMapName[it_near]).addClass("zoomInUp");
              $("."+subLineName[it_near]).show();
              setTimeout(function(){
                $("."+subMapIntru[it_near]).show();
              },500);
            },200);

            // cou++;
            // if(cou==5){
            //   setTimeout(function(){
            //     $(".firstPage").animate({
            //       opacity:'1'
            //     },2000);
            //     $(".secondPage").animate({
            //       opacity:'0'
            //     },2000);
            //     page1Show();
            //     _carousel.deactivate();
            //   },3500);
            // }

        }

        if(it_near==1&&now1){
          now1=false;
          setTimeout(function(){
            $(".firstPage").animate({
              opacity:'1'
            },2000);
            $(".secondPage").animate({
              opacity:'0'
            },2000);
            page1Show();
            if(updateNow){
              setTimeout(function(){
                window.location.href='index2.html';
                updateNow=false;
              },1800);
            }
            _carousel.deactivate();
            now1=true;
          },3500);
        }else{
          setTimeout(function(){
            changeRendered=true;
          },1500)
        }



      }

    }


    $('.nav').click( function( e ) {
      var b = $(e.target).addClass( 'down' )
      setTimeout( function() { b.removeClass( 'down' ) }, 80 )
    } )

    // drawFrame("left1",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);
    // drawFrame("left2",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);
    // drawFrame("left3",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);
    //
    // drawFrame("right1",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);
    // drawFrame("right2",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);
    // drawFrame("right3",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);
    // drawFrame("center1",x=8,y=8,x1=12,y1=8,hl1=0.25,hl2=0.25,hr1=0.2,hr2=0.3,vb1=0.35,vb2=0.25);

    // drawTop(str="top1",x=10,y=5,line_w=5);

    //stationEfficient();



    // 电站清洁健康度拟合值汇总
    var datacategories= [  "04-22", "04-23", "04-24", "04-25", "04-26", "04-27","04-28","04-29"]
    var datalossradio= [ 0.036618, 0.03528, 0.03528, 0.03528, 0.036553, 0.037403, 0.037403,0.038375 ]
    var dataFitValue= [  0.963382, 0.96472, 0.96472, 0.96472, 0.963447, 0.962597, 0.962597,0.961625 ]

    var dataMicroKWDayPower=[4540.280231,4401.081083,5338.921528,5857.635867,5400.6895,6677.444742,5765.395317,3568.769725];
    var dataComDeviceHealth=[84.89,84.99,84.48,87.65,85.71,85.41,84.92,84.89];
    var dataDeviceHealth=[97.72,97.99,96.54,98.48,98.47,98.47,98.38,97.72];

    defaultAnalyze();
    left3Swiper();
    forecast();
    health();
    mwKWh();
    cleanEarnings();
    convergenceBoxDiscreteRate();
    demonstration('demonstration1','demonstration2',datacategories,datalossradio,dataFitValue,dataMicroKWDayPower,dataComDeviceHealth,dataDeviceHealth);


    //
    // setInterval(function(){
    //   defaultAnalyze();
    //   forecast();
    //   health();
    //   mwKWh();
    //   cleanEarnings();
    //   convergenceBoxDiscreteRate();
    //   demonstration('demonstration1','demonstration2',datacategories,datalossradio,dataFitValue,dataMicroKWDayPower,dataComDeviceHealth,dataDeviceHealth);
    // },5000);



// -------------3D标签云------------------->
    var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
    paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
    RADIUS =300,
    fallLength = 500,
    tags=[],
    angleX = Math.PI/500,
    angleY = Math.PI/500,
    CX = paper.offsetWidth/2,
    CY = paper.offsetHeight/2,
    EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
    EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

    function getClass(className){
        var ele = document.getElementsByTagName("*");
        var classEle = [];
        for(var i=0;i<ele.length;i++){
            var cn = ele[i].className;
            if(cn === className){
                classEle.push(ele[i]);
            }
        }
        return classEle;
    }
    var colorRange=['#01FFFF','#006600','#009900','#0000FE','#0166FF','#0099FF','#99CC01','#99CDFF','#6766FF'];
    function innit(){
        for(var i=0;i<tagEle.length;i++){
            var a , b;
            var k = (2*(i+1)-1)/tagEle.length - 1;
            var a = Math.acos(k);
            var b = a*Math.sqrt(tagEle.length*Math.PI);
            // var a = Math.random()*2*Math.PI;
            // var b = Math.random()*2*Math.PI;
            var x = RADIUS * Math.sin(a) * Math.cos(b);
            var y = RADIUS * Math.sin(a) * Math.sin(b);
            var z = RADIUS * Math.cos(a);
            var t = new tag(tagEle[i] , x , y , z);
            // tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
            tagEle[i].style.color =colorRange[i];
            tags.push(t);
            t.move();
        }
    }

    Array.prototype.forEach = function(callback){
        for(var i=0;i<this.length;i++){
            callback.call(this[i]);
        }
    }

    function animate(){
        setInterval(function(){
            rotateX();
            rotateY();
            tags.forEach(function(){
                this.move();
            })
        } , 17)
    }

    function rotateX(){
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        tags.forEach(function(){
            var y1 = this.y * cos - this.z * sin;
            var z1 = this.z * cos + this.y * sin;
            this.y = y1;
            this.z = z1;
        })

    }

    function rotateY(){
        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        tags.forEach(function(){
            var x1 = this.x * cos - this.z * sin;
            var z1 = this.z * cos + this.x * sin;
            this.x = x1;
            this.z = z1;
        })
    }

    var tag = function(ele , x , y , z){
        this.ele = ele;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    tag.prototype = {
        move:function(){
            var scale = fallLength/(fallLength-this.z);
            var alpha = (this.z+RADIUS)/(2*RADIUS);
            this.ele.style.fontSize = 12 * scale + "px";
            this.ele.style.opacity = alpha+0.1;
            this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
            this.ele.style.zIndex = parseInt(scale*100);
            this.ele.style.left = (this.x + CX - this.ele.offsetWidth/2)/1.2 +"px";
            this.ele.style.top = (this.y + CY - this.ele.offsetHeight/2)/1.2 +"px";
        }
    }


    // <-------------3D标签云-------------------
    //标签云
    innit();
    animate();

})


function left3Swiper(){
    var mySwiper = new Swiper ('#left3_con', {
        direction: 'horizontal',
        loop: true,
        autoplay:5000,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
        speed:800,
        // effect : 'flip',
    })
}
