<template>
  <div class="formMain main">
    <router-link to="/">Home</router-link>
    <div>
      <h1>Form pengisian data</h1>
    </div>
    <div class="form" v-if="!newForm">
      <span>ID</span>
      <span>{{ id }}</span>
    </div>
    <div class="form">
      <span>NIK</span>
      <input v-if="nikEn" type="text" v-model="nik" />
      <span v-if="!nikEn">{{ nik }}</span>
    </div>
    <div class="form">
      <span>Nama</span>
      <input type="text" v-model="nama" />
    </div>
    <div class="form">
      <span>Tempat Lahir</span>
      <input type="text" v-model="tmptl" />
    </div>
    <div class="form">
      <span>Tanggal Lahir</span>
      <input type="text" v-model="tgll" />
      <span>Format tanggal dd-mm-yyyy</span>
    </div>
    <div class="form">
      <span>Jenis Kelamin</span>
      <div>
        <input type="radio" id="male" value="l" v-model="gender" />
        <label for="male">Laki-Laki</label>
      </div>
      <div>
        <input type="radio" id="female" value="p" v-model="gender" />
        <label for="female">Perempuan</label>
      </div>
    </div>
    <div class="form">
      <span>Alamat</span>
      <input type="text" v-model="alamat" />
    </div>
    <div class="form">
      <span>Unggah Avatar</span>
      <input type="file" v-on:change="onDataSelected($event)" />
    </div>
    <div v-if="newForm" class="buttonBottom">
      <button class="btn" v-on:click="submitNew()">Submit</button>
      <button class="btn" v-on:click="reset()">Reset</button>
    </div>
    <div v-if="!newForm" class="buttonBottom">
      <button class="btn" v-on:click="updateLast($id)">Submit</button>
    </div>
    <span v-if="!berhasil" class="reddy"
      >Ada kesalahan pengisian data, silahkan mengulang kembali.</span
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newForm: true,
      nik: "",
      nama: "",
      tmptl: "",
      tgll: "",
      gender: "",
      alamat: "",
      id: "",
      berhasil: true,
      nikEn: true,
      image: null
    };
  },
  methods: {
    reset() {
      let self = this;
      self.nik = "";
      self.nama = "";
      self.tmptl = "";
      self.tgll = "";
      self.gender = "";
      self.alamat = "";
      self.berhasil = true;
    },
    getData(ids) {
      let self = this;
      if (self.newForm === false) {
        let link = "http://127.0.0.1:8000/api/person/{id}";
        let linknew = link.replace("{id}", ids);
        console.log(linknew);
        axios.get(linknew).then(response => {
          console.log(response.data);
          let self = this;
          self.id = response.data.id;
          self.nik = response.data.nik;
          self.nama = response.data.nama;
          self.tmptl = response.data.tmptl;
          self.tgll = response.data.tgll;
          self.gender = response.data.gender;
          self.alamat = response.data.alamat;
          self.image = response.data.avatar;
        });
      }
    },
    openTab(id) {
      let self = this;
      self.$store.dispatch("openTabAct", id);
    },
    onDataSelected(event) {
      let self = this;
      // console.log(event)
      self.image = event.target.files[0];
      console.log(self.image);
    },
    checkEdit(edits) {
      let self = this;
      if (edits === "yes") {
        self.newForm = false;
        self.nikEn = false;
        // self.getData(ids);
      } else if (edits === "no") {
        self.newForm = true;
        self.nikEn = true;
      }
    },
    submitNew() {
      const config = {
        headers: {
          // eslint-disable-next-line
          'Content-Type': 'application/json'
        }
      };
      let self = this;
      let rawData = {
        nik: self.nik,
        nama: self.nama,
        tmptl: self.tmptl,
        tgll: self.tgll,
        gender: self.gender,
        alamat: self.alamat
      };
      // rawData = qs.stringify(rawData);
      let formData = new FormData();
      for (let key in rawData) {
        formData.append(key, rawData[key]);
      }
      formData.append("image", self.image);
      // console.log(rawData);
      axios
        .post("http://127.0.0.1:8000/api/person", formData, config)
        .then(response => {
          if (response.data === "gagal") {
            console.log(response);
            self.berhasil = false;
          } else {
            self.$router.push("/");
          }
        });
    },
    updateLast(ids) {
      let self = this;
      const config = {
        headers: {
          // eslint-disable-next-line
          'Content-Type': 'application/json'
        }
      };
      let rawData = {
        nik: self.nik,
        nama: self.nama,
        tmptl: self.tmptl,
        tgll: self.tgll,
        gender: self.gender,
        alamat: self.alamat
      };
      // rawData = qs.stringify(rawData);
      let formData = new FormData();
      for (let key in rawData) {
        formData.append(key, rawData[key]);
      }
      formData.append("image", self.image);
      let link = "http://127.0.0.1:8000/api/person/{id}";
      let linknew = link.replace("{id}", ids);
      axios.put(linknew, formData, config).then(response => {
        if (response.data === "gagal") {
          self.berhasil = false;
        } else {
          self.$router.push("/");
        }
      });
    }
  },
  mounted() {
    let self = this;
    self.checkEdit(self.$route.params.edit);
    self.getData(self.$route.params.userId);
    // console.log(self.$params)
    self.openTab(self.$route.params.tab);
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin: 10px 0;
  display: grid;
  grid-template-columns: 400px;
}
.buttonBottom {
  display: grid;
  grid-template-columns: 200px 200px;
  .btn {
    margin: 20px 30px;
  }
}
a {
  text-decoration: none;
}
.reddy {
  color: red;
}
</style>
