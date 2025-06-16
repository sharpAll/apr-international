<template>
  <div class="block">
    <el-divider>
      <div class="title">WHO WE ARE</div>
      <div class="title-1">Career Highland International（CHI）</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Professional Talent Strategy</div>
          <p>
            Career Highland International (CHI ) is a global provider for the
            services of human resources solutions. CHI offers Senior Talent
            Search, Talent Strategy Consulting, HR Outsourcing, Talent Market
            Intelligence and Training services for multiple industries and
            across all functions. In pursuit of the persistent better and higher
            goal, CHI makes strenuous efforts to create the business model and
            strategic layout across all the fields globally.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about1.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Globally-covered Business</div>
          <p>
            Career Highland International (CHI ) is based and headquartered in
            Hong Kong, providing clients and candidates with services from the
            major political and business centers such as Beijing, Shanghai, New
            York, London, Paris, Vancouver, Brussels , etc. CHI’s research and
            services are focused on the vertical fields and classified functions
            of the businesses dedicated.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about2.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Professional Consultancy Team</div>
          <p>
            Career Highland International (CHI ) With the assistance and
            endorsement of the powerful client resources, CHI has its own
            professional consultancy team withholding a rich recruitment
            experience and stockpiled knowledge reserve.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about3.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box u-tac" style="margin-top:50px">
      <el-button
        type="primary"
        icon="el-icon-phone"
        style="padding: 15px 40px;font-size:18px"
        @click="$router.push('./aboutUs/contactUs')"
        >CONTACT US</el-button
      >
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
.title-1 {
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .title {
  font-size: 20px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 30px;
}
.bg-box .title::after {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .bg-content {
  margin-right: 500px;
  padding: 70px 120px 0;
  height: 333px;
}
.bg-box .bg-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .bg-content p {
  line-height: 28px;
  color: #888;
  font-size: 15px;
}
</style>
