<template>
  <div class="block">
    <el-divider>
      <div class="title">服务范畴</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">高端人才招聘</div>
          <p>
            我们以强大的客户资源为背书，加之行之有效的招聘策略，致力于为全球范围内的各行业企业雇主提供多元化的中高端人才招募服务，达成客户公司的发展目标。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-1.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">人力资源咨询</div>
          <p>
            CHI根据企业的发展战略，推动组织战略实施和落地，帮助所服务的企业确定愿景，设计业务战略，建立并推广组织文化，设计并领导组织变革，引导业务流程优化。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-2.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">人力资源外包</div>
          <p>
            CHI代表客户进行雇员招聘，并负责与其签署雇佣关系。在项目进行过程中，CHI作为客户的人力资源伙伴管理所有跟雇员相关的复杂的行政性事务。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-3.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">人才市场调研</div>
          <p>
            为确保客户拿到第一手的人才市场信息,
            CHI通过人才招聘、留才计划、雇主品牌和薪酬福利四个维度对市场进行充分调研，客户可以针对性地建立自己的招聘战略并迅速取得成效。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/range/range-4.jpg" />
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
