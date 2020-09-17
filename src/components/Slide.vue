<template>
  <div id="slide">
    <carousel :per-page=2 :loop=true :autoplay=true :autoplayTimeout= 5000>
      <slide>
        <div class="kartu">
          <h2>Summary</h2>
          <p>
            Saya seorang frontend developer yang kreatif dan terus berkembang dengan
            pengalaman selama kurang lebih 1 setengah
            Bersemangat untuk terus mengembangkan diri dan beradaptasi dengan
            permasalahan yang ada.
          </p>
        </div>
      </slide>
      <slide>
        <div class="kartu">
          <h2>Karir</h2>
          <h3>Frontend Developer</h3>
          <p>Bafe.space | November 2018 - Mei 2020</p>
          <ul>
            <li>Mendesain website bafe.space</li>
            <li>Maintenance dan mengupgrade website bafe.space</li>
          </ul>
        </div>
      </slide>
      <slide>
        <div class="kartu">
          <h2>Edukasi</h2>
          <h3>S1 Ilmu Komputer</h3>
          <p>Universitas Gadjah Mada | 2015</p>
        </div>
      </slide>
      <slide>
        <div class="kartu">
          <h2>Organisasi</h2>
          <h3>Kepala Divisi Studio</h3>
          <p>Scientie Music Community | Universitas Gadjah Mada | 2016</p>
          <h3>Kepala Divisi Media dan Informasi</h3>
          <p>Keluarga Besar Karanganyar Gadjah Mada | 2016</p>
        </div>
      </slide>
      <slide>
        <div class="kartu">
          <h2>Kemampuan</h2>
          <ul>
            <li>Memiliki pengetahuan tentang HTML dan CSS</li>
            <li>Memahami dan dapat berbicara bahasa Inggris dan bahasa Indonesia</li>
          </ul>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped> 
.kartu {
  margin: 0 10px;
  place-self: center;
  border: 2px solid royalblue;
  h2,h3,p {
    margin: 15px;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    color: royalblue;
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  }
}
</style>
