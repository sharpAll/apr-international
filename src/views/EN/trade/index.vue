<template>
  <div class="block">
    <el-divider>
      <div class="title">Industrial & Manufacturing</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-1">
        <div class="trade-info">
          <span>Chemical & Material</span>
          <span>Energy</span>
          <span>Automotive</span>
          <span>Automation</span>
          <span>Rail Transport</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Healthcare</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-2">
        <div class="trade-info">
          <span>Pharmaceutical</span>
          <span>Medical Device</span>
          <span>Hospital</span>
          <span>Diagnostic</span>
          <span>Investment</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Legal</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-3">
        <div class="trade-info">
          <span>Dispute Resolution</span>
          <span>Intellectual Property</span>
          <span>VC/PE</span>
          <span>M&A</span>
          <span>Labor Law</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Technology, Media & Telecom</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-4">
        <div class="trade-info">
          <span>Mobile Internet</span>
          <span>E-Commerce</span>
          <span>IOT</span>
          <span>Game</span>
          <span>ITFIN</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Financial Service</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-5">
        <div class="trade-info">
          <span>Banking</span>
          <span>Leasing</span>
          <span>Insurance</span>
          <span>FinTech</span>
          <span>Funding</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Corporate Functions</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-6">
        <div class="trade-info">
          <span>HR</span>
          <span>Legal</span>
          <span>Finance</span>
          <span>Public Relations</span>
          <span>Administration</span>
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
