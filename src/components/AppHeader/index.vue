<template>
  <header class="header">
    <template v-if="curLanguage == 'CH'">
      <nav class="nav">
        <a href="#" class="u-fl" style="margin-left: 8%;">
          <img src="../../assets/img/title-apr.png" height="50px" alt />
        </a>
        <ul class="container menu-box u-cb">
          <router-link to="/CH/home" tag="li">
            <span class="menu-item">首页</span>
          </router-link>

          <router-link to="/CH/aboutUs" tag="li">
            <span class="menu-item">关于我们</span>
          </router-link>

          <router-link to="/CH/range" tag="li">
            <span class="menu-item">产品</span>
          </router-link>

          <router-link to="/CH/service" tag="li">
            <span class="menu-item">APR优势</span>
          </router-link>

          <router-link to="/CH/vision" tag="li">
            <span class="menu-item">联系我们</span>
          </router-link>
        </ul>
        <div class="Language u-fr">
          <a class="active" @click="switchLanguage('CH')">中文</a>
          <a @click="switchLanguage('EN')">English</a>
          <a @click="switchLanguage('FR')">ไทย</a>
        </div>
      </nav>
    </template>
    <template v-else-if="curLanguage == 'EN'">
      <div class="logo">
        <div class="container u-cb">
          <a href="#" class="u-fl">
            <img src="../../assets/img/title-en.png" height="35.6px" alt />
          </a>
          <div class="Language u-fr">
            <a @click="switchLanguage('CH')">中文</a>
            <a class="active" @click="switchLanguage('EN')">English</a>
            <a @click="switchLanguage('FR')">Français</a>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="container menu-box u-cb">
          <router-link to="/EN/home" tag="li">
            <span class="menu-item">Profile</span>
          </router-link>

          <router-link to="/EN/aboutUs" tag="li">
            <span class="menu-item">About us</span>
          </router-link>

          <router-link to="/EN/range" tag="li">
            <span class="menu-item">Services Covered</span>
          </router-link>

          <router-link to="/EN/service" tag="li">
            <span class="menu-item" style="line-height:25px">Services Contests&.Process</span>
          </router-link>

          <router-link to="/EN/vision" tag="li">
            <span class="menu-item" style="line-height:25px">Vision,Mission and Advantages</span>
          </router-link>

          <router-link to="/EN/trade" tag="li">
            <span class="menu-item" style="line-height:25px">Specialized Industries</span>
          </router-link>

          <router-link to="/EN/custom" tag="li">
            <span class="menu-item">Clients&.Evaluations</span>
          </router-link>
        </ul>
      </nav>
    </template>
    <template v-else-if="curLanguage == 'FR'">
      <div class="logo">
        <div class="container u-cb">
          <a href="#" class="u-fl">
            <img src="../../assets/img/title-fr.png" height="35.6px" alt />
          </a>
          <div class="Language u-fr">
            <a @click="switchLanguage('CH')">中文</a>
            <a @click="switchLanguage('EN')">English</a>
            <a class="active" @click="switchLanguage('FR')">Français</a>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="container menu-box u-cb">
          <router-link to="/FR/home" tag="li">
            <span class="menu-item">Home</span>
          </router-link>

          <router-link to="/FR/aboutUs" tag="li">
            <span class="menu-item">À propos de nous</span>
          </router-link>

          <router-link to="/FR/range" tag="li">
            <span class="menu-item">Services</span>
          </router-link>

          <router-link to="/FR/service" tag="li">
            <span class="menu-item" style="line-height:25px">Contenu et processus</span>
          </router-link>

          <router-link to="/FR/vision" tag="li">
            <span class="menu-item" style="line-height:25px">Vision, mission et avantage</span>
          </router-link>

          <router-link to="/FR/trade" tag="li">
            <span class="menu-item" style="line-height:25px">Métiers et secteurs concentrées</span>
          </router-link>

          <router-link to="/FR/custom" tag="li">
            <span class="menu-item" style="line-height:25px">Clientèle et commentaires</span>
          </router-link>
        </ul>
      </nav>
    </template>
  </header>
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

  methods: {
    switchLanguage(language) {
      if (this.curLanguage !== language) {
        this.$store.dispatch("setLanguage", language);
        let path = this.$router.currentRoute.path;
        let pathArray = path.split("/");
        pathArray[1] = language;
        this.$router.push(pathArray.join("/"));
      }
    }
  }
};
</script>

<style scoped>
.logo {
  padding-top: 30px;
}
.container {
  width: 1000px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.nav {
  border-bottom: 4px solid #e4e8ea;
  margin-top: 12px;
  position: relative;
}
.nav ul.menu-box li {
  float: left;
  list-style: none;
  width: 20%;
  height: 58px;
  line-height: 58px;
  text-align: center;
  border-left: 1px solid #d1d3d5;
  position: relative;
  cursor: pointer;
}
.nav ul.menu-box li span.menu-item {
  height: 58px;
  display: inline-block;
  color: #312d2d;
  font-size: 15px;
  letter-spacing: 1.5px;
  position: relative;
}
.nav ul.menu-box li.cur span.menu-item {
  border-bottom: 4px solid #606ecd;
}
.nav ul.menu-box li span.menu-item:after {
  content: "";
  width: 0;
  display: block;
  height: 4px;
  margin: 0 auto;
  background-color: #606ecd;
  border-radius: 2px;
}
.nav ul.menu-box li:hover span.menu-item:after {
  transition: 0.12s width ease-in;
  width: 100%;
}
.nav .Language {
  font-family: arial;
  margin-top: 10px;
  position: absolute;
  right: 8%;
  top: 4px;
}
.nav .Language a.en {
  margin-left: -1px;
}
.nav .Language a {
  border: 1px solid #dedede;
  float: left;
  padding: 3px 10px;
  font-size: 12px;
  color: #343c48;
  transition: 0.5s;
}
.nav .Language a.active {
  border: 1px solid #606ecd;
  color: #606ecd;
  position: relative;
  z-index: 2;
}
</style>
