<template>
  <div class="bar-chart">
    <div class="title-wrapper">
      <div class="left">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
      <div class="right">
        <div class="sub-title">最后更新时间：{{ date }} {{ time }}</div>
      </div>
    </div>
    <div id="average-age-chart3">
      <vue-echarts :option="options" />
    </div>
  </div>
</template>

<script>
import { watch, computed, ref } from "vue";
import useClock from "@/hooks/useClock";
export default {
  name: "HotCategory",
  props: {
    data: Object
  },
  setup(props) {
    const { time, date } = useClock();
    let currentChart = ref(0);
    const options = computed(() => {
      const sourceData = [];
      const { data1, data2 } = props.data;
      if (currentChart.value === 0) {
        data1.axisX.forEach((axis, index) => {
          sourceData.push([axis, data1.data1[index], data1.data2[index]]);
        });
      } else {
        data2.axisX.forEach((axis, index) => {
          sourceData.push([axis, data2.data1[index], data2.data2[index]]);
        });
      }
      const source = [["指标", "国内", "海外"], ...sourceData];
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        color: ["rgb(209,248,138)", "rgba(65,65,65,.5)"],
        grid: {
          left: 20,
          right: 0,
          bottom: 30,
          top: 20
        },
        dataset: {
          source
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dotted"
            }
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "rgb(124,136,146)"
            }
          },
          axisLabel: {
            color: "rgb(98,105,113)",
            fontSize: 16
          },
          axisTick: { show: false }
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "rgb(98,105,113)",
            fontSize: 16
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "rgb(124,136,146)"
            }
          }
        },
        series: [
          {
            type: "bar",
            stack: "total",
            barWidth: 40
          },
          {
            type: "bar",
            stack: "total"
          }
        ]
      };
    });
    const updateCurrentChart = () => {
      currentChart.value = currentChart.value === 0 ? 1 : 0;
    };
    watch(
      () => props.data,
      () => {
        updateCurrentChart();
      },
      { immediate: true }
    );
    return {
      time,
      date,
      options
    };
  }
};
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
  padding: 20px 40px;
  box-sizing: border-box;

  .title-wrapper {
    display: flex;

    .right {
      flex: 1;
      text-align: right;
    }

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  #average-age-chart3 {
    height: 220px;
  }
}
</style>
