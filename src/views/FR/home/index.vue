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
      <span class="divider-title">Meilleure expérience</span>
    </el-divider>
    <div class="divider-info">
      Le temps est le coût le plus précieux. Cabinet Chasseur de tête CHI est
      adapté et effectif, ainsi vous aide à épargner le temps. Pendant une
      dizaine d’années, CHI a recommendé chaque année en moyenne 205586
      candidats et organise 99382 entretiens.
    </div>
    <div class="center-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-1"></div>
            <div class="home-title">13225 clients contractuel</div>
            <div class="home-content">
              Nous avons établit des relations coopératives avec 13255
              entreprise dans les 30 secteurs et embauché pour plus de 20,000
              postes. Nous fournissons des servuces suivantes: la vérification
              pré-emploi, l’évaluation professionelle et la cherche des talents.
              Nous sommes capables d’employer en moyenne 7-30 personnes par
              jour.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-2"></div>
            <div class="home-title">Entreprise multinationale&Groupe</div>
            <div class="home-content">
              Nous arrivons à coopérer avec des entreprises multinationales et
              des groupes à travers nos services de chercheur de tête, et nous
              obtenons un immense espace pour le développement par la stratégie
              qui favorise toutes les trois parties.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-3"></div>
            <div class="home-title">
              Entreprise d’État&grandes et moyenne entreprise privée
            </div>
            <div class="home-content">
              Les entreprises d’État et les grandes et moyennes entreprises
              privées représentent plus de 60% de nos clients, dont 80% nous
              récoopèrent et 35% nous recommade à d’autres directeurs des
              ressources humaines. Plus de 5000 clients a acquis un
              développement important.
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="home-icon icon-4"></div>
            <div class="home-title">Société côtées en Bourse&startup</div>
            <div class="home-content">
              Jusqu’à 2019, nous avons fait développer une centaine de startups
              à société côtée en Bourse. Des talents supérieurs sont le noyau de
              leurs succès. Les ressourses humaines excellentes les aident à
              mieux developper.
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider>
      <span class="divider-title"
        >Cabinet Chasseur de tête CHI attend la coopération avec vous</span
      >
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <ul>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >En fonction de votre demande, nous effectuons effectivement la
              cherche, la sélection, l’évaluation, l’entretien et la
              vérification
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Nous offrons des solution à la structure, la formation et
              l’emploi des talents en fonction de votre stratégie de
              développement.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Nous sommes toujours prêts à satisfaire votre demande de
              recrutement et vous aidons à diminuer le plus grand coût de la
              communication et du rectrutement
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Nous nous concentrons sur le marché des talents supérieurs. Nous
              avons expérience abandontes sur le recrutement des poste dont le
              salaire varie de 100,000 à plus de 1,000,000 Yuan.
            </li>
            <li>
              <i
                class="el-icon-check"
                style="color:#606ecd;font-size:20px;margin-right:10px"
              ></i
              >Nous visitons régulièrement des entreprises exceptionelles et
              vous partageons des théories et des pratiques advancées du
              management .
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
        >Métiers et secteurs concentrées</el-button
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
}
.bg-box .bg-content ul {
  padding: 10px 0 6px 20px;
}
.bg-box .bg-content ul li {
  line-height: 20px;
  font-size: 16px;
  margin: 10px 0;
}
</style>
