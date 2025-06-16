<template>
  <div class="block">
    <el-divider>
      <div class="title">OUR SERVICES</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">High-level Talent Search &. Recruitment</div>
          <p>
            As one of the leading recruitment agencies and executive search
            firms in Hong Kong, CHI specializes in the recruitment of high level
            talents across a wide range of industries, with the aim of reaching
            the goal of the entrepreneurs.
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
          <div class="title">Human Resource Consulting</div>
          <p>
            According to the development strategies of the enterprises, CHI
            offers consulting services on promoting the organizational
            strategies to come into reality, helping the entrepreneurs with the
            selection of the vision and mission of the company or enterprise,
            designing the business strategy and optimizing the business process.
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
          <div class="title">Human Resource Outsourcing</div>
          <p>
            On behalf of our clients, CHI executes the whole process of
            recruitment, including signing the hiring contract. During the
            course of the project, we'll act as the client's HR partner to
            manage all of the complicated administrative matters related to the
            assigned employee.
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
          <div class="title">Talent Market Intelligence</div>
          <p>
            To ensure the client to obtain the first-hand talent market
            intelligence, CHI proceeds with thorough talent market research and
            analysis through four (4) dimension of recruitment, retention,
            employer branding and remuneration. Based on these issues, the
            client can build its own recruitment strategy accordingly with a
            fruitful end.
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
