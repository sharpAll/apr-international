<template>
  <div class="block">
    <el-divider>
      <div class="title">Notre vision est de</div>
    </el-divider>
    <div class="title-1">
      <p>
        Fournir des seivices de haute qualité, devenir founisseur des services
        des ressources huamines et developper ensemble avec des clients et
        candidats.
      </p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-1.jpg"
      />
    </div>
    <el-divider>
      <div class="title">Notre Mission est de</div>
    </el-divider>
    <div class="title-1">
      <p>
        S’efforcer à devenir un partenaire de premier choix des solutions aux
        ressources huamines.
      </p>
      <p>
        S’efforcer à trouver des meilleures occassions pour les candidats
        éminents.
      </p>
      <p>
        S’efforcer à créer une équipe de conseiller le plus excellent et le plus
        ardent.
      </p>
    </div>
    <div class="center-box" style="width:100%">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/vision/vision-2.jpg"
      />
    </div>
    <el-divider>
      <div class="title">Notre avantage</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box" style="height:500px">
        <div class="vision-content">
          <div class="vision-title">Service à guichet unique</div>
          <p>
            Notre équipe d’emploi vous fornit des solutions efffectives et
            précises des ressources humaines à guichet unique. À part la cherche
            des talents supérieurs, nous offrons également la consultation de la
            stratégie de talent, le sous-traité des ressources humaines et
            l’enquête approfondie du marché de talent, et ainsi vous
            satisfaisons vos demandes diverses.
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">Riches expériences</div>
          <p>
            Nos conseillers professionels ont en moyenne plus de cinq ans
            d’expériences dans le chercheur de tête. Ils ont reçu une formation
            interne, professionelle et systématique pour qu’ils puissent
            poursuivre strictement les règlements. Des expériences abondantes de
            travail dans les métiers sur lesquels nous nous concentrons sont
            notre avantage unique et nous permetent de les comprendre mieux et
            de fournir pour autant les services plus précises aux clients et aux
            candidats.
          </p>
        </div>
        <div class="vision-content">
          <div class="vision-title">
            Concentration sur des sectuers verticales
          </div>
          <p>
            Nos conseillers se divisent en disaine de groupes et chacun se
            spécialise dans les domaines verticales. Ainsi ils sont capables
            d’acquérir la circonstance et la tendance présentes, de localiser le
            marché du talent et de fournir des services plus professionelles,
            effectives et précises.
          </p>
        </div>
        <div style="position:absolute;right:0;top:0;overflow:hidden">
          <img
            width="460px"
            height="500px"
            src="../../../assets/img/vision/vision-4.jpg"
          />
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
  margin: 20px auto;
  font-size: 16px;
  color: #bbb;
  text-align: center;
}
.title-1 p {
  line-height: 25px;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .vision-title {
  font-size: 20px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 10px;
}
.bg-box .vision-title::after {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .vision-content {
  margin-right: 500px;
  padding: 20px 20px 0;
  height: auto;
}
.bg-box .vision-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .vision-content p {
  line-height: 24px;
  color: #888;
  font-size: 15px;
}
</style>
