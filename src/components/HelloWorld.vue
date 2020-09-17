<template>
  <div id="main">
    <div class="two-v_pictureLeft">
      <img src="../assets/foto.jpg" alt="Foto gw">
      <h1>
        Andhika Satria <br />
        Bagaskoro
      </h1>
    </div>
    <slide />
    <!-- <div class="board">
      <div class="kartu">
        <h2>Summary</h2>
        <p>
          Saya seorang frontend developer yang kreatif dan terus berkembang dengan
          pengalaman selama kurang lebih 1 setengah
          Bersemangat untuk terus mengembangkan diri dan beradaptasi dengan
          permasalahan yang ada.
        </p>
      </div>
      <div class="kartu">
        <h2>Karir</h2>
        <h3>Frontend Developer</h3>
        <p>Bafe.space | November 2018 - Mei 2020</p>
        <ul>
          <li>Mendesain website bafe.space</li>
          <li>Maintenance dan mengupgrade website bafe.space</li>
        </ul>
      </div>
      <div class="kartu">
        <h2>Edukasi</h2>
        <h3>S1 Ilmu Komputer</h3>
        <p>Universitas Gadjah Mada | 2015</p>
      </div>
      <div class="kartu">
        <h2>Organisasi</h2>
        <h3>Kepala Divisi Studio</h3>
        <p>Scientie Music Community | Universitas Gadjah Mada | 2016</p>
        <h3>Kepala Divisi Media dan Informasi</h3>
        <p>Keluarga Besar Karanganyar Gadjah Mada | 2016</p>
      </div>
      <div class="kartu">
        <h2>Kemampuan</h2>
        <ul>
          <li>Memiliki pengetahuan tentang HTML dan CSS</li>
          <li>Memahami dan dapat berbicara bahasa Inggris dan bahasa Indonesia</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import slide from '../components/Slide.vue'

export default {
  name: "HelloWorld",
  components: {
    slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main {
  margin: 20px 60px;
}
.two-v_pictureLeft {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px 100px;
  img {
    width: 250px;
    justify-self: end;
    margin: 0 20px;
  }
  h1 {
    align-self: center;
    justify-self: start;
    font-size: 48px;
  }
}
.board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 30px 10px;
  .kartu {
    margin: 0 10px;
    border: 3px solid purple;
    h2,h3,p {
      margin: 15px;
    }
  }
}
</style>
