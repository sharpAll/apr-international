<template>
  <div class="block">
    <el-divider>
      <div class="title">工业制造</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-1">
        <div class="trade-info">
          <span>化工&材料</span>
          <span>能源</span>
          <span>汽车</span>
          <span>自动化装备</span>
          <span>轨道交通</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">大健康</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-2">
        <div class="trade-info">
          <span>制药</span>
          <span>医疗器械</span>
          <span>医疗服务</span>
          <span>临床医学</span>
          <span>大健康项目投资</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">法律</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-3">
        <div class="trade-info">
          <span>争议解决</span>
          <span>知识产权</span>
          <span>风投/私募</span>
          <span>并购/重组</span>
          <span>劳动法</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">科技、媒体和通信</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-4">
        <div class="trade-info">
          <span>移动互联网+</span>
          <span>电商</span>
          <span>物联网</span>
          <span>游戏</span>
          <span>互联网金融</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">金融</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-5">
        <div class="trade-info">
          <span>银行</span>
          <span>租赁</span>
          <span>保险</span>
          <span>金融科技</span>
          <span>基金证券</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">企业职能</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-6">
        <div class="trade-info">
          <span>人事</span>
          <span>法务</span>
          <span>财务</span>
          <span>公关</span>
          <span>行政</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.title {
  font-size: 24px;
  color: #333;
  text-align: center;
}
.trade-bg-box {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.trade-bg-box .trade-bg {
  cursor: pointer;
  height: 200px;
}
.trade-bg-box .trade-bg.bg-1 {
  background: no-repeat url(../../../assets/img/trade/trade-1.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-2 {
  background: no-repeat url(../../../assets/img/trade/trade-2.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-3 {
  background: no-repeat url(../../../assets/img/trade/trade-3.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-4 {
  background: no-repeat url(../../../assets/img/trade/trade-4.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-5 {
  background: no-repeat url(../../../assets/img/trade/trade-5.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-6 {
  background: no-repeat url(../../../assets/img/trade/trade-6.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg .trade-info {
  width: 100%;
  height: 200px;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.1)
  );
  text-align: center;
  padding-top: 80px;
  opacity: 0;
}
.trade-bg-box .trade-bg .trade-info span {
  margin: 0 10px;
  font-size: 22px;
  color: #333;
}
.trade-bg-box .trade-bg:hover .trade-info {
  transition: opacity 0.3s linear;
  opacity: 1;
}
</style>
