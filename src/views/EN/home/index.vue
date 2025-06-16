<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item>
        <div class="carousel-bg bg-1"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-bg bg-2"></div>
      </el-carousel-item>
    </el-carousel>
    <el-divider>
      <span class="divider-title">Clients first &. Prompt response</span>
    </el-divider>
    <div class="divider-info">
      Remind that the time is the most expensive cost. CHI responses promptly
      and recruits efficiently, with the result of saving the clients’ precious
      time. Alongside the past ten (10) years, CHI recommended 205586 candidates
      and arranged the interview for 99382 candidates per year.
    </div>
    <div class="center-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-1"></div>
            <div class="home-title">
              Contracts with 13255 enterprises partners
            </div>
            <div class="home-content">
              CHI has created partnerships with 13255 enterprises with 30
              industries, and recruited successfully more than 200000 posts. CHI
              provides services for high-level talents digging and seeking,
              professional evaluation and background-checking, with an aim to
              make it reality for the candidate ready for post within 7 to 30
              days.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-2"></div>
            <div class="home-title">
              International Companies &. Conglomerates
            </div>
            <div class="home-content">
              With outstanding head-hunting services, CHI obtained the
              cooperation with numerous international companies and
              conglomerates. Based on the principle of “tri-win” strategy, CHI
              marches forward and expands the market continuously.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-3"></div>
            <div class="home-title">
              State-owned enterprises &. Mid and Large scale private companies
            </div>
            <div class="home-content">
              With more than 60% clients in state-owned enterprises & mid and
              large scale companies, of which 80% chose to cooperate once again.
              35% of the clients recommended CHI to other HRs. More than 5000
              clients realized fast development with geometric increase rate in
              their profits.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-4"></div>
            <div class="home-title" style="line-height: 51.2px;">
              Public-listed companies &. Startups
            </div>
            <div class="home-content">
              Up to the year 2019, CHI has helped and witnessed more than 100
              companies go public and listed, within which the high-level
              talents played an indispensable key role. CHI’s high-level talents
              resource services can make the startups move further and further…
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider>
      <span class="divider-title">CHI anticipates to cooperate with you</span>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <ul>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i>
              According to your requirements, CHI proceeds with talents digging
              and seeking, selecting, evaluating, recommending, interviewing and
              background-checking.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i>
              Keep in mind your development strategy, CHI provides solutions for
              talents structure, training and cultivating, retaining etc.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i>
              Respond to your recruitment requirements at any time, any place,
              to minimize your cost for communication and recruitment.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i>
              Focusing on high-level talents market, CHI has rich operational
              experiences for the posts valued from USD15,000 to 150,000 annual
              salary.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i>
              Sharing with you the market insights and first-hand information,
              CHI is based in Hong Kong and eyed toward the whole globe.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i>
              Visiting the best enterprises both mainland China and overseas
              periodically, CHI shares with you the most advanced operation and
              management theory and practice.
            </li>
          </ul>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/home/home-info.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box u-tac" style="margin-top:50px">
      <el-button
        type="primary"
        icon="el-icon-s-flag"
        style="padding: 15px 40px;font-size:18px"
        @click="$router.push('./trade')"
        >SPECIALIZED INDUSTRIES</el-button
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
.carousel-bg {
  width: 100%;
  height: 100%;
}
.carousel-bg.bg-1 {
  background: center url(../../../assets/img/1.jpg) no-repeat;
  background-size: cover;
}
.carousel-bg.bg-2 {
  background: center url(../../../assets/img/2.jpg) no-repeat;
  background-size: cover;
}
.home-icon {
  width: 100px;
  height: 100px;
  margin: 20px auto 15px;
}
.home-icon.icon-1 {
  background: #1b3045 center url(../../../assets/img/home/icon-home1.png)
    no-repeat;
  background-size: cover;
}
.home-icon.icon-2 {
  background: #1b3045 center url(../../../assets/img/home/icon-home2.png)
    no-repeat;
  background-size: cover;
}
.home-icon.icon-3 {
  background: #1b3045 center url(../../../assets/img/home/icon-home3.png)
    no-repeat;
  background-size: cover;
}
.home-icon.icon-4 {
  background: #1b3045 center url(../../../assets/img/home/icon-home4.png)
    no-repeat;
  background-size: cover;
}
.home-title {
  color: #333;
  font-size: 18px;
  margin: 8px auto;
  text-align: center;
}
.home-content {
  margin: 0 20px;
  color: #9b9b9b;
  font-size: 14px;
  line-height: 20px;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .bg-content {
  margin-right: 500px;
  height: 307px;
}
.bg-box .bg-content ul {
  padding: 10px 0 10px 20px;
}
.bg-box .bg-content ul li {
  line-height: 16px;
  font-size: 16px;
  margin: 10px 0;
}
</style>
