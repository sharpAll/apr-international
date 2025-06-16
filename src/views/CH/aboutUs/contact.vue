<template>
  <div class="block">
    <el-divider>
      <div class="title">联系我们</div>
      <div class="title-1">
        如有任何问题，欢迎您向我们发送email寻求咨询帮助。
      </div>
    </el-divider>
    <div class="center-box">
      <div class="contact-box">
        <div class="box-item">
          <div class="icon icon-1"></div>
          <div class="info">
            <div class="info-title">企业招聘</div>
            <p>
              <span class="red"
                >olivia_kong@careerhighlandinternational.com</span
              >
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-2"></div>
          <div class="info">
            <div class="info-title">个人求职</div>
            <p>
              请发送您的简历到
              <span class="red">peter_chen@careerhighlandinternational.com</span
              >，如有合适岗位，相应的行业猎头直接与您联系
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-3"></div>
          <div class="info">
            <div class="info-title">加入我们</div>
            <p>
              如果您想加入科锐高地，请拨打
              <!-- <span class="red">+852 5986 3808 (HK)</span> 或
              <span class="red">+86 151 6718 2110 (Shanghai)</span> -->
              <span class="red">+852 5986 3808 (HK)</span>
              获取更多详细信息。
            </p>
          </div>
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
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.contact-box {
  margin: 50px auto;
  width: 660px;
}
.contact-box .box-item {
  position: relative;
  background-color: #f9f9f9;
  height: 160px;
  margin-bottom: 30px;
}
.contact-box .box-item .info {
  padding-left: 220px;
  padding-right: 50px;
}
.contact-box .box-item .info .info-title {
  padding: 40px 0 15px;
  font-size: 20px;
  color: #333;
}
.contact-box .box-item .icon {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 20px;
  left: 100px;
}
.contact-box .box-item .icon.icon-1 {
  background: url("../../../assets/img/aboutUs/icon-contact-company.png");
  background-size: cover;
}
.contact-box .box-item .icon.icon-2 {
  background: url("../../../assets/img/aboutUs/icon-contact-person.png");
  background-size: cover;
}
.contact-box .box-item .icon.icon-3 {
  background: url("../../../assets/img/aboutUs/icon-contact-joinus.png");
  background-size: cover;
}
.red {
  color: #ff0000;
}
</style>
