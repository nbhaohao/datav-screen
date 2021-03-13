<template>
  <div style="width: 500px;height: 400px;">
    <base-scroll-list :config="config" />
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Test",
  setup() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push([
        "同学" + (i + 1),
        Math.floor(Math.random() * 10 + 20),
        Math.floor(Math.random() * 10000 + 10000)
      ]);
    }
    const config = reactive({
      headerBg: "rgb(82, 82,82)",
      headerHeight: 40,
      headerIndex: true,
      header: ["姓名", "年龄", "月薪"],
      headerStyle: [{ width: "100px" }],
      rowStyle: [{ color: "blue" }],
      rowBg: ["rgb(40,40,40)", "rgb(55,55,55)"],
      data,
      rowNum: 10,
      aligns: ["center", "center", "center"],
      headerFontSize: 24,
      rowFontSize: 20
    });
    return {
      config
    };
  }
};
</script>

<style scoped lang="scss"></style>
