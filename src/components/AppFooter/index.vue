<template>
  <footer class="footer">
    <template v-if="curLanguage == 'CH'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title-apr.png" width="120px" />
        </div>
        <div class="map" style="left: 260px;">
          <div class="title">网站地图</div>
          <ul>
            <li @click="$router.push('/CH/home')">首页</li>
            <li @click="$router.push('/CH/aboutUs/introduce')">关于我们</li>
            <li @click="$router.push('/CH/product/zx')">产品</li>
            <li @click="$router.push('/CH/qa')">APR优势</li>
            <li @click="$router.push('/CH/contact')">联系我们</li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else-if="curLanguage == 'EN'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title-apr.png" width="120px" />
        </div>
        <div class="map" style="left: 260px;">
          <div class="title">Website Map</div>
          <ul>
            <li @click="$router.push('/EN/home')">Home</li>
            <li @click="$router.push('/EN/aboutUs/introduce')">About Us</li>
            <li @click="$router.push('/EN/product/zx')">Product</li>
            <li @click="$router.push('/EN/qa')">APR Advantage</li>
            <li @click="$router.push('/EN/contact')">Contact Us</li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else-if="curLanguage == 'TH'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title-apr.png" width="120px" />
        </div>
        <div class="map" style="left: 260px;">
          <div class="title">แผนผังเว็บไซต์</div>
          <ul>
            <li @click="$router.push('/TH/home')">หน้าหลัก</li>
            <li @click="$router.push('/TH/aboutUs/introduce')">เกี่ยวกับเรา</li>
            <li @click="$router.push('/TH/product/zx')">ผลิตภัณฑ์</li>
            <li @click="$router.push('/TH/qa')">ข้อดีของ APR</li>
            <li @click="$router.push('/TH/contact')">ติดต่อเรา</li>
          </ul>
        </div>
      </div>
    </template>
    <div class="right">
      Copyright 2025 Asia Plus Research All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    curLanguage() {
      return this.$store.state.language.curLan;
    }
  },
  components: {},

  methods: {}
};
</script>
<style scoped>
.footer {
  background: #eee;
}
.footer .content {
  width: 1200px;
  margin: auto;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.footer .content .logo {
  position: absolute;
  top: 25px;
  left: 0;
}
.footer .content .map {
  position: absolute;
  top: 25px;
  left: 260px;
}
.footer .content .map .title {
  font-size: 14px;
  color: #333;
  padding-left: 20px;
  position: relative;
}
.footer .content .map .title::after {
  position: absolute;
  content: "";
  display: block;
  width: 3px;
  height: 12px;
  background: #666;
  top: 3px;
  left: 0;
}
.footer .content .map ul {
  margin-top: 10px;
}
.footer .content .map ul li {
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
.footer .content .map ul li:hover {
  color: #606ecd;
}
.footer .right {
  color: #aaa;
  text-align: center;
}
</style>
