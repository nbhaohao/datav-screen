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
      colorIndex
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
            }
          },
          itemStyle: {
            normal: {
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
          }
        },
        timeline: {
          axisType: "category",
          data: cities,
          autoPlay: true,
          playInterval: 3000,
          left: "10%",
          right: "5%",
          bottom: "3%",
          width: "80%",
          label: {
            normal: {
              textStyle: {
                color: "#ddd"
              }
            },
            emphasis: {
              textStyle: {
                color: "#ffffff"
              }
            }
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
            normal: {
              color: "#666",
              borderColor: "#666"
            }
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
              textStyle: {
                color: "#aaa"
              }
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
              textStyle: {
                color: "#ddd"
              }
            }
          },
          series: [
            {
              type: "bar",
              data: barData[i],
              itemStyle: {
                normal: {
                  color: colors[colorIndex][i]
                }
              }
            }
          ]
        });
      }
      console.log("option", option);
      return option;
    });
    const registerMap = () => {
      fetch("http://www.youbaobao.xyz/datav-res/datav/map.json")
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
