<template>
  <div class="order-map" style="width: 100%;height: 100%">
    <vue-echarts :option="options" />
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import * as echarts from "echarts";
import { getCitiesData } from "@/components/OrderMap/utils";

export default {
  name: "OrderMap",
  setup() {
    const isMapInit = ref(false);
    const {
      cities,
      barData,
      categoryData,
      colors,
      colorIndex,
      convertData,
      convertToLineData,
      geoGpsMap,
      mapData
    } = getCitiesData();
    const options = computed(() => {
      if (!isMapInit.value) {
        return {};
      }
      const option = {
        backgroundColor: "#424446",
        tooltip: {
          trigger: "axis"
        },
        grid: {
          right: "5%",
          top: "15%",
          bottom: "15%",
          width: "20%"
        },
        geo: {
          map: "china",
          zoom: 1.1,
          roam: false,
          center: [113.83531246, 34.0267395887],
          emphasis: {
            itemStyle: {
              areaColor: "#389BB7",
              borderWidth: 0
            },
            label: {
              show: false
            }
          },
          itemStyle: {
            borderColor: "rgba(147,235,248,1)",
            borderWidth: 2,
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(147,235,248,0)"
                },
                {
                  offset: 1,
                  color: "rgba(147, 235,248,0.2)"
                }
              ],
              global: false
            },
            shadowColor: "rgba(128,217,248, 1)",
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10
          }
        },
        timeline: {
          axisType: "category",
          data: cities,
          autoPlay: true,
          playInterval: 5000,
          left: "10%",
          right: "5%",
          bottom: "3%",
          width: "80%",
          emphasis: {
            label: {
              color: "#ffffff"
            }
          },
          label: {
            color: "#ddd"
          },
          symbolSize: 10,
          lineStyle: {
            color: "#555"
          },
          checkpointStyle: {
            borderColor: "#777",
            borderWidth: 2
          },
          controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            color: "#666",
            borderColor: "#666"
          }
        },
        options: []
      };
      for (let i = 0; i < cities.length; i++) {
        option.options.push({
          title: [
            {
              text: "销售业绩大盘",
              subtext: "数据为示例数据",
              left: "2%",
              top: "2%",
              textStyle: {
                color: "#fff",
                fontSize: 35,
                fontWeight: 700
              }
            },
            {
              id: "statistic",
              text: `${cities[i]}销售额汇总报表`,
              left: "75%",
              top: "8%",
              textStyle: {
                color: "#fff",
                fontSize: 25
              }
            }
          ],
          xAxis: {
            type: "value",
            position: "top",
            min: 0,
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: 2,
              color: "#aaa"
            }
          },
          yAxis: {
            type: "category",
            data: categoryData[i],
            axisLine: {
              lineStyle: {
                color: "#ddd"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "#ddd"
            }
          },
          series: [
            {
              zlevel: 1,
              type: "effectScatter",
              coordinateSystem: "geo",
              data: convertData(mapData[i]),
              symbolSize: val => {
                return val[2] > 1000 ? val[2] / 100 : val[2] / 10;
              },
              rippleEffect: {
                brushType: "stroke"
              },
              emphasis: {
                scale: true
              },
              label: {
                show: true,
                position: "right",
                formatter: params => {
                  return params.data.name;
                }
              },
              itemStyle: {
                color: colors[colorIndex][i],
                shadowColor: colors[colorIndex][i],
                shadowBlur: 10
              }
            },
            {
              zlevel: 2,
              type: "lines",
              data: convertToLineData(mapData[i], geoGpsMap[i + 1]),
              effect: {
                show: true,
                period: 4,
                symbol: "arrow",
                trailLength: 0.02,
                symbolSize: 7
              },
              lineStyle: {
                color: colors[colorIndex][i],
                width: 0.1,
                opacity: 0.5,
                curveness: 0.3
              }
            },
            {
              type: "bar",
              data: barData[i],
              itemStyle: {
                color: colors[colorIndex][i]
              }
            }
          ]
        });
      }
      return option;
    });
    const registerMap = () => {
      fetch("https://zzh-demo.oss-cn-hangzhou.aliyuncs.com/datav-screen/map.json")
        .then(response => response.json())
        .then(data => {
          echarts.registerMap("china", data);
          isMapInit.value = true;
        });
    };
    onMounted(() => {
      registerMap();
    });
    return {
      options
    };
  }
};
</script>

<style scoped lang="scss">
.order-map {
  width: 100%;
  height: 100%;
  background-color: rgb(48, 48, 48);
}
</style>
