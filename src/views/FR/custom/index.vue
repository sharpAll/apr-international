<template>
  <div class="block">
    <el-divider>
      <div class="title">Notre clientèle</div>
    </el-divider>
    <div class="center-box">
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="custom-title">Entreprises multinationales</div>
            <img src="../../../assets/img/custom/custom-1.jpg" class="image" />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="custom-title">Entreprises d’État</div>
            <img src="../../../assets/img/custom/custom-2.jpg" class="image" />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="custom-title small">
              Grandes et moyennes entreprises privées
            </div>
            <img src="../../../assets/img/custom/custom-3.jpg" class="image" />
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="60" style="margin-top:60px">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="custom-title">Sociétés côtées en Bourse</div>
            <img src="../../../assets/img/custom/custom-4.jpg" class="image" />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="custom-title">Groupes</div>
            <img src="../../../assets/img/custom/custom-5.jpg" class="image" />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="custom-title">Startups</div>
            <img src="../../../assets/img/custom/custom-6.jpg" class="image" />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="center-box u-tac" style="margin-top:50px">
      <el-button
        type="primary"
        icon="el-icon-chat-line-round"
        style="padding: 15px 40px;font-size:18px"
        @click="$router.push('./custom/evaluate')"
        >Commentaires de nos clients</el-button
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
.image {
  width: 100%;
  display: block;
}
.custom-title {
  font-size: 20px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin: 10px 0 10px 10px;
  color: #333;
  height: 28px;
  line-height: 28px;
}
.custom-title.small {
  font-size: 17px;
}
.custom-title::after {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
</style>
