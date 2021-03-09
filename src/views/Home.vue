<template>
  <div class="home">
    <datav-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </datav-loading>
    <datav-container v-else :options="{ width: 3840, height: 2180 }">
      <div class="header">111</div>
      <div class="separator">2222</div>
      <div class="center">
        <div class="left">
          <div class="left1">333</div>
          <div class="left2">444</div>
          <div class="left3">555</div>
          <div class="left4">666</div>
          <div class="left5">777</div>
          <div class="left6">888</div>
        </div>
        <div class="right">
          <div class="right-top1">999</div>
          <div class="right-top2">000</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">111</div>
              <div class="right-left2">222</div>
              <div class="right-left3">333</div>
              <div class="right-left4">4444</div>
            </div>
            <div class="right-right">
              <div class="right-right1">5555</div>
              <div class="right-right2">66666</div>
            </div>
          </div>
        </div>
      </div>
    </datav-container>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    // const loading = ref(true);
    const loading = ref(false);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2500);
    });

    return {
      loading
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(29, 29, 29);
  color: #ffffff;
  font-size: 48px;
  #datav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .header {
      width: 100%;
      height: 167px;
      background-color: yellow;
    }
    .separator {
      width: 100%;
      height: 10px;
      background-color: #000000;
    }
    .center {
      flex: 1;
      width: 100%;
      background-color: rebeccapurple;
      display: flex;
      .left {
        flex: 0 0 860px;
        background-color: red;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        .left1 {
          height: 300px;
          background: green;
        }
        .left2 {
          height: 320px;
          background: yellow;
        }
        .left3 {
          height: 280px;
          background: blue;
        }
        .left4 {
          height: 230px;
          background: mediumaquamarine;
        }
        .left5 {
          height: 360px;
          background: pink;
        }
        .left6 {
          height: 360px;
          background: darkgoldenrod;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: blue;

        .right-top1 {
          width: 100%;
          height: 206px;
          background-color: darkgoldenrod;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          background: cadetblue;
        }
        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .right-left1 {
              height: 999px;
              background: red;
            }
            .right-left2 {
              height: 80px;
              background: yellowgreen;
            }
            .right-left3 {
              height: 350px;
              background: fuchsia;
            }
            .right-left4 {
              height: 220px;
              background-color: orangered;
            }
          }
          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            justify-content: space-between;
            .right-right1 {
              width: 100%;
              height: 999px;
              background-color: fuchsia;
            }
            .right-right2 {
              width: 100%;
              flex: 1;
              margin-top: 20px;
              background-color: cadetblue;
            }
          }
        }
      }
    }
    .loading-text {
      font-size: 20px;
      margin-top: 10px;
    }
  }
}
</style>
