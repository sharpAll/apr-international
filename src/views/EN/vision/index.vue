<template>
  <div class="block">
    <el-divider>
      <div class="title">OUR VISION</div>
    </el-divider>
    <div class="title-1">
      <p style="padding:0 40px">
        Be the most trusted and promising One-stop Human Resource and
        Recruitment Service Provider by providing our value added services and
        offering unsurpassed level of satisfaction and experience for both our
        clients and candidates.
      </p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-1.jpg"
      />
    </div>
    <el-divider>
      <div class="title">OUR MISSION</div>
    </el-divider>
    <div class="title-1">
      <p>
        Strive to be the strategic talent solution partner of our clients by
        tailoring our expertise and market insight
      </p>
      <p>
        Strive to match the best job opportunities with talented professionals
      </p>
      <p>
        Strive to build a recruitment team who is the top best and warm-hearted
      </p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-2.jpg"
      />
    </div>
    <el-divider>
      <div class="title">OUR ADVANTAGES</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box" style="height:500px">
        <div class="vision-content">
          <div class="vision-title">One-Stop Solution</div>
          <p>
            CHI prides itself as a one-stop human resource service provider with
            extensive service standard, we are able to deliver the fully
            integrated human resource solutions that will support your
            organization's development and growth strategy by our recruitment
            service, talent strategy consulting, outsourcing, talent market
            intelligence and training services.
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">Professionalism</div>
          <p>
            Most of the CHI recruiters have over 5 years of headhunting or
            industry experiences. Having gone through our internal comprehensive
            training programs and unique standard operation procedures, the CHI
            team can ensure their high-quality services. Meanwhile, most of the
            CHI 's recruiters and leaders have transitioned from their industry
            experts, thus able to pour their in-sight market expertise into
            providing the most professional support throughout the hiring
            process.
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">Specialization</div>
          <p>
            Our consultants are industry and/or industry specific, means they
            are trained to dig deeper in vertical segment and specialization in
            the industry they focus. For our candidates and clients, this will
            be translated into industry specific knowledge and ability to
            deliver our services with higher accuracy and efficiency throughout
            the hiring process.
          </p>
        </div>
        <div style="position:absolute;right:0;top:0;overflow:hidden">
          <img
            width="460px"
            height="500px"
            src="../../../assets/img/vision/vision-4.jpg"
          />
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
.title-1 {
  margin: 20px auto;
  font-size: 16px;
  color: #bbb;
  text-align: center;
}
.title-1 p {
  line-height: 25px;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .vision-title {
  font-size: 20px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 10px;
}
.bg-box .vision-title::after {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .vision-content {
  margin-right: 470px;
  padding: 20px 0px 0 20px;
  height: auto;
}
.bg-box .vision-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .vision-content p {
  line-height: 24px;
  color: #888;
  font-size: 15px;
}
</style>
