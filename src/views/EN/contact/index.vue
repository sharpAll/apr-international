<template>
  <div class="block">
    <el-divider>
      <div class="title">Contact Us</div>
      <div class="title-1">Asia Plus Research（APR）</div>
    </el-divider>
    <div class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Contact Information</div>
          <p>
            Email: info@hswmgt.com
          </p>
          <br />
          <p>
            Office address: Bangkok, Hong Kong, London
          </p>
        </div>
        <div style="width:600px;position:absolute;left:0;top:0">
          <img width="600px" src="../../../assets/img/contact/contact.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
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
  font-size: 24px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 30px;
}
.bg-box .title::after {
  content: "";
  display: block;
  width: 3px;
  height: 24px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .bg-content {
  margin-right: 600px;
  padding: 50px 120px 0;
  height: 400px;
}
.bg-box .bg-content.right {
  margin-right: 0;
  margin-left: 600px;
}
.bg-box .bg-content p {
  line-height: 28px;
  color: #888;
  font-size: 18px;
}
</style>
