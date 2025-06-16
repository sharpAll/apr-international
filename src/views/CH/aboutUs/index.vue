<template>
  <div class="block">
    <el-divider>
      <div class="title">关于科锐高地国际</div>
      <div class="title-1">Career Highland International（CHI）</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">专业人才战略</div>
          <p>
            世界领先的一站式人力资源解决方案提供商。我们致力于为所专注行业的客户招募高端管理与专业人才，并依托对所专注行业的深入研究开展人才战略咨询、人力资源外包、人才市场深度调研以及培训等服务。我们不断追求更高的目标，致力于打造全行业全地域的商业模式与战略布局。
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
          <div class="title">业务遍布全球</div>
          <p>
            植根中国香港，在人才招聘领域深耕细作，并将业务扩展至海外市场，业务范围辐射全球，覆盖中国香港及大陆、美国纽约、英国伦敦、法国巴黎、加拿大温哥华和比利时布鲁塞尔等全球主要政商中心，致力于深耕所专注行业的垂直领域与细分职能。
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
          <div class="title">专业顾问团队</div>
          <p>
            以强大的客户资源为背书，我们的专业顾问团队拥有丰富的招聘经验以及深厚的知识储备，深知如何用行之有效的招聘策略帮助企业把握人才变革机遇。CHI已多年连续获得行业内“最佳猎头服务提供商”等荣誉奖项。
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
        >联系我们</el-button
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
