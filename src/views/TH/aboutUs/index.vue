<template>
  <div class="block">
    <el-divider>
      <div class="title">เกี่ยวกับเรา</div>
      <div class="title-1">Asia Plus Research（APR）</div>
    </el-divider>
    <div v-show="type == 'introduce'" class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">แนะนำบริษัท</div>
          <p>
            HSW เป็น บริษัท ที่ปรึกษาที่มุ่งเน้นการตัดสินใจทางธุรกิจอย่างมืออาชีพสำหรับลูกค้าโดยให้บริการการสำรวจธุรกิจที่มีการปฏิบัติตามกฎระเบียบทางธุรกิจจริยธรรมทางธุรกิจและความซื่อสัตย์
          </p>
          <br />
          <p>
            เราได้ช่วยลูกค้าในการป้องกันการฉ้อโกงทางธุรกิจและความเสี่ยงที่อาจเกิดขึ้นจากการซื้อขายร่วมกันอย่างมีประสิทธิภาพในช่วง 10 ปีที่ผ่านมาผ่านการสำรวจธุรกิจและการรวบรวมและวิเคราะห์ข้อมูลทางธุรกิจทั้งภายในและภายนอก
          </p>
        </div>
        <div style="width:550px;position:absolute;left:0;top:0">
          <el-carousel height="400px">
            <el-carousel-item>
              <div class="carousel-bg bg-1"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-bg bg-2"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div v-show="type == 'service'" class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">บริการของเรา</div>
          <p>
            ให้บริการลูกค้า "One Stop" และการสนับสนุนหลังการสำรวจรวมถึง: ข้อเสนอแนะข้อมูลโครงการการสื่อสารการประชุมโครงการการตรวจสอบแหล่งที่มาของข้อมูลและอื่น ๆ เพื่อให้ลูกค้าสามารถเข้าใจความคืบหน้าของโครงการได้ทันเวลา
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="400px" src="../../../assets/img/aboutUs/service-1.jpg" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.type
    };
  },
  watch: {
    '$route.params.type'(newVal) {
      this.type = newVal;
    }
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
.carousel-bg.bg-1 {
  background: center url(../../../assets/img/aboutUs/introduction-1.jpg) no-repeat;
  background-size: cover;
  height: 400px;
}
.carousel-bg.bg-2 {
  background: center url(../../../assets/img/aboutUs/introduction-2.jpg) no-repeat;
  background-size: cover;
  height: 400px;
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
  margin-left: 500px;
}
.bg-box .bg-content p {
  line-height: 28px;
  color: #888;
  font-size: 18px;
}
</style>
