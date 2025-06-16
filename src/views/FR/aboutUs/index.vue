<template>
  <div class="block">
    <el-divider>
      <div class="title">À propos de Cabinet Chercheur de tête CHI</div>
      <div class="title-1">Cabinet Chasseur de tête（CHI）</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Stratégie de talent professionel</div>
          <p>
            comme un fournisseur mondial des solutions aux questions à propos
            des ressourses humaines, nous nous efforçons de recrutementr des
            talents professionels et gestionnaires. Basés sur nos recherches
            approfondies dans les professions, nous presentons la consultation
            de la stratégie de talent, la sous-taitance des ressources humaines,
            l’étude du marché des talents et la formation, etc. Nous ne cessons
            de poursuivre un niveau plus haut et s’évertuons à forger une
            disposition commerciale et stratégique qui recouvre tous les
            métiers.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about1.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Affaires mondiales</div>
          <p>
            Enraciné à Hong Kong, nous étendons nos affaires au marché mondial.
            Elles recouvrent aujourd’hui des centres polituqes et commercials
            comme Hong Kong et Chine continentale, New York, London, Paris,
            Vancouver et Bruxelles. Nous nous appliquons à la recherche
            approfondie des fonctions et des domaines verticales.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about2.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Équipe de conseillers professionels</div>
          <p>
            ayant les clients importants, notre équipe de conseillers
            professionels possède des riches expériences et des connaissances
            approfondies, ainsi nous savons bien comment aider des entreprises à
            saisir l’opportunité de réformation de talent. CHI a acquis des prix
            comme « la meilleur founisseur des services de chercheur de tête »
            pendant plusieurs d’années.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/aboutUs/about3.jpg" />
        </div>
      </div>
    </div>
    <div class="center-box u-tac" style="margin-top:50px">
      <el-button
        type="primary"
        icon="el-icon-phone"
        style="padding: 15px 40px;font-size:18px"
        @click="$router.push('./aboutUs/contactUs')"
        >Contactez-nous</el-button
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
  padding: 70px 80px 0;
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
