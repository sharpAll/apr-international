<template>
  <div class="block">
    <div v-show="type == 'zx'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">การสำรวจเครดิตองค์กร</div>
        <div class="title-1">Asia Plus Research（APR）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">รายงานภาพรวมการจดทะเบียนธุรกิจ</div>
          <p>
            ดูตัวอย่างสถานการณ์ทางธุรกิจที่เรียบง่ายของ บริษัท เป้าหมายผลลัพธ์ของสิทธิในทรัพย์สินสถานะความเสี่ยงในการดำเนินงานเพื่อระบุสถานการณ์จริงของหัวข้อธุรกิจที่มีศักยภาพในการร่วมมือได้อย่างรวดเร็ว
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">รายงานทางการเงินการจดทะเบียนธุรกิจ</div>
          <p>
            ระบุข้อมูลระบุตัวตนของเป้าหมายได้อย่างรวดเร็วก่อนความร่วมมือตัดสินความสามารถด้านเงินทุนและภูมิหลังที่เรียบง่ายคาดการณ์การดำเนินงานของ บริษัท เป้าหมายและสถานการณ์หนี้สิน
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">รายงานเครดิตมาตรฐาน</div>
          <p>
            ขึ้นอยู่กับความสามารถในการรับและประมวลผลข้อมูลหลายช่องทางการสร้างรายงานเครดิตองค์กรที่หลากหลายตามสถานการณ์ทางธุรกิจที่แตกต่างกันและความต้องการที่เฉพาะเจาะจงให้การประเมินเครดิตสำหรับการขายเครดิตทางธุรกิจการป้องกันความเสี่ยงทางธุรกิจอย่างมีประสิทธิภาพและช่วยในการตัดสินใจทางธุรกิจ
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">รายงานความน่าเชื่อถือในการสัมภาษณ์องค์กร</div>
          <p>
            ให้บริการจัดอันดับความน่าเชื่อถือและการสัมภาษณ์ค่าความนิยม โดยส่วนใหญ่ให้บริการด้านการธนาคาร ประกันภัย การเงินทางอินเทอร์เน็ต การเงินห่วงโซ่อุปทาน การเงินสำหรับผู้บริโภคและการบริโภค และชีวิตความเป็นอยู่ที่หลากหลาย เพื่อทำความเข้าใจความซื่อสัตย์ทางธุรกิจของคู่ค้าและข้อมูลการวิจัยภูมิหลังของบริษัท ลดความเสี่ยงในการร่วมมือทางธุรกิจ
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'ft'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">ความน่าเชื่อถือในการสัมภาษณ์องค์กร</div>
        <div class="title-1">Asia Plus Research（APR）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">รายงานบทสัมภาษณ์ THE STANDARD</div>
          <p>
            ผลิตภัณฑ์ที่อยู่บนพื้นฐานของการปฏิบัติตามกฎระเบียบและการสำรวจธุรกิจที่สามารถช่วยให้คู่ค้าคู่ค้า ฯลฯ ดำเนินการตรวจสอบทางธุรกิจเกี่ยวกับวัตถุที่มีศักยภาพของคู่ค้าผ่านการสำรวจการปฏิบัติตามกฎระเบียบและกฎหมายเพื่อให้ได้ข่าวกรองทางธุรกิจที่แท้จริงและเชื่อถือได้เพื่อสนับสนุนการตัดสินใจทางธุรกิจของคุณ
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">รายงานการสัมภาษณ์ค่าความนิยมเชิงลึก</div>
          <p>
            การรวบรวมและวิเคราะห์ข้อมูลสิ่งแวดล้อมทั้งภายนอกและภายในองค์กร ความเข้าใจในเป้าหมายผ่านมิติต่างๆ ทำให้คุณได้รับข้อมูลความน่าเชื่อถือและความเสี่ยงของเป้าหมาย เพื่อช่วยให้คุณค้นพบความเสี่ยงที่อาจเกิดขึ้นจากเป้าหมาย
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">รายงานการสัมภาษณ์ค่าความนิยมที่กำหนดเอง</div>
          <p>
            ให้บริการข้อมูลธุรกิจที่เชื่อถือได้อย่างรวดเร็วโดยคำนึงถึงความต้องการของลูกค้าเป็นทิศทางหลักในการสืบสวนให้การสนับสนุนอย่างมืออาชีพในทุกแง่มุมสำหรับการแก้ปัญหาเหตุฉุกเฉินการปฏิบัติตามกฎระเบียบทางธุรกิจขององค์กร
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">ปรับแต่งรายงานการสัมภาษณ์เนื่องจากความขยัน</div>
          <p>
            ดำเนินการตรวจสอบสถานะของเป้าหมายหลายแง่มุมให้ข้อมูลเช่นการส่งมอบผลประโยชน์ประวัติของผู้บริหารและการปฏิบัติตามกฎระเบียบทางธุรกิจเพื่อช่วยลูกค้าในการป้องกันการฉ้อโกงทางธุรกิจและความเสี่ยงที่อาจเกิดขึ้นจากการซื้อขายสหกรณ์
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'fm'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">สื่อค้นหาเชิงลบ</div>
        <div class="title-1">Asia Plus Research（APR）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">รายงานผลสำรวจเชิงลบของสื่อองค์กร</div>
          <p>
            ผลิตภัณฑ์ที่อยู่บนพื้นฐานของการปฏิบัติตามกฎระเบียบและการสำรวจธุรกิจที่สามารถช่วยให้คู่ค้าคู่ค้า ฯลฯ ดำเนินการตรวจสอบทางธุรกิจเกี่ยวกับวัตถุที่มีศักยภาพของคู่ค้าผ่านการสำรวจการปฏิบัติตามกฎระเบียบและกฎหมายเพื่อให้ได้ข่าวกรองทางธุรกิจที่แท้จริงและเชื่อถือได้เพื่อสนับสนุนการตัดสินใจทางธุรกิจของคุณ
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" height="400px" src="../../../assets/img/product/fm.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sd'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">ทัศนศึกษา</div>
        <div class="title-1">Asia Plus Research（APR）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">รายงานการศึกษาดูงานขององค์กร</div>
          <p>
            เข้าถึงข้อมูลโดยตรงจากปลายทางของคุณได้อย่างรวดเร็วและมีประสิทธิภาพ ช่วยตัดสินความถูกต้องของคู่ค้าและป้องกันความเสี่ยงจากการฉ้อโกง
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">รายงานการศึกษาดูงานส่วนบุคคล</div>
          <p>
            เข้าถึงข้อมูลโดยตรงจากปลายทางของคุณได้อย่างรวดเร็วและมีประสิทธิภาพ ช่วยตัดสินความถูกต้องของคู่ค้าและป้องกันความเสี่ยงจากการฉ้อโกง
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd2.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sj'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">การจับคู่ข้อมูล</div>
        <div class="title-1">Asia Plus Research（APR）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">รายงานการจับคู่ข้อมูล</div>
          <p>
            โดยใช้การวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data Analytics) จับคู่ข้อมูลธุรกิจของผู้ร่วมลงทุนในต่างประเทศได้อย่างแม่นยำ
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" height="400px" src="../../../assets/img/product/sj.jpg" />
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
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin: 80px 0 40px;
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
  margin-right: 500px;
  padding: 30px 60px 0;
  height: 258px;
}
.bg-box .bg-content.large {
  margin-right: 600px;
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
