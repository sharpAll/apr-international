<template>
  <div class="block">
    <el-divider>
      <div class="title">Contactez-nous</div>
      <div class="title-1">
        Si vous avez des questions, contactez-nous par email ou en ligne.
      </div>
    </el-divider>
    <div class="center-box">
      <div class="contact-box">
        <div class="box-item">
          <div class="icon icon-1"></div>
          <div class="info">
            <div class="info-title">Recrutement d’entreprise</div>
            <p>
              Telephonez-nous par
              <span class="red">400-017-8018</span> ou presentez votre demande
              en ligne
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-2"></div>
          <div class="info">
            <div class="info-title">Demande d’emploi personnelle</div>
            <p>
              Envoyez votre CV à
              <span class="red">peter_chen@careerhighlandinternational.com</span
              >,nous vous contacterons s’il y a de poste appropriée.
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-3"></div>
          <div class="info">
            <div class="info-title">Rejoignez-nous</div>
            <p>
              Si vous voulez nous rejoindre, contactez le centre des ressources
              humaines à HK par
              <!-- <span class="red">+86 151 6718 2110</span>. -->
              <span class="red">+852 5986 3808</span>.
            </p>
          </div>
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
.contact-box {
  margin: 50px auto;
  width: 660px;
}
.contact-box .box-item {
  position: relative;
  background-color: #f9f9f9;
  height: 160px;
  margin-bottom: 30px;
}
.contact-box .box-item .info {
  padding-left: 220px;
  padding-right: 50px;
}
.contact-box .box-item .info .info-title {
  padding: 40px 0 15px;
  font-size: 20px;
  color: #333;
}
.contact-box .box-item .icon {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 20px;
  left: 100px;
}
.contact-box .box-item .icon.icon-1 {
  background: url("../../../assets/img/aboutUs/icon-contact-company.png");
  background-size: cover;
}
.contact-box .box-item .icon.icon-2 {
  background: url("../../../assets/img/aboutUs/icon-contact-person.png");
  background-size: cover;
}
.contact-box .box-item .icon.icon-3 {
  background: url("../../../assets/img/aboutUs/icon-contact-joinus.png");
  background-size: cover;
}
.red {
  color: #ff0000;
}
</style>
