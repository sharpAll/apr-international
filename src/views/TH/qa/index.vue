<template>
  <div class="block">
    <div class="title">Q & A</div>
    <div class="info">
      <p class="q">Q：จะติดต่อแผนกตรวจสอบสถานะได้อย่างไร?</p>
      <p class="a">A：คุณสามารถส่งอีเมลไปที่ info@hswmgt.com . ข้อมูลของคุณต้องมีตัวตนรายละเอียดการติดต่อและเหตุผลในการติดต่อเราผู้จัดการบัญชีของเราจะติดตามความต้องการของคุณอย่างทันท่วงที</p>
    </div>
    <div class="info">
      <p class="q">Q：ข้อมูลที่ได้รับมอบหมายและข้อมูลที่เกี่ยวข้องจะได้รับการคุ้มครองหรือไม่?</p>
      <p class="a">A：ใช่แน่นอน เรารับประกันการรักษาความลับของข้อมูลนอกจากนี้เรายังสามารถลงนามในข้อตกลงการรักษาความลับตามคำขอของคุณ</p>
    </div>
    <div class="info">
      <p class="q">Q：คุณสามารถให้คำแนะนำหรือแผนเกี่ยวกับโครงการได้หรือไม่?</p>
      <p class="a">A：ได้ เราจะให้ข้อเสนอโครงการอย่างเป็นทางการที่มีข้อมูลเช่นขอบเขตการทำงานวิธีการทำงานตารางเวลาและงบประมาณโครงการ</p>
    </div>
    <div class="info">
      <p class="q">Q：ฉันต้องการแต่งตั้งคุณให้บริการฉันคุณจะรับเหมาช่วงงานออกไปหรือไม่?</p>
      <p class="a">A：เรามีสำนักงานของเราเองและทีมวิจัยมืออาชีพเพื่อดำเนินการและทำงานให้สำเร็จและจะไม่รับเหมาช่วงธุรกิจของคุณออกไป</p>
    </div>
    <div class="info">
      <p class="q">Q：ฉันจะได้รับรายงานเป็นลายลักษณ์อักษรหลังจากภารกิจเสร็จสิ้นหรือไม่?</p>
      <p class="a">A：ได้เราจะให้รายงานที่ครอบคลุมหลังจากเสร็จสิ้นภารกิจ</p>
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
.block {
  width: 100%;
  height: 92vh;
  background: #1b3045 center url(../../../assets/img/qa/qa.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}
.block .title {
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  margin: 40px 0;
}
.block .info {
  width: 1200px;
  margin: 30px auto;
  font-family: arial, helvetica, sans-serif;
}
.block .info .q {
  font-size: 22px;
}
.block .info .a {
  font-size: 18px;
}
</style>
