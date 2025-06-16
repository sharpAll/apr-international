<template>
  <div class="block">
    <el-divider>
      <div class="title">客户评价</div>
    </el-divider>
    <div class="center-box">
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-1.jpg')"
            ></el-avatar>
            <div class="content-box">
              <p>
                “科锐高地的顾问团队对行业的理解力能我们印象深刻。我认为他们不仅是专业的招募团队，更是我们具体业务的好顾问。”
              </p>
            </div>
            <div class="person-box">——国际汽车制造企业 | 人力资源总监</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-2.jpg')"
            ></el-avatar>
            <div class="content-box">
              <p>
                “科锐高地给我们提供了极其丰富且符合我们需求的候选人，他们在全球各地的当地政府及商业界都具有广泛的资源。”
              </p>
            </div>
            <div class="person-box">——全球顶尖咨询公司 | 人力资源总监</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-3.jpg')"
            ></el-avatar>

            <div class="content-box">
              <p>
                “科锐高地的专业洞察力令人印象深刻，在人才招募过程中一直给我们及时有效的支持。我们将与科锐高地一起成长。我们信任他们。”
              </p>
            </div>
            <div class="person-box">——大型外资工业制造商 | 人力资源总监</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-4.jpg')"
            ></el-avatar>

            <div class="content-box">
              <p>
                “科锐高地对行业、商业的尝试理解力令我惊讶，他们一直积极行动并提供有价值的建议。”
              </p>
            </div>
            <div class="person-box">
              ——中国航空航天企业头部公司 ｜人力资源总监
            </div>
          </div>
        </el-col>
      </el-row>
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
.evaluate-box {
  position: relative;
}
.evaluate-box .el-avatar {
  position: absolute;
  left: 40px;
}
.evaluate-box .content-box {
  font-size: 17px;
  line-height: 25px;
  color: #312d2d;
  text-indent: 40px;
  padding: 15px 0 15px 160px;
  border-left: 5px solid #606ecd;
}
.evaluate-box .person-box {
  font-size: 17px;
  text-align: right;
  color: #333;
  padding-right: 20px;
  border-right: 5px solid #606ecd;
  margin-top: 20px;
}
</style>
