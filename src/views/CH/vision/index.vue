<template>
  <div class="block">
    <el-divider>
      <div class="title">我们的愿景</div>
    </el-divider>
    <div class="title-1">
      <p>
        持续提供高水平服务质量，成为与客户、候选人共成长的一站式人力资源服务提供商
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
      <div class="title">我们的使命</div>
    </el-divider>
    <div class="title-1">
      <p>致力于成为客户的首选人力资源解决方案合作伙伴</p>
      <p>致力于让优秀的候选人寻找到最适合其才智施展的平台和机遇</p>
      <p>致力于打造最优秀最热心的人才招募顾问团队</p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-2.jpg"
      />
    </div>
    <el-divider>
      <div class="title">我们的优势</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box" style="height:370px">
        <div class="vision-content">
          <div class="vision-title">一站式精准服务</div>
          <p>
            CHI的招聘团队可为您提供高效与精准的一站式人力资源解决方案。除核心业务—高端人才寻猎之外，CHI还提供人才战略咨询、人力资源外包及人才市场深度调研等服务，全方位满足您的需求。
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">执业经验丰富</div>
          <p>
            CHI专业顾问团队平均拥有超过5年的猎头行业从业经验，并经过CHI内部专业和系统的技能培训，严格遵循标准工作流程。拥有所专注行业的实际从业背景是CHI团队的独门优势，能更加深入的了解所在行业，为客户与候选人提供更加精准的服务。
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">专注垂直领域</div>
          <p>
            CHI的顾问以行业划分为十余个团队，各团队致力于深耕所专注行业的垂直细分领域，充分掌握行业现状与趋势，对人才市场进行精准定位，力求提供更加专业高效以及更加贴近客户人才诉求的服务。
          </p>
        </div>
        <div style="position:absolute;right:0;top:0;overflow:hidden">
          <img width="460px" src="../../../assets/img/vision/vision-4.jpg" />
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
  margin-right: 500px;
  padding: 20px 20px 0;
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
