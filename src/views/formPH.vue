<template>
  <div class="app">
    <router-link to="/">
      Home
    </router-link>
    <h1>Form</h1>
    <div class="form">
      <span>Nama</span>
      <select v-model="personidsend">
        <option v-for="idsp in personid" :key="idsp.id" :value="idsp.id">{{
          idsp.nama
        }}</option>
      </select>
    </div>
    <div class="form">
      <span>Hobi</span>
      <select v-model="hobiidsend">
        <option v-for="idsh in hobiid" :key="idsh.id" :value="idsh.id">
          {{ idsh.desc }}</option
        >
      </select>
    </div>
    <div class="tombol_form">
      <button v-on:click="send()">Kirim</button>
    </div>
    <div>
      <span>Nomer form = {{ noform }}</span>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      personid: [],
      hobiid: [],
      personidsend: "",
      hobiidsend: "",
      noform: "",
      aipi: ""
    };
  },
  mounted() {
    let self = this;
    self.init();
  },
  methods: {
    init() {
      let self = this;
      let apiPerson = "http://127.0.0.1:8000/api/person";
      let apiHobi = "http://127.0.0.1:8000/api/hobby";
      let apiIp = "https://api.ipify.org?format=json";
      const getPerson = Axios.get(apiPerson);
      const getHobi = Axios.get(apiHobi);
      const getIp = Axios.get(apiIp);

      Axios.all([getPerson, getHobi, getIp])
        .then(
          Axios.spread((...responses) => {
            const respPerson = responses[0];
            const respHobi = responses[1];
            const respIp = responses[2];
            self.personid = respPerson.data;
            self.hobiid = respHobi.data;
            self.aipi = respIp.data.ip;
            // console.log(respIp.data.ip);
            // console.log(respPerson.data);
            // console.log(respHobi.data);
          })
        )
        .catch(err => {
          console.log(err);
        });
    },
    send() {
      let self = this;
      const config = {
        headers: {
          // eslint-disable-next-line
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      // var datetime = new Date().today() + new Date().timeNow()
      // console.log(datetime);
      // let sess = datetime;
      var date = new Date();
      var dateNow =
        date.getDate().toString() +
        date.getMonth() +
        date.getFullYear() +
        date.getHours() +
        date.getMinutes() +
        date.getSeconds();
      // console.log(dateNow);
      var ipi = self.aipi.replace(".", "");
      var ses = dateNow + ipi;
      // console.log(ses);
      let rawData = {
        personid: self.personidsend,
        hobiid: self.hobiidsend,
        session: ses
        // session: sess
      };
      rawData = qs.stringify(rawData);
      Axios.post("http://127.0.0.1:8000/api/datahobby", rawData, config).then(
        resp => {
          // console.log(resp);
          self.noform = resp.data.data;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 1fr;
}
.form {
  display: grid;
  grid-template-columns: 300px;
  margin: 10px 0;
}
</style>
