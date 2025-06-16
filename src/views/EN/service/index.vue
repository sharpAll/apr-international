<template>
  <div class="block">
    <el-divider>
      <div class="title">SERVICE CONTENTS</div>
    </el-divider>
    <div class="center-box" style="text-align:center">
      <img
        style="margin:auto"
        width="700px"
        src="../../../assets/img/service/service-1-en.png"
      />
    </div>
    <el-divider>
      <div class="title">服务流程</div>
    </el-divider>
    <div class="center-box" style="text-align:center;margin-top:40px">
      <el-steps :active="4" simple>
        <el-step
          title="Recruitment with whole process"
          icon="el-icon-edit"
        ></el-step>
        <el-step
          title="Job vacancies all fields covered"
          icon="el-icon-s-custom"
        ></el-step>
        <el-step
          title="Management of all channels"
          icon="el-icon-refresh-right"
        ></el-step>
        <el-step
          title="Control of the whole process"
          icon="el-icon-message-solid"
        ></el-step>
      </el-steps>
      <img
        style="margin:auto"
        width="900px"
        src="../../../assets/img/service/service-2-en.png"
      />
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
<style>
.center-box .el-step.is-simple:not(:last-of-type) .el-step__title {
  max-width: 80%;
}
.center-box .el-step__title.is-finish {
  color: #606ecd;
}
.center-box .el-step__head.is-finish {
  color: #606ecd;
}
.center-box .el-step.is-simple .el-step__title {
  font-size: 20px;
}
</style>
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
