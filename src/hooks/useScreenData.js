import { ref, onMounted, onUnmounted } from "vue";

const genderMockData = [
  { key: "male", value: 1442542 },
  { key: "female", value: 1442548 }
];

const ageMockData = [
  { startValue: 0, value: 131107, axis: "0-20", color: "rgb(116,166,49)" },
  { startValue: 0, value: 330831, axis: "20-30", color: "rgb(190,245,99)" },
  { startValue: 0, value: 551238, axis: "30-50", color: "rgb(202,252,137)" },
  { startValue: 0, value: 31088, axis: ">50", color: "rgb(251,253,142)" }
];

const riderMockData = {
  axisX: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  orderData: {
    legend1: "去年月人均",
    legend2: "今年月人均",
    data1: [
      "330",
      "420",
      "560",
      "450",
      "610",
      "890",
      "720",
      "610",
      "580",
      "750",
      "770",
      "600"
    ],
    data2: [
      "430",
      "510",
      "660",
      "550",
      "710",
      "990",
      "620",
      "550",
      "760",
      "810",
      "930",
      "720"
    ]
  },
  rateData: {
    legend1: "去年月新增",
    legend2: "今年月新增",
    data1: [
      "129",
      "223",
      "202",
      "197",
      "300",
      "112",
      "333",
      "249",
      "178",
      "322",
      "401",
      "167"
    ],
    data2: [
      "179",
      "263",
      "282",
      "297",
      "330",
      "344",
      "222",
      "299",
      "190",
      "455",
      "566",
      "233"
    ]
  }
};

const deviceMockData = {
  totalDevices: 1070909,
  devices: [
    { key: "Android", value: 423676 },
    { key: "iOS", value: 373581 },
    { key: "PC", value: 273652 }
  ]
};

const hotCategoryMockData = {
  data1: {
    axisX: [
      "粉面粥店",
      "简餐便当",
      "汉堡披萨",
      "香锅冒菜",
      "小吃炸串",
      "地方菜系",
      "轻食简餐"
    ],
    data1: [50, 29, 46, 88, 99, 69, 97],
    data2: [50, 71, 54, 12, 1, 31, 3]
  },
  data2: {
    axisX: ["草莓", "甘蔗", "榴莲", "菠萝", "香蕉", "梨", "苹果"],
    data1: [85, 4, 3, 26, 63, 31, 19],
    data2: [15, 96, 97, 74, 37, 69, 81]
  }
};

const headerMockData = {
  headerData: {
    value: [
      {
        title: "今日销售额",
        subTitle: "Today's Sales Amount",
        startVal: 40041113,
        endVal: 40105335,
        img: "topsales"
      },
      {
        title: "今日订单量",
        subTitle: "Today's Total Orders",
        startVal: 2566778,
        endVal: 2570025,
        img: "order"
      },
      {
        title: "今日交易用户数",
        subTitle: "Today's Payed Users",
        startVal: 271744,
        endVal: 272200,
        img: "usercenter"
      },
      {
        title: "今日新增用户数",
        subTitle: "Today's New Users",
        startVal: 1286552,
        endVal: 1289057,
        img: "operation"
      }
    ]
  },
  project: {
    value: [
      {
        title: "转化率",
        value: "13.16%",
        img: "https://www.youbaobao.xyz/datav-res/success.png"
      },
      {
        title: "退单率",
        value: "5.73%",
        img: "https://www.youbaobao.xyz/datav-res/failed.png"
      }
    ]
  }
};

function random(value) {
  return Math.floor(Math.random() * value);
}

export default function() {
  const todayUser = ref(12345);
  const growthLastDay = ref(10.25);
  const growthLastMonth = ref(15.15);
  const ageData = ref(ageMockData);
  const averageAge = ref(0);
  const deviceData = ref(deviceMockData);
  const genderData = ref(genderMockData);
  const riderData = ref(riderMockData);
  const hotCategory = ref(hotCategoryMockData);
  const headerData = ref(headerMockData);
  let task;
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10;
      growthLastDay.value = growthLastDay.value + 1;
      growthLastMonth.value = growthLastMonth.value + 1;
      averageAge.value = averageAge.value + 1;
      deviceData.value.totalDevices += random(100);
      deviceData.value.devices.forEach(item => {
        item.value += random(100);
      });
      const _ageData = [...ageData.value];
      _ageData.forEach(item => {
        item.startValue = item.value;
        item.value += random(100);
      });
      ageData.value = _ageData;
      genderData.value = genderData.value.map(genderItem => {
        return {
          ...genderItem,
          value: genderItem.value + random(100)
        };
      });
      ["orderData", "rateData"].forEach(key => {
        riderData.value[key].data1 = riderData.value[key].data1.map(value =>
          String(Number(value) + random(100))
        );
        riderData.value[key].data2 = riderData.value[key].data2.map(value =>
          String(Number(value) + random(100))
        );
      });
      hotCategory.value.data1.data1 = hotCategory.value.data1.data1.map(
        value => value + random(100)
      );
      hotCategory.value.data2.data1 = hotCategory.value.data2.data1.map(
        value => value + random(100)
      );
    }, 3000);
  });

  onUnmounted(() => {
    task && clearInterval(task);
  });

  return {
    genderData,
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    deviceData,
    riderData,
    hotCategory,
    headerData
  };
}
