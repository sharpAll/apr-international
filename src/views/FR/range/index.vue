<template>
  <div class="block">
    <el-divider>
      <div class="title">Services</div>
    </el-divider>
    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Recrutement</div>
          <p>
            Ayant les clients importants et la stratégie effective de
            recrutement, nous nous appliquons à offrir des services du
            recrutement diversifiés, dont le sujet constituent des talents
            supérieurs, aux entreprise du monde entier et de tous les mémiers,
            afin d’atteindre les buts de développement des clients.
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
          <div class="title">Consultation des ressources humaines</div>
          <p>
            En tenant compte de la stratégie du développement des entreprises,
            nous en poussons la pratique et les aidons à affirmer le projet,
            dresser le plan d’affaires, créer et diffuser des cultures
            d’organisation, dirigiger des transformations et optimiser des modes
            opérationnels.
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
          <div class="title">Sous-traité de la ressources humaines</div>
          <p>
            Comme représentant des clients, nous recrutons et signons le contrat
            avec des talents. Dans la pratique du projet, nous arrangeons des
            affaires administratives complexes comme un partenaire de ressources
            humaines.
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
          <div class="title">Investigation du marché de talent</div>
          <p>
            Pour obtenir l’information du marché de talent à temps dans
            l’intérêt de notre clientèle, nous enquêtons le marché sous des
            perspectives diverses: le recrutement, le plan de la conservation
            des talents, la marque et le salaires et prestations. Donc notre
            clientèle peuvent adopter des stratégies ciblées et effectives.
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
