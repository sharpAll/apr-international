<template>
  <div class="block">
    <el-divider>
      <div class="title">Commentaires de nos clients</div>
    </el-divider>
    <div class="center-box">
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-1.jpg')"
            ></el-avatar>
            <div class="content-box">
              <p>
                « Les riches expériences de l’équipe des conseillers de CHI nous
                impressionnent. Je crois qu’ils sont non seulement notre équipe
                de conseillers du recrutement mais aussi de nos affaires
                concrètes. »
              </p>
            </div>
            <div class="person-box">
              ——Fabricateur international d’automobile | Directeur des resources
              humaines
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-2.jpg')"
            ></el-avatar>
            <div class="content-box">
              <p>
                « CHI nous propose une abondance de candidats qui se conforment
                à notre demande. Ils ont des riches ressources dans les
                gouvernements du monde entier et dans le monde de l’entreprise.
                »
              </p>
            </div>
            <div class="person-box">
              ——Société de consultation internationale | Directeur des
              ressources humaines
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-3.jpg')"
            ></el-avatar>

            <div class="content-box">
              <p>
                « Le clairvoyance de CHI nous donne une profonde impression. Il
                nous donne du soutien effectif dans notre recrutement. Nous lui
                en avons confiance. »
              </p>
            </div>
            <div class="person-box">
              ——Grand fabricateur industriel d’invertissement étranger |
              Directeur des ressources humaines
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="evaluate-box">
            <el-avatar
              :size="80"
              fit="cover"
              :src="require('../../../assets/img/custom/evaluate-4.jpg')"
            ></el-avatar>

            <div class="content-box">
              <p>
                « Le discernement de CHI à l’égard du commerce et de notre
                métier nous impressionne, ils agissent toujours activement er
                nous donnent des propositions importantes. »
              </p>
            </div>
            <div class="person-box">
              ——Entreprise aérospatiale de la Chine ｜Directeur des ressources
              humaines
            </div>
          </div>
        </el-col>
      </el-row>
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
.evaluate-box {
  position: relative;
}
.evaluate-box .el-avatar {
  position: absolute;
  left: 40px;
}
.evaluate-box .content-box {
  font-size: 17px;
  line-height: 25px;
  color: #312d2d;
  text-indent: 40px;
  padding: 15px 0 15px 160px;
  border-left: 5px solid #606ecd;
}
.evaluate-box .person-box {
  font-size: 17px;
  text-align: right;
  color: #333;
  padding-right: 20px;
  border-right: 5px solid #606ecd;
  margin-top: 20px;
}
</style>
