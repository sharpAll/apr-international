<template>
  <div class="block">
    <el-divider>
      <div class="title">Fabricaiton industrielle</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-1">
        <div class="trade-info">
          <span>Industrie chimique&matérielle</span>
          <span>Énergie</span>
          <span>Automobile</span>
          <span>Équipement automatique</span>
          <span>Transport ferroviaire urbain</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Santé</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-2">
        <div class="trade-info">
          <span>Pharmacie</span>
          <span>Instrument médical</span>
          <span>Medicine clinique</span>
          <span>Projet d’investissement de grand santé</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Droit</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-3">
        <div class="trade-info">
          <span>Règlement des litiges</span>
          <span>Propriété intellectuelle</span>
          <span>Capital risque&capital-investissement</span>
          <span>Fusion-acquisition&Réorganisation</span>
          <span>Code du travail</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Technologie, média et correspondance</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-4">
        <div class="trade-info">
          <span>Internet</span>
          <span>Commerce électronique</span>
          <span>Internet des objets</span>
          <span>Jeux vidéos</span>
          <span>Finance Internet</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Finance</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-5">
        <div class="trade-info">
          <span>Banque </span>
          <span>Bail</span>
          <span>Assurance</span>
          <span>Technologie financière</span>
          <span>Titre de fond</span>
        </div>
      </div>
    </div>
    <el-divider>
      <div class="title">Fonction d’entreprise</div>
    </el-divider>
    <div class="trade-bg-box">
      <div class="trade-bg bg-6">
        <div class="trade-info">
          <span>Personnel</span>
          <span>Affaires juridiques</span>
          <span>Affaires financières</span>
          <span>Communicaiton</span>
          <span>administration</span>
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
.trade-bg-box {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.trade-bg-box .trade-bg {
  cursor: pointer;
  height: 200px;
}
.trade-bg-box .trade-bg.bg-1 {
  background: no-repeat url(../../../assets/img/trade/trade-1.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-2 {
  background: no-repeat url(../../../assets/img/trade/trade-2.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-3 {
  background: no-repeat url(../../../assets/img/trade/trade-3.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-4 {
  background: no-repeat url(../../../assets/img/trade/trade-4.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-5 {
  background: no-repeat url(../../../assets/img/trade/trade-5.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg.bg-6 {
  background: no-repeat url(../../../assets/img/trade/trade-6.jpg);
  background-size: cover;
}
.trade-bg-box .trade-bg .trade-info {
  width: 100%;
  height: 200px;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.1)
  );
  text-align: center;
  padding-top: 80px;
  opacity: 0;
}
.trade-bg-box .trade-bg .trade-info span {
  margin: 0 10px;
  font-size: 22px;
  color: #333;
}
.trade-bg-box .trade-bg:hover .trade-info {
  transition: opacity 0.3s linear;
  opacity: 1;
}
</style>
