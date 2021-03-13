export const getCitiesData = () => {
  const geoGpsMap = {
    "1": [125.8154, 44.2584],
    "2": [125.8154, 44.2584],
    "3": [117.1582, 36.8701],
    "4": [117.1582, 36.8701],
    "5": [103.9526, 30.7617],
    "6": [103.9526, 30.7617]
  };
  const geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891]
  };
  const d1 = {
    江苏: 10041,
    黑龙江: 4093,
    内蒙古: 1157,
    吉林: 4903,
    北京市: 2667,
    辽宁: 8331,
    河北: 23727,
    天津: 681,
    山西: 5352,
    陕西: 38,
    甘肃: 77,
    宁夏: 65,
    青海: 10,
    新疆: 193,
    四川: 309,
    重庆: 77,
    山东: 21666,
    河南: 15717,
    安徽: 15671,
    湖北: 3714,
    浙江: 3141,
    福建: 955,
    江西: 4978,
    湖南: 778,
    贵州: 33,
    云南: 149,
    广东: 1124,
    广西: 125,
    海南: 7,
    上海: 2155
  };
  const d5 = {
    江苏: 159,
    黑龙江: 5,
    内蒙古: 54,
    吉林: 10,
    北京市: 0,
    辽宁: 0,
    河北: 1679,
    天津: 1,
    山西: 2698,
    陕西: 1744,
    甘肃: 362,
    宁夏: 429,
    青海: 122,
    新疆: 731,
    四川: 3925,
    重庆: 1480,
    山东: 79,
    河南: 1017,
    安徽: 208,
    湖北: 1209,
    浙江: 1418,
    福建: 1237,
    江西: 1004,
    湖南: 1511,
    贵州: 345,
    云南: 1429,
    广东: 2242,
    广西: 2271,
    海南: 59,
    上海: 8
  };
  const colors = [
    ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
    [
      "#1DE9B6",
      "#F46E36",
      "#04B9FF",
      "#5DBD32",
      "#FFC809",
      "#FB95D5",
      "#BDA29A",
      "#6E7074",
      "#546570",
      "#C4CCD3"
    ],
    [
      "#37A2DA",
      "#67E0E3",
      "#32C5E9",
      "#9FE6B8",
      "#FFDB5C",
      "#FF9F7F",
      "#FB7293",
      "#E062AE",
      "#E690D1",
      "#E7BCF3",
      "#9D96F5",
      "#8378EA",
      "#8378EA"
    ],
    [
      "#DD6B66",
      "#759AA0",
      "#E69D87",
      "#8DC1A9",
      "#EA7E53",
      "#EEDD78",
      "#73A373",
      "#73B9BC",
      "#7289AB",
      "#91CA8C",
      "#F49F42"
    ]
  ];
  const colorIndex = 1;
  const cities = ["一组", "二组", "三组", "四组", "五组", "六组"];
  const mapData = [[], [], [], [], [], []];
  /* 柱子Y名称 */
  const categoryData = [];
  const barData = [];
  for (const key in geoCoordMap) {
    mapData[0].push({
      year: "北京",
      name: key,
      value: d1[key] / 100,
      value1: d1[key] / 100
    });
    mapData[1].push({
      year: "上海",
      name: key,
      value: d5[key],
      value1: d5[key]
    });
    mapData[2].push({
      year: "深圳",
      name: key,
      value: d1[key] / 100,
      value1: d1[key] / 100
    });
    mapData[3].push({
      year: "广州",
      name: key,
      value: d5[key],
      value1: d5[key]
    });
    mapData[4].push({
      year: "杭州",
      name: key,
      value: d1[key] / 100,
      value1: d1[key] / 100
    });
    mapData[5].push({
      year: "南京",
      name: key,
      value: d5[key],
      value1: d5[key]
    });
  }
  const convertData = function(data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  const convertToLineData = function(data, gps) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      const toCoord = geoCoordMap[dataItem.name];
      const fromCoord = gps; // 郑州
      //  var toCoord = geoGps[Math.random()*3];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem.value
          },
          {
            coord: toCoord
          }
        ]);
      }
    }
    return res;
  };
  for (let i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a, b) {
      return a.value - b.value;
    });
    barData.push([]);
    categoryData.push([]);
    for (let j = 0; j < mapData[i].length; j++) {
      barData[i].push(mapData[i][j].value1);
      categoryData[i].push(mapData[i][j].name);
    }
  }
  return {
    mapData,
    cities,
    barData,
    categoryData,
    colors,
    colorIndex,
    convertData,
    convertToLineData,
    geoGpsMap
  };
};
