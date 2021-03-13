<template>
  <div class="home">
    <datav-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </datav-loading>
    <datav-container v-else :options="{ width: 3840, height: 2180 }">
      <div class="header">
        <top-header />
      </div>
      <div class="separator">2222</div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            />
          </div>
          <div class="left2">
            <average-age :data="ageData" :avg-age="averageAge" />
          </div>
          <div class="left3">
            <total-device :data="deviceData" />
          </div>
          <div class="left4">
            <total-gender :data="genderData" />
          </div>
          <div class="left5">
            <total-rider :data="riderData" />
          </div>
          <div class="left6">
            <hot-category :data="hotCategory" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData" />
          </div>
          <div class="right-top2">
            <transform-category
              :data="['ALL', '北京', '上海', '广州', '深圳', '杭州', '南京']"
            />
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <order-map />
              </div>
              <div class="right-left2">
                <transform-category
                  :data="['订单量', '销售额', '用户数', '退单量']"
                  :color="['rgb(178, 209, 126)', 'rgb(116, 166, 49)']"
                />
              </div>
              <div class="right-left3">
                <datav-fly-box starColor="rgb(251,253,142)">
                  <real-time-order :data="realTimeOrderData" />
                </datav-fly-box>
              </div>
              <div class="right-left4">
                <schedule-view :data="scheduleViewData" />
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sales-list :data="salesListData" />
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </datav-container>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import useScreenData from "../hooks/useScreenData";
import TopHeader from "../components/TopHeader";
import TotalUser from "../components/TotalUser";
import AverageAge from "@/components/AverageAge";
import TotalDevice from "@/components/TotalDevice";
import TotalGender from "@/components/TotalGender";
import TotalRider from "@/components/TotalRider";
import HotCategory from "@/components/HotCategory";
import CenterHeader from "@/components/CenterHeader";
import TransformCategory from "@/components/TransformCategory";
import SalesList from "@/components/SalesList";
import OrderMap from "@/components/OrderMap";
import RealTimeOrder from "@/components/RealTimeOrder";
import ScheduleView from "@/components/ScheduleView";
import SalesRank from "@/components/SalesRank";
export default {
  name: "Home",
  components: {
    SalesRank,
    ScheduleView,
    RealTimeOrder,
    OrderMap,
    SalesList,
    TransformCategory,
    CenterHeader,
    HotCategory,
    TotalRider,
    TotalGender,
    TotalDevice,
    AverageAge,
    TotalUser,
    TopHeader
  },
  setup() {
    const loading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2500);
    });

    return {
      loading,
      ...useScreenData()
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
  background-color: rgb(36, 31, 32);
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
      background-color: rgb(92, 88, 89);
    }
    .center {
      flex: 1;
      width: 100%;
      display: flex;
      .left {
        flex: 0 0 860px;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        .left1 {
          height: 300px;
          background-color: rgb(128, 128, 128);
        }
        .left2 {
          height: 320px;
          background-color: rgb(128, 128, 128);
        }
        .left3 {
          height: 280px;
          background-color: rgb(128, 128, 128);
        }
        .left4 {
          height: 230px;
          background-color: rgb(128, 128, 128);
        }
        .left5 {
          height: 360px;
          background-color: rgb(128, 128, 128);
        }
        .left6 {
          height: 360px;
          background-color: rgb(128, 128, 128);
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .right-top1 {
          width: 100%;
          height: 206px;
          background-color: rgb(128, 128, 128);
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          background-color: rgb(128, 128, 128);
          margin: 10px 0;
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
              background-color: rgb(128, 128, 128);
            }
            .right-left2 {
              height: 80px;
              background-color: rgb(128, 128, 128);
            }
            .right-left3 {
              height: 350px;
              background-color: rgb(128, 128, 128);
            }
            .right-left4 {
              height: 220px;
              background-color: rgb(128, 128, 128);
            }
          }
          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 20px;
            .right-right1 {
              width: 100%;
              height: 999px;
              background-color: rgb(128, 128, 128);
            }
            .right-right2 {
              width: 100%;
              flex: 1;
              margin-top: 20px;
              background-color: rgb(128, 128, 128);
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
