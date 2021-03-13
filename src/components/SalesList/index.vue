<template>
  <div class="sales-list">
    <base-scroll-list :config="config" />
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  name: "SalesList",
  props: {
    data: Array
  },
  setup(props) {
    const config = reactive({
      header: ["城市订单量", "店铺数", "员工数", "新店铺数量", "人均订单量"],
      headerHeight: 55,
      headerFontSize: 24,
      headerColor: "#ffffff",
      headerBg: "rgb(80, 80,80)",
      headerIndex: true,
      rowNum: 12,
      rowBg: ["rgb(40,40,40)", "rgb(55,55,55)"],
      rowFontSize: 24,
      rowColor: "#fff",
      aligns: ["center", "center", "center"]
    });
    const configWithData = computed(() => {
      const data = [];
      const headerIndexData = [];
      for (let i = 0; i < props.data.length; i++) {
        const newData = [];
        if (i % 2 === 0) {
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`;
        } else {
          headerIndexData[
            i
          ] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`;
        }
        Object.keys(props.data[i]).forEach(filed => {
          newData.push(props.data[i][filed]);
        });
        data.push(newData);
      }
      console.log("props.data", props.data);
      return {
        ...config,
        data,
        headerIndexData
      };
    });
    return {
      config: configWithData
    };
  }
};
</script>

<style scoped lang="scss">
.sales-list {
  width: 100%;
  height: 100%;
}
</style>
